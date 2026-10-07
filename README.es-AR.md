<p align="right">
  <a href="README.md"><img src="assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="README.en-US.md"><img src="assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="README.es-AR.md"><img src="assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# erp-contratos

![erp-contratos](assets/support/project-es-ar.svg)

[![MIT](https://img.shields.io/github/license/Rdraim/erp-contratos?style=flat)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/Rdraim/erp-contratos/ci.yml?branch=main&label=CI&style=flat)](https://github.com/Rdraim/erp-contratos/actions) [![Release](https://img.shields.io/github/v/release/Rdraim/erp-contratos?style=flat)](https://github.com/Rdraim/erp-contratos/releases) [![Git](https://img.shields.io/github/last-commit/Rdraim/erp-contratos?label=Git&style=flat)](https://github.com/Rdraim/erp-contratos/commits/main) [![Stars](https://img.shields.io/github/stars/Rdraim/erp-contratos?style=social)](https://github.com/Rdraim/erp-contratos/stargazers) [![Forks](https://img.shields.io/github/forks/Rdraim/erp-contratos?style=social)](https://github.com/Rdraim/erp-contratos/forks)

<p>
  <a href="https://github.com/Rdraim/erp-contratos/tree/main/examples"><img src="assets/support/action-0-es-ar.svg" height="40" width="200" alt="Ver ejemplos"></a>
  <a href="https://github.dev/Rdraim/erp-contratos"><img src="assets/support/action-1-es-ar.svg" height="40" width="200" alt="Editar en GitHub"></a>
  <a href="https://github.com/Rdraim/erp-contratos/archive/refs/heads/main.zip"><img src="assets/support/action-2-es-ar.svg" height="40" width="200" alt="Descargar código"></a>
</p>


Separá contratos de integración del transporte y evitá operaciones concurrentes repetidas.

## Instalación

```bash
git clone https://github.com/Rdraim/erp-contratos.git
cd erp-contratos
npm test
node examples/basic.mjs
```

## Ejemplo ejecutable

```js
import {criarExecutor, validarEnvelope} from './src/index.js';
console.log(await criarExecutor({executar:async e=>({recebido:e.id})})({versao:1,id:'exemplo-1',tipo:'cadastro',dados:{codigo:'A'}}));
```

## API

`validarEnvelope({versao:1,id,tipo,dados})` valida y copia el sobre. `criarExecutor({executar, capacidade:1000})` devuelve una función asíncrona que reutiliza resultados para el mismo id/contenido y rechaza conflictos. Los intentos fallidos se pueden repetir.

## Límites

Deduplicación en memoria de un proceso; no garantiza exactly-once ni transacciones distribuidas. Sin endpoints o credenciales de proveedores. Producción requiere persistencia durable e idempotencia en el destino. El límite rechaza operaciones nuevas sin olvidar silenciosamente las anteriores.

## Compatibilidad

Núcleo sin dependencias de ejecución. CI con Node.js 22 y 24. Instalación desde Git; este proyecto no está publicado en npm. Revisá Releases y fijá una tag/commit al integrar. Actualizaciones requieren revisar licencia, engines y pruebas del consumidor. Un badge de CI no certifica seguridad.

[Compatibilidad](COMPATIBILITY.es-AR.md) · [Contribuciones](CONTRIBUTING.es-AR.md) · [Seguridad](SECURITY.es-AR.md)

MIT © Rodrigo Rodrigues

## ☕ Invitame un café

¿Este proyecto te ayudó a resolver un problema, aprender algo nuevo o dar tus primeros pasos en desarrollo? Si querés apoyar mi trabajo, un café es una linda forma de agradecer.

Soy **Rodrigo Rodrigues**, creador de **Nexus** y de estos proyectos de código abierto. Tu aporte me ayuda a dedicar tiempo a mejorar el código, escribir ejemplos más claros y seguir compartiendo lo que aprendo.

**Aportá el monto que tenga sentido para vos. El apoyo es totalmente voluntario; el proyecto sigue siendo gratuito bajo la licencia MIT.**

[Apoyá con Pix](#apoyá-con-pix) · [Dejá un comentario](https://github.com/techrodrigo21-ux/erp-contratos/issues/new?title=Comentario%3A%20este%20proyecto%20me%20ayud%C3%B3)

### Apoyá con Pix

En la app de tu banco, escaneá el QR o copiá la clave Pix de abajo. Elegí el monto y revisá los datos del destinatario antes de confirmar.

<p align="center">
  <img src="assets/support/pix-qr.png" width="260" alt="QR Pix original proporcionado por Rodrigo Rodrigues; también podés usar la clave de texto de abajo.">
</p>

**Clave Pix**

```text
8875a24e-44d1-4c91-b6bb-62c9f0070955
```

Pix es el sistema de pagos de Brasil. Si tu banco no lo admite, también podés ayudar compartiendo el proyecto, reportando un problema, mejorando la documentación o dejando un comentario.

### Tu comentario también suma

[Contame cómo te ayudó el proyecto](https://github.com/techrodrigo21-ux/erp-contratos/issues/new?title=Comentario%3A%20este%20proyecto%20me%20ayud%C3%B3). Me gustaría saber qué creaste, qué aprendiste y qué podría ser más claro para quienes recién empiezan.

Los comentarios son bienvenidos con o sin donación. Cuidá tu privacidad: no publiques comprobantes de pago, datos personales, credenciales ni información privada de usuarios en las Issues.

**Gracias por apoyar mi trabajo y ayudarme a seguir creando y compartiendo. ❤️**
