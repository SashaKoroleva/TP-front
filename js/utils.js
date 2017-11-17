//действия с пользователями
function setAddUserScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let addUserScreen = document.createElement("div");
    addUserScreen.className = "add-user-screen";
    addUserScreen.innerHTML = '<div class="form"><form><p class="login-text">Регистрация клиента</p><input type="text" placeholder="ФИО" name="username" class="text_input" ><label class="sex">Пол: <label><input name="sex" type="radio" value="male" class="radioBtn">мужской</label><label><input name="sex" type="radio" value="female" class="radioBtn" checked>женский</label></label><input type="date" name="bDay" class="text_input" ><input type="submit" value="Зарегестрировать" ></form></div>';
    content.appendChild(addUserScreen);
}

function setCardUserScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let cardScreen = document.createElement("div");
    cardScreen.className = "card-user-screen";
    cardScreen.innerHTML = '<table class="card-user"><tbody><tr class="about-user"><td colspan="4"><p><span>Имя:</span> Илья</p><p><span>Фамилия:</span> Григорьев</p><p><span>Отчество:</span> Платонович</p></td><td colspan="4"><p><span>ID:</span> 123567</p><p><span>Возраст:</span> 19</p><p><span>Дата регистрации:</span> 11.11.2017</p></td><td class="invisible"></td></tr><tr class="card-info center"><td colspan="2"><span class="black">Фильм</span></td><td colspan="2"><span class="black">Даты</span></td><td rowspan="2"><span class="black">Кол-во дне опоздания возврата</span></td><td colspan="3"><span class="black">Сумма</span></td><td class="invisible"></td></tr><tr class="card-info"><td><span class="black">Инв.№</span></td><td><span class="black">Название</span></td><td><span class="black">выдачи</span></td><td><span class="black">возврата</span></td><td><span class="black">проката</span></td><td><span class="black">пени</span></td><td><span class="black">Итого</span></td><td class="invisible"></td></tr><tr><td>ДТ00502</td><td>Шерлок Холмс</td><td>20.02.2010</td><td>21.02.2010</td><td>2135</td><td>15</td><td>176</td><td>191</td><td class="invisible"><a href="#" class="remove" onclick=actionBtnRemove()><img src="images/icons/minus.png"></a></td></tr><tr><td>ДТ00502</td><td>Шерлок Холмс</td><td>20.02.2010</td><td>21.02.2010</td><td>2135</td><td>15</td><td>176</td><td>191</td><td class="invisible"><a href="#" class="remove"><img src="images/icons/minus.png"></a></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="invisible"></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="invisible"></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="invisible"></td></tr></tbody></table>';
    content.appendChild(cardScreen);
}

function setUsersScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);

    let userScreen = document.createElement("div");
    userScreen.id = "style-1";
    userScreen.className = "user-screen";
    userScreen.innerHTML = '<table class="table_blur"><tr><th>ФИО</th><th>ID</th></tr><tr><td><a href="#" onclick=actionBtnShowCard()>Иванов Иван Иванович</a></td><td>1233214</td><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr class="debtor"><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr class="debtor"><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr></table>';
    content.appendChild(userScreen);


}
//действия с картотекой фильмов
function setFilmScreen(){
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let filmScreen = document.createElement("div");
    filmScreen.className = "film-screen";
    filmScreen.innerHTML = '<div class="title"><h1>Хороший, плохой, злой</h1></div><div class="description"><p><span>Жанр:</span> боевик, вестерн, приключения</p><p><span>Год выпуска:</span> 1966 </p><p><span>Режиссеры:</span> Серджио Леоне </p><p><span>Актеры:</span>Эли Уоллах, Клинт Иствуд, Ли Ван Клиф, Альдо Джуффре, Луиджи Пистилли, Рада Рассимов, Энцо Петито, Клаудио Скаркилли, Джон Барта, Ливио Лоренцон, ... [актеры и роли] </p><p><span>Страна:</span> Италия, Испания, Германия (ФРГ), США </p><p><span>Премьера в мире:</span> 23.12.1966 </p><p><span>Премьера в США:</span> 29.12.1967 </p><p><span>Кинокомпания:</span> Arturo González Producciones Cinematográficas, S.A, Constantin Film Produktion </p><p><span>Бюджет фильма:</span> $1 200 000 </p><p><span>Продолжительность:</span> 161 мин.</p><p><span>Содержание:</span> Действие происходит в разгар гражданской войны в Америке. Одинокий стрелок скитается по стране, не имея ни дома ни друзей, пока не встречает двух таких же как он искателей приключений. Втроем они объединяют свои усилия, чтобы найти украденное золото. Несмотря на общую цель, каждый из них понимает, что доверять нельзя никому, кроме как своему верному револьверу.</p></div><div class="imgMovie"><img src="images/posters/bad-good.jpg" alt=""></div>';
    content.appendChild(filmScreen);
}
function setMoviesScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let movieScreen = document.createElement("div");
    movieScreen.className = "movie-screen";
    movieScreen.innerHTML = '<ul class="collapsibleList" id="newList"><li> Вестерны <ul><li><a href="#" id="film-1" onclick=actionBtnFilm()>Хороший, плохой, злой</a></li><li>Child item</li></ul></li><li> Драмы <ul><li>Child item</li><li>Child item</li></ul></li><li> Комедии <ul><li>Child item</li><li>Child item</li></ul></li><li> Мелодрамы <ul><li>Child item</li><li>Child item</li></ul></li><li> Триллеры <ul><li>Child item</li><li>Child item</li></ul></li><li> Фильмы ужасов‎ <ul><li>Child item</li><li>Child item</li></ul></li></ul><div class="add-category"><form><input type="text" placeholder=" Имя новой категории" name="category" required><input type="submit" name="plus" value=">"></form>';
    content.appendChild(movieScreen);
}

function setAddMovieScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let addMovieScreen = document.createElement("div");
    addMovieScreen.className = "add-movie-screen";
    addMovieScreen.innerHTML = '<form ><label for="name"> Название: <input type="text" name="nameFilm" value=""></label><label for="name">Подробное описание: <input type="text" name="nameFilm" value=""></label><input type="submit" name="" value="add"></form>';
    content.appendChild(addMovieScreen);
}
//десйтвия с базой фильмов
function setAddMovieinBaseScreen(){
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let addMovieinBaseScreen = document.createElement("div");
    addMovieinBaseScreen.className = "add-movie-in-base-screen";
    addMovieinBaseScreen.innerHTML = '<form ><label for="name"> Название: <input type="text" name="nameFilm" value=""></label><label for="name">Описание: <input type="text" name="nameFilm" value=""></label><input type="submit" name="" value="add"></form>';
    content.appendChild(addMovieinBaseScreen);
}
function setBaseScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let baseScreen = document.createElement("div");
    baseScreen.id = "style-1";
    baseScreen.className = "base-screen";
    baseScreen.innerHTML = '<table class="table_blur"><tr><th></th></tr><tr><td><input type="checkbox" id="hd-1" class="hide" /><label for="hd-1">Терминатор</label><div><table class="table_blur"><tr><th>ID</th><th>Носитель</th><th>Доступен</th></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/no.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr></table></div></td></tr><tr><td><input type="checkbox" id="hd-2" class="hide" /><label for="hd-2">Терминатор 2</label><div><table class="table_blur"><tr><th>ID</th><th>Носитель</th><th>Доступен</th></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr></table></div></td></tr><tr class="debtor"><td><input type="checkbox" id="hd-3" class="hide" /><label for="hd-3">Терминатор 3</label><div><table class="table_blur"><tr><th>ID</th><th>Носитель</th><th>Доступен</th></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/no.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/no.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/no.png"></td></tr></table></div></td></tr><tr><td><input type="checkbox" id="hd-4" class="hide" /><label for="hd-4">Терминатор 4</label><div><table class="table_blur"><tr><th>ID</th><th>Носитель</th><th>Доступен</th></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/no.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr></table></div></td></tr><tr><td><input type="checkbox" id="hd-5" class="hide" /><label for="hd-5">Терминатор 5</label><div><table class="table_blur"><tr><th>ID</th><th>Носитель</th><th>Доступен</th></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr></table></div></td></tr><tr><td><input type="checkbox" id="hd-6" class="hide" /><label for="hd-6">Терминатор 6</label><div><table class="table_blur"><tr><th>ID</th><th>Носитель</th><th>Доступен</th></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr></table></div></td></tr><tr><td><input type="checkbox" id="hd-7" class="hide" /><label for="hd-7">Терминатор 7</label><div><table class="table_blur"><tr><th>ID</th><th>Носитель</th><th>Доступен</th></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr></table></div></td></tr><tr><td><input type="checkbox" id="hd-8" class="hide" /><label for="hd-8">Терминатор 8</label><div><table class="table_blur"><tr><th>ID</th><th>Носитель</th><th>Доступен</th></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr></table></div></td></tr><tr><td><input type="checkbox" id="hd-9" class="hide" /><label for="hd-9">Терминатор 9</label><div><table class="table_blur"><tr><th>ID</th><th>Носитель</th><th>Доступен</th></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr></table></div></td></tr><tr><td><input type="checkbox" id="hd-10" class="hide" /><label for="hd-10">Терминатор 10</label><div><table class="table_blur"><tr><th>ID</th><th>Носитель</th><th>Доступен</th></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr></table></div></td></tr><tr><td><input type="checkbox" id="hd-11" class="hide" /><label for="hd-11">Терминатор 11</label><div><table class="table_blur"><tr><th>ID</th><th>Носитель</th><th>Доступен</th></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr></table></div></td></tr><tr><td><input type="checkbox" id="hd-12" class="hide" /><label for="hd-12">Терминатор 12</label><div><table class="table_blur"><tr><th>ID</th><th>Носитель</th><th>Доступен</th></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr></table></div></td></tr><tr><td><input type="checkbox" id="hd-13" class="hide" /><label for="hd-13">Терминатор 13</label><div><table class="table_blur"><tr><th>ID</th><th>Носитель</th><th>Доступен</th></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr><tr><td>1233214</td><td>DVD</td><td><img src="images/icons/yes.png"></td></tr></table></div></td></tr></table>';
    content.appendChild(baseScreen);

}
//доп функции и действия кнопок
function btnVisibility(visibility){
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
//Кнопки
function actionBtnFilm() {
    changeWorkBtn("back-to-movies");
    setContentParametrs("center", "center");
    setFilmScreen();
}
function actionBtnShowCard(){
    btnVisibility("visible");
    changeWorkBtn("back-to-users");
    setContentParametrs("flex-start","center");
    setCardUserScreen();
}
function actionBtnBase(){
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
    btnVisibility("hidden");
    changeWorkBtn("plus-user");
    changeSelection("users");
    setContentParametrs("center", "center");
    setUsersScreen();
}
function actionBtn() {
    if(document.getElementById("icon").classList.contains("plus-user")) {
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
