let arrOfGiveFilms = [];

function setGiveFilmScreen() {
    fetch('https://rental-video-api.herokuapp.com/api/mediums').then(function(response) {
        return response.json();
    }).then(function(data) {
        for (let i = 0; i < data.length; i++) {
            arrOfGiveFilms[i] = data[i];
        }
        updateGiveFilmScreen();

    }).catch(function() {
        console.log("Booo");
    });
}

function updateGiveFilmScreen() {
    let content = document.getElementById("popup");
    content.removeChild(content.lastChild);
    let giveFilmScreen = document.createElement("div");
    giveFilmScreen.className = "select-movie";

    let str = '';

    for (let i = 0; i < arrOfGiveFilms.length; i++) {
        if (arrOfGiveFilms[i].access) {
            str += '<a href="#" onclick="selectFilm(' + arrOfGiveFilms[i].id + ')"><div class="film-item"><img src="'+
            arrOfGiveFilms[i].film.imageUrl+'" alt="Обложка фильма"></div></a>';
        }
    }
    giveFilmScreen.innerHTML = str;
    content.appendChild(giveFilmScreen);
}

function selectFilm(index) {
    if(arrOfGiveFilms[index].film.ageLimit>clientModel.age){
        alert('Too young');
    } else {
        if(clientModel.leases.length<5){
    let idOfClient = document.querySelector(".card-user").getAttribute("id");
    arrOfGiveFilms[index].access = false;
    let event = Object.assign({}, arrOfGiveFilms[index]);
    let body = JSON.stringify(event);
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", 'https://rental-video-api.herokuapp.com/api/mediums/' + index, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(body);

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        alert('Готово!');

        let dateOfIssue = getDateForServer(new Date);
        let dateOfReturn = getDateForServer(setDateOfReturn());
        let medium = event;
        clientModel.leases.push({
            "dateOfIssue": dateOfIssue,
            "dateOfReturn": dateOfReturn,
            "medium": medium
        });
        event = Object.assign({}, clientModel);
        body = JSON.stringify(event);
        xhr.open("PUT", 'https://rental-video-api.herokuapp.com/api/clients/' + idOfClient, true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(body);

        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;
            updateCardUser();
        }

    }

    alert('Секунду...');
} else {alert('Куда уже больше?');}
}
}
