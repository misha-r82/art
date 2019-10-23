
var tasks = require("./PairsController.js");
module.exports = function(io, socket )
{
    socket.on("message", message => {
        var data = JSON.parse(message);
        if(data["type"])
        {
            switch (data.type) {
                case "getTask":
                    var t = tasks.getTask()
                    io.emit("message", { type: "newTask", t });
                    break;
                case "saveResult": break;

            }
        }
    console.log("Message Received: " + message);

  });

}
