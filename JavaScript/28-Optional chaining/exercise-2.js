const order = {};


if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}

/*
Essendoci gli operatori AND per cui l'unica condizione vera è quando tutte sono vere possiamo
utilizzare l'optional chaining per "restringere" il campo di controllo e determinare una migliore
lettura del codice
*/

if (order?.customer?.address && !order.customer.address.city){
  console.log('City is required2');
}