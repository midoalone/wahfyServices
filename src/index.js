import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import {VerifyingNumber} from './screens/VerifyingNumber'
import Navigation from './navigation'
import { Location } from './screens/Location';
import { SideMenu } from './components';

export class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(thunk))}>
        <Navigation/>
        {/* <SideMenu/> */}
      </Provider>
    );
  }
}
