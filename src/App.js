// import logo from './logo.svg';
import './App.css';

//import Component
import LaunchLoadMap from './component/LaunchLoadMap/LaunchLoadMap';
import DevelopmentLoadMap from './component/DevelopmentRoadMap/DevelopmentLoadMap';
import Announcement from './component/Announcement/Announcement';
import Seven from './component/Seven/Seven';

function App() {
  return (
    <div className="App">
      <Seven/>
      <LaunchLoadMap />
      <DevelopmentLoadMap />
      <Announcement />
    </div>
  );
}

export default App;
