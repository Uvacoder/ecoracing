export default {
  inserted: (el) => {
    function loadImage() {
      if (el.nodeName === 'FIGURE') {
        const animation = el.getAttribute('data-animation')
        // el.classList.add('animate__animated')
        const imageElement = Array.from(el.children).find((el) => {
          return el.nodeName === 'IMG'
        })
        if (imageElement) {
          imageElement.addEventListener('load', () => {
            setTimeout(() => el.classList.add('loaded'), 100)
          })
          imageElement.src = imageElement.dataset.url
        }
        el.classList.remove(`invisible`)
        el.classList.add(`animate__${animation}`)
      } else {
        const animation = el.getAttribute('data-animation')
        // el.classList.add('animate__animated')
        el.classList.remove(`invisible`)
        el.classList.add(`animate__${animation}`)
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage()
          // addAnimation()
        }
      })
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: '0.4',
      }
      const observer = new IntersectionObserver(handleIntersect, options)
      observer.observe(el)
    }
    if (window.IntersectionObserver) {
      createObserver()
    } else {
      loadImage()
    }
  },
}
