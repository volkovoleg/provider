import {Endpoints} from "~/js/endpoints";

export default class AppService {
  constructor(context) {
    this.axios = context.$axios;
    this.url = Endpoints.baseURL + "orders";
  }

  // Читаем внимательно ТЗ 
  // Там дословно написано следующее
  // BASE API URL + /orders/get_notcompleteorders/{supplier_id}
  // То есть
  getOrders(supplierID) {
    return this.axios.get(this.url + '/get_notcompleteorders/' + supplierID);
  }
}
