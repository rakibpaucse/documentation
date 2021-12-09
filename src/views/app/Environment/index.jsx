import React from 'react'
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Img from 'assets/img/social/a.png'

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
                <h1> Requirements </h1>
                <ul>
                    <li>Basic understanding of <a style={{color:'green'}} href="https://reactjs.org/">React.js</a>  and javascript</li>
                    <li> <a style={{color:'green'}} href="https://github.com/vercel/next.js">Next.js</a> </li>
                    <li><a style={{color:'green'}} href="https://nodejs.org/en/">Nodejs</a></li>
                    <li><a style={{color:'green'}} href="https://www.npmjs.com/">NPM</a></li>
                    <li><a style={{color:'green'}} href="https://classic.yarnpkg.com/en/">Yarn</a></li>
                </ul>

                <p>
                    <a style={{color:'green'}} href="https://github.com/vercel/next.js">Next.js </a>
                     starts it's server on port 3000 by default, so after running, open your browser at http://localhost:3000.
                </p>

                <div>
                    <img src={Img} alt="website page" width="90%" />
                </div>
            
            </div>
            </Colxx>
            </Row>
            </>
    )
}

export default Index
