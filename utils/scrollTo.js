/**
 *
 * @param {HTMLElement} selector - selector
 * @param {String} behavior - вид прокрутки
 */
export default function scrollTo(selector, behavior = 'smooth') {
  window.scrollTo({
    top: selector.getBoundingClientRect().top + pageYOffset - 100,
    behavior,
  })
}
