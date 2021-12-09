import React,{useState , useEffect} from 'react'
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';


const AllCustomers = ({match}) => { 


      useEffect(() => {
      }, []);

    return (
        <>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="AllCustomers" match={match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" className="mb-4">
            <div>
            </div>
          </Colxx>
        </Row>
      </>
    )
}

export default AllCustomers
