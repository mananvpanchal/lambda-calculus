const C = f => a => b => f(b)(a);

/*
C(K)(I)(M) = M;
KI(I)(M) = M;

C = KI
*/

module.exports = C;