import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalStyle from './style'
import IconFont from './static/iconfont/iconfont'
import Header from './common/header/index'
import Home from './pages/home'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <IconFont />
        <Provider store={store}>
          <Fragment>
            <Header />
            <BrowserRouter>
              <Fragment>
                <Route path="/" exact component={Home}></Route>
                <Route path="/detail" exact render={() => <div>detail</div>}></Route>
              </Fragment>
            </BrowserRouter>
          </Fragment>
        </Provider>
      </div>
    );
  }
}

export default App;
