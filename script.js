const myProblem = () => {
    var a = document.getElementById("answer1").value;
    if (a == "x-5/x-2") {
        return "Good Job!"
    }   else
        return "x-5/x-2";
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
}

const myProblem2 = () => {
    var a = document.getElementById("answer2").value;
    if (a == "x^2+6x+9/x^2+3x+2") {
        return "Good Job!"
    }   else
        return "x^2+6x+9/x^2+3x+2";
};
const myCalc2 = () => {
    document.getElementById("demo2").innerHTML = myProblem2();
}