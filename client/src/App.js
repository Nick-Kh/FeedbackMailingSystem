import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions'; 

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [])
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
      </BrowserRouter>
    </div>
  );
}


export default connect(null, actions)(App);
