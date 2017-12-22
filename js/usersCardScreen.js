let clientModel;
function setCardUserScreen(element) {
    let index = element.parentNode.parentNode.rowIndex-1;
    fetch('https://rental-video-api.herokuapp.com/api/clients/'+index).then(function(response) {
        return response.json();
    }).then(function(data) {
        clientModel = data;
        updateCardUser();
    }).catch(function() {
        console.log("Booo");
    });
}
function updateCardUser(){

    let content = document.getElementById("content");
    content.removeChild(content.firstChild);

    let cardScreen = document.createElement("div");
    cardScreen.className = "card-user-screen";

    let str = '<table class="card-user" id="'+clientModel.id+'"><tbody><tr class="about-user"><td colspan="4"><p><span>Имя: </span>' + clientModel.firstName + '</p><p><span>Фамилия: </span>' + clientModel.sername + '</p><p><span>Пол: </span>' + clientModel.sex + '</p></td><td colspan="4"><p><span>ID: </span>' + clientModel.id + '</p><p><span>Возраст: </span>' + clientModel.age + '</p><p><span>Дата регистрации: </span>' + formatDate(clientModel.registrationDate) + '</p></td><td class="invisible"></td></tr><tr class="card-info center"><td colspan="2"><span class="black">Фильмы</span></td><td colspan="2"><span class="black">Даты</span></td><td rowspan="2"><span class="black">Кол-во дней опоздания возврата</span></td><td colspan="3"><span class="black">Сумма</span></td><td class="invisible"></td></tr><tr class="card-info"><td><span class="black">Инв.№</span></td><td><span class="black">Название</span></td><td><span class="black">выдачи</span></td><td><span class="black">возврата</span></td><td><span class="black">проката</span></td><td><span class="black">пени</span></td><td><span class="black">Итого</span></td><td class="invisible"></td></tr>'

    for(let i = 0; i < clientModel.leases.length; i++ ){
        let daysOfdebt = countDaysOfdebt(clientModel.leases[i].dateOfReturn);
        let fines = countFines(daysOfdebt);
        let renta = 7;


        str += '<tr><td>' + clientModel.leases[i].medium.id + '</td><td>' + clientModel.leases[i].medium.film.title + '</td><td>' + formatDate(clientModel.leases[i].dateOfIssue) + '</td><td>' + formatDate(clientModel.leases[i].dateOfReturn) + '</td><td>' + daysOfdebt + '</td><td>'+ renta +'</td><td>'+ fines +'</td><td>'+ countTotal(fines, renta) +'</td><td class="invisible"><a href="#" class="remove" onclick=actionBtnRemove(this)><img src="images/icons/minus.png"></a></td></tr>'
    }
    str += '</tbody></table>';

    cardScreen.innerHTML = str;
    content.appendChild(cardScreen);
}
function actionBtnRemove(element){

    let index = element.parentNode.parentNode.rowIndex;
    let idOfMedium = document.getElementById(clientModel.id).rows[index].cells[0].innerHTML;

    let idOfClient = document.querySelector(".card-user").getAttribute("id");

    clientModel.leases[index-3].medium.access = true;
    let event = Object.assign({}, clientModel.leases[index-3].medium);
    let body = JSON.stringify(event);
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", 'https://rental-video-api.herokuapp.com/api/mediums/' + idOfMedium, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(body);

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        alert('Готово!');

        clientModel.leases.splice(index-3 ,1);
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

}
