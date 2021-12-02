import confetti from "canvas-confetti";

export const randomConfetti = () =>
  confetti({
    particleCount: 750,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      // since they fall down, start a bit higher than random
      y: Math.random() - 0.2,
    },
  });
