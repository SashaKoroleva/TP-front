let filmModel;
function setFilmScreen(index) {
    fetch('https://rental-video-api.herokuapp.com/api/films/'+index).then(function(response) {
        return response.json();
    }).then(function(data) {
        filmModel = data;
        updateFilmScreen();
    }).catch(function() {
        console.log("Booo");
    });
}
function updateFilmScreen(){
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let filmScreen = document.createElement("div");
    filmScreen.className = "film-screen";
    filmScreen.innerHTML = '<div class="title"><h1>'+filmModel.title+'</h1></div><div class="description"><p><span>Жанр: </span>'+filmModel.cathegory.nameOfCategory + '</p><p><span>Год выпуска: </span>'+filmModel.yearOfIssue+ '</p><p><span>Режиссер: </span>' +filmModel.producer+ '</p><p><span>Актеры: </span>'+filmModel.actors+'</p><p><span>Страна: </span>'+filmModel.country+'</p><p><span>Возраст: </span>'+filmModel.ageLimit+'+</p><p><span>Содержание: </span>'+filmModel.summory+'</p></div><div class="imgMovie"><img src="'+filmModel.imageUrl+'" alt="Обложка фильма"></div>';
    content.appendChild(filmScreen);
}
