const numbersDiv = document.querySelector(".numbers");
const drawButton = document.querySelector("#draw");
const resetButton = document.querySelector("#reset");
const lottoNumbers = [];
const colors = ["tomato", "teal", "blue", "purple", "green"];

drawButton.addEventListener("click", function () {
    const lottoNumbers = [];
    while (lottoNumbers.length < 6) {
        let randomNum = Math.floor(Math.random() * 45 + 1);
        if (lottoNumbers.indexOf(randomNum) === -1) {
            lottoNumbers.push(randomNum);
            // sort the numbers
            lottoNumbers.sort(sortfunc);
            function sortfunc(a, b) {
                return a - b;
            }
        };
    };
    // console.log(lottoNumbers);
    // empty the numbers to keep generating new numbers
    numbersDiv.innerHTML = "";

    // display numbers in different colors
    displayNum(lottoNumbers);

    function displayNum(number) {
        for (let i = 0; i < 6; i++) {
            const eachNumDiv = document.createElement("div");
            eachNumDiv.classList.add("eachnum");
            eachNumDiv.textContent = number[i];
            numbersDiv.appendChild(eachNumDiv);
            let colorIndex = Math.floor(number[i] / 10);
            eachNumDiv.style.backgroundColor = colors[colorIndex];
        }
    };
});

resetButton.addEventListener("click", function () {
    lottoNumbers.splice(0, 6);
    numbersDiv.innerHTML = "";
});