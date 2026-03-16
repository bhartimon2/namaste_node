const { MongoClient } = require("mongodb");



const url =
"mongodb+srv://bhartimontu231_db_user:<password>@namastenode.zoojjo4.mongodb.net/?appName=NamasteNode";

const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
}

main().catch(console.error);
