import {PhpBase} from 'php-wasm/PhpBase.mjs';
import {sendMessageFor, onMessage} from 'php-cgi-wasm/msg-bus.mjs';

console.log(PhpBase);
console.log(sendMessageFor);
console.log(onMessage);
