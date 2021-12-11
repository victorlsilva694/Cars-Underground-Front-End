import { Route, Switch } from 'react-router-dom';
import dashbaord from '../Pages/dashboard/index';
function PrivateRoutes() {
  return (
    <Switch>
      <Route path="/User/DashBoard" exact={true} component={dashbaord}/>
    </Switch>
  )
}

export default PrivateRoutes;