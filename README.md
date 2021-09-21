# Imperial Library of Doom

This projects aims to provide an online Library API & Frontend for work teams
and students to use! That API will be capable of organizing and managing all
kinds of books! The Frontend will provide a user friendly way to interact with
the API and read or download the books from the server!  

## Setup
In order to set up this project the following steps must be performed in order:
```shell
# Install/Update PNPM globally
npm i -g pnpm

# Install project-wide  Development Dependencies
pnpm i
```
### Setup Environment
Now the environment has to be properly setup, create the environment files you need
inside the project root (`ilod/`). The environment files adhere the following pattern:
`.env.[environment]`. The default value for the environment, if none has been specified
is 'develop'.

If you simply want to test the application, then you should go with `.env.develop` and
proceed with the setup. If you want to setup a multi-environment setup then you need to
create the environments you need and set the environment variable `ENVIRONMENT` to the
proper value (default: `develop`).  
Following environment variables have to be set up in all created environment files:
- *(none so far, this list will be filled as the project goes on)*

After the Environment Setup, all that's left are the specific application setups:
- [API Setup](./ilod-api/README.md#Setup)

## Afterword

Since there's not much, but a vision of the project at the moment this README
is pretty empty, but it's going to fill up over time introducing this project
and its state in a detailed and precise manner.