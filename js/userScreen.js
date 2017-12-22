let arrOfObjects = [];
function setUsersScreen() {
    fetch('https://rental-video-api.herokuapp.com/api/clients').then(function(response) {
        return response.json();
    }).then(function(data) {
        for(let i = 0; i<data.length; i++){
            arrOfObjects[i] = data[i];
        }
        updateUserScreen();
    }).catch(function() {
        console.log("Booo");
    });
}
function updateUserScreen(){
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);

    let userScreen = document.createElement("div");
    userScreen.id = "style-1";
    userScreen.className = "user-screen";



    let str = '<table class="table_blur"><tr><th>ФИО</th><th>ID</th></tr>'
    for(let i = 0; i < arrOfObjects.length; i++){
        if(checkDebtor(arrOfObjects[i])){
                str += '<tr class="debtor"><td><a href="#" onclick="actionBtnShowCard(this)">' + arrOfObjects[i].firstName + ' ' + arrOfObjects[i].sername + '</a></td><td>' + arrOfObjects[i].id + '</td></tr>';
        } else {
                str += '<tr><td><a href="#" onclick="actionBtnShowCard(this)">' + arrOfObjects[i].firstName + ' ' + arrOfObjects[i].sername + '</a></td><td>' + arrOfObjects[i].id + '</td></tr>';
        }
    }
    str += '</table>';
    userScreen.innerHTML = str;
    content.appendChild(userScreen);
}

function checkDebtor(obj){
    for (let i = 0; i < obj.leases.length; i++) {
        if((new Date(obj.leases[i].dateOfReturn).getTime() - new Date().getTime())/1000/60/60/24 < 0){
            return true;
        }
    }
    return false;
}
