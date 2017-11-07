function add(){
	//tenemos que tomar el texto en el text area.
	var box= document.getElementById('container');
    var newList=document.createElement('div');
    var nameList=document.createElement('input');
    var btn=document.createElement('button');
    var contBtn= document.createTextNode('Guardar');

newList.appendChild(nameList);
newList.appendChild(btn);
btn.appendChild(contBtn);
box.appendChild(newList);

}

/*

var funcBtn=button.addEventListener("click",function(){
var infoBtn= document.getElementsByTagName('input').value;

var cont=document.getElementById('container');
var createNewList=document.createElement("div");
var nameNewList= document.createElement('p');
var nameText=document.createTextNode(infoBtn);
var newTarget=document.createElement('a');
var contNewTarget=document.createTextNode('Añadir una targeta');

createNewList.appendChild(nameNewList);
nameNewList.appendChild(nameText);
createNewList.appendChild(newTarget);
newTarget.appendChild(contNewTarget);
cont.appendChild(createNewList);
});

funcBtnn();
*/