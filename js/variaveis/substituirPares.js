function pares(arr) {
    for (let i = 0; i < array.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(`substutuindo ${arr[i]} por 0...`);
            arr[i] = 0;
        }
    }
    return arr;
}
let array = [1, 3, 4, 6, 80, 33, 23, 90];
pares(array);