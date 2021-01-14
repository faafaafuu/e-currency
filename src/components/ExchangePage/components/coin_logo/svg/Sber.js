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
          x1={0.582}
          y1={0}
          x2={0.052}
          y2={0.714}
          gradientTransform="scale(255.98828 256)"
        >
          <stop offset={0} stopColor="#0187c8" />
          <stop offset={0.313} stopColor="#08a652" />
          <stop offset={0.724} stopColor="#08a652" />
          <stop offset={1} stopColor="#faef23" />
        </linearGradient>
      </defs>
      <g fillRule="evenodd">
        <path
          d="M128 0c30.758 0 58.98 10.84 81.05 28.93l-22.042 17.625c-16.574-12.032-36.965-19.125-59.02-19.125-55.554 0-100.57 45.03-100.57 100.57 0 55.55 45.031 100.57 100.57 100.57 55.551 0 100.57-45.03 100.57-100.57 0-1.281-.027-2.559-.066-3.84l25.563-18.457A127.932 127.932 0 01255.988 128c0 70.695-57.308 128-128 128C57.293 256 0 198.695 0 128S57.305 0 128 0zm0 0"
          fill="url(#prefix__a)"
        />
        <path
          d="M79.848 96.805L128 128l103.91-76.16 15.438 25.074L128 164.133l-48.152-30.055zm0 0"
          fill="#229e39"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
