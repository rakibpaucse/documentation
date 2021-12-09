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
                <h1>Folder Structure</h1>
                <div>
                    <ul>
                        <li>node_modules: It contains all the npm packages that is used on this projects.</li>
                        <li>components: Here are the React component which could be reused in multiple pages or are complex enough to move them to another file and test them individually. Each file should have a default export with a single component, inside the file there could be multiple components though.</li>
                        <li>pages: Here are the pages (also known as views) of the application, each file will automatically match a route as described in Next.js documentation.</li>
                        <li>static: Any static file required by the application (images, audios, etc.) could be placed here.</li>
                        <li>scss: The stylesheet is compiled to css. Next.js will automatically add the css file to the HTML.</li>
                        <li>store: Used to manage the state via redux</li>
                        <li>package.json: This file contains dependencies and scripts required for the project.</li>
                        <li>next.config.js: contain extended next configurations like css module support, font import, image import and optimization and env variables.</li>
                        <li>package-lock.json contain exact dependency tree to be installed in /node_modules. It helps while a team is working on private apps to ensure that they are working on the same version of dependencies and sub-dependencies. It also maintains a history of changes done in package.json so, that at any point of time, when required previous changes can be looked back in the package-lock.json file.</li>
                    </ul>
                    
                </div>

                </div>
            </Colxx>
            </Row>
            </>
    )
}

export default Index
