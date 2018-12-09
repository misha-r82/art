
function sendJson( endpoint, callback ) {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var response = JSON.parse( xhttp.responseText );
            
            if( response.result != 0 ) {
                console.log( 'ERROR: ' + response.message );
            } else {
                callback( response.data );
            }
        }
    };

    xhttp.open( 'GET', endpoint, true );
    xhttp.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded');
    xhttp.send();
}
function sendPost(path, data, callback)
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log( xhttp.responseText );
            callback( xhttp.responseText );
        }
    };

    xhttp.open( 'POST',path, true );
    xhttp.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
    xhttp.send(data);
}
function createModalWindow(content, hMargin)
{

    var firstElement = document.body.firstChild;
    var hideDiv = document.createElement('div');
    hideDiv.id = "hideDiv";

    var wndDiv = document.createElement('div');
    wndDiv.id = "modalWindow";
    wndDiv.innerHTML =content;
    if (typeof (width) != "number") wndDiv.style.width = document.body.clientWidth - hMargin * 2 + "px";
    else wndDiv.style.width = width + "px";
    hideDiv.appendChild(wndDiv);
    document.body.insertBefore(hideDiv, firstElement);
}
function destroyModalWindow()
{
    var div = document.getElementById("hideDiv");
    document.body.removeChild(div);
}

function JSONtoSTR(obj, parenttag)
{
    if (Array.isArray(obj))
    {
        var res = "";
        for (var i in obj)
            res += JSONtoSTR(obj[i]);
        return res;
    }
    if (!parenttag) parenttag = ""; //для повторяющихся тегов
    var str = "";
    for (var i in obj) { //перебираем все элементы в нашем объекте
        if (typeof (obj[i]) == "object") { //если текущий элемент объект (тег)
            var params = "";
            var tag = i;
            var innerHtml = ""
            for (var param in obj[i]) //собираем все параметры для тега
                if (typeof (obj[i][param]) != "object")
                {
                    if(param == "innerHtml") innerHtml = obj[i][param];
                    else params += " "+param+"='"+obj[i][param]+"'"; //если текущий элемент не объект, значит это параметр
                }
            if (isNaN(parseInt(i))) //если текущий элемент не число
                str += "<" + tag + params + ">";
            else { //если элемент числовой, значит имя текущего тега находится во 2 параметре нашей функции
                tag = parenttag; //берем предыдущий тег
                str += "<" + parenttag + params + ">";
            }
            str += JSONtoSTR(obj[i], tag); //вызываем еще раз нашу функцию для следующего объекта
            str += innerHtml + "</" + tag + ">";
        }
    }
    return str; //возвращаем готовую строку
}