import React, {Component} from 'react'
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Admin from './pages/Admin/admin'
import Login from './pages/Login/login'

class App extends Component{
  render (){
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Admin}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
