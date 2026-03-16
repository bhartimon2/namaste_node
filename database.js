const { MongoClient } = require("mongodb");
// import { MongoClient } from "mongodb";



const url =
"mongodb+srv://bhartimontu231_db_user:nykqiGtvJPVhMzNb@namastenode.zoojjo4.mongodb.net/?appName=NamasteNode";

const client = new MongoClient(url);

const dbName = "Hello_world"

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");


//Read

const findResults = await collection.find({}).toArray();
console.log("Found document =====>",findResults)


//insert


const User = [{
  fname: "himi",
  lname: "bharti",
  age: 5
},
{
  fname: "kuku",
  lname: "bharti",
  age: 5
},
{
  fname: "kukuhimi",
  lname: "bharti",
  age: 5
}
]

const insertData = await collection.insertMany([{User}]);

console.log("inserted data successfully===>",insertData)

  return "done.";
}



main()
.then(console.log)
.catch(console.error)
.finally(()=> client.close());