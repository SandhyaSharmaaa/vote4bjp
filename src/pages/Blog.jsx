import videoFile from "../assets/Finals.mp4"
import logo from "../assets/logo.png"
const App = () => {
  
  return (
    <main className="gradient-background" >
      <div className="video-div">
      <video width="750" height="500" autoPlay muted loop controls >
        <source src={videoFile} type="video/mp4" />
        
        
        Your browser does not support the video tag.
      </video>
      </div>
      <div className="bottom-bar">
        <div className="text">आइए, 4 अप्रैल को हमारे यशश्वी प्रधान मंत्री श्री नरेंद्र मोदी जी का हार्दिक स्वागत करें, और हम सब जमोई के पावन धरती पर लाखों की तादात में एकत्रित होकर उनके उज्वल भारत के सपनों को पूरा करने में उनका साथ दें। - सम्राट चौधरी</div>
        <img src={logo} />
      </div>
    </main>
  );
};

export default App;