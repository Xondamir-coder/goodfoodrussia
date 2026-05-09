import Lenis from 'lenis';

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    autoRaf: true,
    smoothWheel: true
  });

  const toggleLenis = () => {
    lenis.isStopped ? lenis.start() : lenis.stop();
  };

  return {
    provide: {
      lenis,
      toggleLenis
    }
  };
});
