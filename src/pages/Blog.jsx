const App = () => {
  return (
    <div style={{ background: 'linear-gradient(135deg, #f58e34, #3eba38)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <video width="750" height="500" autoPlay loop controls>
        <source src="Finals.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default App;