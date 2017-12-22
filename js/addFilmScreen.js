function setAddMovieScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);

    let addMovieScreen = document.createElement("div");
    addMovieScreen.className = "add-movie-screen";

    addMovieScreen.innerHTML = '<form> <label for="title"> title: <input type="text" name="title" id="title" required> </label> <label for="producer">producer: <input type="text" name="producer" id="producer" required> </label> <label for="actors">actors: <input type="text" name="actors" id="actors" required> </label> <label for="country">country: <input type="text" name="country" id="country" required> </label> <label for="yearOfIssue">yearOfIssue: <input type="text" name="yearOfIssue" id="yearOfIssue" required> </label> <label for="ageLimit">ageLimit: <input type="text" name="ageLimit" id="ageLimit" required> </label> <label for="cathegory">category: <input type="text" name="cathegory" id="cathegory" required> </label><label for="imageUrl">imageUrl: <input type="text" name="imageUrl" id="imageUrl" required> </label> <label for="imagesUrls">imagesUrls: <textarea name="imagesUrls" rows="4" cols="22" id="imagesUrls" required></textarea> </label> <label for="summory">summary: <textarea name="summory" rows="4" cols="22" id="summory" required></textarea> </label> <input type="submit" value="add" onclick="addFilm()"></form>';
    content.appendChild(addMovieScreen);
}
function addFilm() {
    let title = document.getElementById("title").value;
    let producer = document.getElementById("producer").value;
    let actors = document.getElementById("actors").value;
    let country = document.getElementById("country").value;
    let yearOfIssue = document.getElementById("yearOfIssue").value;
    let ageLimit = document.getElementById("ageLimit").value;;
    let cathegory = document.getElementById("cathegory").value;
    let imageUrl = document.getElementById("imageUrl").value;
    let imagesUrls = document.getElementById("imagesUrls").value;
    let summory = document.getElementById("summory").value;

    if(checkRepetitionCategory(cathegory)){
        for (let i = 0; i < arrOfCategories.length; i++) {
            if(arrOfCategories[i].nameOfCategory == cathegory){
                cathegory = arrOfCategories[i];
                break;
            }
        }
    } else {
        let categoryCode = cathegory.substr(0, 3);
        cathegory = {
            "nameOfCategory": cathegory,
            "categoryCode": categoryCode
        }
    }

    imagesUrls = imagesUrls.split(',');


    let event = {
        "title": title,
        "producer": producer,
        "actors": actors,
        "country": country,
        "yearOfIssue": yearOfIssue,
        "ageLimit": ageLimit,
        "cathegory": cathegory,
        "imageUrl":imageUrl,
        "summory": summory
    };
    let body = JSON.stringify(event);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://rental-video-api.herokuapp.com/api/films', true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(body);

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        alert('Готово!');
        actionBtnMovies();
    }

    alert('Секунду...');

}
