/*
first, constant function
always returns first argument no matter what is second
*/

const K = a => b => a;

/*
const K7 = K(7);
K7(5) = 7
K7(6) = 7
K7(8) = 7

K7 is constant 7 function
*/

module.exports = K;