import logo from './logo.svg';
import Home from './Home.js'
import './App.css';
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/font-awesome/css/font-awesome.min.css";
import "./assets/lightbox/css/lightbox.css";
import "./assets/textrotator/simpletextrotator.css";
import "./assets/flexslider/flexslider.css";
import "./css/style.css";
import "./css/animate.css";
function App() {
  return (

    <div className="App">
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Website Title */}
        <title>Shreya Bali</title>
        {/* Bootstrap */}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
  
      <Home/>
    </div>
  );
}

export default App;
