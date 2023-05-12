import logo from './logo.svg';
import './App.css';
import MainComponent from './Components/MainComponent';
import profileData from './profileData'

function App() {

  return (
    <div>
      <MainComponent data={profileData} />
    </div>
  );
}

export default App;
