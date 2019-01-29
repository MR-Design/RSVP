const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');
form.addEventListener('submit',(e)=>{
e.preventDefault();
    const text = input.value;
    input.value = "";
    const li = document.createElement('li');
    li.textContent =text;
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    label.textContent = 'confirmed';
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    ul.appendChild(li);
    const button = document.createElement('button');
    button.textContent ='remove' ;
    li.appendChild(button);
    li.appendChild(label);
});

ul.addEventListener('change', (e) => {
const checkbox = event.target;
const checked = checkbox.checked;
const listItem = checkbox.parentNode.parentNode;
if(checked){
listItem.className = 'responded';
} else{
    listItem.className = "";
}
});
ul.addEventListener('click',(e)=>{
    if(e.target.tagName==='BUTTON'){
        const li = e.target.parentNode;
        const ul =li.parentNode;
        ul.removeChild(li);
    }
});