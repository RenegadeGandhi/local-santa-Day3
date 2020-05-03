let a; //number of siblings
let b; //number of sweets in box

const localSanta = (a, b) => {
    //modulo operator is used to check for even distribution.
    if (b % a === 0){
        return "give away";
    } else {
        return "eat yourself";
    }
}

localSanta(3, 15);

