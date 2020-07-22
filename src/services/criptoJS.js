// import md5 from 'crypto-js';
import { md5 } from 'crypto-js/md5';

const hashMail = (email) => md5(email).toString().toLowerCase().trim();

console.log(hashMail('ahuashdi'));
