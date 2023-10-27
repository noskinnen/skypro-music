import './App.css';
import AudioPlayer from './components/audioplayer/audioplayer';
import CenterBlock from './components/centerblock/centerblock';
import MainSideBar from './components/mainbar/main.bar';
import Navigation from './components/navigation/navigation';

function App() {
  return (
  <div className="wrapper">
    <div className="container">
      <main className="main">
<Navigation/>
<CenterBlock/>
<MainSideBar/>
      </main>

<AudioPlayer/>

<footer/>

</div>
</div>
  );
}

export default App;