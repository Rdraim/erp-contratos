import {criarExecutor, validarEnvelope} from '../src/index.js';
console.log(await criarExecutor({executar:async e=>({recebido:e.id})})({versao:1,id:'exemplo-1',tipo:'cadastro',dados:{codigo:'A'}}));
