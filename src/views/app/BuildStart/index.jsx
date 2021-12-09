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
            <div style={{width:'70%' , margin:'0 auto', lineHeight:1.5}} >
                
                <div style={{marginBottom:35}}>
                    <h1 style={{fontWeight:'bold'}}> Yarn Build </h1>
                    <hr />

                    <p> Step 1:  </p>
                    <pre style={{background:'#e9e9e9',padding:25, display:'block'}}>
                        <code>{` yarn install `}</code>
                    </pre> 
                    <p> Step 2:  </p>
                    <pre style={{background:'#e9e9e9',padding:25, display:'block'}}>
                        <code>{` yarn build `}</code>
                    </pre> 
                    <p> Step 3:  </p>
                    <pre style={{background:'#e9e9e9',padding:25, display:'block'}}>
                        <code>{` yarn start `}</code>
                    </pre> 
                </div>


                {/*  */}


                <div style={{marginBottom:35}}>
                    <h1 style={{fontWeight:'bold'}}> Yarn Development mode </h1>
                    <hr />

                    <p> Step 1:  </p>
                    <pre style={{background:'#e9e9e9',padding:25, display:'block'}}>
                        <code>{` yarn install `}</code>
                    </pre> 
                    <p> Step 2:  </p>
                    <pre style={{background:'#e9e9e9',padding:25, display:'block'}}>
                        <code>{` yarn dev `}</code>
                    </pre> 
                </div>

                {/*  */}


                <div style={{marginBottom:35}}>
                    <h1 style={{fontWeight:'bold'}}> NPM build </h1>
                    <hr />

                    <p> Step 1:  </p>
                    <pre style={{background:'#e9e9e9',padding:25, display:'block'}}>
                        <code>{` npm install `}</code>
                    </pre> 
                    <p> Step 2:  </p>
                    <pre style={{background:'#e9e9e9',padding:25, display:'block'}}>
                        <code>{` npm run build `}</code>
                    </pre> 
                    <p> Step 3:  </p>
                    <pre style={{background:'#e9e9e9',padding:25, display:'block'}}>
                        <code>{` npm run start `}</code>
                    </pre> 
                </div>


                {/*  */}


                <div style={{marginBottom:35}}>
                    <h1 style={{fontWeight:'bold'}} > NPM Development mode </h1>
                    <hr />

                    <p> Step 1:  </p>
                    <pre style={{background:'#e9e9e9',padding:25, display:'block'}}>
                        <code>{` npm install `}</code>
                    </pre> 
                    <p> Step 2:  </p>
                    <pre style={{background:'#e9e9e9',padding:25, display:'block'}}>
                        <code>{` npm run dev `}</code>
                    </pre> 
                </div>

                <p> Refer: <a style={{color:'green'}} href=" https://nextjs.org/docs/getting-started "> https://nextjs.org/docs/getting-started </a></p>

                <ul>
                    <li>Build: Builds the app for production to the <code style={{background:'#ececec', padding:'3px 8px'}}>.next</code>  folder. It correctly bundles React in production mode and optimizes the build for the best performance.</li>
                    <li>Start: Starts the application in production mode. The application should be compiled with <code style={{background:'#ececec', padding:'3px 8px'}}>next build</code>  first.</li>
                    <li>Dev: Runs the app in the development mode.</li>
                </ul>
                <p>Open <a style={{color:'green'}} href=" http://localhost:3000"> http://localhost:3000</a> to view it in the browser.</p>


            </div>
            </Colxx>
            </Row>
            </>
    )
}

export default Index
