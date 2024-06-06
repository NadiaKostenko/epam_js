var names = ['John', 'Jane', 'Mike', 'Anna'];
var namesList = document.getElementById('namesToOutput');

names.forEach(function (name) {
    var li = document.createElement('li');

    li.textContent = name;

    li.addEventListener('click', function () {
        alert('Hello, ' + name);
    });
    
    namesList.appendChild(li);
});