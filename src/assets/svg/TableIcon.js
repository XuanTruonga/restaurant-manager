import * as React from "react"
const TableIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={67}
    height={41}
    fill="none"
    {...props}
  >
    <rect
      width={58}
      height={32}
      x={4.5}
      y={4.5}
      stroke="#002F66"
      strokeWidth={2}
      opacity={0.6}
      rx={7}
    />
    <path
      fill="#002F66"
      fillRule="evenodd"
      d="M12.5.5a2 2 0 0 0-2 2h20a2 2 0 0 0-2-2h-16Zm18 38h-20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Zm4-36a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2h-20Zm20 36h-20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Zm-54-27a2 2 0 0 1 2-2v20a2 2 0 0 1-2-2v-16Zm66 0a2 2 0 0 0-2-2v20a2 2 0 0 0 2-2v-16Z"
      clipRule="evenodd"
      opacity={0.25}
    />
  </svg>
)
export default TableIcon
