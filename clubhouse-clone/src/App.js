import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import PhoneConfirmation from './pages/PhoneConfirmation'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import Home from './pages/Home';
import AppLayout from './pages/Layouts/AppLayout';
import Explore from './pages/Explore'
import Profile from './pages/Profile'

function App() {
  return (

    <BrowserRouter>
      <Route exact path={[
        '/',
        '/invite',
        '/get_username',
        '/code_confirm',
        '/allow_notification',
      ]}>

        
        <PlanLayout>
          <Switch>
            <Route exact path="/">
              <Welcome></Welcome>
            </Route>
            <Route exact path="/invite">
              <PhoneConfirmation></PhoneConfirmation>
            </Route>
            <Route exact path="/code_confirm">
              <CodeConfirm></CodeConfirm>
            </Route>
            <Route exact path="/allow_notification">
              <AllowNotification/>
            </Route>
          </Switch>
        </PlanLayout>

      
      </Route>
      <Route exact path={["/home","/explore","/profile"]}>
        <AppLayout>
          <Switch>
            <Route exact={true} path="/home">
              <Home></Home>
            </Route>
            <Route exact={true} path="/explore">
              <Explore></Explore>
            </Route>
            <Route exact={true} path="/profile">
              <Profile></Profile>
            </Route>
          </Switch>
        </AppLayout>
      </Route>

    </BrowserRouter>



  );
}

export default App;
