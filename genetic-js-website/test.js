const parentUL = document.querySelector('#unordered-list');
for(let i=0; i<100000; i++){
const li = document.createElement('li');
li.innerHTML=i;
parentUL.appendChild(li);
}