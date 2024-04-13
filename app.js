let input = document.querySelector('input');
let ol = document.querySelector('ol');
let btn = document.querySelector('button');
btn.addEventListener('click',function(){
    let div = document.createElement('div');
    let li=document.createElement('li');
    let dltbtn = document.createElement('button');
    dltbtn.innerText = 'Delete';
    let task = input.value;
    li.innerText = task;
    input.value="";
    div.append(li);
    div.append(dltbtn);
    ol.append(div);
});

ol.addEventListener('click',function(event){
    if(event.target.nodeName=='BUTTON')
    {
        let listitem = event.target.parentElement;
        listitem.remove();
    }
});

