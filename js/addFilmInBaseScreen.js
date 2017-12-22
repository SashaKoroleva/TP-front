function setAddMovieinBaseScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let addMovieinBaseScreen = document.createElement("div");
    addMovieinBaseScreen.className = "add-movie-in-base-screen";
    addMovieinBaseScreen.innerHTML = '<form> <label for="titleFilm"> Название фильма: <input type="text" name="titleFilm" value="" id="titleFilm"> </label> <label for="typeOfMedium"> Тип носителя: <input type="text" name="typeOfMedium" value="" id="typeOfMedium"> </label> <input type="submit" name="" value="add" onclick="addMedium()"></form>';
    content.appendChild(addMovieinBaseScreen);
}
function checkExistFilm(str){
    let flag = false;
    for (let i = 0; i < arrOfFilms.length; i++) {
        if(arrOfFilms[i].title == str){
            flag = true;
            break;
        }
    }
    return flag;
}
function findFilm(str){
    let index;
    for (let i = 0; i < arrOfFilms.length; i++) {
        if(arrOfFilms[i].title == str){
            index = i;
            break;
        }
    }
    return arrOfFilms[index];
}
function addMedium() {
    let titleFilm= document.getElementById("titleFilm").value;
    let typeOfMedium = document.getElementById("typeOfMedium").value;

    if(!checkExistFilm(titleFilm)){
        alert('Добавть, пожалйста, сначала фильм');
    } else {
        let film = findFilm(titleFilm);

        let event = {
        "film": film,
        "typeOfMedium": typeOfMedium,
        "access": true
    };
    let body = JSON.stringify(event);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://rental-video-api.herokuapp.com/api/mediums', true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(body);

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        alert('Готово!');
        setBaseScreen();
        film.copiesIds.push(arrOfMediums[arrOfMediums.length-1].id)
        event = Object.assign({}, film);
        body = JSON.stringify(event);
        xhr.open("PUT", 'https://rental-video-api.herokuapp.com/api/films/' + film.id, true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(body);

        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;
            updateBaseScreen();
        }
    }

    alert('Секунду...');

}
}
