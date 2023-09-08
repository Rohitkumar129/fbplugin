import './App.css';
import {Routes,Route } from 'react-router-dom';
import SignUp from './Components/Authentication/SignUp';
import Login from './Components/Authentication/Login';
import ConnectyourFB from './Pages/ConnectyourFB';
import ReplyOrDeletepage from './Pages/ReplyOrDeletepage';
import Chatpage from './Pages/Chatpage';
function App() {
 // console.log(data);
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={SignUp} exact />
        <Route path='/Login' Component={Login}  />
        <Route path='/FBconnect' Component={ConnectyourFB} />
        <Route path='/Deleteorreply' Component={ReplyOrDeletepage} />
        <Route path='/Chatpage' Component={Chatpage} />
      </Routes>
    </div>
  );
}

export default App;
