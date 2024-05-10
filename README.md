# Log Data Collector and Search Portal

This project is a Log Data Collector and Search Portal built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to efficiently collect, store, and search log data, offering a simple interface for retrieval and querying.

## Features

  - User-friendly interface for full-text search across logs.
  - Filters based on various log attributes such as level, message, resourceId, timestamp, etc.
  - Efficient search results retrieval.

## Requirements

- Node.js and npm installed locally.
- MongoDB Atlas account for database hosting.
- Internet connection for HTTP log ingestion.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ashu-14-oct/Log-Data-Collector-and-Search-Portal.git

2. Install dependencies:
   ```bash
   cd Log-Data-Collector-and-Search-Portal
   npm install
   
## Set up MongoDB Atlas:

- Create a cluster and database in MongoDB Atlas.
- Update the MongoDB connection URI in the env file.

1. Start the server:
   ```bash
   npm start

2. Start the react app:
   ```bash
   npm run dev

## Log ingest
   
   - Open Postman, set the method to POST and set the url as 'http://localhost:3000/log'
   - Go in to body and provide data in required format(in JSON).
   - Example --> {
      "level": "error",
      "message": "Failed to connect to DB",
      "resourceId": "server-1234",
      "timestamp": "2023-09-15T08:00:00Z",
      "traceId": "abc-xyz-123",
      "spanId": "span-456",
      "commit": "5e5342f",
      "metadata": {
          "parentResourceId": "server-0987"
        }
    }

## Launch the client
  - Open the client.
  - Set the filter.
  - Search the text according to the filter.
  - example--> filter: message, text: "Failed to connect to DB".


    
