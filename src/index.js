import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'
import { App } from 'components/App';

const theme = {
  colors: {
    text_black: '#000000',  
    text_gray: '#696969',
    border_dark_gray: '#666666',
    border_gray: '#696969',    
    bg_light: '#eeeeee',
    bg_dark_light: '#aeaeae',
  },
  friendlist: {
    isOline: '#00FF00',
    isNotOnline: '#FF0000',
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme} >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
