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
                <h1>Now</h1>    
                <hr />
                <p> <a style={{color:'green'}} href="https://vercel.com/home"> Now </a> -- great pun, right? -- it's time to show your project to the world!</p> 
                <p> For easy, zero configuration deployment, you can use <a style={{color:'green'}} href="https://vercel.com/home"> Now </a>. 
                    After you have downloaded and installed <a style={{color:'green'}} href="https://vercel.com/home"> Now </a>'s desktop application,
                    you can deploy <a style={{color:'green'}} href=" https://nextjs.org/docs/getting-started "> Next.Js </a> with a single command.
                </p>

                <pre style={{background:'#e9e9e9',padding:25, display:'block'}}>
                    <code>{`$ now`} </code>
                </pre>
                <p>You will get a unique URL which you can then link via now alias to your custom domain.</p>

                <br /><br />

                <h1>Node.js Server</h1> 
                <hr />
                <p> Next.js can be deployed to any hosting provider that supports Node.js. 
                    This is the approach you should take if you’re using a <a style={{color:'green'}} href="https://nextjs.org/docs/advanced-features/custom-server"> custom server. </a> 
                </p>

                <p>
                    Make sure your <code style={{background:'#ececec', padding:'3px 8px'}}>package.json</code>  has the 
                    <code style={{background:'#ececec', padding:'3px 8px'}}>build</code>  and 
                    <code style={{background:'#ececec', padding:'3px 8px'}}>start</code>   scripts: 
                </p>

                <div><img src='http://nouthemes.net/docs/react-martfury/_media/deploy.png' alt="website page" width="90%"  style={{marginBottom:55}}/></div>

                <p>
                    <code style={{background:'#ececec', padding:'3px 8px'}}>next build</code> builds the production application in the 
                    <code style={{background:'#ececec', padding:'3px 8px'}}>.next</code> folder.
                     After building,  <code style={{background:'#ececec', padding:'3px 8px'}}>next start</code>  starts a Node.js server that supports hybrid pages, 
                     serving both statically generated and server-side rendered pages.
                </p>

            </div>
            </Colxx>
            </Row>
            </>
    )
}

export default Index
