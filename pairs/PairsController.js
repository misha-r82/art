module.exports function getTask()
{
    return {
        pairs : [
        {key1:"pair1"},
        {key2:"pair2"}
        ],
        period : "1000",
        showTime : "0.7"
    }
}
function saveResult(result) {
}
const MongoClient = require("mongodb").MongoClient;
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
return this;
}
