import * as React from 'react';

function Blog(props) {
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.75 1.5C4.5 1.5 3 12 2.25 16.5h1.498c.5-2.5 1.75-3.874 3.752-4.125 3-.375 5.25-3 6-5.25l-1.125-.75.75-.75c.75-.75 1.503-1.875 2.625-4.125z"
        fill="#2B2B2B"
      />
    </svg>
  );
}

export default Blog;
