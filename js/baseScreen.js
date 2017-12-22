    let arrOfFilmsInBase = [];
    let arrOfMediums = [];
function setBaseScreen() {
    fetch('https://rental-video-api.herokuapp.com/api/films').then(function(response) {
        return response.json();
    }).then(function(data) {
        for (let i = 0; i < data.length; i++) {
            arrOfFilmsInBase[i] = data[i];
        }
    }).catch(function() {
        console.log("Booo");
    });
    fetch('https://rental-video-api.herokuapp.com/api/mediums').then(function(response) {
        return response.json();
    }).then(function(data) {
        for (let i = 0; i < data.length; i++) {
            arrOfMediums[i] = data[i];
        }
        updateBaseScreen();

    }).catch(function() {
        console.log("Booo");
    });

}

function updateBaseScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);

    let baseScreen = document.createElement("div");
    baseScreen.id = "style-1";
    baseScreen.className = "base-screen";

    let str = '<table class="table_blur"><tr><th></th></tr>';

    for (var i = 0; i < arrOfFilmsInBase.length; i++) {
        str += '<tr><td><input type="checkbox" id="hd-'+ i +'" class="hide" /><label for="hd-'+ i +'">' + arrOfFilmsInBase[i].title+'</label><div><table  class="table_blur"><tr><th>ID</th><th>Носитель</th><th>Доступен</th></tr>';
        for (var j = 0; j < arrOfFilmsInBase[i].copiesIds.length; j++){
            str += '<tr><td>' + arrOfMediums[arrOfFilmsInBase[i].copiesIds[j]].id +'</td><td>' + arrOfMediums[arrOfFilmsInBase[i].copiesIds[j]].typeOfMedium + '</td><td>';
            if(arrOfMediums[arrOfFilmsInBase[i].copiesIds[j]].access){
                str += '<img src="images/icons/yes.png"></td></tr>';
            } else {
                str +='<img src="images/icons/no.png"></td></tr>';
            }
        }
        str += '</table></div></td></tr>';
    }
    str += '</table></div></td></tr></table>';

    baseScreen.innerHTML = str;
    content.appendChild(baseScreen);
}
