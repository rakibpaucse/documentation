import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from 'layout/AppLayout';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const Gogo = React.lazy(() => import('./gogo'));
const SecondMenu = React.lazy(() =>import( './second-menu'));
const BlankPage = React.lazy(() =>  import( './blank-page'));

const Dashboard = React.lazy(() =>  import( './dashboard'));
const Customers = React.lazy(() =>  import( './customers'));
const Sellers = React.lazy(() =>  import( './sellers'));
const Ideas = React.lazy(() =>  import( './ideas'));


const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
            <Route
              path={`${match.url}/gogo`}
              render={(props) => <Gogo {...props} />}
            />
            <Route
              path={`${match.url}/dashboard`}
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              path={`${match.url}/second-menu`}
              render={(props) => <SecondMenu {...props} />}
            />

            <Route
              path={`${match.url}/customers`}
              render={(props) => <Customers {...props} />}
            />

            <Route
              path={`${match.url}/sellers`}
              render={(props) => <Sellers {...props} />}
            />

            
            <Route
              path={`${match.url}/ideas`}
              render={(props) => <Ideas {...props} />}
            />


            <Route
              path={`${match.url}/second-menu`}
              render={(props) => <SecondMenu {...props} />}
            />
            {/* <ProtectedRoute
                    path={`${match.url}/second-menu`}
                    component={SecondMenu}
                    roles={[UserRole.Admin]}
            /> */}
            <Route
              path={`${match.url}/blank-page`}
              render={(props) => <BlankPage {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
