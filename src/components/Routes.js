import React from 'react';
import Home from './Home';




const routes = [
  { name: "Home", path: "/home", exact: true, main: () => <Home /> },
  //{ name: "Works", path: "/works", exact: true, main: () => <Works/> },
  //{ name: "Contact", path: "/prescriptions", exact: true, main: () => <Contact /> },
];

export default routes;