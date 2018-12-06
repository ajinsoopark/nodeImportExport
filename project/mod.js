const sumOfArr = (arr) => {
    let sum = 0;

    arr.forEach(el => {
        sum += el;
    })
    return sum;
};

const dequeue = (arr) => {
    arr.pop();
    return arr;
};

const peek = (arr) => arr[arr.length - 1];

module.exports = {
    sumOfArr,
    dequeue,
    peek
}