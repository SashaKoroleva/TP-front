function setAddUserScreen() {
    let content = document.getElementById("content");
    content.removeChild(content.firstChild);
    let addUserScreen = document.createElement("div");
    addUserScreen.className = "add-user-screen";
    addUserScreen.innerHTML = '<div class="form"><form id="registration"><p class="login-text">Регистрация клиента</p><input type="text" id="name" placeholder="Имя" name="firstName" class="text_input" required><input type="text" placeholder="Фамилия" id="sername" name="sername" class="text_input" required><label class="sex">Пол:<label><input name="sex" type="radio" value="male" class="radioBtn">мужской</label><label><input name="sex" type="radio" value="female" class="radioBtn" checked="">женский</label></label><input type="date" id="bDay" name="bDay" class="text_input" required><input type="submit" value="Зарегестрировать" onclick="registerUser()"></form></div>';
    content.appendChild(addUserScreen);
}

function registerUser() {

    let name = document.getElementById("name").value;
    let sername = document.getElementById("sername").value;
    let bDay = document.getElementById("bDay").value;
    let age = String(getAge(bDay));
    let registrationDate = getDateForServer(new Date());
    let sex = getSex();

    let event = {
        "firstName": name,
        "sername": sername,
        "age": age,
        "sex": sex,
        "registrationDate": registrationDate
    };
    let body = JSON.stringify(event);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://rental-video-api.herokuapp.com/api/clients', true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(body);

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        alert('Готово!');
        actionBtnUsers();
    }

    alert('Секунду...');


}
