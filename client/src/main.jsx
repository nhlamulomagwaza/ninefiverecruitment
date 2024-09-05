import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppContext from './store/AppContext.jsx';
import SplashScreen from './components/SplashScreen.jsx';

const AppContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasSeenSplashScreen = localStorage.getItem('hasSeenSplashScreen');

    if (!hasSeenSplashScreen) {
      localStorage.setItem('hasSeenSplashScreen', 'true');
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppContext>
          {isLoading ? <SplashScreen /> : <App />}
        </AppContext>
        <Toaster />
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<AppContainer />);