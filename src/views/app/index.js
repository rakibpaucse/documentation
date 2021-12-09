import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from 'layout/AppLayout';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const Gogo = React.lazy(() => import('./gogo'));
const SecondMenu = React.lazy(() =>import( './second-menu'));
const BlankPage = React.lazy(() =>  import( './blank-page'));

const Dashboard = React.lazy(() =>  import( './dashboard'));
const API = React.lazy(() =>  import( './API'));
const BuildStart = React.lazy(() =>  import( './BuildStart'));
const Customizer = React.lazy(() =>  import( './Customizer'));
const Deploy = React.lazy(() =>  import( './Deploy'));

const Environment = React.lazy(() =>  import( './Environment'));
const FolderStructure = React.lazy(() =>  import( './FolderStructure'));
const Header = React.lazy(() =>  import( './Header'));
const Menu = React.lazy(() =>  import( './Menu'));
const Features = React.lazy(() =>  import( './features'));

const Sass = React.lazy(() =>  import( './Sass'));
// const RESTAPI = React.lazy(() =>  import( './RESTAPI'));


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
              path={`${match.url}/API`}
              render={(props) => <API {...props} />}
            />

            <Route
              path={`${match.url}/BuildStart`}
              render={(props) => <BuildStart {...props} />}
            />

            
            <Route
              path={`${match.url}/Customizer`}
              render={(props) => <Customizer {...props} />}
            />

            <Route
              path={`${match.url}/Deploy`}
              render={(props) => <Deploy {...props} />}
            />


            <Route
              path={`${match.url}/Environment`}
              render={(props) => <Environment {...props} />} 
            />

            <Route
              path={`${match.url}/FolderStructure`}
              render={(props) => <FolderStructure {...props} />}
            />

            <Route
              path={`${match.url}/Header`}
              render={(props) => <Header {...props} />}
            />

            
            <Route
              path={`${match.url}/Menu`}
              render={(props) => <Menu {...props} />}
            />

            <Route
              path={`${match.url}/features`}
              render={(props) => <Features {...props} />}
            />

            <Route
              path={`${match.url}/Sass`}
              render={(props) => <Sass {...props} />}
            />
{/* 
            <Route
              path={`${match.url}/RESTAPI`}
              render={(props) => <RESTAPI {...props} />}
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
