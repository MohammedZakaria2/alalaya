import * as React from 'react';

function Arrow(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.781 7.333L7.205 3.757l.943-.943L13.333 8l-5.185 5.185-.943-.943 3.576-3.576H2.667V7.333h8.114z"
        fill="#2B2B2B"
      />
    </svg>
  );
}

export default Arrow;
