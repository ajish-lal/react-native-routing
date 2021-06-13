import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Location from 'expo-location';
import CentreComponent from '../components/CentreComponent';
import { createContext } from 'react';
import { useContext } from 'react';

const LocationContext = createContext();

export function useLocation() {
  return useContext(LocationContext);
}

export default function LocationProvider({ children }) {
  const [currentLocation, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const value = {
    currentLocation,
    getCurrentLocation,
    clearLocation,
  };

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (currentLocation) {
    text = JSON.stringify(currentLocation);
  }

  async function getCurrentLocation() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync();
      setErrorMsg(null);
      setLocation(location);
      console.log(location);
    } catch (error) {
      setErrorMsg('Permission to access location was denied');
    }
  }

  function clearLocation() {
    // return authApp.auth().signInWithEmailAndPassword(email, password);
  }

  return (
    <LocationContext.Provider value={value}>
      <Text>{text}</Text>
      {children}
    </LocationContext.Provider>
  );
}
