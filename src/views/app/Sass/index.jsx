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
                <h1> SCSS </h1>
                    <p>
                        The stylesheet is compiled to .next/static/css. Next.js will automatically add the css file to the HTML. 
                        In production a chunk hash is added so that styles are updated when a new version of the stylesheet is deployed.
                    </p>
                <p> Refer: <a style={{color:'green'}} href="https://github.com/zeit/next-plugins/tree/master/packages/next-sass">https://github.com/zeit/next-plugins/tree/master/packages/next-sass</a></p>

                </div>
            </Colxx>
            </Row>
            </>
    )
}

export default Index
