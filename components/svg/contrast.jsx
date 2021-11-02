import * as React from 'react';

function Contrast(props) {
  return (
    <svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5 27C8.596 27 3 21.404 3 14.5S8.596 2 15.5 2 28 7.596 28 14.5 22.404 27 15.5 27zm-8.339-6.969A10 10 0 1021.031 6.16a11.247 11.247 0 01-2.88 10.991 11.246 11.246 0 01-10.99 2.88z"
        fill="#1B1B1B"
      />
    </svg>
  );
}

export default Contrast;
