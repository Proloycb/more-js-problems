/*
const names = ['abul', 'babul', 'kabul', 'jabul', 'dabul', 'abul', 'babul', 'dabul', 'abul'];

function removeDuplicate (names) {
    const unique = [];

    for (const element of names) {
        console.log (element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log (uniqueNames);
*/

const numbers = [14, 16, 14, 12, 15, 20, 22, 12, 16, 14];

function removeDuplicate (numbers) {
    const unique = [];

    for (const element of numbers) {
        console.log (element);
        if (unique.indexOf (element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNumbers = removeDuplicate (numbers);
console.log (uniqueNumbers);