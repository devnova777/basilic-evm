export function scrollToElement(element: HTMLElement | null) {
  if (!element) return
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })
}
