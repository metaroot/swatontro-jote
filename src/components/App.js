import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Home from './Home';
import routes from './Routes';
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import createHistory from 'history/createBrowserHistory';
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";


function App() {
  

  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });
  return (
    <ThemeProvider>
      <CSSReset />
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </Switch>
      </Router>  
    </ThemeProvider>
  );
}

export default App;
