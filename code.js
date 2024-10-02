
// Flips array up until the nth element
function flip(array, n) {
    let reverse = [];

    // Reverse up until nth element
    for (let i = 0; i <= n; i++) {
        reverse.push(array[i]);
    }

    // Replace first part of array with reverse[]
    for (let i = 0; i <= n; i++) {
        array[i] = reverse.pop();
    }

    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    let len = array.length;

    for (let n = len; n > 1; n--) {
        // find the index of the max value of current sub-array
        let maxIndex = findMaxIndex(array.slice(0, n));

        
        if (maxIndex != n - 1) {
            if (maxIndex != 0) {
                flip(array, maxIndex);
            }

            flip(array, n-1);
        }
    }

    return array;
}

// Finds the index of the max value in the array
function findMaxIndex(array) {
    let maxIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[maxIndex]) {
            maxIndex = i;
        }
    }

    return maxIndex;
}