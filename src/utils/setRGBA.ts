const setRGBA = (color: string) => {
  color = color.replace(/\s/g, '').replace(/ /g, '').toLowerCase()
  if(color.match(/^rgb/) || color.match(/^rgba/)) {
    const numbers = color.match(/\d+/g)
    return numbers ? `rgba(${numbers[0]},${numbers[1]},${numbers[2]},0.75)` : `RGBA(0,0,0,0.75)`
  }
  if(color.length < 5 && color[0] === '#') {
    color = `${color[0]}${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`
    return `${color.slice(0,7)}${'BF'}`
  }
  return `${color.slice(0,7)}${'BF'}`
}

export default setRGBA
