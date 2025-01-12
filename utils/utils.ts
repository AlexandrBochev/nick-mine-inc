export const accentedHeading = (title: string, accentSymbols: string[]) => {
  const lastChar = title[title.length - 1]
  let heading = ''
  let accentSymbol = ''

  if (!title) return { heading: '', accentSymbol: '' }

  if (accentSymbols.includes(lastChar)) {
    heading = title.slice(0, title.length - 1)
    accentSymbol = lastChar
  } else {
    heading = title
  }

  return { heading, accentSymbol }
}