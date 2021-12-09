import React from 'react'
import Breadcrumb from 'containers/navs/Breadcrumb';

const Index = ({ match }) => {
    return (
        <div>
            <Breadcrumb heading="Sellers" match={match} />

            <p>Seller list</p>
        </div>
    )
}

export default Index
