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
                <div style={{background:'#f0ffff' , padding:'20px 50px' , textAlign:'center'}}>
                    <h1> Change Layout </h1>
                    <p> Src > Components > layouts </p>
                    <p> From here you can Change Layout </p>
                </div>

                <div style={{background:'#f5f5dc' , padding:'20px 50px', textAlign:'center'}}>
                    <h1> Change Header </h1>
                    <p> Src > Components > Shared > headers </p>
                    <p> From here you can Change Header </p>
                </div>

                <div style={{background:'#f0f8ff' , padding:'20px 50px', textAlign:'center'}}>
                    <h1> Change Footer </h1>
                    <p> Src > Components > Shared > footers </p>
                    <p> From here you can Change Footer </p>
                </div>

            </div>
            </Colxx>
            </Row>
            </>
    )
}

export default Index
