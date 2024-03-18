# Devos-SEM-Net
Middleware connecting to simulated semantic web data crawler.

| Environment      | Version          |
| ---------------- | ---------------- |
| Operating System | Linux 6.5.0-25-generic |
| Server | Node v18.17.1 |

| Dependencies      | Version          |
| ---------------- | ---------------- |
| Dotenv | "^16.4.5", |
| Express | "^4.18.3", |
| Mongoose | "^8.2.2", |
| Nodemon | "^3.1.0" |

## Installation

Refer to `__install.sh`. `Package.json` includes all relevant sources.

Setup the Port for the Server in `.env`.

Current implementation requires a running MongoDB-Server, which is accessed via Driver.
Setup the link to MongoDB within `.env`.

Feeding the Database with test-data can be done via script or manually.

The Datamodel currently has the following mongoose schema:

```json

const addressSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        required: true
    },
}, { timestamps: true })
```





## Execution

Start the server using `npm run start` or `npm run start-nodemon`.

Explore the server via Browser or Postman requests.

#### Routes

Current routes are setup over `/api/addresses/` and `/api/addresses/:id`, where `:id` is a variable address.


