<p align="right">
  <a href="README.md"><img src="assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="README.en-US.md"><img src="assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="README.es-AR.md"><img src="assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# erp-contratos

![erp-contratos](assets/support/project-pt-br.svg)

<!-- public-badges:start -->
[![license](assets/support/badge-license.svg)](LICENSE) [![CI](assets/support/badge-ci.svg)](https://github.com/Rdraim/erp-contratos/actions) [![release](assets/support/badge-release.svg)](https://github.com/Rdraim/erp-contratos/releases) [![Git](assets/support/badge-git.svg)](https://github.com/Rdraim/erp-contratos/commits/main)
<!-- public-badges:end -->

<p>
  <a href="https://github.com/Rdraim/erp-contratos/tree/main/examples"><img src="assets/support/action-0-pt-br.svg" height="40" width="200" alt="Ver exemplos"></a>
  <a href="https://github.dev/Rdraim/erp-contratos"><img src="assets/support/action-1-pt-br.svg" height="40" width="200" alt="Editar no GitHub"></a>
  <a href="https://github.com/Rdraim/erp-contratos/archive/refs/heads/main.zip"><img src="assets/support/action-2-pt-br.svg" height="40" width="200" alt="Baixar código"></a>
</p>


Separe contratos de integração do transporte e evite repetir uma operação concorrente.

## Instalação

```bash
git clone https://github.com/Rdraim/erp-contratos.git
cd erp-contratos
npm test
node examples/basic.mjs
```

## Exemplo executável

```js
import {criarExecutor, validarEnvelope} from './src/index.js';
console.log(await criarExecutor({executar:async e=>({recebido:e.id})})({versao:1,id:'exemplo-1',tipo:'cadastro',dados:{codigo:'A'}}));
```

## API

`validarEnvelope({versao:1,id,tipo,dados})` valida e copia o envelope. `criarExecutor({executar, capacidade:1000})` retorna uma função assíncrona que reutiliza o resultado para o mesmo id/conteúdo e rejeita conflitos. Falha permite nova tentativa.

## Limites

Deduplicação em memória de um processo; não é exactly-once nem transação distribuída. Sem endpoint ou credencial de fornecedor. Produção exige armazenamento durável e idempotência também no destinatário. Ao atingir capacidade, rejeita novas operações sem esquecer silenciosamente as anteriores.

## Compatibilidade

Núcleo sem dependências de runtime. Node.js 22 e 24 na CI. Instalação pelo Git; não há pacote deste projeto publicado no npm. Consulte Releases e fixe uma tag/commit ao integrar. Atualizações de dependências exigem análise de licença, engines e testes do consumidor. Um badge de CI não certifica segurança.

[Compatibilidade](COMPATIBILITY.md) · [Contribuição](CONTRIBUTING.md) · [Segurança](SECURITY.md)

MIT © Rodrigo Rodrigues

## ☕ Me pague um café

Este projeto te ajudou a resolver um problema, aprender algo novo ou dar os primeiros passos no desenvolvimento? Se você sentir vontade de apoiar meu trabalho, um café é uma forma carinhosa de agradecer.

Sou **Rodrigo Rodrigues**, criador do **Nexus** e destes projetos de código aberto. Seu apoio me ajuda a dedicar tempo para melhorar o código, escrever exemplos mais claros e continuar compartilhando o que aprendo.

**Contribua com o valor que fizer sentido para você. O apoio é totalmente voluntário — o projeto continua gratuito sob a licença MIT.**

<p>
  <a href="#apoie-com-pix"><img src="assets/support/pix-pt-br.svg" width="190" height="44" alt="Apoiar com Pix"></a>
  <a href="https://github.com/techrodrigo21-ux/erp-contratos/issues/new?title=Coment%C3%A1rio%3A%20este%20projeto%20me%20ajudou"><img src="assets/support/comment-pt-br.svg" width="210" height="44" alt="Deixar um comentário"></a>
</p>

### Apoie com Pix

No aplicativo do seu banco, escaneie o QR Code ou copie a chave Pix abaixo. Escolha o valor e confira os dados do destinatário antes de confirmar.

<p align="center">
  <img src="assets/support/pix-qr.png" width="260" alt="QR Code Pix original fornecido por Rodrigo Rodrigues; a chave em texto abaixo é uma alternativa.">
</p>

**Chave Pix**

```text
8875a24e-44d1-4c91-b6bb-62c9f0070955
```

Você também pode apoiar compartilhando o projeto, relatando um problema, melhorando a documentação ou deixando um comentário.

### Seu comentário também faz diferença

[Conte como o projeto te ajudou](https://github.com/techrodrigo21-ux/erp-contratos/issues/new?title=Coment%C3%A1rio%3A%20este%20projeto%20me%20ajudou). Vou gostar de saber o que você criou, o que aprendeu e o que poderia ficar mais claro para quem está começando.

O comentário é bem-vindo com ou sem doação. Preserve sua privacidade: não publique comprovantes, dados pessoais, credenciais ou informações de usuários nas Issues.

---

**Obrigado por apoiar meu trabalho e me ajudar a continuar criando e compartilhando. ❤️**
