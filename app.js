const numbersDiv = document.querySelector(".numbers");
const drawButton = document.querySelector("#draw");
const resetButton = document.querySelector("#reset");
const lottoNumbers = [];
const colors = ["tomato", "teal", "blue", "purple", "green"];
const lotto = document.querySelector(".history");
const clearHistoryButton = document.querySelector("#clearHistory");

drawButton.addEventListener("click", function () {
    const arrNumbers = [];
    const lottoNumbers = [];
    while (arrNumbers.length < 6) {
        let randomNum = Math.floor(Math.random() * 45 + 1);
        if (arrNumbers.indexOf(randomNum) === -1) {
            arrNumbers.push(randomNum);
            // sort the numbers
            arrNumbers.sort(sortfunc);
            function sortfunc(a, b) {
                return a - b;
            }
        };
    };
    console.log(arrNumbers);

    lottoNumbers.push(arrNumbers);

    liPush(lottoNumbers);
    function liPush(lottoNumbers) {
        const li = document.createElement("li");
        // const lottoLength = Object.keys(lottoNumbers).length;
        // li.innerText = lottoNumbers[lottoLength - 1];
        li.innerText = lottoNumbers;
        lotto.appendChild(li);

    }

    // console.log(lottoNumbers);
    // empty the numbers to keep generating new numbers
    numbersDiv.innerHTML = "";
    console.log(arrNumbers);

    // // display numbers in different colors
    // displayNum(lottoNumbers);

    displayNum(arrNumbers);

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
clearHistoryButton.addEventListener("click", function () {
    // lottoNumbers.splice(0, 6);
    // numbersDiv.innerHTML = "";
    lotto.innerHTML = "";
});