import React, { useState, useEffect } from 'react';
import Aurora from '../ReactBits/Aurora';

const Background = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mq.matches);
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-custom-bg w-full">

      {/* Static CSS gradient — always visible on all screens as the base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 110% 70% at 5% 0%, rgba(0, 245, 159, 0.50) 0%, transparent 65%),' +
            'radial-gradient(ellipse 90% 60% at 95% 5%, rgba(0, 217, 255, 0.38) 0%, transparent 60%),' +
            'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(122, 242, 152, 0.45) 0%, transparent 55%)',
        }}
      />

      {/* Desktop only: animated WebGL Aurora on top of the static gradient */}
      {isDesktop && (
        <div className="absolute inset-0 opacity-40">
          <Aurora
            colorStops={["#00f5a0", "#7af298", "#00d9ff"]}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
      )}

      {/* Bottom dark fade — always visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/50 to-[#080808]" />
    </div>
  );
};

export default Background;
