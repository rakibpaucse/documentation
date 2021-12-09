import Axios from 'axios';
import { BASE_URL } from './apis';


export const getCustomers = async () => {
let response = await Axios.get(`${BASE_URL}/admin/customer`)
return response
}


export const getSingleCustomer = async ( customerId ) => {
let response = await Axios.get(`${BASE_URL}/admin/customer/${customerId}` )
return response
}





