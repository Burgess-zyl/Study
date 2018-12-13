import React, { Component } from 'react';
import GlobalStyle from './style'
import IconFont from './static/iconfont/iconfont'
import Header from './common/header/index'
import { Provider } from 'react-redux'
import store from './store'
class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <IconFont />
        <Provider store={store}>
          <Header />
        </Provider>
      </div>
    );
  }
}

export default App;
