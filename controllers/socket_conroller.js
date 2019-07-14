module.exports.onMessage = function (message, io)
{
    if (message["action"] == "logout")
    {
        io.request.logout();
        console.log("logout")
    }
}
