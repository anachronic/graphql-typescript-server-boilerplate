# GraphQL typescript server boilerplate

This repository contains boilerplate for a typescript server that has:

- [Typescript](https://www.typescriptlang.org/)
- GraphQL through [Type-GraphQL](https://github.com/MichalLytek/type-graphql)
- ORM through [TypeORM](https://typeorm.io/)
- Server with [Express](https://expressjs.com/)
- [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/)

And other few testing and development goodies

## Setup

We're gonna use yarn as our package manager but you can use npm if you want.
Default configuration variables will can be found in
[.default.env](./.default.env). It's not advised to modify this file as it's
just a reference. Instead, create a `.development.env` file in the root and
replace the values you need. The server will pick them up automagically. This
file is in `.gitignore` so it won't be pushed anywhere. If you need to
provide a production file, the server will also read from `.prod.env`, taking
precedence over anything. You can read about dotenv
[here](https://github.com/motdotla/dotenv).

Then, install and run the dev server:

```
$ yarn install
$ yarn start
```

## Building
