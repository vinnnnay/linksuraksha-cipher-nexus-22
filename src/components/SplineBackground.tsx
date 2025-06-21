
import React from 'react';

const SplineBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Spline iframe with proper styling */}
      <iframe 
        src='https://my.spline.design/worldplanet-7CkpoxG2OZM1GBGxcGKtOVMn/' 
        frameBorder='0' 
        width='100%' 
        height='100%'
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ 
          filter: 'brightness(0.3) contrast(1.2) saturate(0.8)',
          mixBlendMode: 'screen'
        }}
      />
      
      {/* Dark overlay to blend with theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-linksuraksha-dark/80 via-linksuraksha-purple-darker/60 to-linksuraksha-dark/90" />
      
      {/* Additional purple glow overlay to match theme */}
      <div className="absolute inset-0 bg-gradient-radial from-linksuraksha-purple/10 via-transparent to-transparent" />
    </div>
  );
};

export default SplineBackground;
