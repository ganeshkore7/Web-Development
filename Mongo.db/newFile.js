// Insert a few documents into the sales collection.
db.getCollection('sigmacollection').insertMany(
  [
    {
      "_id": { "$oid": "67f3e82eea56c64561719dcc" },
      "name": "Javascript2"
    },
    {
      "_id": { "$oid": "67f3e82eea56c64561719dcd" },
      "name": "NodeJS Basics"
    },
    {
      "_id": { "$oid": "67f3e82eea56c64561719dce" },
      "name": "ReactJS Intro"
    },
    {
      "_id": { "$oid": "67f3e82eea56c64561719dcf" },
      "name": "MongoDB Guide"
    },
    {
      "_id": { "$oid": "67f3e82eea56c64561719dd0" },
      "name": "ExpressJS Essentials"
    }
  ]);
