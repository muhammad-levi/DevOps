## Prerequisites

- [Docker](https://www.docker.com/) installed
- [Node](https://nodejs.org/en/download) v20.13.1 installed
  - Preferably installed via [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm)
- Git submodule [`/dockerize-nest/nest`](./nest) initiated

### Steps taken for containerizing NestJS application

- Execute `docker init` in the root folder of the project [`./nest`](./nest)
- Input the desired configs whenever prompted (interactive)
- [Optional] Refactor/move the generated files to another directory, do not forget to change the relative paths written in each generated files according to the directory where the files have been moved to.

Example:

![`docker init` processes](assets/docker-init.png)
