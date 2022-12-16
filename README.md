# Ignite Lab Node.js

> Evento da Rocketseat. 2022.

Microsserviço especializado em notificações.

## Tecnologias 🔧

- [Nestjs](https://docs.nestjs.com/)
- [Prisma](https://www.prisma.io/docs)
- [Kafkajs](https://kafka.js.org/docs/getting-started)

## Getting Started 🚀

Instalação das dependências:

```sh
# Navegue até o diretório do projeto de notificações
$ cd notifications-service

# Instalar dependências
$ npm install
```

```sh
# Navegue até o diretório do producer
$ cd kafka-producer

# Instalar dependências
$ npm install
```

Para que o projeto funcione é necessário um servidor Kafka. Para esse projeto utilizo o [Upstash\*](https://upstash.com/) para subir o servidor.

> \*Upstash: possui um serviço gratuito limitado a criação de um cluster.

- Após configurar o servidor Kafka no console do upstash, adicionar as credênciais do servidor aos respectivos arquivos `.env` de **kafka-producer** e **notifications-service**.

---

## Aula 01 - Fundamentos do Nest.js & Prisma

### Microsserviços

- Serviços independentes e especializados.
- Um banco de dados para cada serviço.

### Nest.js

- Framework opinado.
- Integrações.
- TypeScript & Decorators.

**Conceitos:**

- Controlles: rotas da aplicação.
- Services: funcionalidades.
- Inversão de dependências: classe recebe suas depedências através do construtor. Quem instanciar a classe vai dizer quais suas dependências.
- Injeção: automatizar a inserção das dependências no momento que as classes são instanciadas.

## Aula 02 - Domínio, casos de uso e regras de negócio

**Conceitos:**

- Pensar nas entidades da aplicação como classes.
- Infra: tudo que é relacionado a coisas externas da aplicação. Camadas externas: bando de dados, conexão com outras API's, rotas http.
- Principio da responsabilidade única do SOLID.
- Repository pattern: intermedio entre aplicação e camada de persistência. Funcionalidades que fazem a comunicação entre banco de dados e aplicação.
  - Primeiro: interface com quais métodos deve ter.
  - Depois: implementações.
- Banco de dados em memory para os testes.

## Aula 03 - Infraestrutura e injeção de dependências

**Conceitos:**

- Factory pattern: reutilização de código

## After Ignite Lab - Encerramento

**Conceitos:**

- Adicionando Kafka ao projeto.
- O Apache Kafka é uma plataforma distribuída de transmissão de dados que é capaz de publicar, subscrever, armazenar e processar fluxos de registro em tempo real. Essa plataforma foi desenvolvida para processar fluxos de dados provenientes de diversas fontes e entregá-los a vários clientes.

---

#### Comandos:

- `npm i -g @nestjs/cli` Instalação do Nest
- `nest new project-name` Criar projeto
- `npm i class-validator class-transformer`
- `npx tsc --noEmit` Retorna os arquivos que estão com erros

#### Anotações:

- Error Prettier
  - Mudar o padrão de quebra de linha do vscode de `CRLF` para `LF`. Pode ser alterado na barra abaixo no vscode.
