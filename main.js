const takeVal = (array, value) => {
    return array.map(v => {
        let diff = value - v;
        return diff > 0 ? diff : 0;
    }).reduce((a, b) => a + b, 0);
};

const map = array => {
    let left   = 0;
    let newArr = [];

    return array.map((value, index, arr) => {
        let diff = 0;
        if (value >= left) {
            diff   = takeVal(newArr, left);
            left   = value;
            newArr = [];
        }

        if (value < left) {
            if (index + 1 == arr.length) {
                let slice = newArr.slice();
                let i     = newArr.length;
                let right = value;

                while (right <= newArr[ i-- ]) {
                    right = slice.pop();
                }

                diff = takeVal(slice, right);

            } else {
                newArr.push(value);
            }
        }
        return diff;
    });
};

const collect = (array) => {
    const arr = map(array);
    return arr.reduce((a, b) => a + b, 0);
};

console.log(collect([ 2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8 ]));