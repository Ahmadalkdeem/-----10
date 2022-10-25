const btnAddContact = document.getElementById("add-contact");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const contactsDiv = document.getElementById("contacts");
let contacts = [];
//string:
const strContactFromDisk = localStorage.getItem('contacts');

if (strContactFromDisk != null) {
    //parse as array of objects:
    const contactFromDisk = JSON.parse(strContactFromDisk);
    contacts = contactFromDisk;
}
//show contacts to the user:
contacts.forEach(c => {
    contactsDiv.innerHTML += `Name: ${c.name} Phone: ${c.phone} <br>`
})

class Contact {
    name;
    phone;

    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

// react to btnAddContact:
btnAddContact.addEventListener("click", () => {
    //get the input values:
    const name = nameInput.value;
    const phone = phoneInput.value;

    //object with the input values:
    const contact = new Contact(name, phone);
    contacts.push(contact);
    //save Array<Contact> to disk
    localStorage.setItem("contacts", JSON.stringify(contacts));
    //save contact to disk?
    //save Array<Contact> to disk
});

const btn = document.getElementById('meal');


let i = 0;

btn.addEventListener('click', () => {

    //code that runs each second:
    setInterval(() => {
        i++;
        btn.innerHTML = 'Breakfast' + i;
    }, 1000);
})



const btnStart = document.getElementById('start');
const box = document.getElementById('box');

let intervalId;
let timeOutId;

let remainingTime;

btnStart.addEventListener('click', () => {
    clearInterval(intervalId);
    clearTimeout(timeOutId);

    remainingTime = 60
    box.innerHTML = remainingTime + ' Remaining';
    // setInterval(1 sec)
    intervalId = setInterval(() => {
        remainingTime--;
        box.innerHTML = remainingTime + ' Remaining';
    }, 1000);

    //kill the interval after 60 second
    timeOutId = setTimeout(() => {
        box.innerHTML = 'Time is up';
        clearInterval(intervalId);
    }, 1000 * 60);
});

