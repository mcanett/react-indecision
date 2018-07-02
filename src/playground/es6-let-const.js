var nameVar = 'Moisés';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'nana';
    return petName;
}

// Block scoping
const fullName = 'Moisés Canett';
let first_name;

if (fullName) {
    first_name = fullName.split(' ')[0];
    console.log(first_name);
}

console.log(first_name);