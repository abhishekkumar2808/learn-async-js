const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function negPerRow(arr) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {

                        sum += arr[i];

                }
                console.log('resolving ... ');
                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum');
    });
}

Promise.any(array2D.map((i) => sum1DArray(i) ))
.then((sumArray) =>{

    let sum = 0;
    for( let i = 0 ; i < sumArray.length; i++)
        sum += sumArray[i];

        console.log("sum: ", sum);
})

//put a catch at the end of a then