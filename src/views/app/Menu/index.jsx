import React from 'react'
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Img from 'assets/img/social/menu1.png'
import Img2 from 'assets/img/social/aa.png'


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
                <h1> Menu </h1>
                    <ul>
                        <li>Menu.js : <code style={{background:'#ececec', padding:'3px 8px'}}>components/elements/menu/Menu.js</code>  . Render menu, you don't need to edit this file.</li>
                        <li>Open menu.json <code>public/static/data/menu.json</code> </li>
                    </ul>

                <pre style={{background:'#e9e9e9',padding:25, display:'block'}}>
                    <code>
                        {
                            `
                            {
                                "text": "name menu",
                                "url": "#"
                            }
                            `
                        }
                    </code>
                </pre>

                <div><img src={Img} alt="website page" width="90%" /> </div>
                <div><img src={Img2} alt="website page" width="90%"  style={{marginBottom:55}}/></div>

                <h1> Mega menu </h1>

                <p>Each block is 1 column, for example: 4 blocks are 4 columns.</p>
                <ul>
                    <li>megaContent:</li>
                    <li>megaItems:</li>
                    <li>"heading": </li>
                    <li>column mega menu: </li>
                </ul>
                <pre style={{background:'#e9e9e9',padding:25, display:'block'}}>
                    <code>
                        
                    {
                        `
                        {
                            "text": "Name menu",
                            "url": "",
                            "extraClass": "menu-item-has-children has-mega-menu",
                            "subClass": "sub-menu",
                            "mega": "true",
                            "megaContent": [
                                {
                                    "heading": "name block menu 1",
                                    "megaItems": [
                                        {
                                            "text": "sub menu 1",
                                            "url": "#"
                                        },
                                        {
                                            "text": "sub menu 2",
                                            "url": "#"
                                        }
                                    ]
                                },
                                {
                                    "heading": "name block menu 2",
                                    "megaItems": [
                                        {
                                            "text": "sub menu 1",
                                            "url": "#"
                                        },
                                        {
                                            "text": "submenu 2",
                                            "url": "#"
                                        }
                                    ]
                                }
                            ]
                        },
                        `
                    }
                        
                    </code>
                </pre>



                </div>
            </Colxx>
            </Row>
            </>
    )
}

export default Index
