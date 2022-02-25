import { css } from '@emotion/react'
import { returnBreakpoint } from './breakpoints'

export const media = {
  mobile: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${returnBreakpoint('mobile')}) {
      ${css(...args)}
    }
  `,
  tablet: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${returnBreakpoint('tablet')}) {
      ${css(...args)}
    }
  `,
  laptop: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${returnBreakpoint('laptop')}) {
      ${css(...args)}
    }
  `,
  desktop: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${returnBreakpoint('desktop')}) {
      ${css(...args)}
    }
  `,
  xl: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${returnBreakpoint('xl')}) {
      ${css(...args)}
    }
  `,
  hover: (...args: [TemplateStringsArray]) => css`
    @media (hover: hover) {
      &:hover {
        ${css(...args)}
      }
    }
  `,
  canHover: (...args: [TemplateStringsArray]) => css`
    @media (hover: hover) {
      ${css(...args)}
    }
  `,
  noHover: (...args: [TemplateStringsArray]) => css`
    @media (hover: none) {
      ${css(...args)}
    }
  `,
}

export const absoluteCentered = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto !important;
`

export const absoluteFullCentered = css`
  width: 100%;
  height: 100%;
  ${absoluteCentered};
`

export const buttonInit = css`
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-appearance: none;
  border: 0;
  background-color: rgba(255, 255, 255, 0);
  text-decoration: none;

  // border-radius: 50rem;
  cursor: pointer;
`

export const buttonStyle = css`
  ${buttonInit};
  border: var(--border-color-b);
  border-width: 2px;
  color: var(--ukraine-blue);
  background-color: transparent;
  margin: 0 auto;
  position: relative;
  display: block;
  padding: var(--base-unit) var(--space-md);
  font-size: var(--text-01);
  text-align: center;
  text-transform: uppercase;
  ${media.hover`
    background-color: var(--ukraine-blue);
    color: var(--ukraine-yellow);
  `}
`

export const smallPillButton = css`
  ${buttonInit};
  border: var(--border-green);
  font-size: var(--text-01);
  font-family: var(--helvetica);
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  background-color: transparent;
  color: var(--color-b);
  background-color: var(--color-a);
  text-transform: uppercase;
  transition: all 0ms!important;
  ${media.hover`
    color: var(--color-a);
    background-color: var(--color-b);
    border: 1px solid var(--color-a)!important;
  `}
`

export const pixelScaleImage = css`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
`

// FORM ELEMENTS
export const inputStyle = css`
  appearance: none;
  width: 100%;
  border: none;
  color: inherit;
  opacity: 1;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  &::placeholder {
    color: inherit;
    opacity: 0.65;
  }
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 1;
    }
  }
`
