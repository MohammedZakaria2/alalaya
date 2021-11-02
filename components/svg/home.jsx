import * as React from 'react';

function Home(props) {
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 15a.75.75 0 01-.75.75H3.75A.75.75 0 013 15V8.25H.75l7.745-7.041a.75.75 0 011.01 0l7.745 7.04H15V15z"
        fill="#2B2B2B"
      />
    </svg>
  );
}

export default Home;
