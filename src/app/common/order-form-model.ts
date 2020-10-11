import { OrderDetail } from './order-detail';

export class OrderFormModel {
    name:string;
    zip:string;
    phone:string;
    email:string;
    city:string;
    state:string;
    street1:string;
    street2:string;
    id:string;
    items:OrderDetail[];
}
