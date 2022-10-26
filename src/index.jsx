import React from 'react';
import ReactDOM from 'react-dom/client';
import {MainView} from './components/main-view/main-view';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}

// Finds the root of your app
const container = document.getElementById('app-container')
console.log ('cot: ', container)
const rootElement =ReactDOM.createRoot(container)

// Tells React to render your app in the root DOM element
rootElement.render(<MyFlixApplication/>)