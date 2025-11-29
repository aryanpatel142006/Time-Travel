const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none overflow-hidden bg-black">
      
      {/* 1. Base Deep Space (Pure Black) */}
      <div className="absolute inset-0 bg-black" />

      {/* 2. The "Event Horizon" Glow (Purple/Blue from the bottom) 
          This matches your tunnel's color scheme to bridge the gap. */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[80vh]"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(88, 28, 135, 0.4) 0%, rgba(0, 0, 0, 0) 70%)'
        }}
      />
      
      {/* 3. Secondary Cyan Glow (Subtle highlights) */}
      <div 
        className="absolute bottom-0 left-1/4 right-0 h-[60vh] w-[50vw]"
        style={{
          background: 'radial-gradient(circle at center bottom, rgba(6, 182, 212, 0.15) 0%, rgba(0, 0, 0, 0) 60%)'
        }}
      />

      {/* 4. Retro Grid (Very faint, for the "Type GPT" / Digital feel) */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
        }}
      />

      {/* 5. Static Noise / Grain (Adds texture so it's not "flat") */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
    </div>
  );
};

export default SpaceBackground;