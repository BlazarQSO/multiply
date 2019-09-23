module.exports = function multiply(first, second) {

    let minus = "";
    if (first[0] == "-" && second[0] != "-") {
        first = first.substring(1, first.length);
        minus = "-";
    } else if (first[0] != "-" && second[0] == "-") {
        second = second.substring(1, second.length);
        minus = "-";
    } else if (first[0] == "-" && second[0] == "-") {
        second = second.substring(1, second.length);
        first = first.substring(1, first.length);
    }

    let arrA = first.split("");
    let arrB = second.split("");

    arrA.reverse();
    arrB.reverse();

    let res = [];
    for (let i = 0; i < arrA.length; i++) {

        let index = i;
        let remember = 0;

        for (let j = 0; j < arrB.length; j++) {
            let count = arrA[i] * arrB[j] + remember;
            if (count > 9) {
                remember = Math.trunc(count / 10);

                if (res[index] != undefined) {
                    let countRes = res[index] + count % 10;
                    if (countRes > 9) {
                        remember++;
                        res[index] = countRes % 10;
                    } else {
                        res[index] = countRes;
                    }
                } else {
                    res[index] = count % 10;
                }

            } else {
                if (res[index] != undefined) {
                    remember = 0;
                    let countRes = res[index] + count;
                    if (countRes > 9) {
                        remember++;
                        res[index] = countRes % 10;
                    } else {
                        res[index] = countRes;
                    }
                } else {
                    res[index] = count % 10;
                    remember = 0;
                }
            }
            index++;
        }
        if (remember > 0) {
            res[index] = remember;
        }
    }

    res.reverse();
    let strRes = res.join("");
    strRes = strRes.replace(/^0+/g, "");
    if (strRes == "") {
        strRes = "0";
    }
    return minus + strRes;
}
