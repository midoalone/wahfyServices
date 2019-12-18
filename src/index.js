import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from '../src/redux/store';
import Navigation from './navigation';
import OffersMenu from './screens/OffersMenu';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
