import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24pt"
      height="24pt"
      viewBox="0 0 256 256"
    >
      <defs>
        <linearGradient
          id="prefix__a"
          gradientUnits="userSpaceOnUse"
          x1={191.59}
          y1={1712.04}
          x2={1419.34}
          y2={662.26}
          gradientTransform="scale(.128)"
        >
          <stop offset={0} stopColor="#beea2e" />
          <stop offset={1} stopColor="#52ba00" />
        </linearGradient>
      </defs>
      <path
        d="M19.691 48.652l85.72 40.543V256l-85.72-40.543zM149.43 0L23.809 44.664l84.949 40.8 125.234-44.921zm-2.317 76.324v102.067l89.192 34.75V44.273zm0 0"
        fill="url(#prefix__a)"
      />
    </svg>
  )
}

export default SvgComponent
