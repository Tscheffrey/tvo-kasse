import styled, { css } from 'styled-components'

const sizes = {
  xs: 320,
  s: 480,
  m: 576,
  l: 768,
  xl: 1024,
  xxl: 1280,
}

let media = {}

const up = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

media = up
media.up = up

media.down = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] - 1}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})


module.exports = media
