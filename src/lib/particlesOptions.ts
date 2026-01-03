import type { ISourceOptions } from "tsparticles-engine";

export const getParticlesOptions = (imageSrc: string): ISourceOptions => ({
  fullScreen: {
    enable: true,
    zIndex: 20,
  },
  particles: {
    move: {
      direction: "bottom",
      enable: true,
      outModes: {
        default: "out",
      },
      size: true,
      speed: {
        min: .5,
        max: 2,
      },
    },
    number: {
      value: 20,
      density: {
        enable: true,
        area: 1000,
      },
    },
    opacity: {
      value: 1,
      animation: {
        enable: false,
        startValue: "max",
        destroy: "min",
        speed: 0.1,
        sync: true,
      },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      direction: "random",
      move: true,
      animation: {
        enable: true,
        speed: 6,
      },
    },
    tilt: {
      direction: "random",
      enable: true,
      move: true,
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: 6,
      },
    },
    shape: {
      type: "image",
      options: {
        image: {
          src: imageSrc,
          width: 100,
          height: 100,
        },
      },
    },
    size: {
      value: {
        min: 12,
        max: 16,
      },
    },
    roll: {
      darken: {
        enable: true,
        value: 30,
      },
      enlighten: {
        enable: true,
        value: 30,
      },
      enable: true,
      speed: {
        min: 15,
        max: 25,
      },
    },
    wobble: {
      distance: 30,
      enable: true,
      move: true,
      speed: {
        min: -15,
        max: 15,
      },
    },
  },
});
