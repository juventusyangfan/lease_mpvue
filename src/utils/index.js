function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatSlideList (slide) {
  const title = slide.title['#text']
  const image = slide.image['#text']
  const link = slide.link['#text']
  return {
    title,
    image,
    link: `/pages/news/detail?id=${link}&title=${title}`
  }
}
