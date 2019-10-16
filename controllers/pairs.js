
const MongoClient = require("mongodb").MongoClient;
module.exports = function(io, socket )
{
    socket.on("message", message => {
    console.log("Message Received: " + message);
    io.emit("message", { type: "new-message", text: message });
  });
    // создаем объект MongoClient и передаем ему строку подключения
    /*const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
    mongoClient.connect(function(err, client){

        const db = client.db("pair_stat");
        const collection = db.collection("stat");
        let user = {name: "Tom", age: 23};
        collection.insertOne(user, function(err, result){

            if(err){
                return console.log(err);
            }
            console.log(result.ops);
            client.close();
        });
    });*/
}
