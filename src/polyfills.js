// React also depends on requestAnimationFrame (even in test environments)
const requestAnimationFrame = (global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
});

export default requestAnimationFrame;
