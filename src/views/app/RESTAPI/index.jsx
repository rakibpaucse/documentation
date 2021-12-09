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
                <div>
                    <p>
                        This is the main website of bigly24,  built with React, 
                        Next JS, Redux, Redux-Saga, Sass and Bootstrap 4.
                        For the designing UI Ant design also used. 
                        Included are the powerful features listed below.
                    </p>
                </div>
            </Colxx>
            </Row>
            </>
    )
}

export default Index
