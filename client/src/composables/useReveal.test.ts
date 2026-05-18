import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useReveal } from './useReveal'

describe('useReveal', () => {
  let originalMatchMedia: typeof window.matchMedia
  let originalQuerySelectorAll: typeof document.querySelectorAll
  let mockObserver: any
  let cleanupFn: (() => void) | undefined

  beforeEach(() => {
    // Store original implementations
    originalMatchMedia = window.matchMedia
    originalQuerySelectorAll = document.querySelectorAll

    // Mock IntersectionObserver
    mockObserver = {
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn()
    }
    vi.stubGlobal('IntersectionObserver', vi.fn((callback) => {
      callback([{ 
        isIntersecting: true, 
        target: { classList: { add: vi.fn() } } 
      }], mockObserver)
      return mockObserver
    }))

    cleanupFn = undefined
  })

  afterEach(() => {
    // Restore originals
    window.matchMedia = originalMatchMedia
    document.querySelectorAll = originalQuerySelectorAll
    vi.restoreAllMocks()
    
    if (cleanupFn) {
      cleanupFn()
    }
  })

  it('should return initObserver and cleanup functions', () => {
    const { initObserver, cleanup } = useReveal()
    
    expect(typeof initObserver).toBe('function')
    expect(typeof cleanup).toBe('function')
    
    cleanupFn = cleanup
  })

  it('should observe elements with the specified selector', () => {
    const mockElement = document.createElement('div')
    mockElement.classList.add('reveal')
    document.body.appendChild(mockElement)

    const { initObserver, cleanup } = useReveal('.reveal')
    initObserver()
    cleanupFn = cleanup

    expect(IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.1 }
    )
    expect(mockObserver.observe).toHaveBeenCalledWith(mockElement)
  })

  it('should add "show" class when element intersects', () => {
    const mockElement = document.createElement('div')
    mockElement.classList.add('reveal')
    const addClassSpy = vi.spyOn(mockElement.classList, 'add')
    document.body.appendChild(mockElement)

    let observerCallback: any
    vi.stubGlobal('IntersectionObserver', vi.fn((callback, options) => {
      observerCallback = callback
      return mockObserver
    }))

    const { initObserver, cleanup } = useReveal('.reveal')
    initObserver()
    cleanupFn = cleanup

    // Simulate intersection
    observerCallback([{ 
      isIntersecting: true, 
      target: mockElement 
    }])

    expect(addClassSpy).toHaveBeenCalledWith('show')
    expect(mockObserver.unobserve).toHaveBeenCalledWith(mockElement)
  })

  it('should show elements immediately when prefers-reduced-motion is enabled', () => {
    const mockElement = document.createElement('div')
    mockElement.classList.add('reveal')
    const addClassSpy = vi.spyOn(mockElement.classList, 'add')
    document.body.appendChild(mockElement)

    // Mock matchMedia to return reduced motion preference
    window.matchMedia = vi.fn().mockReturnValue({ matches: true })

    const { initObserver, cleanup } = useReveal('.reveal')
    initObserver()
    cleanupFn = cleanup

    expect(addClassSpy).toHaveBeenCalledWith('show')
    expect(mockObserver.observe).not.toHaveBeenCalled()
  })

  it('should show elements immediately when IntersectionObserver is not supported', () => {
    const mockElement = document.createElement('div')
    mockElement.classList.add('reveal')
    const addClassSpy = vi.spyOn(mockElement.classList, 'add')
    document.body.appendChild(mockElement)

    // Mock the 'in' operator check by setting IntersectionObserver to undefined on window
    // Need to set both globalThis and window
    const originalIO = (globalThis as any).IntersectionObserver
    Object.defineProperty(globalThis, 'IntersectionObserver', {
      value: undefined,
      writable: true,
      configurable: true
    })

    const { initObserver, cleanup } = useReveal('.reveal')
    initObserver()
    cleanupFn = cleanup

    expect(addClassSpy).toHaveBeenCalledWith('show')

    // Restore
    Object.defineProperty(globalThis, 'IntersectionObserver', {
      value: originalIO,
      writable: true,
      configurable: true
    })
  })

  it('should cleanup observer on unmount', () => {
    const mockElement = document.createElement('div')
    mockElement.classList.add('reveal')
    document.body.appendChild(mockElement)

    const { initObserver, cleanup } = useReveal('.reveal')
    initObserver()

    cleanup()
    cleanupFn = undefined // Already cleaned up

    expect(mockObserver.disconnect).toHaveBeenCalled()
  })

  it('should use custom selector', () => {
    const mockElement = document.createElement('div')
    mockElement.classList.add('custom-reveal')
    document.body.appendChild(mockElement)

    const { initObserver, cleanup } = useReveal('.custom-reveal')
    initObserver()
    cleanupFn = cleanup

    expect(mockObserver.observe).toHaveBeenCalledWith(mockElement)
  })

  it('should handle multiple elements', () => {
    const element1 = document.createElement('div')
    element1.classList.add('reveal')
    const element2 = document.createElement('div')
    element2.classList.add('reveal')
    document.body.appendChild(element1)
    document.body.appendChild(element2)

    const { initObserver, cleanup } = useReveal('.reveal')
    initObserver()
    cleanupFn = cleanup

    expect(mockObserver.observe).toHaveBeenCalledWith(element1)
    expect(mockObserver.observe).toHaveBeenCalledWith(element2)
  })
})
