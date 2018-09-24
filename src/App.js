import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import StoreApp from './store';

import Alert from 'react-s-alert';

// Import App css (not recommended, better change it from _custom.scss)
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Import react-s-alert styling
import 'react-s-alert/dist/s-alert-default.css';
//choose the react-s-alert effect
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Login, Page404, Page500, Register } from './views/Pages';

// import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
        <div>
            <Alert stack={{ limit: 3 }} effect='slide' position='top-right' timeout={5000} />
            <HashRouter>
                <Provider store={StoreApp}>
                    <Switch>
                        <Route exact path="/login" name="Login Page" component={Login} />
                        <Route exact path="/register" name="Register Page" component={Register} />
                        <Route exact path="/404" name="Page 404" component={Page404} />
                        <Route exact path="/500" name="Page 500" component={Page500} />
                        <Route path="/" name="Home" component={DefaultLayout} />
                    </Switch>
                </Provider>
            </HashRouter>
        </div>
    );
  }
}

export default App;
