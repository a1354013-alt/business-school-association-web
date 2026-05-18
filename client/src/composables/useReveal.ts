import { onMounted, onUnmounted } from "vue";

export function useReveal(selector = ".reveal") {
  let observer: IntersectionObserver | null = null;

  const showElements = () => {
    if (typeof document === "undefined") {
      return;
    }

    document.querySelectorAll(selector).forEach(element => {
      element.classList.add("show");
    });
  };

  const initObserver = () => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const supportsIntersectionObserver = "IntersectionObserver" in window;

    if (reduceMotion || !supportsIntersectionObserver) {
      showElements();
      return;
    }

    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("show");
          observer?.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(selector).forEach(element => {
      observer?.observe(element);
    });
  };

  const cleanup = () => {
    observer?.disconnect();
    observer = null;
  };

  onMounted(() => {
    initObserver();
  });

  onUnmounted(() => {
    cleanup();
  });

  return { initObserver, cleanup };
}
