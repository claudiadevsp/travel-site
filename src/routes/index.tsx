import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../pages/Home'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
  </BrowserRouter>
)

export { Router }
