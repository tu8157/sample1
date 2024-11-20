console.log('aaaaa');

const intro = (name, age) => {
    console.log(`${name}です。`);
    console.log(`${age}です。`);
}
intro('ともみ', 23);


const add = (a, b) => {
    return a + b;
}
console.log(add(1, 2));
// const sum =add(1,2);
// console.log(sum);

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

const items = [
    { name: 'Bag', price: 20000 },
    { name: 'Ring', price: 10000 }
];

// for (let i=0; i<items.length; i++) {
//     console.log(`商品${items[0].name}`);
//     console.log(`値段${items[0].price}`);
//     console.log(`商品${items[1].name}`);
//     console.log(`値段${items[1].price}`);
// }
// ↑このまとまりを2回表示してしまうので×↑

// for (let i=0; i<items.length; i++) {
//     console.log(`商品${items[i].name}`);
//     console.log(`値段${items[i].price}`);
// }

for (let i = 0; i < items.length; i++) {
    const item = items[i]
    console.log(`商品${item.name}`);
    console.log(`値段${item.price}`);
}


function check() {
    let a = document.getElementById('i0').value;
    let b = document.getElementById('i1').value;
    let result = b/a**2; //「3**2」→ 3の2乗
    if(result < 18.5) {
        document.getElementById('result').textContent = '痩せすぎ';
    } else if (result >= 25) {
        document.getElementById('result').textContent = '肥満気味';
    } else {
        document.getElementById('result').textContent = '標準';
    }
}

console.log(10>0 ? 'true' : 'false');
const sum = (num1, num2) => {
    return num1 + num2 > 10 ? '10を超えています' : '10を下回っています';
}
console.log(sum(5,6));

let scores = [10, 20,30,40];
let total = 0, average;

for (let i=0 ; i < scores.length ; i++) {
    total += scores[i];
}
console.log(total/scores.length);

function c2f(c) {
    return c*1.8 + 32;
}
// console.log(c2f(32));
const num =Math.floor(c2f(32));
console.log(num)