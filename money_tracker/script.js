const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

//json
// const dataTransaction = [
//     { id: 1, text: "ค่าขนม", amount: -100 },
//     { id: 2, text: "ค่าห้อง", amount: -3000 },
//     { id: 3, text: "เงินเดือน", amount: 30000 }
// ];

let transactions = [];


function init() {
    list.innerHTML = '';
    transactions.forEach(addDataToList);
    // addDataToList(transactions);
    calculateMoney();

}

function removeData(id) {
    console.log("delete data", id);
    transactions = transactions.filter(transactions => transactions.id !== id);
    // 2,3 => id =1
    init();
}

function addDataToList(transactions) {
    const symbol = transactions.amount < 0 ? "-" : "+";
    // console.log(transactions.id);
    // console.log(transactions.text);
    // console.log(transactions.amount);

    const status = transactions.amount < 0 ? "minus" : "plus";
    // console.log(status);
    const item = document.createElement('li'); // create element เพิ่มใน tag li
    // item.innerHTML = transactions.text + '<span>- $400</span><button class="delete-btn" onclick="removeData(${transactions.id})">x</button>';

    item.innerHTML = `${transactions.text}<span>${symbol}${formatNumber(Math.abs(transactions.amount))}</span><button class="delete-btn" onclick="removeData(${transactions.id})">x</button>`;
    item.classList.add(status);
    list.appendChild(item); // push item in class list
    // console.log(item);


}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function auotID() {
    return Math.floor(Math.random() * 1000000);
}

function calculateMoney() {
    const amounts = transactions.map(transactions => transactions.amount);
    // console.log(amounts);

    //calculate netprofit
    const total = amounts.reduce((result, item) => (result += item), 0).toFixed(2);
    // console.log(total);

    const income = amounts.filter(item => item > 0).reduce((result, item) => (result += item), 0).toFixed(2);
    // console.log(income);

    const expense = (amounts.filter(item => item < 0).reduce((result, item) => (result += item), 0)) * (-1).toFixed(2);
    console.log(expense);

    //display 
    balance.innerText = `฿${formatNumber(total)}`;
    money_plus.innerText = `฿${formatNumber(income)}`;
    money_minus.innerText = `฿${formatNumber(expense)}`;

}

function addTransaction(e) {
    e.preventDefault();
    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('กรุณาป้อนข้อมูลให้ครบ');
    } else {
        // console.log(typeof(text.value));
        // console.log(typeof(+amount.value));
        const data = {
            id: auotID(),
            text: text.value,
            amount: +amount.value
        };

        //เพิ่มข้อมูลลงใน json
        transactions.push(data);
        addDataToList(data);
        calculateMoney()
        text.value = '';
        amount.value = '';
    }
}

form.addEventListener('submit', addTransaction);

init();