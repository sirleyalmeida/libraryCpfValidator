# libraryCpfValidator
Esta biblioteca destina-se à validação de números de CPF.

## Como instalar:

```
$  npm install librarycpfvalidator
```

## Como utilizar:

```javascript
const cpfValidator = require('librarycpfvalidator');
cpfValidator('12345678909');
// returns 'true'

const cpfValidator = require('librarycpfvalidator');
cpfValidator('11111111111');
// returns 'false'
```

## roadmap oficial do projeto*

### Versão 3.0.0

* README translated to english.

### Versão 2.0.0

* Correção de bugs.

### Versão 1.0.0

* Funcionalidades: validação de cpf;
* Entrada de string e números.