const MapOverlay = ({ children }) => {
  return (
    <div
      style={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '12px',
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'white',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxShadow: '0 0 0 2px rgba(0,0,0,.1)',
      }}
    >
      {children}
    </div>
  );
};

export default MapOverlay;
