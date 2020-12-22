var duebill = document.querySelector("#duebill");
var cashdeposited = document.querySelector("#cashdeposited");
var changeamt = document.querySelector("#amtchange");

var changeReturnDiv = document.querySelector(".changeReturn");
var nochangeReturnDiv= document.querySelector(".noChangeReturn");


var changebtn = document.querySelector("#btnchange");
var denominationbtn= document.querySelector("#btndenominations");


var noOfNotes= document.querySelectorAll(".noOfNotes");

var arrayNoteAmt = [2000, 500, 100, 20, 10, 5, 1];

changebtn.addEventListener("click",getchange);

function getchange(){
     var num1=parseInt(duebill.value);
     var num2=parseInt(cashdeposited.value);

     var changeofamount = num2-num1;
     amtchange.innerText=changeofamount;
return
}

denominationbtn.addEventListener("click",()=>{minnumnotes();

     var billValue=Number(duebill.value);
     var cashdepositedValue =Number(cashdeposited.value);

     if(billValue>0 && cashdepositedValue>0){
          
        if(!Number.isInteger(cashdepositedValue)){
          alert("Enter valid amount in cash given field");
          return;
      }
      if(billValue > cashdepositedValue){
          alert("Cash is less than bill, please enter right amounts");
          return;
      }

      //if input valid calculate no. of notes
      calculateNotes(billValue, cashdepositedValue);
  } else{
      alert("Enter bill amount and cash given to continue");
      }
})

function calculateNotes(bill, cash){
     var returnAmt = cash-bill;
     
     if(returnAmt<1){
         nochangeReturnDiv.style.display = "block";
         changeReturnDiv.style.display = "none";
         return;
     }
 
     nochangeReturnDiv.style.display = "none";
     changeReturnDiv.style.display = "block";
 
     for(let i=0; i<arrayNoteAmt.length; i++){
         returnAmt= compare(returnAmt, arrayNoteAmt[i], i);
     }
     
 }
 function compare(remainder, noteAmt, index){

     if(remainder >= noteAmt){
         let notes = Math.floor(remainder/noteAmt);
         remainder = remainder - notes*noteAmt;
         noOfNotes[index].innerText = `${notes}`;
     }
     return remainder
 }

function minnumnotes(){
     for(let notes of noOfNotes){
         notes.innerText = "";
     }
 }
     


      
      






