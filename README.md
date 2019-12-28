[![Build Status](https://travis-ci.org//isagiongo/api-itens-node.svg?branch=master)](https://travis-ci.org//isagiongo/api-itens-node)
[![Code Climate](https://codeclimate.com/github//isagiongo/api-itens-node/badges/gpa.svg)](https://codeclimate.com/github//isagiongo/api-itens-node)
[![Test Coverage](https://codeclimate.com/github//isagiongo/api-itens-node/badges/coverage.svg)](https://codeclimate.com/repos/5e075c47919541014d002f9a/settings/test_reporter)
[![Issue Count](https://codeclimate.com/github//isagiongo/api-itens-node/badges/issue_count.svg)](https://codeclimate.com/github//isagiongo/api-itens-node/issues)

API Rest com Node.js, Express e Mongo DB

  ## API Routes ##

### Items ###
|   Action                                  | Required          | Method    | URL
| ------------------------------------------|-------------------|-----------|-----------------------------------------------------
|   List all items                        |                   |  `GET`   | /api/item
|   Search for a item with a specific ID  |                   |  `GET`    | /api/item/:id
|   Search for a item with a specifit NAME |                  |  `GET`    | /api/item/:name
|   Create a new item                     |                   |  `POST`   | /api/item
|   Update the item with ID               |                   |  `PUT`   | /api/item/:id
|   Remove item with ID                   |                   |  `DELETE`   | /api/item/:id
