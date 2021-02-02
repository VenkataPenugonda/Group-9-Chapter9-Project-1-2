
/* add code here  */
window.addEventListener('load', funnction(){

var hilightableInputs = document.querySelectorAll('.hilightableInputs');
for(i=0; i < hilightableInputs.length; i++) {
var toggle = (event) => { event.target.classLsit.toggle('hilight')}
hilightableInputs[i].addEventListener('focus',toggle)
hilightableInputs[i].addEventListener('blur',toggle)
}

var form = document.getelementById("mainForm");
form.addEventListener("submit", submissionCheck);
function submissionCheck(event){
var requiredInputs = document.querySelectorAll(".required");
for(i-0; i < requiredInputs.length; i++)
{
if(requiredInputs[i].value == "")
{
event.preventDefault();
requiredInputs[i].classList.add("error");
}
else {
requiredInputs[i].classList.remove("error");
}
form.addEventListener('reset',resetform)

function resetform(event){
var requiredInputs = document.querySelectorAll(".required");
for(i-0; i < requiredInputs.length; i++){
requiredInputs[i].classList.remove("error");
}

}
})