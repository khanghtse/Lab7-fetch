import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Film from './components/Film'
import Detail from './components/Detail';
import About from './components/About';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Players from './components/Players';
import Add from './components/Add';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useState } from 'react';

function App() {

  const [user, setUser] = useState({})

  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    var decoded = jwt_decode(response.credential);
    setUser(decoded);
    document.getElementById('buttonDiv').hidden = true;
  }

  const handleLogOut = (e) => {
    setUser({});
    document.getElementById('buttonDiv').hidden = false;
  }

  useEffect(() => {
    /* global google*/
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: "102493965791-94j5ciiu9lq1d9p3ogvoso383o0u4a17.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }, []);
  return (
    <>
      <div id='buttonDiv'></div>
      {Object.keys(user).length != 0 &&
        <button
          className='logout'
          onClick={handleLogOut}
        >
          logout
        </button>
      }
      {
        user &&
        <div>
          <div className='App'>
            <Navigation />
            <h5 className='welcome'>Welcome {user.name}</h5>
            <Routes>
              {/* <Route path='/' element={<Film />}></Route> */}
              <Route path='/detail/:id' element={<Detail />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/news' element={<News />}></Route>
              <Route path='/contact' element={<Contact />}></Route>

              <Route path='/' element={<Players />} />
              <Route path='/add' element={<Add />}></Route>
            </Routes>
            <Footer />
          </div>
        </div>
      }
    </>
  );


  // return (
  //   <div className='App'>
  //     <Navigation />
  //     <Routes>
  //       {/* <Route path='/' element={<Film />}></Route> */}
  //       <Route path='/detail/:id' element={<Detail />}></Route>
  //       <Route path='/about' element={<About />}></Route>
  //       <Route path='/news' element={<News />}></Route>
  //       <Route path='/contact' element={<Contact />}></Route>

  //       <Route path='/' element={<Players />} />
  //       <Route path='/add' element={<Add />}></Route>
  //     </Routes>
  //     <Footer />
  //   </div>
  // );
}

export default App;