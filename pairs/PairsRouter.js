
var tasks = require("./PairsController.js");
module.exports. = function(io, socket )
{
    socket.on("message", message => {
        var data = JSON.parse(message);
        if(data["type"])
        {
            switch (data.type) {
                case "getTask":

                    io.emit("message", { type: "newTask", tasks.getTask() });
                    break;
                case "saveResult": break;

            }
        }
    console.log("Message Received: " + message);

  });
return this;
}
