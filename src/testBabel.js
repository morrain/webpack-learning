setTimeout(() => {
    let a = 'morrain';
    let b = 'morrain2';
    console.log(`timer done! ${a} do it`);
    console.log(a + b);
}, 1000);

let array = [1, 2, 3, 4, 5, 6];
array.includes(item => item > 2);

let tpx = new Promise((resolve, reject) => {
    console.log('new Promise done');
});

Object.assign({}, {
    a: 1,
    b: 2
});