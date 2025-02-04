import React from 'react';
import TopNavBar from './TopNavBar';
import HomePage from './HomePage';

function MainScreen({ setAuthComponent }) {
  return (
    <>
      <TopNavBar setAuthComponent={setAuthComponent} />
      <HomePage />
    </>
  );
}

export default MainScreen;
