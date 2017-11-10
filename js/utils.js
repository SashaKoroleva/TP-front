function actionBtnUsers() {
    document.getElementById("movies").classList.remove("selected");
    document.getElementById("movies-in-database").classList.remove("selected");
    document.getElementById("users").classList.add("selected");
    setContentParametrs("center","center");
    setUserScreen();
}
function actionBtnMovies() {
        document.getElementById("movies-in-database").classList.remove("selected");
    document.getElementById("users").classList.remove("selected");
    document.getElementById("movies").classList.add("selected");
    document.getElementById("content").style.justifyContent = "flex-start";
    setContentParametrs("flex-start","flex-start");
    setMoviesScreen()
    CollapsibleLists.applyTo(document.getElementById('newList'));
 }
function actionBtnBase() {
    document.getElementById("users").classList.remove("selected");
    document.getElementById("movies").classList.remove("selected");
    document.getElementById("movies-in-database").classList.add("selected");
    setContentParametrs("center","center");
    setBaseScreen();
 }
function actionBtnBack(){

 }
function setUserScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let userScreen = document.createElement("div");
    userScreen.id = "style-1";
    userScreen.className = "user-screen";
    userScreen.innerHTML ='<table class="table_blur"><tr><th>ФИО</th><th>ID</th></tr><tr><td>Иванов Иван Иванович</td><td>1233214</td><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr><tr><td>Петров Петр Петрович</td><td>7955647</td></tr></table>';
    content.appendChild(userScreen);
 }
function setMoviesScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let movieScreen = document.createElement("div");
    movieScreen.className = "movie-screen";
    movieScreen.innerHTML ='<ul class="collapsibleList" id="newList"><li> Вестерны <ul><li>Child item</li><li>Child item</li></ul></li><li> Драмы <ul><li>Child item</li><li>Child item</li></ul></li><li> Комедии <ul><li>Child item</li><li>Child item</li></ul></li><li> Мелодрамы <ul><li>Child item</li><li>Child item</li></ul></li><li> Триллеры <ul><li>Child item</li><li>Child item</li></ul></li><li> Фильмы ужасов‎ <ul><li>Child item</li><li>Child item</li></ul></li></ul>';
    content.appendChild(movieScreen);
 }
function setBaseScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let baseScreen = document.createElement("div");
    baseScreen.id = "style-1";
    baseScreen.className = "base-screen";
    baseScreen.innerHTML ='<table class="table_blur"><tr><th>Название фильма</th><th>ID</th><th>Носитель</th><th>Доступен</th></tr><tr><td>Терминатор 2</td><td>1233214</td><td>DVD</td><td><img src="images/yes.png"></td></tr><tr><td>Терминатор 3</td><td>1233214</td><td>DVD</td><td><img src="images/no.png"></td></tr><tr><td>Терминатор 3</td><td>1233214</td><td>DVD</td><td><img src="images/no.png"></td></tr><tr><td>Терминатор 3</td><td>1233214</td><td>DVD</td><td><img src="images/no.png"></td></tr><tr><td>Терминатор 2</td><td>1233214</td><td>DVD</td><td><img src="images/yes.png"></td></tr><tr><td>Терминатор 2</td><td>1233214</td><td>DVD</td><td><img src="images/yes.png"></td></tr><tr><td>Терминатор 2</td><td>1233214</td><td>DVD</td><td><img src="images/yes.png"></td></tr><tr><td>Терминатор 2</td><td>1233214</td><td>DVD</td><td><img src="images/yes.png"></td></tr><tr><td>Терминатор 2</td><td>1233214</td><td>DVD</td><td><img src="images/yes.png"></td></tr><tr><td>Терминатор 2</td><td>1233214</td><td>DVD</td><td><img src="images/yes.png"></td></tr><tr><td>Терминатор 3</td><td>1233214</td><td>DVD</td><td><img src="images/no.png"></td></tr><tr><td>Терминатор 3</td><td>1233214</td><td>DVD</td><td><img src="images/no.png"></td></tr></table>';
    content.appendChild(baseScreen);

 }
function setContentParametrs(alignItems,justifyContent) {
        document.getElementById("content").style.justifyContent = justifyContent;
        document.getElementById("content").style.alignItems = alignItems;

}
