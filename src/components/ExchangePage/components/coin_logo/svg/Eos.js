import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24pt"
      height="24pt"
      viewBox="0 0 256 256"
    >
      <path d="M256 128c0 70.691-57.309 128-128 128S0 198.691 0 128 57.309 0 128 0s128 57.309 128 128zm0 0" />
      <path
        d="M87.09 92.879l40.906 128.46-60.7-38.034L87.09 92.879l40.906-55.887v39.196l-60.7 107.117h121.462l-60.7-107.117V36.992l40.907 55.887 19.793 90.426-60.7 38.035 40.907-128.461"
        fill="none"
        strokeWidth={10.24}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#fff"
      />
    </svg>
  )
}

export default SvgComponent
