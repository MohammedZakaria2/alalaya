import * as React from 'react';

function Contact(props) {
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.841 14.25L1.5 16.875V3a.75.75 0 01.75-.75h13.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H4.841z"
        fill="#2B2B2B"
      />
    </svg>
  );
}

export default Contact;
