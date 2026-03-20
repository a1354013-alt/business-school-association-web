import { onMounted, onUnmounted } from 'vue'

export function useReveal(selector: string = '.reveal') {
  let observer: IntersectionObserver | null = null

  const initObserver = () => {
    // Check for prefers-reduced-motion
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll(selector)
    if (!reduceMotion && 'IntersectionObserver' in window) {
      elements.forEach((el) => observer?.observe(el))
    } else {
      // If reduced motion or no IntersectionObserver support, show immediately
      elements.forEach((el) => el.classList.add('show'))
    }
  }

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  onMounted(() => {
    initObserver()
  })

  onUnmounted(() => {
    cleanup()
  })

  return { initObserver, cleanup }
}
