import React, { useEffect, useRef, useState} from 'react'
import './style.css'
import {ReactComponent as Menu} from '../assests/images/icon-hamburger.svg'
import {ReactComponent as CloseIcon} from '../assests/images/icon-close.svg';
import Logo from "../assests/images/Logo.svg";

export default function Navbar(props) {
  const [menu, setmenu] = useState(false);
  const myNav = useRef();
  const myLogo = useRef();
  const myList = useRef();
  const bgColor = props.backGround;
  const textColor = props.textColor;
  useEffect(()=>{
    myNav.current.style.backgroundColor = bgColor;
    if (bgColor === 'white')
      myNav.current.style.boxShadow = `0 0 60px 1px rgba(0, 0, 0, 0.10)`;
    else myNav.current.style.boxShadow = `0 0 0 0 black`;
    myLogo.current.style.color = textColor;
    myList.current.style.color = textColor;
  }, [bgColor, textColor])
 

  function toggleIcon(){
    const primaryNav = document.querySelector(".primary-navigation");
    const primaryHeader = document.querySelector(".primary-header");
    const primaryButton = document.querySelector(".toggleDisplay");
    if(menu){
      setmenu(false);
    }
    else{
      setmenu(true);
    }
    primaryNav.toggleAttribute("data-visible");
    primaryButton.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");  
  }
  

  return (
    <>
      <header className="primary-header">
        <div className="container mobile-width">
          <div className="nav-wrapper" id='nav-wrapper' ref={myNav}>
            <div className="logo" ref={myLogo}>
              <img src={Logo} alt="Manage" />
            </div>
            {menu?<button onClick={toggleIcon} className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
              
              <CloseIcon className="icon-close" aria-hidden="true"/>
              {/* <MenuIcon className="icon-hamburger" aria-hidden="true" /> */}
              <span className="visually-hidden">Menu</span>
            </button>
            :<button onClick={toggleIcon} className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
              {/* <CloseIcon className="icon-close" aria-hidden="true" /> */}
              <Menu className="icon-hamburger" aria-hidden="true" />
              <span className="visually-hidden">Menu</span>
            </button>}
            <nav className="primary-navigation">
              <ul className="nav-list" aria-label="Primary" id="primary-navigation" ref={myList}>
                <li>Home</li>
                <li>About us</li>
                <li>Tokenomics</li>
                <li className='toggleDisplay'><div  className="button">Dapps</div></li>
              </ul>
            </nav>
            <div  className="button display-sm-hidden display-md-inline-flex">Dapps</div>
          </div>
        </div>
      </header>
    </>
  )
}
