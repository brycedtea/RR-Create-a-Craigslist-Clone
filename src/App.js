// Import data
import Gallery from './Gallery'
import Searchbar from './Searchbar';
import Directory from './Directory';
import Sidebar from './Sidebar';
import Help from './Help';
import Posting from './Posting';


// Import components
import './App.css';



function App(){
  return (
    <div>
      <h1>CRAIGSLIST</h1>
      <div className="App">
          <div className="searchbar">
          <Searchbar />
          </div>
          <div className="directory">
          <Directory />
          </div>
          <div className="gallery">
          <Gallery />
            <div><Posting /></div>
          </div>
          <div className="sideBar">
          <Sidebar />
            <div className="help"> <Help/> </div>
          </div>
        </div>
    </div>
  );
}

export default App;
