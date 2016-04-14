(function() {
    "use strict";
    function test(a, b, c) {
        let numOdd = a % 2 + b % 2 + c % 2,
            even = a % 2 === 0 && a || b % 2 === 0 && b || c % 2 === 0 && c,
            odd = a % 2 === 1 && a || b % 2 === 1 && b || c % 2 === 1 && c;
        return numOdd === 1 && even < 5 || numOdd === 2 && odd < 5;
    }
    
    function testDistributions() {
        let dist6 = {},
            dist12 = {};
        for (let i = 1; i <= 6; i++) {
            for (let j = 1; j <= 6; j++) {
                for (let k = 1; k <= 6; k++) {
                    let val6 = (i + j + k) % 6 + 1,
                        val12 = (i + j + k) % 6 + 1;
                    val12 = test(i, j, k) && val12 || val12 + 6;
    
                    if (dist6[val6]) {
                        dist6[val6]++;
                    } else {
                        dist6[val6] = 1;
                    }
    
                    if (dist12[val12]) {
                        dist12[val12]++;
                    } else {
                        dist12[val12] = 1;
                    }
                }
            }
        }
    
        console.log('6 distribution:', dist6);
        console.log('12 distribution:', dist12);
    }
    
    testDistributions();
})();
