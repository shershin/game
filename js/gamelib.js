/*/ michael shershin & keshine o'young
this is going to be the javascript libary for nerd herder
time to herd some nerds /*/
//global variables
var mainDiv;
var userName;
//text specific to the sex of user.
var sex=0;
var maletext=[];
var femaletext=[];
var unsuretext=[];
var nerd=0;
var maindiv;
var seconddiv;
var xboxmovelist=new movelist("360 no scope","grenade toss","light shield","verbal harass");
var pcmovelist=new movelist("pc thing","grenade toss","light shield","verbal harass");
var socmovelist=new movelist("FARMING POWER","grenade toss","light shield","invite spam");
var animemovelist=new movelist("kamehameha","grenade toss","light shield","verbal harass");
var somethingnerd=new enemy("pc elitist",5,"social media","the pc nerd believes he is part of the pc master race, better than all other nerds.",xboxmovelist);
var anothernerd=new enemy();
var actionflag=false;
var xboxnerd=new nerdclass("xbox nerd",xboxmovelist,20);
var pcnerd=new nerdclass("pc nerd",pcmovelist,20);
var socnerd=new nerdclass("social media nerd",socmovelist,20);
var animenerd=new nerdclass("anime nerd",animemovelist,20);
var currentnerdclass=xboxnerd;
var turn;
var nerdlist=[xboxnerd,socnerd,pcnerd,animenerd];
var itemlist=["pokeball","senzu bean","controller","smart phone"];
function startGame()
// 1 = male
// 2 = female
// 3 = unsure
{
maindiv=document.getElementById('mainDiv');
seconddiv=document.getElementById('secondDiv')
maindiv.innerHTML = 
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
switch(choice)
{
case 1:
	maindiv.innerHTML = 
              "Oh great another male just what we need. <br>" +
              "Ugh, What is your name? <br>" +
              textbox + "<br>" + doneYet + "<br>" + ready;
	sex=choice;
break;
case 2:
	maindiv.innerHTML =
              "Oh hello, you can call me lover! <br>" +
              "What should I call you? <br>" +
               textbox + "<br>" + doneYet + "<br>" + ready;
	sex=choice;
break;
case 3:
	maindiv.innerHTML =
              "Umm okay, this makes my job a bit harder. <br>" +
              "Well what should i call you then? <br>" +
              textbox + "<br>" + doneYet + "<br>" +  ready;
	sex=choice;
break;
case 4:
	maindiv.innerHTML =
              "Okay give me the name you wished to be called," +
              " cause I want to get this show on the road. <br>" +
              textbox + "<br>" + ready;
break;
}
}
function userName()
{ 
//yes === 1
//no === 2
<<<<<<< HEAD
userName = document.getElementById('userName').value;

=======
var userName = document.getElementById('userName').value;
>>>>>>> adac6e92902351276173600cafd710be7d97fbd7
var yes = "<button onclick='timetogetgoing(true)'>Yes!!!</button>";
var no = "<button onclick='timetogetgoing(false)'>No??</button>";
maindiv.innerHTML = 
                "Awesome so I can call you " + userName + "? <br>" +
                yes + no;                
}
function timetogetgoing(yesflag)
{
  if (yesflag)
  { storyStart();
  } else 
  { genderChoice(4);
  }
}
function storyStart()
{
  maindiv.innerHTML =
          "Once apon a time there was a young boy who hated all nerds <br>" +
          "Till he caught himself playing pokemon <br>" +
          "At that moment they knew he wasted his life by not being a nerd <br>" +
          "so he left his career of being a teacher and went to collect all the powers <br>" +
<<<<<<< HEAD
          " <br><br><br><br> so started the herding of nerds<br>" +
          "<button onclick='mapStart()'>Start</button>";
                  seconddiv.innerHTML="<br><button id='battle' onclick='battle(somethingnerd)'>FIGHT</button>"
}
function enemy(name,health,weakness,description,movelist)
{
        this.name=name;
        this.health=health;
        this.weakness=weakness;
        this.description=description;
        this.movelist=movelist;
}
function movelist(attack1,attack2,defend,status)
{
        this.attack1=attack1;
        this.attack2=attack2;
        this.defend=defend;
        this.status=status;
}
function nerdclass(name,movelist,health)
{
        this.name=name;
        this.movelist=movelist;
        this.health=health;
}
function battle(benemy)
{
        maindiv.innerHTML=benemy.name+" wants to battle. What will you do?";
        seconddiv.innerHTML=battlemenu();
        var temphealth=benemy.health
        turn=0;
        /*while(temphealth>0||currentnerdclass.health>0)
        {
                if(actionflag)
                {
                enemyaction(benemy);
                actionflag=false;
                }
        }
        if(temphealth<=0)
        {
        battlewin();
        }
        else
        {
        battlelose();
        }*/
}
function battlemenu()
{
        var attack = "<button id='attack' onclick='attack()'>Attack</button>";
        var item = "<button id='items' onclick='listitems()'>Item</button>";
        var change = "<button id='nerds' onclick='listnerds()'>ChgNrd</button>";
        var flee = "<button id='flee' onclick='flee()'>Flee</button>";
        return attack+item+change+flee;
}
function enemyaction(enemy)
{
        if(enemy.name.indexOf("boss"))
        {
                if(turn>10)
                {
                battlelose();
                }
        }
        var x = Math.floor(3*Math.random());
        enemy.movelist[x];
}
function attack()
{
        seconddiv.innerHTML=battlemenu();
        var button1="<br><input type='button' id='attack1' onclick='battleaction(this)'>";
        var button2="<br><input type='button' id='attack2' onclick='battleaction(this)'>";
        var button3="<br><input type='button' id='defend' onclick='battleaction(this)'>";
        var button4="<br><input type='button' id='status' onclick='battleaction(this)'>";
        seconddiv.innerHTML=seconddiv.innerHTML+button1+button2+button3+button4;
        document.getElementById('attack1').value=currentnerdclass.movelist.attack1;
        document.getElementById('attack2').value=currentnerdclass.movelist.attack2;
        document.getElementById('defend').value=currentnerdclass.movelist.defend;
        document.getElementById('status').value=currentnerdclass.movelist.status;
        document.getElementById('attack').disabled=true;
        document.getElementById('items').disabled=false;
        document.getElementById('nerds').disabled=false;
        document.getElementById('flee').disabled=false;
}
function listitems()
{
        seconddiv.innerHTML=battlemenu();
        var button1="<br><input type='button' id='item0' onclick=''>";
        var button2="<br><input type='button' id='item1' onclick=''>";
        var button3="<br><input type='button' id='item2' onclick=''>";
        var button4="<br><input type='button' id='item3' onclick=''>";
        seconddiv.innerHTML=seconddiv.innerHTML+button1+button2+button3+button4;
        for(var i=0;i<nerdlist.length;i++)
        {
        var inputid='item'+i
        document.getElementById(inputid).value=itemlist[i];
        }
        document.getElementById('attack').disabled=false;
        document.getElementById('items').disabled=true;
        document.getElementById('nerds').disabled=false;
        document.getElementById('flee').disabled=false;
}
function listnerds()
{
        seconddiv.innerHTML=battlemenu();
        var button1="<br><input type='button' id='nerd0'>";
        var button2="<br><input type='button' id='nerd1'>";
        var button3="<br><input type='button' id='nerd2'>";
        var button4="<br><input type='button' id='nerd3'>";
        seconddiv.innerHTML=seconddiv.innerHTML+button1+button2+button3+button4;
        for(var i=0;i<nerdlist.length;i++)
        {
        var inputid=document.getElementById('nerd'+i)
        var funcinput="chgnerd("+i+")";
        inputid.setAttribute("onclick",funcinput);
        inputid.value=nerdlist[i].name;
        }
        document.getElementById('attack').disabled=false;
        document.getElementById('items').disabled=false;
        document.getElementById('nerds').disabled=true;
        document.getElementById('flee').disabled=false;
}
function chgnerd(input)
{
currentnerdclass=nerdlist[input];
}
function flee()
{

}
function battleaction(button)
{
        
}
function battlewin()
{
return;
}
//map bitches
var back2mainmap;
var maristBack;
var mordorBack;
var racoonBack;
var electricBack;
var mapdiv;
function mapStart()
{
back2mainmap = "<button onclick='mapStart()'>Back to Main Map</button>";
  document.getElementById('mainDiv').innerHTML =
          "Click on the town you want to enter but you have to beat a few the current area in order to move to the next.<br>" +
          "<button onclick='maristTown()' id='maristTown'>Marist</button><br>" +
          "<button onclick='mordorTown()' id='mordorTown' disabled=disabled>Mordor</button>" +
          "<button onclick='palletTown()' id='paletTown' disabled=disabled>Pallet Town</button>" +
          "<button onclick='electricTown()' id='electricTown' disabled=disabled>Electric Town</button><br>" +
          "<button onclick='racoonTown()' id='racoonTown' disabled=disabled>Racoon City</button>";
}
//marist 
function maristTown()
{
mapdiv = document.getElementById('mapDiv');
  mapdiv.innerHTML = 
          "<button onclick='maristBuild(1)'>Building</button>" +
          "<button onclick='maristBuild(2)'>Building</button>" +
          "<button onclick='maristBuild(3)'>Building</button>" +
          "<button onclick='maristBuild(4)'>Building</button>" +
          "<br>" + back2mainmap;
}
function maristBuild(num)
{
maristBack = "<button onclick='maristTown()'>Back</button>";
  if (num === 1)
      { mapdiv.innerHTML =
                "<button onclick='rival(1)'>Person</button>" +
                maristBack;
      } 
  else if (num === 2)
      { mapdiv.innerHTML =
                "<button onclick='maristPerson(1)'>Person</button>" +
                maristBack;
      }
  else if (num === 3)
      { mapdiv.innerHTML =
                "<button onclick='maristPerson(2)'>Person</button>" +
                maristBack;
      }
  else
      { mapdiv.innerHTML =
                "<button onclick='maristPerson(3)'>Person</button>" +
                maristBack;
      }
}
function maristPerson(num)
{ 
  if (num === 1)
      { mapdiv.innerHTML =
                "Studing sucks!!!" +
                 maristBack;
      }
  else if (num === 2)
      { mapdiv.innerHTML =
                "Have you meet Michael Shershin or Keshine O\'young....I haven\'t but I herd they are two amazing guys." +
                 maristBack;
      }
  else
      { mapdiv.innerHTML = 
                "Oh you must be " + userName +
                ", I must tell you that the journy will be long and difficult, but to help you I shall give you a hint." + 
                "Try to talk to everyone they may give you more helpful hints." + 
                "<br>Also be wary of the darkside." + 
                maristBack;
                document.getElementById('mordorTown').disabled = '!disabled';
      }
}
//mordor
function mordorTown()
{
  mapdiv.innerHTML = 
          "<button onclick='mordorBuild(1)'>Building</button>" +
          "<button onclick='mordorBuild(2)'>Building</button>" +
          "<button onclick='mordorBuild(3)'>Building</button>" +
          "<button onclick='mordorBuild(4)'>Building</button>" +
          "<br>" + back2mainmap;
}
function mordorBuild(num)
{
mordorBack = "<button onclick='mordorTown()'>Back</button>";
  if (num === 1)
      { mapdiv.innerHTML =
                "<button onclick='mordorPerson(1)'>Person</button>" +
                mordorBack;
      } 
  else if (num === 2)
      { mapdiv.innerHTML =
                "<button onclick='mordorPerson(2)'>Person</button>" +
                mordorBack;
      }
  else if (num === 3)
      { mapdiv.innerHTML =
                "<button onclick='mordorPerson(3)'>Person</button>" +
                mordorBack;
      }
  else
      { mapdiv.innerHTML =
                "<button onclick='rival(2)'>Metrosexual Hipster</button>" +
                "<button onclick='miniBoss(1)'>Get Ready</button>";
      }
}
function mordorPerson(num)
{ 
  if (num === 1)
      { mapdiv.innerHTML =
                "Studing sucks!!!" +
                 mordorBack;
      }
  else if (num === 2)
      { mapdiv.innerHTML =
                "Have you meet Michael Shershin or Keshine O\'young....I haven\'t but I herd they are two amazing guys." +
                 mordorBack;
      }
  else
      { mapdiv.innerHTML = 
                "Oh you must be " + userName +
                ", I must tell you that the journy will be long and difficult, but to help you I shall give you a hint." + 
                "Try to talk to everyone they may give you more helpful hints." + 
                "<br>Also be wary of the darkside." + 
                mordorBack;
                document.getElementById('racoonTown').disabled = false;
      }
}
//Racoon City
function racoonTown()
{
  mapdiv.innerHTML = 
          "<button onclick='racoonBuild(1)'>Building</button>" +
          "<button onclick='racoonBuild(2)'>Building</button>" +
          "<button onclick='racoonBuild(3)'>Building</button>" +
          "<button onclick='racoonBuild(4)'>Building</button>" +
          "<br>" + back2mainmap;
}
function racoonBuild(num)
{
racoonBack = "<button onclick='racoonTown()'>Back</button>";
  if (num === 1)
      { mapdiv.innerHTML =
                "<button onclick='racoonPerson(1)'>Person</button>" +
                racoonBack;
      } 
  else if (num === 2)
      { mapdiv.innerHTML =
                "<button onclick='racoonPerson(2)'>Person</button>" +
                racoonBack;
      }
  else if (num === 3)
      { mapdiv.innerHTML =
                "<button onclick='racoonPerson(3)'>Person</button>" +
                racoonBack;
      }
  else
      { mapdiv.innerHTML =
                "<button onclick='rival(3)'>Metrosexual Hipster</button>" +
                "<button onclick='miniBoss(2)'>Get Ready</button>";
      }
}
function racoonPerson(num)
{ 
  if (num === 1)
      { mapdiv.innerHTML =
                "Studing sucks!!!" +
                 racoonBack;
      }
  else if (num === 2)
      { mapdiv.innerHTML =
                "Have you meet Michael Shershin or Keshine O\'young....I haven\'t but I herd they are two amazing guys." +
                 racoonBack;
      }
  else
      { mapdiv.innerHTML = 
                "Oh you must be " + userName +
                ", I must tell you that the journy will be long and difficult, but to help you I shall give you a hint." + 
                "Try to talk to everyone they may give you more helpful hints." + 
                "<br>Also be wary of the darkside." + 
                racoonBack;
                document.getElementById('electricTown').disabled = false;
      }
}
//Electric City
function electricTown()
{
  mapdiv.innerHTML = 
          "<button onclick='electricBuild(1)'>Building</button>" +
          "<button onclick='electricBuild(2)'>Building</button>" +
          "<button onclick='electricBuild(3)'>Building</button>" +
          "<button onclick='electricBuild(4)'>Building</button>" +
          "<br>" + back2mainmap;
}
function electricBuild(num)
{
mordorBack = "<button onclick='electricTown()'>Back</button>";
  if (num === 1)
      { mapdiv.innerHTML =
                "<button onclick='electricPerson(1)'>Person</button>" +
                electricBack;
      } 
  else if (num === 2)
      { mapdiv.innerHTML =
                "<button onclick='electricPerson(2)'>Person</button>" +
                electricBack;
      }
  else if (num === 3)
      { mapdiv.innerHTML =
                "<button onclick='electricPerson(3)'>Person</button>" +
                electricBack;
      }
  else
      { mapdiv.innerHTML =
                "<button onclick='rival(4)'>Metrosexual Hipster</button>" +
                "<button onclick='miniBoss(3)'>Get Ready</button>";
      }
}
function electricPerson(num)
{ 
  if (num === 1)
      { mapdiv.innerHTML =
                "Studing sucks!!!" +
                 electricBack;
      }
  else if (num === 2)
      { mapdiv.innerHTML =
                "Have you meet Michael Shershin or Keshine O\'young....I haven\'t but I herd they are two amazing guys." +
                 electricBack;
      }
  else
      { mapdiv.innerHTML = 
                "Oh you must be " + userName +
                ", I must tell you that the journy will be long and difficult, but to help you I shall give you a hint." + 
                "Try to talk to everyone they may give you more helpful hints." + 
                "<br>Also be wary of the darkside." + 
                electricBack;
                document.getElementById('palletTown').disabled = false;
      }
}
function enemy(name,health,weakness,description,movelist)
{
	this.name=name;
	this.health=health;
	this.weakness=weakness;
	this.description=description;
	this.movelist=movelist;
}
function movelist(attack1,attack2,defend,status)
{
	this.attack1=attack1;
	this.attack2=attack2;
	this.defend=defend;
	this.status=status;
}
=======
          " <br><br><br><br> so started the herding of nerds";
		  seconddiv.innerHTML="<br><button id='battle' onclick='battle(somethingnerd)'>FIGHT</button>"
}
function enemy(name,health,weakness,description,movelist)
{
	this.name=name;
	this.health=health;
	this.weakness=weakness;
	this.description=description;
	this.movelist=movelist;
}
function movelist(attack1,attack2,defend,status)
{
	this.attack1=attack1;
	this.attack2=attack2;
	this.defend=defend;
	this.status=status;
}
>>>>>>> adac6e92902351276173600cafd710be7d97fbd7
function nerdclass(name,movelist,health)
{
	this.name=name;
	this.movelist=movelist;
	this.health=health;
}
function battle(benemy)
{
	maindiv.innerHTML=benemy.name+" wants to battle. What will you do?";
	seconddiv.innerHTML=battlemenu();
	var temphealth=benemy.health
	turn=0;
<<<<<<< HEAD
=======
	/*if(temphealth>0)
	{
		if(actionflag)
		{
		enemyaction(benemy);
			if(currentnerdclass.health>0)
			{
			battlelose();
			}
		actionflag=false;
		}
	}
	else{
	battlewin();
	}
	*/
>>>>>>> adac6e92902351276173600cafd710be7d97fbd7
}
function battlemenu()
{
	var attack = "<button id='attack' onclick='attack()'>Attack</button>";
	var item = "<button id='items' onclick='listitems()'>Item</button>";
	var change = "<button id='nerds' onclick='listnerds()'>ChgNrd</button>";
	var flee = "<button id='flee' onclick='flee()'>Flee</button>";
	return attack+item+change+flee;
}
function enemyaction(enemy)
{
	if(enemy.name.indexOf("boss"))
	{
		if(turn>10)
		{
		battlelose();
		}
	}
	var x = Math.floor(3*Math.random());
	enemy.movelist[x];
}
function attack()
{
	seconddiv.innerHTML=battlemenu();
	var button1="<br><input type='button' id='attack1' onclick='battleaction(this)'>";
	var button2="<br><input type='button' id='attack2' onclick='battleaction(this)'>";
	var button3="<br><input type='button' id='defend' onclick='battleaction(this)'>";
	var button4="<br><input type='button' id='status' onclick='battleaction(this)'>";
	seconddiv.innerHTML=seconddiv.innerHTML+button1+button2+button3+button4;
	document.getElementById('attack1').value=currentnerdclass.movelist.attack1;
	document.getElementById('attack2').value=currentnerdclass.movelist.attack2;
	document.getElementById('defend').value=currentnerdclass.movelist.defend;
	document.getElementById('status').value=currentnerdclass.movelist.status;
	document.getElementById('attack').disabled=true;
	document.getElementById('items').disabled=false;
	document.getElementById('nerds').disabled=false;
	document.getElementById('flee').disabled=false;
}
function listitems()
{
	seconddiv.innerHTML=battlemenu();
	var button1="<br><input type='button' id='item0' onclick=''>";
	var button2="<br><input type='button' id='item1' onclick=''>";
	var button3="<br><input type='button' id='item2' onclick=''>";
	var button4="<br><input type='button' id='item3' onclick=''>";
	seconddiv.innerHTML=seconddiv.innerHTML+button1+button2+button3+button4;
	for(var i=0;i<nerdlist.length;i++)
	{
	var inputid='item'+i
	document.getElementById(inputid).value=itemlist[i];
	}
	document.getElementById('attack').disabled=false;
	document.getElementById('items').disabled=true;
	document.getElementById('nerds').disabled=false;
	document.getElementById('flee').disabled=false;
}
function listnerds()
{
	seconddiv.innerHTML=battlemenu();
	var button1="<br><input type='button' id='nerd0'>";
	var button2="<br><input type='button' id='nerd1'>";
	var button3="<br><input type='button' id='nerd2'>";
	var button4="<br><input type='button' id='nerd3'>";
	seconddiv.innerHTML=seconddiv.innerHTML+button1+button2+button3+button4;
	for(var i=0;i<nerdlist.length;i++)
	{
	var inputid=document.getElementById('nerd'+i)
	var funcinput="chgnerd("+i+")";
	inputid.setAttribute("onclick",funcinput);
	inputid.value=nerdlist[i].name;
	}
	document.getElementById('attack').disabled=false;
	document.getElementById('items').disabled=false;
	document.getElementById('nerds').disabled=true;
	document.getElementById('flee').disabled=false;
}
function chgnerd(input)
{
currentnerdclass=nerdlist[input];
}
function flee()
{

}
function battleaction(button)
{
	
}
function battlewin()
{
return;
}