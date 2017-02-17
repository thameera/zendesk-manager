# Zendesk Ticket Manager

## Setting up

Copy `.env.example` to `.env` and update necessary configs.

## Running locally

```
yarn && cd client && yarn && cd ..
npm start
```

## Changing port

By default the app runs at port 3000. If you want to change this to, say, 3030, create a file called `.env` at `client/` directory and add the following:

```
PORT=3030
```