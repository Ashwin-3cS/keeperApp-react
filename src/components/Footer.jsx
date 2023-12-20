import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='fixed inset-x-0 bottom-0 text-center  text-gray-500	'  >
      <p>Copyright @{currentYear}</p>
    </footer>
  );
}

export default Footer;
