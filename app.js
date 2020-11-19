const Name = document.querySelector('#Name');
const Date = document.querySelector('#date')
const Amount = document.querySelector('#Amount');
const btn = document.querySelector('.btn');
const tBody = document.querySelector('#tBody')


EventHandler(); 


function EventHandler() {

  btn.addEventListener('click', Expense);

}

function Expense(e) {

  if((Name.value === '') || (Date.value === '') || (Amount.value == '')){

    alert('One of the inputs are empty try again');

  } else {

    const tdName = document.createElement('td');
    const tdDate = document.createElement('td');
    const tdAmount = document.createElement('td');
    const tRow = document.createElement('tr');

    console.log(Name.value);
    console.log(Date.value);
    console.log(Amount.value);
    

  
    tdName.appendChild(document.createTextNode(Name.value));
    tdDate.appendChild(document.createTextNode(Date.value));
    tdAmount.appendChild(document.createTextNode(Amount.value));
  
    tRow.appendChild(tdName);
    tRow.appendChild(tdDate);
    tRow.appendChild(tdAmount);

    console.log(tRow);

    tBody.appendChild(tRow);

    
  

    Name.value = '';
    Date.value = '';
    Amount.value = '';

  }




  e.preventDefault();
}