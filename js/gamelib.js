/*/ michael shershin & keshine o'young
this is going to be the javascript libary for nerd herder
time to herd some nerds /*/
var mainDiv;
var userName;
function startGame()
// 1 = male
// 2 = female
// 3 = unsure
{;
document.getElementById('mainDiv').innerHTML = 
                      "Before we get started are you <br>" +
                      "<button onclick='genderChoice(1)'>MALE</button>" +
                      "<button onclick='genderChoice(2)'>FEMALE</button>" +
                      "<button onclick='genderChoice(3)'>UNSURE</button>";
}
function genderChoice(choice)
{ 
var textbox = "<input type='textbox' id='userName' value=''>";
var ready = "<button onclick='userName()'>Ready</button>";
var doneYet = "When you are done entering your name click the button.";
  if (choice === 1)
  {document.getElementById('mainDiv').innerHTML = 
              "Oh great another male just what we need. <br>" +
              "Ugh, What is your name? <br>" +
              textbox + "<br>" + doneYet + "<br>" + ready;
  } else if (choice === 2)
  { document.getElementById('mainDiv').innerHTML =
              "Oh hello, you can call me lover! <br>" +
              "What should I call you? <br>" +
               textbox + "<br>" + doneYet + "<br>" + ready;
  } else if (choice === 3)
  { document.getElementById('mainDiv').innerHTML =
              "Umm okay, this makes my job a bit harder. <br>" +
              "Well what should i call you then? <br>" +
              textbox + "<br>" + doneYet + "<br>" +  ready;
  } else
  { document.getElementById('mainDiv').innerHTML =
              "Okay give me the name you wished to be called," +
              " cause I want to get this show on the road. <br>" +
              textbox + "<br>" + ready;
  }
}
function userName()
{ 
//yes === 1
//no === 2
var userName = document.getElementById('userName').value;
var yes = "<button onclick='timetogetgoing(1)'>Yes!!!</button>";
var no = "<button onclick='timetogetgoing(2)'>No??</button>";
document.getElementById('mainDiv').innerHTML = 
                "Awsome so I can call you " + userName + "? <br>" +
                yes + no;                
}
function timetogetgoing(name)
{
  if (name === 1)
  { storyStart();
  } else 
  { genderChoice(4);
  }
}
function storyStart()
{
  document.getElementById('mainDiv').innerHTML =
          "Once apon a time there was a young boy who hated all nerds <br>" +
          "Till he caught himself playing pokemon <br>" +
          "At that moment they knew he wasted his life by not being a nerd <br>" +
          "so he left his career of being a teacher and went to collect all the powers <br>" +
          " <br><br><br><br> so started the herding of nerds";
}
    
          
    
                  