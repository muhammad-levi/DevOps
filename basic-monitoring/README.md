## Prerequisites

- [Docker](https://www.docker.com/) installed and Docker Engine is running
- External docker network "dockerized-nest", use this command:
  ```bash
  docker network create dockerized-nest
  ```

### Steps to setup basic monitoring for the NestJS application

1. Configure the NestJS application to have `/metrics` endpoint to be consumed by Prometheus, see [this](github.com/willsoto/nestjs-prometheus?tab=readme-ov-file#installation) for more details.
2. Configure the same network for container `prometheus` and `nest-server`
3. Configure `prometheus.yml` to include `nest-server` as one of the targets for metrics scraping.
4. Change directory to [`./prometheus-grafana`](./prometheus-grafana)
5. Run `docker compose up`

   Also, can use flag `-d` to make it a daemon / running in background.
6. Visit http://localhost:3000 to access Grafana (data visualization / dashboards)
7. Visit http://localhost:3001/metrics to get all the default metrics current values.

### References

- [Monitoring | Awesome NestJS](https://awesome-nestjs.com/components-and-libraries/monitoring.html)
