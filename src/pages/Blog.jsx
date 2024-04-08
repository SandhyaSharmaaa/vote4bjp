import videoFile from "../assets/Finals.mp4"
import logo from "../assets/logo.png"
const App = () => {
  
  return (
    <main className="gradient-background" >
      <video width="750" height="500" autoPlay muted loop controls >
        <source src={videoFile} type="video/mp4" />
        
        
        Your browser does not support the video tag.
      </video>
      <div className="bottom-bar">
        <div></div>
        <img src={logo} />
      </div>
    </main>
  );
};

export default App;