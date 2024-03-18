#!/bin/bash

echo "# Devos-SEM-Net
Middleware connecting to simulated semantic web data crawler.

| Environment      | Version          |
| ---------------- | ---------------- |
| Operating System | $(uname -s) $(uname -r) |
| Server | Node $(node -v) |

| Dependencies      | Version          |
| ---------------- | ---------------- |
| Dotenv | $(cat ./package.json | grep "dotenv" | awk '{print $2}' ) |
| Express | $(cat ./package.json | grep "express" | awk '{print $2}' ) |
| Mongoose | $(cat ./package.json | grep "mongoose" | awk '{print $2}' ) |
| Nodemon | $(cat ./package.json | grep "\"nodemon\"" | awk '{print $2}' ) |

## Installation

Refer to \`__install.sh\`. \`Package.json\` includes all relevant sources.

Setup the Port for the Server in \`.env\`.

Current implementation requires a running MongoDB-Server, which is accessed via Driver.
Setup the link to MongoDB within \`.env\`.

Feeding the Database with test-data can be done via script or manually.

The Datamodel currently has the following mongoose schema:

\`\`\`json
$(sed -e '1,2d' -e '$d' ./models/addressModel.js)
\`\`\`

## Execution

Start the server using \`npm run start\` or \`npm run start-nodemon\`.

Explore the server via Browser or Postman requests.

#### Routes

Current routes are setup over \`/api/addresses/\` and \`/api/addresses/:id\`, where \`:id\` is a variable address.

" > README.md
