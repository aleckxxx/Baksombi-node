# Baksombi node.js API

## Getting started

Install dependencies :
```bash
$ yarn install
```

Edit `docker-compose.yml` file to your likings :
```yml
version: '3'
  
services:
  mongodb:
    image: mongo:latest
    ports:
      - '27017:27017'
    volumes:
      - dbdata:/data/db

volumes:
  dbdata:
```

**Important !!! :** The mongodb service name must refers to the `MONGODB_URL` in the `.env`
 file.

Start the database :

```bash
$ sudo docker compose up -d
```

Start the Node server in development mode :

```bash
$ yarn dev
```

## Feature roadmap

 - [x] Auth routes :
	 - [x] `/v1/auth/register`
	 - [x] `/v1/auth/login`
	 - [x] `/v1/auth/logout`
	 - [x] `/v1/auth/refresh-tokens`
 - [] ....