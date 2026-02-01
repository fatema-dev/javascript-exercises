const sumAll = function (range1, range2) {
	let total = 0;
    if((range1 < 0 
        || range2 < 0 )
        || !Number.isInteger(range1)
        || !Number.isInteger(range2)){
        return "ERROR";
    }
	if (range1 > range2) {
        while(range1 != range2){
            total += range1;
            range1--;
        }
	} else {
        while(range1 != range2){
            total += range1;
            range1++;
        }
	}
    return total + range2;
};

//test
console.log(sumAll(2, 3));
// Do not edit below this line
module.exports = sumAll;
