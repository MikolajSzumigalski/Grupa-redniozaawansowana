function performGetRequest1() {
    var resultElement = document.getElementById('chuckGET');
    resultElement.innerHTML = '';
    axios.get('https://api.chucknorris.io/jokes/categories')
        .then(function (response2) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response2);
        })
        .catch(function (error2) {
            resultElement.innerHTML = generateErrorHTMLOutput(error2);
        });

    axios.get('https://api.chucknorris.io/jokes/categories')
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

function generateSuccessHTMLOutput(response, response2) {
    return '<p>' + JSON.stringify(response.data.value, null, '\t') + '</p>' +
        '<p>' + JSON.stringify(response2.data.value, null, '\t') + '</p>' ;
}

function generateErrorHTMLOutput(error) {
    return '<h4>Result:</h4>' +
        '<h5>Message:</h5>' +
        '<pre>' + error.message + '</pre>' +
        '<h5>Status:</h5>' +
        '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
        '<h5>Headers:</h5>' +
        '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
        '<h5>Data:</h5>' +
        '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
}


function performGetRequest2() {
    var resultElement = document.getElementById('getResult2');
    var todoId = document.getElementById('todoId').value;
    resultElement.innerHTML = '';

    axios.get('http://jsonplaceholder.typicode.com/todos', {
            params: {
                id: todoId
            }
        })
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

function clearOutput() {
    var resultElement = document.getElementById('chuckGET');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('getResult2');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('postResult');
    resultElement.innerHTML = '';
}
