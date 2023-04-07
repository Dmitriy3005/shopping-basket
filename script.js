let inputPurchaseName = document.getElementById("inputPurchaseName"); //вводИмениПокупки
let newInputPurchaseName = document.getElementById("newInputPurchaseName");  // новыйВводИмениПокупки
let deleteIcon = document.getElementById("deleteIcon");  //значок удаления

//добавим событие keydown
inputPurchaseName.addEventListener("keydown", function (press) {
        //если нажимаем enter выполнить ффун-ю
        if (press.key == "Enter") {
            addPurchaseName();
        }
    }
)

function addPurchaseName() {
    //добавляем элемент h2
    let h2 = document.createElement("h2");
    h2.style.margin = "5px 0";
    //присваиваем ему значение введенное в поле Input
    h2.innerHTML = "- " + inputPurchaseName.value;

    //вставляем новыеПокупки в HTML, при этом показывая куда именно(после всех)
    newInputPurchaseName.insertAdjacentElement("beforeend", h2);

    //Добавили событие на значок стерки,чтобы все зачищалось
    deleteIcon.addEventListener("click", function () {
        h2.innerHTML = "";
    })

    //Добавили событие,чтобы при нажатии на поле h2, текст зачеркивался
    h2.addEventListener("click", function () {
        h2.style.textDecoration = "line-through";
    })

    //зачистили поле после ввода очередной покупки
    inputPurchaseName.value = "";
}



