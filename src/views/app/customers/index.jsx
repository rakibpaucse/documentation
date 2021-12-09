import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const AllCoustomers = React.lazy(() =>import('./allCustomers'));
const SingleCustomer = React.lazy(() =>import('./singleCustomer/index'));

const Customers = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>

    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/allCustomers`} />
      <Route
        path={`${match.url}/allCustomers`}
        render={(props) => <AllCoustomers {...props} />}
      />

        <Route
            path={`${match.url}/singleCustomer/:customerId`}
            render={(props) => <SingleCustomer {...props} />}
        />
      <Redirect to="/error" />
    </Switch>

  </Suspense>
);
export default Customers;
