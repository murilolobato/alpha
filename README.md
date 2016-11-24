alpha stack
===========

My hapi based stack.

## docker things
if you don't want to install mongo, node and npm on your computer I've just set up a `docker-compose.yml` to lift 2 containers. One mongo. Another node & npm.

```bash
docker-compose up -d
```

Now you have a container to run the node and npm binaries and another one with a mongodb instance. From now on, work with them as you were on your own computer.

```bash
# install dependencies
docker exec -it alpha_alpha_1 npm install

# run the app
docker exec -it alpha_alpha_1 npm start
```

And once you're done

```bash
# stop the composition of containers
docker-compose stop
```
