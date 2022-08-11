/*
 * React hook to dynamically utilize animate.css with Javascript
 * @param {object} element : DOM Object to target for animation
 * @param {string} animation : animation class
 * @param {number} delay : time in seconds to delay animation by, default = 0
 * @param {string} prefix: animation class prefix, default = animate__
 * @author Daniel Eden https://animate.style/
*/
const useAnimation = (element, animation, delay = 0, prefix = 'animate__') => {
  const animated = new Promise((resolve) => {
    const animationName = `${prefix}${animation}`;
    element.classList.add(`${prefix}animated`, animationName, `animate__delay-${delay}s`);
    // When the animation ends, clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      element.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    element.addEventListener('animationend', handleAnimationEnd, { once: true });
  });
  return animated;
};

export default useAnimation;
