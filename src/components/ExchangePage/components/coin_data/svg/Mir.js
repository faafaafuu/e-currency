import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24pt"
      height="24pt"
      viewBox="0 0 256 256"
    >
      <path
        d="M91.6 327.2v317h182.6V459.1H472c86.2 0 159.2-55 186.4-131.8l-566.8-.1z"
        fill="#4db45e"
      />
      <linearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={-852.109}
        y1={1926.776}
        x2={-266.11}
        y2={1926.776}
        gradientTransform="matrix(1.0304 0 0 -1.0304 944.026 2168.044)"
      >
        <stop offset={0.3} stopColor="#00b4e6" />
        <stop offset={1} stopColor="#088ccb" />
      </linearGradient>
      <path
        d="M472 63.5H66c20.3 110.6 103.2 199.3 210.5 228.2 24.9 6.7 50.6 10.2 76.4 10.1h312.9c2.8-13.2 4.1-26.6 4.1-40.6C669.8 152 581.3 63.5 472 63.5z"
        fill="url(#prefix__a)"
      />
    </svg>
  )
}

export default SvgComponent
