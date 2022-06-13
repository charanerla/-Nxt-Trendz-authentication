import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
// import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={LoginForm} />
    <Route component={NotFound} />
  </Switch>
)

export default App
