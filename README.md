# Zendesk Ticket Manager

A tool to get an overview of and manage next actions of Zendesk tickets assigned to you.

## How it works

The server pulls tickets assigned to you by calling the Zendesk API. You can keep notes for each ticket via the UI. These notes are saved locally in a JSON file.

## Setting up

First create an API token in Zendesk for yourself.
Copy `.env.example` to `.env` and update necessary configs.

* `DATA_DIR` - directory name for saving data file
* `ZD_TENANT` - your Zendesk tenant name (your ZD URL should be `ZD_TENANT.zendesk.com`)
* `ZD_USER_ID` - your Zendesk user ID
* `ZD_USERNAME` - username for Zendesk API
* `ZD_PASSWORD` - password for Zendesk API

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
