let arrOfFilms = [];
let arrOfCategories = [];

function setMoviesScreen() {
    fetch('https://rental-video-api.herokuapp.com/api/films').then(function(response) {
        return response.json();
    }).then(function(data) {
        for (let i = 0; i < data.length; i++) {
            arrOfFilms[i] = data[i];
        }
    }).catch(function() {
        console.log("Booo");
    });
    fetch('https://rental-video-api.herokuapp.com/api/categories').then(function(response) {
        return response.json();
    }).then(function(data) {
        for (let i = 0; i < data.length; i++) {
            arrOfCategories[i] = data[i];
        }
        updateMoviesScreen();

    }).catch(function() {
        console.log("Booo");
    });
}

function updateMoviesScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);

    let movieScreen = document.createElement("div");
    movieScreen.className = "movie-screen";

    let categories = sortFilmsByCategories();

    let str = '<ul class="collapsibleList" id="newList">';

    for (let i = 0; i < categories.length; i++) {
        str += '<li>' + categories[i].name + '<ul>';
        for (let j = 0; j < categories[i].films.length; j++) {
            str += '<li><a href="#" id="film-1" onclick=actionBtnFilm(' + categories[i].films[j].id + ')>' + categories[i].films[j].title + '</a></li>';
        }
        str += '</ul></li>'
    }
    str += '</ul><div class="add-category"><form><input type="text" placeholder=" Имя новой категории" name="category" id="newCategory" required><input type="submit" name="plus" value=">" onclick="addCategory()"></form>';
    movieScreen.innerHTML = str;

    content.appendChild(movieScreen);
    CollapsibleLists.applyTo(document.getElementById('newList'));
}

function getExistingCategories() {
    let categories = [];
    for (let i = 0; i < arrOfCategories.length; i++) {
        categories.push({
            name: arrOfCategories[i].nameOfCategory,
            films: []
        });
    }
    return categories;

}

function sortFilmsByCategories() {
    let categories = getExistingCategories();
    for (let i = 0; i < arrOfFilms.length; i++) {
        for (let j = 0; j < categories.length; j++) {
            if (categories[j].name == arrOfFilms[i].cathegory.nameOfCategory) {
                categories[j].films.push(arrOfFilms[i]);
            }
        }
    }
    return categories;
}

function checkRepetitionCategory(str) {
    let flag = false;
    for (let i = 0; i < arrOfCategories.length; i++) {
        if (arrOfCategories[i].nameOfCategory == str) {
            flag = true;
        }
    }
    return flag;
}

function addCategory() {
    let nameOfCategory = document.getElementById("newCategory").value;

    if (checkRepetitionCategory(nameOfCategory)) {
        alert(' Уже существует!');
    } else {

        let categoryCode = nameOfCategory.substr(0, 3);

        let event = {
            "nameOfCategory": nameOfCategory,
            "categoryCode": categoryCode,
        };
        let body = JSON.stringify(event);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://rental-video-api.herokuapp.com/api/categories', true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(body);

        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;


            alert('Готово!');
            setMoviesScreen();

        }

        alert('Секунду...');
    }
}
