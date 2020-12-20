import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, SignIn, SignUp, DashboardPage } from './pages';
import { useAuthListener } from './hooks';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

const App = () => {
    const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={'/dashboard'} exact path={'/'}>
          <Home />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={'/dashboard'} path={'/signin'}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={'/dasbhboard'} path={'/signup'}>
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={'/dashboard'}>
          <DashboardPage />
        </ProtectedRoute>
      </Switch>
    </Router>
  )
}

export default App;
