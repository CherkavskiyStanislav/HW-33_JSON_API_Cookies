// // Task 1

async function showAdminName(data) {
    try {
        let response = await fetch(data)
        let result = await response.json();
        for(const key in result){
            if (result[key].isAdmin === true) {
                console.log(result[key].name);
            }
        }
    } catch (e){
        console.log(e.message);
    }
}
showAdminName('./data.json');

// // Task 2

let nikola = {firstName: 'Nikola', lastName: 'Tesla'};
let bob = {firstName: 'Bob'};
let mike = {lastName: 'Smith'};
let michael = {};

let getFullName = function (user) {
    let fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'No Name';
    if (user === nikola) {
        fullName = fullName.toUpperCase();
    }
    return fullName;
}
  
getFullName = new Proxy(getFullName, {
    apply(target, thisArg, args) {
        return target(args[0] || {});
    }
});

console.log(getFullName(nikola));
console.log(getFullName(bob));
console.log(getFullName(mike));
console.log(getFullName(michael));

// // Task 3

let users = [
    {name: 'Nikola', age:18, id:1},
    {name: 'Bob', age:25, id:2},
    {name: 'Mike', age:32, id:3},
];

let usersJson = JSON.stringify(users);
localStorage.setItem('users', usersJson);

function sayHelloToUser(userId) {
    let user = users.find(u => u.id === userId);
    if (user) {
        console.log(`Hello ${user.name}!`);
    } else {
        console.log(`User with id ${userId} not found.`);
    }
}
sayHelloToUser(3);

// // Task 4

const input = document.getElementById('myInput');
input.value = getSavedValue('myInput') || '';
input.addEventListener('input', function() {
    saveValue(input);
});
function saveValue(input) {
    const id = 'myInput';
    const val = input.value;
    localStorage.setItem(id, val);
}

function getSavedValue(key) {
    if (localStorage.getItem(key) === null) {
        return '';
    }
    return localStorage.getItem(key);
}