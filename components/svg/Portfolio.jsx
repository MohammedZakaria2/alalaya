import * as React from 'react';

function Portfolio(props) {
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.75 9.75V12h4.5V9.75h5.25V15a.75.75 0 01-.75.75H2.25A.75.75 0 011.5 15V9.75h5.25zm1.5-1.5h1.5v2.25h-1.5V8.25zm-3-4.5V1.5A.75.75 0 016 .75h6a.75.75 0 01.75.75v2.25h3a.75.75 0 01.75.75v3.75h-5.25v-1.5h-4.5v1.5H1.5V4.5a.75.75 0 01.75-.75h3zm1.5-1.5v1.5h4.5v-1.5h-4.5z"
        fill="#2B2B2B"
      />
    </svg>
  );
}

export default Portfolio;
