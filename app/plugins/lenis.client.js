import Lenis from 'lenis';

export default defineNuxtPlugin(() => {
  const router = useRouter();

  const lenis = new Lenis({
    autoRaf: true,
    smoothWheel: true
  });

  const toggleLenis = () => {
    lenis.isStopped ? lenis.start() : lenis.stop();
  };

  router.beforeEach(() => {
    if (lenis.actualScroll) {
      lenis.scrollTo(0, {
        immediate: true
      });
    }
  });

  return {
    provide: {
      lenis,
      toggleLenis
    }
  };
});
