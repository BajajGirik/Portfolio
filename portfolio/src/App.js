import { useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';

function App() {

  const scrollmax = (e) => {
    const head = document.querySelector("#Head");
    const nav = document.querySelector(".Navbar");
    const navC = document.querySelector(".Navbar__container");
    console.log(navC);
    if (window.scrollY >= head.offsetHeight - nav.offsetHeight) {
      nav.style.backgroundColor = "#B15";
      navC.style.backgroundColor = "#B15";
    }
    else {
      nav.style.backgroundColor = "transparent";
      navC.style.backgroundColor = "transparent";
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollmax);
    return () => {
      window.addEventListener('scroll', scrollmax);
    }
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
