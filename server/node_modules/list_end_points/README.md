# listEndPoints

A simple utility to list all registered endpoints in an Express.js application, including their HTTP methods, middleware names, and paths.

## Installation

```bash
npm install list_end_points

```

## Usage

```ts
// in typescript
import express, { Application } from "express";
import listEndpoints from "list_end_points";

const app: Application = express();

// Define your routes and middleware here
// ...

// Display registered endpoints in the console
listEndpoints(app);
```

```js
// in javascript
const express = require("express");
const listEndpoints = require("list_end_points");

const app = express();

// Define your routes and middleware here
// ...

// Display registered endpoints in the console
listEndpoints.default(app);
```

This will output the registered endpoints in the following format:

```js
1 GET /api/users
2 POST /api/users
3 PUT /api/users/:id
4 DELETE /api/users/:id
4 endpoints registered
```

## API

### listEndpoints(app: Express.Application): Endpoint[]

- `app`: An instance of an Express.js application.
  Returns an array of Endpoint objects, where each `Endpoint` has the following properties:
  - methods: An array of strings representing the HTTP methods associated with the endpoint.
  - middlewares: An array of strings representing the names of the middleware functions associated with the endpoint.
  - path: A string representing the endpoint's path.

## License

ISC
