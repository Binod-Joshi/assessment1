import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cards from './pages/Cards.jsx';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const unlisten = () => {
      if (
        window.innerWidth < 767 &&
        document
          .getElementById('main-wrapper')
          .className.indexOf('show-sidebar') !== -1
      ) {
        document
          .getElementById('main-wrapper')
          .classList.toggle('show-sidebar');
      }
    };

    unlisten(); // run the listener initially
    return () => {
      unlisten(); // cleanup the listener on component unmount
    };
  }, [location]);

  useEffect(() => {
    const updateDimensions = () => {
      const element = document.getElementById('main-wrapper');
      setWidth(window.innerWidth);
      if (width < 1170) {
        element.setAttribute("data-sidebartype", "mini-sidebar");
        element.classList.add("mini-sidebar");
      } else {
        element.setAttribute("data-sidebartype", "full");
        element.classList.remove("mini-sidebar");
      }
    };

    if (document.readyState === "complete") {
      updateDimensions();
    }
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("load", updateDimensions);
    return () => {
      window.removeEventListener("load", updateDimensions);
      window.removeEventListener("resize", updateDimensions);
    };
  }, [width]);

  return (
    <div
      id="main-wrapper"
      data-theme="light"
      data-layout="vertical"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
      data-boxed-layout="full"
    >
      <Header />
      <Sidebar />
      <div className="page-wrapper d-block">
        <div className="page-content container-fluid">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default App;
