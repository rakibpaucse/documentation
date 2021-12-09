import React from 'react'
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import a from 'assets/img/social/car.png'
import ab from 'assets/img/social/carbon.png'


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
            <div style={{width:'70%' , margin:'0 auto', lineHeight:1.5}} >
                <h1> API setup </h1>
                    <p>
                        Default data setting uses  <code style={{background:'#ececec', padding:'3px 8px'}}>.json </code>, 
                        but you can easily switch to using data from the API  <code style={{background:'#ececec', padding:'3px 8px'}}>/utilities/app-settings.js</code> 
                        with <code style={{background:'#ececec', padding:'3px 8px'}}> export const isStaticData = false; .</code> 
                        two attributes <code style={{background:'#ececec', padding:'3px 8px'}}>true </code> and <code style={{background:'#ececec', padding:'3px 8px'}}>false</code> 
                    </p>

                <div>
                    <img src='http://nouthemes.net/docs/react-martfury/_media/json.png' alt="website page" width="90%" style={{marginBottom:55}}
                    />
                </div>


                {/*  */}


                    <p>
                    You can connect to any website system that provides API at   <code style={{background:'#ececec', padding:'3px 8px'}}>/utils/apis.js </code>, 
                    with   <code style={{background:'#ececec', padding:'3px 8px'}}>const BASE_URL = 'http://domain_API';</code> 
                    </p>

                <div>
                    <img src={ab} alt="website page" width="90%" style={{marginBottom:55}} />
                </div>

                <div>
                    <img src={a} alt="website page" width="90%" />
                </div>

            </div>
            </Colxx>
            </Row>
            </>
    )
}

export default Index
