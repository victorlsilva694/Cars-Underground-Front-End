import { useState, useEffect, useContext } from 'react';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { useHistory } from 'react-router-dom';
import { RouterContext } from '../App';

function Routes() {

  const history = useHistory()

  const [isAuthenticated, setAuthentication] = useContext(RouterContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setAuthentication(true)
      history.replace('/User/DashBoard');
    }
  },[isAuthenticated])


  return (
    <>
      {
        isAuthenticated 
        ? 
        (
          <PrivateRoute />
        )
        :
        <PublicRoute />
      }
    </>
  )
}


export default Routes;