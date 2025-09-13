particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    opacity: { value: 0.6, random: true },
    size: { value: 4, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffff",
      opacity: 0.6,
      width: 3
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.8 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});


