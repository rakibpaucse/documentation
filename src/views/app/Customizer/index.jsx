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
                <h1> Color </h1>
                <p>Open _variable.scss  <code style={{background:'#ececec', padding:'3px 8px'}}> scss/utils/_variable.scss </code> .This place manages all colors:</p>
                    <ul>
                           <li> $color-1st: you can modify color from here. </li>
                           <li> $color-layout-2-1st: you can modify color from here. </li>
                           <li> $color-kids: you can modify color from here. </li>
                           <li> $color-photo: you can modify color from here. </li>
                           <li> $color-2nd: you can modify color from here. </li>
                           <li> $color-3rd: you can modify color from here. </li>
                           <li> $color-heading:  you can modify color from here. </li>
                           <li> $color-text:  you can modify color from here. </li>
                           <li> $color-text-2:  you can modify color from here. </li>
                           <li> $color-dark: you can modify color from here. </li>
                           <li> $color-link:  you can modify color from here. </li>
                    </ul>

                    <p> Can Be Used More Color Varible From </p>

                    <p>Fonts </p>
                    <ul>
                           <li> $font-1st: you can modify Font from here. </li>
                           <li> $font-2nd: you can modify Font from here. </li>
                           <li> $font-3rd: you can modify Font from here. </li>
                    </ul>

                    <p>Colors</p>
                    <ul>                  
                           <li> $color-success: you can modify color from here. </li>
                           <li> $color-warning: you can modify color from here. </li>
                           <li> $color-danger: you can modify color from here. </li>
                           <li> $color-gray: you can modify color from here. </li>
                           <li> $color-facebook: you can modify color from here. </li>
                           <li> $color-twitter: you can modify color from here. </li>
                           <li> $color-google: you can modify color from here. </li>
                           <li> $color-linkedin: you can modify color from here. </li>
                           <li> $color-instagram: you can modify color from here. </li>
                           <li> $document-font-size:  you can modify color from here. </li>
                    </ul>

                    <p>Animation</p>
                    <ul>
                           <li> $timing: you can modify timing from here. </li>
                           <li> $timing-1:  you can modify timing from here. </li>
                           <li> $timing-2:  you can modify timing from here. </li>
                           <li> $timing-3:  you can modify timing from here. </li>

                    </ul>

            </div>
            </Colxx>
            </Row>
            </>
    )
}

export default Index

