const getLinks = () =>
  [...document.getElementsByTagName('a')]
    .filter(ele => ele.href.includes('status') && !ele.href.includes('/photo/'))
    .map(ele => ele.href)

const scroll = () =>
  window.scrollBy(0, window.innerHeight)

let lastHeight = -1
const allLinks = new Set()

with ({ copy }) {
  const refreshId = setInterval(function() {
    getLinks()
      .forEach(link => allLinks.add(link))
    scroll()
    if (document.documentElement.scrollTop === lastHeight) {
      clearInterval(refreshId)
      copy([...allLinks])
    }
    lastHeight = document.documentElement.scrollTop
  }, 300) // TODO: get right amount of time
}
