function actionBtnUsers() {
    document.getElementById("movies").classList.remove("selected");
    document.getElementById("movies-in-database").classList.remove("selected");
    document.getElementById("users").classList.add("selected");
    setContentParametrs("center", "center");
    setUserScreen();
}

function actionBtnMovies() {
    document.getElementById("movies-in-database").classList.remove("selected");
    document.getElementById("users").classList.remove("selected");
    document.getElementById("movies").classList.add("selected");
    document.getElementById("content").style.justifyContent = "flex-start";
    setContentParametrs("stretch", "flex-start");
    setMoviesScreen()
    CollapsibleLists.applyTo(document.getElementById('newList'));
}

function actionBtnBase() {
    document.getElementById("users").classList.remove("selected");
    document.getElementById("movies").classList.remove("selected");
    document.getElementById("movies-in-database").classList.add("selected");
    setContentParametrs("center", "center");
    setBaseScreen();
}

function actionBtnFilm() {
    document.getElementById("icon").style.backgroundImage = "url('../GUI/images/back.png')";
    document.getElementById("icon").classList.add("back");
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let filmScreen = document.createElement("div");
    filmScreen.className = "film";
    filmScreen.innerHTML = '<div class="title"><h1>Хороший, плохой, злой</h1></div><div class="description"><p><span>Жанр:</span> боевик, вестерн, приключения</p><p><span>Год выпуска:</span> 1966 </p><p><span>Режиссеры:</span> Серджио Леоне </p><p><span>Актеры:</span>Эли Уоллах, Клинт Иствуд, Ли Ван Клиф, Альдо Джуффре, Луиджи Пистилли, Рада Рассимов, Энцо Петито, Клаудио Скаркилли, Джон Барта, Ливио Лоренцон, ... [актеры и роли] </p><p><span>Страна:</span> Италия, Испания, Германия (ФРГ), США </p><p><span>Премьера в мире:</span> 23.12.1966 </p><p><span>Премьера в США:</span> 29.12.1967 </p><p><span>Кинокомпания:</span> Arturo González Producciones Cinematográficas, S.A, Constantin Film Produktion </p><p><span>Бюджет фильма:</span> $1 200 000 </p><p><span>Продолжительность:</span> 161 мин.</p><p><span>Содержание:</span> Действие происходит в разгар гражданской войны в Америке. Одинокий стрелок скитается по стране, не имея ни дома ни друзей, пока не встречает двух таких же как он искателей приключений. Втроем они объединяют свои усилия, чтобы найти украденное золото. Несмотря на общую цель, каждый из них понимает, что доверять нельзя никому, кроме как своему верному револьверу.</p></div><div class="imgMovie"><img src="images/bad.jpg" alt=""></div>';
    content.appendChild(filmScreen);
}

function actionBtnBack() {
    if (document.getElementById("icon").classList.contains("back")) {
        document.getElementById("icon").style.backgroundImage = "url('../GUI/images/tape.png')";
        setMoviesScreen();
        CollapsibleLists.applyTo(document.getElementById('newList'));
        document.getElementById("icon").classList.remove("back");
    } else {

    }

}

function setUserScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let userScreen = document.createElement("div");
    userScreen.id = "style-1";
    userScreen.className = "user-screen";
    userScreen.innerHTML = '<table class="table_blur"><tr><th>ФИО</th><th>ID</th></tr><tr><td><a href="#">Иванов Иван Иванович</a></td><td>1233214</td><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr></table>';
    content.appendChild(userScreen);
}

function setMoviesScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let movieScreen = document.createElement("div");
    movieScreen.className = "movie-screen";
    movieScreen.innerHTML = '<ul class="collapsibleList" id="newList"><li> Вестерны <ul><li><a href="#" id="film-1" onclick=actionBtnFilm()>Хороший, плохой, злой</a></li><li>Child item</li></ul></li><li> Драмы <ul><li>Child item</li><li>Child item</li></ul></li><li> Комедии <ul><li>Child item</li><li>Child item</li></ul></li><li> Мелодрамы <ul><li>Child item</li><li>Child item</li></ul></li><li> Триллеры <ul><li>Child item</li><li>Child item</li></ul></li><li> Фильмы ужасов‎ <ul><li>Child item</li><li>Child item</li></ul></li></ul>';
    content.appendChild(movieScreen);
}

function setBaseScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let baseScreen = document.createElement("div");
    baseScreen.id = "style-1";
    baseScreen.className = "base-screen";
    baseScreen.innerHTML = '<table class="table_blur"><tr><th>Название фильма</th><th>ID</th><th>Носитель</th><th>Доступен</th></tr><tr><td>Терминатор 2</td><td>1233214</td><td>DVD</td><td><img src="images/yes.png"></td></tr><tr><td>Терминатор 3</td><td>1233214</td><td>DVD</td><td><img src="images/no.png"></td></tr><tr><td>Терминатор 3</td><td>1233214</td><td>DVD</td><td><img src="images/no.png"></td></tr><tr><td>Терминатор 3</td><td>1233214</td><td>DVD</td><td><img src="images/no.png"></td></tr><tr><td>Терминатор 2</td><td>1233214</td><td>DVD</td><td><img src="images/yes.png"></td></tr><tr><td>Терминатор 2</td><td>1233214</td><td>DVD</td><td><img src="images/yes.png"></td></tr><tr><td>Терминатор 2</td><td>1233214</td><td>DVD</td><td><img src="images/yes.png"></td></tr><tr><td>Терминатор 2</td><td>1233214</td><td>DVD</td><td><img src="images/yes.png"></td></tr><tr><td>Терминатор 2</td><td>1233214</td><td>DVD</td><td><img src="images/yes.png"></td></tr><tr><td>Терминатор 2</td><td>1233214</td><td>DVD</td><td><img src="images/yes.png"></td></tr><tr><td>Терминатор 3</td><td>1233214</td><td>DVD</td><td><img src="images/no.png"></td></tr><tr><td>Терминатор 3</td><td>1233214</td><td>DVD</td><td><img src="images/no.png"></td></tr></table>';
    content.appendChild(baseScreen);

}

function setContentParametrs(alignItems, justifyContent) {
    document.getElementById("content").style.justifyContent = justifyContent;
    document.getElementById("content").style.alignItems = alignItems;

}
