const DecorativeShapes = () => {
  return (
    <>
      {/* Floating geometric shapes */}
      <div className="shape-circle top-20 right-10 animate-float" style={{ animationDelay: '0s' }} />
      <div className="shape-circle top-1/3 left-8 animate-float" style={{ animationDelay: '2s' }} />
      <div className="shape-square top-1/2 right-1/4 animate-float" style={{ animationDelay: '1s' }} />
      <div className="shape-triangle top-3/4 left-1/3 animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-texture-dots bg-dots opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-gradient-radial rounded-full animate-rotate-slow" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-radial rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
    </>
  );
};

export default DecorativeShapes;