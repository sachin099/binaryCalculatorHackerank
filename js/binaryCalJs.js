let re = document.getElementById("res");      //ID selection of result area
let frst = '', secd = '', symbol = '';
let sym = ['+', '-', '*', '/'];                   //Symbols collection (operators)
let z, x, c;
let frstnum, secdnum;


function check() {                             // Function to check expression when ends with a symbol
    for (x of sym) {
        if ((re.innerHTML).endsWith(x)) {
            return true;
        }

    }
    return false;
}
function clickZero() {                          //Function triggered by '0' button
    re.innerHTML += '0';
}

function clickOne() {                           //Function triggered by '1' button
    re.innerHTML += '1';
}
function clickClr() {                           //Function triggered by 'C' button
    re.innerHTML = '';
}
function clickSum() {                           //Function triggered by '+' button
    if (re.innerHTML != '' && check() == false) {
        re.innerHTML += '+';
    }
}
function clickSub() {                           //Function triggered by '-' button
    if (re.innerHTML != '' && check() == false) {
        re.innerHTML += '-';
    }
}
function clickMul() {                           //Function triggered by '*' button
    if (re.innerHTML != '' && check() == false) {
        re.innerHTML += '*';
    }
}
function clickDiv() {                            //Function triggered by '/' button
    if (re.innerHTML != '' && check() == false) {
        re.innerHTML += '/';
    }
}

function clickEql() {                            //Function triggered by '=' button

    if (re.innerHTML != '') {
        for (z = 0; z < re.innerHTML.length; z++) {
            if (re.innerHTML[z] == '+' || re.innerHTML[z] == '-' || re.innerHTML[z] == '*' || re.innerHTML[z] == '/') {
                symbol = re.innerHTML[z];
                break;
            }
            frst += re.innerHTML[z];

        }
        for (c = (z + 1); c < re.innerHTML.length; c++) {

            secd += re.innerHTML[c];

        }
    }
    frstnum = parseInt(frst, 2);
    secdnum = parseInt(secd, 2);

    if (symbol == '+') {
        re.innerHTML = ((frstnum + secdnum).toString(2));
    }
    if (symbol == '-') {
        re.innerHTML = ((frstnum - secdnum).toString(2));
    }
    if (symbol == '*') {
        re.innerHTML = ((frstnum * secdnum).toString(2));
    }
    if (symbol == '/') {
        re.innerHTML = ((Math.floor(frstnum / secdnum)).toString(2));
    }

    frst = '';
    secd = '';
    symbol = '';
    frstnum = 0;
    secdnum = 0;

}
