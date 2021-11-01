
import { Route, Switch } from 'react-router-dom';

import { TemplateProvider } from './template/TemplateProvider';

// Components
import Header from './components/header/Header';
import Overview from './components/overview/Overview';
import Footer from './components/footer/Footer';
import TourDetails from './components/tourDetails/TourDetails';
import Auth from './components/authantication/Auth';
import ResetPassword from './components/authantication/ResetPassword';
import UserProfile from './components/userProfile/UserProfile';
import Error from './components/Error';

function App() {

  return (
    <TemplateProvider>
      <Header />
      <Switch>
        <Route exact path='/' component={Overview} />
        <Route exact path='/tour/:id' component={TourDetails} />
        <Route exact path='/auth/:isSignup' component={Auth} />
        <Route exact path='/resetPassword/:token' component={ResetPassword} />
        <Route exact path="/me" component={UserProfile} />
        <Route path="/" component={() => <Error message="Can't find this route on this server" />} />
      </Switch>
      <Footer />
    </TemplateProvider>
  );
}

export default App;
