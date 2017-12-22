function getDateForServer(date) {

    let day = date.getDate();
    if (day < 10) day = '0' + day;

    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;

    let year = date.getFullYear();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;

    return year + '-' + month + '-' + day + "T" + hours + ":" + minutes + ":" + seconds;
}

function setDateOfReturn() {
    let today = new Date(),
        inWeek = new Date();
    inWeek.setDate(today.getDate() + 7);
    return inWeek;
}

function formatDate(str) {
    let date = new Date(str);
    let day = date.getDate();
    if (day < 10) day = '0' + day;

    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;

    let year = date.getFullYear();
    return day + '-' + month + '-' + year

}

function getAge(date) {
    return new Date().getFullYear() - new Date(date).getFullYear();
}

function getSex() {
    let radios = document.getElementsByName('sex');

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value
        }
    }
}

function countDaysOfdebt(strOfReturn) {
    let now = new Date();
    let dateOfReturn = new Date(strOfReturn);
    let diff = Math.floor((now.getTime() - dateOfReturn.getTime()) / 24 / 60 / 60 / 1000);
    if (diff <= 0) {
        return 0;
    } else {
        return diff;
    }
}

function countFines(daysOfdebt) {
    return daysOfdebt * 1;
}

function countTotal(a, b) {
    return a + b;
}

function btnVisibility(visibility) {
    document.getElementById("give-film").style.visibility = visibility;
}

function changeSelection(select) {
    let arr = ["users", "movies", "movies-in-database"];
    for (let i = 0; i < arr.length; i++) {
        if (select === arr[i]) {
            document.getElementById(select).classList.add("selected");
        } else {
            document.getElementById(arr[i]).classList.remove("selected");
        }

    }
}

function changeWorkBtn(add) {
    let classList = document.getElementById("icon").classList;
    while (classList.length > 0) {
        classList.remove(classList.item(0));
    }
    document.getElementById("icon").classList.add(add);
}

function setContentParametrs(alignItems, justifyContent) {
    document.getElementById("content").style.justifyContent = justifyContent;
    document.getElementById("content").style.alignItems = alignItems;

}

function actionBtnGiveFilm() {
    setGiveFilmScreen();
}

function actionBtnFilm(index) {
    changeWorkBtn("back-to-movies");
    setContentParametrs("center", "center");
    setFilmScreen(index);
}

function actionBtnShowCard(element) {
    setCardUserScreen(element);
    btnVisibility("visible");
    changeWorkBtn("back-to-users");
    setContentParametrs("flex-start", "center");
}

function actionBtnBase() {
    btnVisibility("hidden");
    changeWorkBtn("plus-in-database");
    changeSelection("movies-in-database");
    setContentParametrs("center", "center");
    setBaseScreen();
}

function actionBtnMovies() {
    btnVisibility("hidden");
    changeWorkBtn("plus-film");
    changeSelection("movies");
    setContentParametrs("stretch", "flex-start");
    setMoviesScreen();
    CollapsibleLists.applyTo(document.getElementById('newList'));
}

function actionBtnUsers() {
    setUsersScreen();
    btnVisibility("hidden");
    changeWorkBtn("plus-user");
    changeSelection("users");
    setContentParametrs("center", "center");

}

function actionBtn() {
    if (document.getElementById("icon").classList.contains("plus-user")) {
        changeWorkBtn("back-to-users");
        setContentParametrs("flex-start", "center");
        setAddUserScreen();
    } else if (document.getElementById("icon").classList.contains("back-to-users")) {
        actionBtnUsers();
    } else if (document.getElementById("icon").classList.contains("plus-film")) {
        changeWorkBtn("back-to-movies");
        setContentParametrs("center", "center");
        setAddMovieScreen();
    } else if (document.getElementById("icon").classList.contains("back-to-movies")) {
        actionBtnMovies();
    } else if (document.getElementById("icon").classList.contains("plus-in-database")) {
        changeWorkBtn("back-to-base");
        setContentParametrs("center", "center");
        setAddMovieinBaseScreen();
    } else if (document.getElementById("icon").classList.contains("back-to-base")) {
        actionBtnBase();
    }

}

actionBtnUsers();
