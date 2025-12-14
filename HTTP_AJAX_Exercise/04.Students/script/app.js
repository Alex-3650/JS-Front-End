document.addEventListener('DOMContentLoaded',init);
const url='http://localhost:3030/jsonstore/collections/students';
//FETCH API
function loadStudents(onSuccess){
fetch(url)
.then(result=>result.json())
.then(result=>{
    console.log(result)
    onSuccess(result)
  })
.catch(error=>console.error('Error: ',error))  
}

function createStudent(body,onSuccess){
fetch(url,{
method:'POST',
headers:{'Content-Type': 'application/json'},
body:JSON.stringify(body)
})
.then(result=>result.json())
.then(result=>{
    console.log(result)
    onSuccess(result)
  })
.catch(error=>console.error('Error: ',error))  
}


 function createEl(tag,properties,container=null)    {
    const element=document.createElement(tag);

    Object.keys(properties).forEach(property=>{

        if(typeof properties[property]==='object'){
            Object.assign(element.dataset,properties[property])
        }else{
            element[property]=properties[property];
        }
    })
    if(container) container.append(element);
 }


function init(){
const table=document.querySelector('#results tbody');
const inputsEl=document.querySelectorAll('.inputs input');
const button=document.querySelector('#submit');

function createEntries({firstName,lastName,facultyNumber,grade,_id}){
      const row=document.createElement('tr');
      const firstNameEl=createEl('th',{textContent:firstName,dataset:_id},row);
      const lastNameNameEl=createEl('th',{textContent:lastName,dataset:_id},row);
      const facultyNumberEl=createEl('th',{textContent:facultyNumber,dataset:_id},row);
      const gradeEl=createEl('th',{textContent:grade,dataset:_id},row);
      table.append(row);
}

function createEntriesHandler(){

    loadStudents(result=>{
        Object.values(result).forEach(result=>createEntries(result));
    });
}

button.addEventListener('click',e=>createStudentHandler(e));

function createStudentHandler(e){
e.preventDefault();
const inputs=[...inputsEl].map(field=>field.value);
if(inputs.includes('')) return;
const studentObj={
        "firstName": inputs[0],
        "lastName": inputs[1],
        "facultyNumber": inputs[2],
        "grade":inputs[3],
    }
createStudent(studentObj,result=>{
    console.log(result);
    createEntries(result);
    });

}

createEntriesHandler();
}