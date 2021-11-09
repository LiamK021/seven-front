// import logo from './logo.svg';
import './App.css';

//import Component
import LaunchLoadMap from './component/LaunchLoadMap/LaunchLoadMap';
import DevelopmentLoadMap from './component/DevelopmentRoadMap/DevelopmentLoadMap';
import Announcement from './component/Announcement/Announcement';
import Seven from './component/Seven/Seven';
import MetaVerse from './component/MetaVerse/MetaVerse';
import ToKnow from './component/ToKnow/ToKnow';

function App() {
  return (
    <div className="App">
      <Seven/>
      <hr/>
      <MetaVerse/>
      <ToKnow/>
      <LaunchLoadMap />
      <DevelopmentLoadMap />
      <Announcement />
    </div>
  );
}

export default App;
