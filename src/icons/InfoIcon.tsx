import React from "react"

const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 7C11.45 7 10.9792 6.80417 10.5875 6.4125C10.1958 6.02083 10 5.55 10 5C10 4.45 10.1958 3.97917 10.5875 3.5875C10.9792 3.19583 11.45 3 12 3C12.55 3 13.0208 3.19583 13.4125 3.5875C13.8042 3.97917 14 4.45 14 5C14 5.55 13.8042 6.02083 13.4125 6.4125C13.0208 6.80417 12.55 7 12 7ZM10.5 21V9H13.5V21H10.5Z"
      fill="currentColor"
    />
  </svg>
)

export default InfoIcon
