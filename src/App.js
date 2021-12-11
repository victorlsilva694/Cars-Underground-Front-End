import './App.css';
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom';
import React, { createContext, useState } from 'react';
import { AuthProvider } from './providers/auth';


const RouterContext = createContext()

function App() {
  const [isAuthenticated, setAuthentication] = useState(false);


  return (
    <AuthProvider>
      <RouterContext.Provider value={[isAuthenticated, setAuthentication]}>
        <BrowserRouter> 
          <Routes />
        </BrowserRouter>
      </RouterContext.Provider>
    </AuthProvider>
  );
}

export { RouterContext }
export default App;
