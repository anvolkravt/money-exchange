// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
let obj = {}, error = {error: "You are rich, my friend! We don't have so much coins for exchange"};
const H = 50, Q = 25, D = 10, N = 5, P = 1;
let Hq, Qq, Dq, Nq, Pq; //quotients
let Hr, Qr, Dr, Nr, Pr; //reminders

if (currency <= 0) return obj;
if (currency >= 10000) return error;

Hq = Math.floor(currency/H); 
Hr = currency % H;

Qq = Math.floor(Hr/Q); 
Qr = Hr % Q;

Dq = Math.floor(Qr/D); 
Dr = Qr % D;

Nq = Math.floor(Dr/N); 
Nr = Dr % N;

Pq = Math.floor(Nr/P); 

if (Hq> 0) obj.H = Hq;
if (Qq> 0) obj.Q = Qq;
if (Dq> 0) obj.D = Dq;
if (Nq> 0) obj.N = Nq;
if (Pq> 0) obj.P = Pq;

return obj;
}
