function addItem() {
    function deleteItem(e){
       
        e.currentTarget.parentElement.remove();
        
    }     
       
    const newItemValue=  document.querySelector('#newItemText').value;
    if( document.querySelector('#newItemText').value.trim().length==0)
        return;
     
    const listElement= document.querySelector('#items');
    const newItem = document.createElement('li');
    

    const deleteButton = document.createElement('a');
    deleteButton.setAttribute('href','#');
    deleteButton.textContent='[Delete]'
    deleteButton.addEventListener('click',deleteItem)

    newItem.textContent=newItemValue;
    newItem.appendChild(deleteButton);
    listElement.appendChild(newItem);


    document.querySelector('#newItemText').value='';

}


