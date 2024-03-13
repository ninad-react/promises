// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function(orderId) {

//     proceedToPayment(orderId, function (paymentInfo){

//         showOrderSummary(paymentInfo, function () {

//             updateWalletBalance();

//         })

//     });
// }); 

// createOrder(cart)
//     .then(orderId => proceedToPayment(orderId))
//     .then(paymentInfo => showOrderSummary(paymentInfo))
//     .then(() =>  updateWalletBalance());


// const promise = createOrder(cart);

// { data: orderDetails }

// promise.then(function(orderId) {
//     proceedToPayment(orderId);
// });


// const GITHUB_API = 'https://github.com/ninad-react';

// const user = fetch(GITHUB_API);
// console.log(user);

// user.then((data) => console.log(data));


const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // which returns an order API

promise.then(() => proceedToPayment(orderId)); 