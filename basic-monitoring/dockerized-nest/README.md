## Prerequisites

- [Docker](https://www.docker.com/) installed and Docker Engine is running
- [Node](https://nodejs.org/en/download) v20.13.1 installed
  - Preferably installed via [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm)
- A new external docker network, use this command:
  ```bash
  docker network create dockerized-nest
  ```

### Build the Docker image and run it locally

- Change directory to [`/dockerized-nest`](/basic-monitoring/dockerized-nest)
- Execute this command:
  ```bash
  docker compose up
  ```
  Also, can use flag `-d` to make it a daemon / running in background.
- The application is running on: http://[::1]:3001 or http://localhost:3001
- To stop it, use this command:
  ```bash
  docker compose down
  ```
