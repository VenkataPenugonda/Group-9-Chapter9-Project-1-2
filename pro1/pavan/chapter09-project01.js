
/* add code here  */

function firstblur(){
    var title=document.getElementById("title");
    title.classList.remove("highlightable");
    }
    function secondblur(){
    var description=document.getElementById("description");
    description.classList.remove("highlightable");
    }
    function thirdblur(){
    var medium=document.getElementById("medium");
    medium.classList.remove("highlightable");
    }
        
    function firstfocus(){
    var title=document.getElementById("title");
    title.classList.add("highlightable");
    title.classList.remove("error");
    }
    function secondfocus(){
    var description=document.getElementById("description");
    description.classList.add("highlightable");
    description.classList.remove("error");
    }
    function thirdfocus(){
    var medium=document.getElementById("medium");
    medium.classList.add("highlightable");
    medium.classList.remove("error");
    }
    
    function preventDefault(){
    var title=document.getElementById("title");
    var description=document.getElementById("description");
    var medium=document.getElementById("medium");
    var year=document.getElementById("year");
    var museum=document.getElementById("museum");
    
    if(title.value==""){
    title.classList.add("error");
    }
    else{
    title.classList.remove("error");
    }
    
    if(description.value==""){
    des.classList.add("error");
    }
    else{
    description.classList.remove("error");
    }
    
    if(year.value==""){
    year.classList.add("error");
    }
    else{
    year.classList.remove("error");
    }
    
    return(false);
}