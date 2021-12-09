import React from 'react'
import Breadcrumb from 'containers/navs/Breadcrumb';

const SingleCustomer = ({ match, location }) => { 
    return (
      <>
        <Breadcrumb heading="Single Customer" match={match} />
      <p>sd</p> 
          <p>
            <strong>Match Props: </strong>
            <code>{JSON.stringify(match, null, 2)}</code>      </p>
          <p>
            <strong>Location Props: </strong>
            <code>{JSON.stringify(location, null, 2)}</code>      </p>
        </>
      );
}

export default SingleCustomer
