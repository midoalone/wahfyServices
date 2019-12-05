import React, {Component} from 'react';
import {View} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export class Location extends Component {
  state = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  render() {
    const {latitude, longitude} = this.state;
    return (
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude,
          longitude,
        }}
      >
          <Marker
          
          />
      </MapView>
    );
  }
}
