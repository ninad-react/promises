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

const promise = createOrder(cart) // returns orderId

promise
.then(function(orderId) {
    console.log('orderId', orderId);
    // proceedToPayment(orderId);
})
.then(function(){
    proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err) {
    console.log(err.message);
})

// creating a promise

function createOrder(cart) {

    const pr = new Promise((resolve, reject) => {

        if(!validateCart(cart)){
            const err = new Error("Cart is not valid")
            reject(err);
        }

        //logic for createOrder
        const orderId = "12345";

        if(orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000);
        }

    });

    return pr;
}

function proceedToPayment(orderId) {

    return new Promise( ( resolve, reject ) => {
        resolve("Payment successfull");
    } )
}

function validateCart(cart){
    return false;
}