import { React, useState, useRef, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import './styles/App.css';
const darkBg = '#111827'; // coolGray-900
const lightBg = '#ecfeff0'; //cyan-50
const lightBlue = '#7dd3fc';//lightBlue-300
const Orange = '#ea580c';//orange-600
const darkText = '#e2e8f0'; //slate-200
const lightText = '#1a202c'; //slate-900

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (checked) => {
    if(checked) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
      setDarkMode(checked);
  };
  let appleColor = document.querySelector("meta[name=apple-mobile-web-app-status-bar-style]");
    if(isDarkMode) appleColor.setAttribute("content", darkBg);
    else appleColor.setAttribute("content", lightBg);
  let andrColor = document.querySelector("meta[name=msapplication-navbutton-color]");
    if(isDarkMode) andrColor.setAttribute("content", darkBg);
    else andrColor.setAttribute("content", lightBg);
  let msColor = document.querySelector("meta[name=theme-color]");
    if(isDarkMode) msColor.setAttribute("content", darkBg);
    else msColor.setAttribute("content", lightBg);
  
  const [open, setOpen] = useState(false);
  const node = useRef();

  useEffect(() => {
    const html = document.querySelector('html');
      if(isDarkMode) html.style.backgroundColor = darkBg; else html.style.backgroundColor = lightBg;
    const appDiv = document.querySelector('.App');
      if(open) appDiv.style.backdropFilter = 'blur(2px)';
      else appDiv.style.filter = 'blur(0px)';
  }, [open, isDarkMode]);
  return (
    <>
    <div className='absolute top-0 left-0 z-20' ref={node}>
      <Burger open={open} isDarkMode={isDarkMode} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen}/>
    </div>
    <div className="App bg-lightBg dark:bg-darkBg h-screen" style={{filter: open? 'blur(2px)': 0}}>
      <DarkModeSwitch className='m-2 absolute right-4 top-3' checked={isDarkMode} onChange={toggleDarkMode} size={30}/>

      <p className='px-8 py-16 text-base dark:text-lightBg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sed sequi quaerat illo esse ut natus officia tempore sunt exercitationem quos rerum suscipit iste consectetur ullam, libero vel corrupti nisi quae consequuntur aperiam sit quibusdam quasi. Accusamus sapiente commodi, porro, nisi aliquid sequi voluptates, eligendi consequatur quaerat nesciunt inventore at.</p>
    </div>
    </>
  );
}
export default App;

const Menu = ({open}) => {
  return (
    <div id='menu' className='sm:w-full flex flex-col justify-center transition-transform duration-300 ease-in-out h-auto text-left p-8 absolute top-0 left-0 bg-slate-400 dark:bg-slate-800'
    style={{transform: open ? 'translateX(-5%)' : 'translateX(-110%)',filter: 0}}>
      <a href="/">
        <span role="img" aria-label="about us">💁🏻‍♂️</span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">💸</span>
        Maps
        </a>
      <a href="/">
        <span role="img" aria-label="contact">📩</span>
        Contact
        </a>
    </div>
  )
}

const Burger = ({ open, setOpen, isDarkMode }) => {
  return (
    <div className='absolute top-5 left-3 flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-10 focus:outline-none' 
    open={open} onClick={() => setOpen(!open)}>
      <div className='burger bg-darkBg dark:bg-lightBg' style={{transform: open ? 'rotate(45deg)':'rotate(0)'}}/>
      <div className='burger bg-darkBg dark:bg-lightBg'  
        style={{transform: open ? 'translateX(20px)' : 'translateX(0)',opacity: open ? '0' : '1'}}/>
      <div className='burger bg-darkBg dark:bg-lightBg' style={{transform: open ? 'rotate(-45deg)':'rotate(0)'}}/>
    </div>
  )
}