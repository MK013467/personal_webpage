import React from 'react';
import headerImage from './images.jpeg'; 

function Header() {
  return (
    <div className="w-full flex justify-center items-center h-96" 
    style={{ 
      backgroundImage: `url(${headerImage})`, 
      backgroundSize: 'cover',  // Cover the entire area
      backgroundPosition: 'center',  // Center the image
      backgroundRepeat: 'no-repeat'  // Prevent repeating the image
    }}>
 <h1 className="text-4xl lg:text-6xl font-bold text-white">Welcome to Minseok Kwon's page.</h1>
</div>
  );
}

export default Header;