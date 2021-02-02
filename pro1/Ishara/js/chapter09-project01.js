
/* add code here  */

window.addEventListener('load',function(){
//Instructions
    var highligtableInputs =document.querySelectorAll(".hilightable");
    for(i=0; i< highligtableInputs.length; i++)
    {
        var toggle= (event) => {event.target.classList.toggle('highlight')}
        
    
        highligtableInputs[i].addEventListener('focus', toggle)
        highligtableInputs[i].addEventListener('blur', toggle)
    }

    var form=document.getElementById("mainForm");
    form.addEventListener("submit", submissionCheck);
    function submissionCheck(event){
        var requiredInputs=document.querySelectorAll(".required");
        for(i=0; i<requiredInputs.length; i++)
        {
            if(requiredInputs[i].value == "")
            {
                event.preventDefault();
                requiredInputs[i].classList.add("error");
            }
            else{
                requiredInputs[i].clsaaList.remove("error");
            }
            
        }
        form.addEventListener("reset", )
            function resetForm(event){
                var requiredInputs=document.querySelectorAll(".required");
                for(i=0; i<requiredInputs.length; i++)
                requiredInputs[i].classList.remove("error");
            }

    }
})
