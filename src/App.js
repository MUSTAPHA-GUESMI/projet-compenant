import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './compenant/profile/ProfilePhoto';
import FullName from './compenant/profile/FullName';
import Address from './compenant/profile/Address';
function App() {
  return (
    <div className="App">
      <FullName />
<Address />
<ProfilePhoto />
    </div>
  );
}

export default App;
