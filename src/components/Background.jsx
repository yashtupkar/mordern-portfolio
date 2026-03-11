import React from 'react';
import Aurora from '../ReactBits/Aurora';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-custom-bg w-full">
      <div className="absolute inset-0 opacity-40">
        <Aurora
          colorStops={["#00f5a0", "#7af298", "#00d9ff"]}

          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/50 to-[#080808]"></div>
    </div>
  );
};

export default Background;
