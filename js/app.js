const form = document.getElementById('registrar');
const input = form.querySelector('input');
const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');
const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckbok = document.createElement('input');

filterLabel.textContent ="Hide who have not responded";
filterCheckbok.type ='checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckbok);
mainDiv.insertBefore(div, ul);
filterCheckbok.addEventListener('change', (e)=>{
 const isChecked = e.target.checked;
 const lis = ul.children;
 if(isChecked){
  for(let i =0; i<lis.length;i++){
   let li =lis[i];
   if(li.className ==='responded'){
    li.style.display ='';

   }else{
       li.style.display ='none';
   }
 }
 }else{
    for(let i =0; i<lis.length;i++){
        let li =lis[i];
         li.style.display ='';
    }

 }
})


form.addEventListener('submit',(e)=>{
e.preventDefault();
    const text = input.value;
    input.value = "";
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent =text;
    li.appendChild(span);
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    label.textContent = 'confirmed';
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    ul.appendChild(li);

    const editButton = document.createElement('button');
    editButton.textContent ='edit' ;
    li.appendChild(editButton);

    const removeButton = document.createElement('button');
    removeButton.textContent ='remove';
    li.appendChild(removeButton);
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
        const button = e.target;
        const li = button.parentNode;
        const ul =li.parentNode;
        if(button.textContent === 'remove'){
            ul.removeChild(li);
        } else if(button.textContent === 'edit'){
           const span = li.firstElementChild;
           const input = document.createElement('input');
           input.type= 'text';
           input.value= span.textContent;
           li.insertBefore(input, span);
           li.removeChild(span);
           button.textContent='save';

        }else if(button.textContent === 'save'){
            const input = li.firstElementChild;
            const span = document.createElement('span');
          
            span.textContent = input.value ;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent='edit';
 
         }
       
        
    }
});