const { MongoClient } = require("mongodb");

 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://admin:51QoMBYhmqMWZAOqghay0HUIoUPINI@notespro-dev.jmww1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "notespro-dev";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "users"
         const col = db.collection("users");

         // Construct a document                                                                                                                                                              
         let userDocument = {
             "name": "Apurva Choudhary",
             "email": "apurvachoudhary@gmail.com"
            }

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(userDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);