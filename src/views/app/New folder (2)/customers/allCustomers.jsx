import React from 'react'
import {ReactTableWithPaginationCard as Table} from '../../../containers/ui/ReactTableCards'
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';

const AllCustomers = ({match}) => { 
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
                <Table title='All Customers Table'/>
            </div>
          </Colxx>
        </Row>
      </>
    )
}

export default AllCustomers
