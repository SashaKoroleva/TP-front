let medium = [{
    "id": 0,
    "film": {
        "id": 0,
        "title": "My first pain",
        "producer": "Alexei Lazarev",
        "actors": "Alexei Lazarev, Jim Jim",
        "country": "USA",
        "yearOfIssue": 2017,
        "ageLimit": 18,
        "summory": "Summory Summory Summory Summory Summory Summory",
        "cathegory": {
            "nameOfCategory": "Adventure",
            "categoryCode": "Adv",
            "id": 0
        },
        "copiesIds": [0, 1]
    },
    "typeOfMedium": "DVD",
    "access": true
}, {
    "id": 1,
    "film": {
        "id": 0,
        "title": "My first pain",
        "producer": "Alexei Lazarev",
        "actors": "Alexei Lazarev, Jim Jim",
        "country": "USA",
        "yearOfIssue": 2017,
        "ageLimit": 18,
        "summory": "Summory Summory Summory Summory Summory Summory",
        "cathegory": {
            "nameOfCategory": "Adventure",
            "categoryCode": "Adv",
            "id": 0
        },
        "copiesIds": [0, 1]
    },
    "typeOfMedium": "BlueRay",
    "access": true
}, {
    "id": 2,
    "film": {
        "id": 0,
        "title": "My first pain",
        "producer": "Alexei Lazarev",
        "actors": "Alexei Lazarev, Jim Jim",
        "country": "USA",
        "yearOfIssue": 2017,
        "ageLimit": 18,
        "summory": "Summory Summory Summory Summory Summory Summory",
        "cathegory": {
            "nameOfCategory": "Adventure",
            "categoryCode": "Adv",
            "id": 0
        },
        "copiesIds": [0, 1]
    },
    "typeOfMedium": "DVD",
    "access": false
}]

function getExistingCategories() {
    let categories = [];
    categories.push({
        name: arrOfFilms[0].cathegory.nameOfCategory
    });
    for (let i = 0; i < arrOfFilms.length; i++) {
        let flag = true;
        for (let j = 0; j < categories.length; j++) {
            if (categories[j].name == arrOfFilms[i].cathegory.nameOfCategory) {
                flag = false;
                break;
            }
        }
        if (flag) {
            categories.push({
                name: arrOfFilms[i].cathegory.nameOfCategory
            })
        }
    }

    for (let j = 0; j < categories.length; j++) {
        categories[j].films = [];
    }
    return categories;
}

function sortByCategory() {
    let categories = getExistingCategories();
    for (let i = 0; i < arrOfFilms.length; i++) {
        for (let j = 0; j < categories.length; j++) {
            if (categories[j].name == arrOfFilms[i].cathegory.nameOfCategory) {
                categories[j].films.push(arrOfFilms[i]);
            }
        }
    }
}
sortByCategory();
