import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/index';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import dashbaord from '../Pages/dashboard/index';

function PublicRoute() {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/register" exact={true} component={Register} />
      <Route path="*" exact={true} component={Login} />
    </Switch>
  )
}

export default PublicRoute;