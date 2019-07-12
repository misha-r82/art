module.exports.onMessage = function (message, io)
{
    if (message["action"] == "logout")
    {
        console.log("logout")
    }
}
