
var ques = [{
  Ques : "Q) Name a language with deals with pass by address feature ",
  op1 : "C++",
  op2 : "Java",
  op3 : "Python",
  op4 : "JavaScript",
  Ans : "ans1"
},
{
  Ques : "Q) Which is the Non Linear data structure",
  op1 : "Linked List",
  op2 : "Array",
  op3 : "Tree",
  op4 : "Stack",
  Ans : "ans3"
},
{
  Ques : "Q) Name a language with deals with walrus operator",
  op1 : "C",
  op2 : "Java",
  op3 : "React",
  op4 : "Pyhton",
  Ans : "ans4"
},
{
  Ques : "Q) Which variables cannot be declared as ?",
  op1 : "Structure",
  op2 : "Void",
  op3 : "Pointer",
  op4 : "Class",
  Ans : "ans2"
}
]

const quest = document.querySelector("h2");
const option1 = document.querySelectorAll("label")[0];
const option2 = document.querySelectorAll("label")[1];
const option3 = document.querySelectorAll("label")[2];
const option4 = document.querySelectorAll("label")[3];
const submit = document.querySelector("#submit");
var k=0;
var scr=0;//for scores
function loadQuestion(i){
  quest.innerHTML= ques[i].Ques;
  option1.innerHTML= ques[i].op1;
  option2.innerHTML= ques[i].op2;
  option3.innerHTML= ques[i].op3;
  option4.innerHTML= ques[i].op4;
}

function checkAnswer(){
  for (var j=0;j<4;j++)
  {
    if(document.querySelectorAll(".answer")[j].checked){
      if(document.querySelectorAll(".answer")[j].id === ques[k].Ans){
        scr++;
      }
      else {
        document.querySelector(".hide").style.visibility = "visible";
        setTimeout(() => {
          document.querySelector(".hide").style.visibility = "hidden";
        },500);
      }
      k=k+1;
      if(k==4)
      {
        document.querySelector(".score").classList.remove('hidden');
        document.querySelector(".score").innerHTML = `<h1>Your score is  ${scr}</h1>`;
        document.querySelector(".restart").style.visibility = "visible";
      }
      loadQuestion(k);
    }
  }
}

loadQuestion(k);
document.addEventListener('keypress',() => {
  location.reload();
});
submit.addEventListener('click', checkAnswer);
