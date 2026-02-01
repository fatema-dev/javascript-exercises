const removeFromArray = function(arr, ...args) {
    return arr.filter(x => !args.includes(x));
};

console.log(removeFromArray([1,2,3,4,5],3));

// Do not edit below this line
module.exports = removeFromArray;
