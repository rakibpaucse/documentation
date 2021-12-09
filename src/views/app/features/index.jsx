import React from 'react'
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';

const Index = (match) => { 
    return (
            <>
            <Row>
            <Colxx xxs="12">
                <Breadcrumb heading={match.location.pathname.substr(1).split('/')[1]} match={match} />
                <Separator className="mb-5" />
            </Colxx>
            </Row>
            <Row>
            <Colxx xxs="12" className="mb-4">
            <div style={{width:'70%' , margin:'0 auto'}} >
                <h1>Feature Pages</h1>
                <div>
                    <ul>
                        <li>React, NextJS, Redux, Redux-Saga, ExpressJS</li>
                        <li>ReactJS without jQuery</li>
                        <li>Mobile Version (responsive)</li>
                        <li>Sticky Header supported</li>
                        <li>Amazing Megamenu</li>
                        <li>Full-With layout support</li>
                        <li>Newsletter popup</li>
                        <li>My account,invoices, notifications, profile... etc.</li>
                        <li>Multi-Browser Support</li>
                        <li>Using Google Fonts</li>
                        <li>Reliable Support</li>                     
                    </ul>
                </div>
                </div>
            </Colxx>
            </Row>
            </>
    )
}

export default Index
