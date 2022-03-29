<!-- @format -->

# Overview

Your task is to implement a Web API that stores candidates and finds the best person for a job. To do this, you need to create 2 routes:

1. PUT /candidates – adds a candidate to the in-memory database
2. GET /candidates/search?skills=skill1,skill2 - returns a list of candidates which best match the skills

# 1. PUT /candidate

The request body will contain the following fields:

```json
{
  "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
  "name": "Jimmy Coder",
  "skills": ["javascript", "es6", "nodejs", "express"]
}
```

In the example above, the candidate has four skills. The Content-Type header will be set to application/json in every such PUT request.

The server should respond with a success code in the 200–299 range (for example, "200 OK" is fine). The response body is disregarded by the client and can be empty.

If the request is invalid (has no body) then status code 400 (Bad Request) must be returned.

More Notes:

- Added candidates should be kept in memory; no database/storage back-end is available.
- Each candidate has a unique id – the server will never receive two PUTs with the same id
- id is any string
- name is any string
- skills is an array of strings; elements in the array are not duplicated (there is no [ "skill1", "skill2", "skill1" ]).

# 2. GET /candidates/search?skills=skill1,skill2 (Match all skills)

First, implement the GET method to find an exact match for the skills provided. The route should return candidates that have at least all the skills requested. Order does not matter, and a 404 should be returned for no match.

If the request is invalid (no ?skills=...) then status code 400 (Bad Request) must be returned.

More Notes:

- skills is an array of strings; elements in the query string are not duplicated (there is no [ "skill1", "skill2", "skill1" ]).

# 3. GET /candidates/search?skills=skill1,skill2 (Closest Match)

Find and return the candidate that has the **most** skills from the given list. In this example, we request three skills. If a candidate possesses all of the listed skills (3 out of 3), or has more than the other candidates, then they are considered the best and should be returned. The response should have Content-Type set to application/json and the response body should be of the same shape as the request body for PUT /candidates, that is:
Let's say we have the following candidates:

```json
{
  "id": "11",
  "name": "John Coder",
  "skills": ["javascript", "es6", "nodejs", "express"]
},
{
  "id": "12",
  "name": "Lily Coder",
  "skills": ["javascript", "es6", "react", "jest"]
},
{
  "id": "13",
  "name": "Dametrius Coder",
  "skills": ["javascript", "es6", "nodejs"]
},
```

- A request for javascript, es6 and express should only return John.
- A request for javascript, es6, and nodejs should return John and Dametrius.
- A request for javascript, python, and react should return Lily.
- A request for javascript should return everyone.

The HTTP response code must be 200 if a candidate is found with at least one matching skill, or 404 if no suitable candidates exist.
