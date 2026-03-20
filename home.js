//logout btn click
document.getElementById("logout-btn").addEventListener('click', () =>{
    window.location.replace('index.html');
});


const sections = [
    document.getElementById("cashout-section"),
    document.getElementById("addmoney-section"),
    document.getElementById("sendMoney-section"),
    document.getElementById("Bonus-section"),
    document.getElementById("PayBill-section"),
    document.getElementById("Transactions")
];


const hideAllSections = () => {
    sections.forEach(section => {
        section.classList.add('hidden');
    });
}



document.getElementById('AddMoney-btn').addEventListener('click', ()=>{
    hideAllSections();
    document.getElementById('addmoney-section').classList.remove('hidden');
});


document.getElementById('cashout-btn').addEventListener('click', ()=>{
    hideAllSections();
    document.getElementById('cashout-section').classList.remove('hidden');
});


document.getElementById('TransferMoney-btn').addEventListener('click', ()=>{
    hideAllSections();
    document.getElementById('sendMoney-section').classList.remove('hidden');
});


document.getElementById('GetBonus-btn').addEventListener('click', ()=>{
    hideAllSections();
    document.getElementById('Bonus-section').classList.remove('hidden');
});

document.getElementById('PayBill-btn').addEventListener('click', ()=>{
    hideAllSections();
    document.getElementById('PayBill-section').classList.remove('hidden');
});

document.getElementById('Transactions-btn').addEventListener('click', ()=>{
    hideAllSections();
    document.getElementById('Transactions').classList.remove('hidden');
});