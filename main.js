let index = 10;
let jump = 2;
let end = 0;

let i = index;
for (;;) {
    // Write Your Code Here
    if (i > jump) {
    console.log(i);
    i -= jump;
    } else{
        break;
    }
}

// Output
/*
10
8
6
4
*/