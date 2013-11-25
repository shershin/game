/*/ michael shershin & keshine o'young
this is going to be the javascript libary for nerd herder
time to herd some nerds /*/
//global variables
var mainDiv;
var mapdiv;
var seconddiv;
var nerdmovelist=new movelist("textbook smack","calculator drop","cower","contemplate");
var videogamemovelist=new movelist("360 no scope","cookie toss","overclock","invite spam");
var moviemovelist=new movelist("boulder roll","force choke","matrix time","expelliaramus");
var animemovelist=new movelist("kamehameha","friendship power","collectibles shield","magical girl kiss");

var nerdenemy=new enemy("generic nerd",10,"none","Generic nerd, does nothing special.");
var videogameenemy=new enemy("gamer",10,"movie","video game nerds spend much of their time in front of a screen, they are slaves to the flashing lights.");
var movieenemy=new enemy("movie buff",10,"anime","movie buffs will constantly make references to their favorite movies.");
var animeenemy=new enemy("otaku",10,"video game","The otaku collects figurines and loves the 'plot' of anime.");

var nerdenemyboss=new enemy("generic nerd boss",10,"none","This is the first boss and the last boss.");
var videogameenemyboss=new enemy("gamer boss",20,"movie","This gamer boss is a professional.");
var movieenemyboss=new enemy("movie buff boss",20,"anime","This movie boss knows everything about every movie.");
var animeenemyboss=new enemy("otaku boss",20,"video game","This otaku hasn't left his room in years to continue watching anime.");
var finalboss= new enemy("final boss", 50, "none", "This nerd laughs at your failed attempts to become one with nerdom.");
var videogamenerd=new nerdclass("video game nerd",videogamemovelist);
var nerd=new nerdclass("generic nerd",nerdmovelist);
var movienerd=new nerdclass("movie nerd",moviemovelist);
var animenerd=new nerdclass("anime nerd",animemovelist);
var turn;
var nerdlist=[nerd];
var itemlist=[];
var player=
{
name:"Bob",
sex:"unknown",
nerdsunlocked:nerdlist,
currentnerdclass:nerd,
videogameboss:false,
firstboss:false,
animeboss:false,
movieboss:false,
maxhealth:20,
health:1,
};
function startGame()
{
maindiv=document.getElementById('mainDiv');
seconddiv=document.getElementById('secondDiv');
mapdiv = document.getElementById('mapDiv');
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
        player.sex="boy";
break;
case 2:
        maindiv.innerHTML =
              "Oh hello, you can call me lover! <br>" +
              "What should I call you? <br>" +
               textbox + "<br>" + doneYet + "<br>" + ready;
        player.sex="girl";
break;
case 3:
        maindiv.innerHTML =
              "Umm okay, this makes my job a bit harder. <br>" +
              "Well what should i call you then? <br>" +
              textbox + "<br>" + doneYet + "<br>" +  ready;
        player.sex="thing";
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
player.name = document.getElementById('userName').value;
var yes = "<button onclick='timetogetgoing(true)'>Yes!!!</button>";
var no = "<button onclick='timetogetgoing(false)'>No??</button>";
maindiv.innerHTML = 
                "Awesome so I can call you " + player.name + "? <br>" +
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
var article;
switch(player.sex){
case "boy":
article= "he";
break;
case "girl":
article= "she";
break;
case "thing":
article = "it";
break;
}
  maindiv.innerHTML =
          "Once apon a time there was a young"+player.sex+" who hated all nerds <br>" +
          "Till "+article+" caught himself playing pokemon <br>" +
          "At that moment "+article+" knew "+article+" had wasted his life by not being a nerd <br>" +
          "so "+article+" quit being a teacher and went to collect all the powers <br>" +
          " <br><br><br><br> so started the herding of nerds<br>" +
          "<button onclick='mapStart()'>Start</button>";
}
function enemy(name,health,weakness,description)
{
        this.name=name;
        this.health=health;
        this.weakness=weakness;
        this.description=description;
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
function battle(enemy)
{
        statusflag=0;
        defendflag=0;
		ringflag=0;
		disableringflag=false;
        currentenemy=enemy;
        player.health=player.maxhealth;
        temphealth=currentenemy.health;
        turn=0;
        maindiv.innerHTML=currentenemy.name+"<br> wants to battle. What will you do?";
        seconddiv.innerHTML=battlemenu();       
}
function battlemenu()
{
        var attack = "<button id='attack' onclick='attack()'>Attack</button>";
        var item = "<button id='items' onclick='listitems()'>Item</button>";
        var change = "<button id='nerds' onclick='listnerds()'>ChgNrd</button>";
        var flee = "<button id='flee' onclick='flee()'>Flee</button>";
		mapdiv.innerHTML="your health="+player.health+"/"+player.maxhealth+" enemy health="+temphealth+"/"+currentenemy.health;
        return attack+item+change+flee;
}
function attack()
{
        seconddiv.innerHTML=battlemenu();
        var button1="<br><input type='button' id='attack1' onclick='battleaction(id);'>";
        var button2="<br><input type='button' id='attack2' onclick='battleaction(id);'>";
        var button3="<br><input type='button' id='defend' onclick='battleaction(id);'>";
        var button4="<br><input type='button' id='status' onclick='battleaction(id);'>";
        seconddiv.innerHTML=seconddiv.innerHTML+button1+button2+button3+button4;
        document.getElementById('attack1').value=player.currentnerdclass.movelist.attack1;
        document.getElementById('attack2').value=player.currentnerdclass.movelist.attack2;
        document.getElementById('defend').value=player.currentnerdclass.movelist.defend;
        document.getElementById('status').value=player.currentnerdclass.movelist.status;
        document.getElementById('attack').disabled=true;
        document.getElementById('items').disabled=false;
        document.getElementById('nerds').disabled=false;
        document.getElementById('flee').disabled=false;
}
function listitems()
{
        seconddiv.innerHTML=battlemenu();
        for(var i=0;i<itemlist.length;i++)
        {
            var item;
            var br=document.createElement("br");
            item=document.createElement("input");
            item.type="button";
			item.id=itemlist[i];
			item.onclick=function(input){
                                        return function(){
                                                //maindiv.innerHTML="you used "+itemlist[input];
                                                itemuse(itemlist[input]);
                                                };
                                        }(i);
			item.value=itemlist[i];
            seconddiv.appendChild(br);
            seconddiv.appendChild(item);
        }
		if(itemlist.indexOf("the one ring")+1)
		{
			if(disableringflag)
			{
				document.getElementById("the one ring").disabled=true;
			}
		}
        document.getElementById('attack').disabled=false;
        document.getElementById('items').disabled=true;
        document.getElementById('nerds').disabled=false;
        document.getElementById('flee').disabled=false;
}
function listnerds()
{
        seconddiv.innerHTML=battlemenu();
                //makes 4 buttons and puts the nerds from the list to change into that nerd
                //and adds them to the end of the menu
        for(var i=0;i<player.nerdsunlocked.length;i++)
        {
                var nerd=document.createElement("input");
                var br=document.createElement("br");
                nerd.type="button";
        nerd.id="nerd"+i
        nerd.onclick=function(input){
                                        return function(){
                                                player.currentnerdclass=nerdlist[input];
                                                };
                                        }(i);
        nerd.value=player.nerdsunlocked[i].name;
                seconddiv.appendChild(br);
                seconddiv.appendChild(nerd);
        }
        document.getElementById('attack').disabled=false;
        document.getElementById('items').disabled=false;
        document.getElementById('nerds').disabled=true;
        document.getElementById('flee').disabled=false;
}
function flee()
{
        seconddiv.innerHTML=battlemenu();
        var button1="<br><input type='button' id='flee' value='Are you sure?' onclick='mapStart()'>";
        seconddiv.innerHTML=seconddiv.innerHTML+button1;
        document.getElementById('attack').disabled=false;
    document.getElementById('items').disabled=false;
    document.getElementById('nerds').disabled=false;
    document.getElementById('flee').disabled=true;
}
function itemuse(input)
{
        switch(input){
        case "scanner":
			maindiv.innerHTML=currentenemy.description+" His weakness is "+currentenemy.weakness;
			enemyaction();
        break;
        case "senzu bean":
			player.health=player.maxhealth;
			maindiv.innerHTML="You ate your senzu bean and healed to full health.";
			itemlist.splice(itemlist.indexOf("senzu bean"),1);
			document.getElementById("senzu bean").disabled=true;
			enemyaction();
        break;
        case "the one ring":
			ringflag=3;
			disableringflag=true;
			maindiv.innerHTML="You turn invisible for three turns";
			document.getElementById("the one ring").disabled=true;
			enemyaction();
        break;
        case "junk food":
			var effect=Math.floor(Math.random()*100);
			if(effect<60){
				maindiv.innerHTML="You become bloated from eating so much junk food, and can't move";
				enemyaction();
			}
			else if(effect<70&&effect>=60){
				maindiv.innerHTML="cheetos restores 8 life";
				player.health+=8;
				if(player.health>player.maxhealth){
				player.health=player.maxhealth;
				}
				enemyaction();
			}
			else if(effect<95&&effect>=70){
				maindiv.innerHTML="<br>energy drink lets you take another turn";
			}
			else if(effect<99&&effect>=95){
				maindiv.innerHTML="pizza restores 15 life";
				player.health+=15;
				if(player.health>player.maxhealth){
				player.health=player.maxhealth;
				}
				enemyaction();
			}
			else if(effect===99){
				alert("You found CHEESUS in a cheetos bag and he smites your enemy");
				temphealth=0;
				battlecheck();
			}
        break;
        }
}
function battleaction(id)
{
        switch(id){
        case "attack1":
        var dmg=1;
        if(statusflag)
        {
                dmg=dmg+2;
                statusflag--;
        }
        if(player.currentnerdclass.name.indexOf(currentenemy.weakness)+1)
        {
                dmg=dmg*2;
        }
        temphealth=temphealth-dmg;
        maindiv.innerHTML="you attacked "+currentenemy.name+" for "+dmg+" damage."
        break;
        case "attack2":
        temphealth--;
        temphealth--;
        maindiv.innerHTML="you attacked "+currentenemy.name+" for 2 damage."
        break;
        case "defend":
        maindiv.innerHTML="you take 1/2 damage for 5 turns"
        defendflag=5;
        break;
        case "status":
        maindiv.innerHTML="your main attack increases in power for three attacks."
        statusflag=3;
        break;
        }
		battlecheck();
		if(temphealth>0)
		{
        enemyaction();
		}
}
function enemyaction()
{
        turn++;
        var dmg=2;
    if(currentenemy.name.indexOf("boss")+1)
    {
                dmg=Math.ceil(3*Math.random()+2);
    }
    if(defendflag)
    {
        dmg=Math.ceil(dmg/2);
        defendflag--;
    }
	if(ringflag)
	{
	dmg=0;
	ringflag--;
	}
    player.health=player.health-dmg;
    maindiv.innerHTML=maindiv.innerHTML+"<br>"+currentenemy.name+" hit you for "+dmg+" damage."
    battlecheck();
}
function battlecheck()
{
        mapdiv.innerHTML="your health="+player.health+"/"+player.maxhealth+" enemy health="+temphealth+"/"+currentenemy.health;
        if(temphealth<=0)
        {
                alert("Congratulations, you beat "+currentenemy.name+".");
                if(currentenemy.name.indexOf("boss")+1)
                {
                        switch(currentenemy.name){
                        case "generic nerd boss":
                        player.firstboss=true;
                        if(itemlist.indexOf("scanner")===-1)
                        {
						alert("you already have this nerd's powers but you steal his pocket protector increasing your life total by 20");
                        itemlist.push("scanner");
                        alert("the nerd dropped a scanner, use it to determine enemy weaknesses");
						player.maxhealth+=20;
                        }
						else{
						alert("you already have this nerd's powers");
						}						
                        break;
                        case "gamer boss":
                        player.gamerboss=true;
                        if(nerdlist.indexOf(videogamenerd)===-1)
                        {
                        nerdlist.push(videogamenerd);
						player.maxhealth+=20;
						alert("you absorb this nerd's powers increasing your life total by 20");
                        }
						else{
						alert("you already have this nerd's powers");
						}
                        if(itemlist.indexOf("junk food")===-1)
                        {
                        itemlist.push("junk food");
                        alert("Enemy dropped lifetime supply of junk food, eating it will do something random, but normally it will just make you fat.");
                        }
                        break;
                        case "movie buff boss":
                        player.movieboss=true;
						if(nerdlist.indexOf(movienerd)===-1)
                        {
                        nerdlist.push(movienerd);
						player.maxhealth+=20;
						alert("you absorb this nerd's powers increasing your life total by 20");
                        }
						else{
						alert("you already have this nerd's powers");
						}						
                        if(itemlist.indexOf("the one ring")===-1)
                        {
                        itemlist.push("the one ring");
                        alert("He dropped the one ring, use it once per battle to take no damage for 3 turns");
                        }
                        break;
                        case "otaku boss":
                        player.animeboss=true;
                        if(nerdlist.indexOf(animenerd)===-1)
                        {
                        nerdlist.push(animenerd);
						player.maxhealth+=20;
						alert("you absorb this nerd's powers increasing your life total by 20");
                        }
						else{
						alert("you already have this nerd's powers");
						}						
                        if(itemlist.indexOf("senzu bean")===-1)
                        {
                        itemlist.push("senzu bean");
                        alert("otaku dropped a senzu bean, use it to fully heal once. This item is consumed when used and you can only carry one at a time. Come back to fight this boss to get another one after you eat this one.");
                        }
                        break;
						case "final boss":
						gamewin();
                        }
                }
                mapStart();
        }
        if(player.health<=0)
        {
                alert("you got owned scrub");
                mapStart();
        }
}
//map bitches
var back2mainmap;
var maristBack;
var mordorBack;
var racoonBack;
var electricBack;
var mapdiv;
var maristFight;
var mordorFight;
var racoonFight;
var electricFight;
function mapStart()
{
document.body.background = "../game/pic/pic.jpg";
maindiv.innerHTML=""
mapdiv.innerHTML="";
seconddiv.innerHTML="";
var maristbutton="<button onclick='maristTown()' id='maristTown'>Marist</button>";
var mordorbutton="<button onclick='mordorTown()' id='mordorTown' disabled=disabled >Mordor</button>";
var palletbutton="<button onclick='palletTown()' id='paletTown' disabled=disabled >Pallet Town</button>";
var electricbutton="<button onclick='electricTown()' id='electricTown' disabled=disabled>Electric Town</button>"
var racoonbutton="<button onclick='racoonTown()' id='racoonTown' disabled=disabled>Raccoon City</button>";
mapdiv.innerHTML =
	"Click on the town you want to enter but you have to beat a few the current area in order to move to the next.<br>" +
	maristbutton+ "<br>" +mordorbutton+electricbutton+racoonbutton+ "<br>" +palletbutton;
if(player.firstboss)
{
		document.getElementById('mordorTown').disabled=false;
		document.getElementById('paletTown').disabled=false;
		document.getElementById('electricTown').disabled=false;
		document.getElementById('racoonTown').disabled=false;
}                 
}
//marist 
function maristTown()
{
back2mainmap = "<button onclick='mapStart()'>Back</button>";
  mapdiv.innerHTML = 
          "<button onclick='maristBuild(1)'>Building</button>" +
          "<button onclick='maristBuild(2)'>Building</button>" +
          "<button onclick='maristBuild(3)'>Building</button><br>" +
          "<button onclick='maristBuild(4)'>Building</button><br>" +
		  back2mainmap;
  document.body.background = "../game/pic/marist.jpg";
}
function maristBuild(num)
{
maristFight = "<button onclick='battle(nerdenemy)'>FIGHT</button>";
maristBack = "<button onclick='maristTown()'>Back</button>";
  if (num === 1)
      { mapdiv.innerHTML =
                "<button onclick='maristPerson(1)'>Person</button>" +
                "<br>"+
                maristBack;
      } 
  else if (num === 2)
      { mapdiv.innerHTML =
                "<button onclick='maristPerson(2)'>Person</button>" +
                "<br>"+
                maristBack;
      }
  else if (num === 3)
      { mapdiv.innerHTML =
                "<button onclick='maristPerson(3)'>Person</button>" +
                "<br>"+
                maristBack;
      }
  else
      { mapdiv.innerHTML =
                "<button onclick='maristPerson(4)'>Person</button>" +
                "<br>"+
                maristBack;
      }
}
function maristPerson(num)
{ 
  if (num === 1)
      { mapdiv.innerHTML =
                "Studing sucks!!!" +
				"<br>"+
                maristFight +
				"<br>" +
				 maristBack;
      }
  else if (num === 2)
      { mapdiv.innerHTML =
                "Have you meet Michael Shershin or Keshine O\'young....I haven\'t but I herd they are two amazing guys." +
                "<br>" +
				maristFight +
				"<br>" +
				maristBack;
      }
  else if (num === 3)
      { mapdiv.innerHTML = 
                "Oh you must be " + player.name +
                ", I must tell you that the journy will be long and difficult, but to help you I shall give you a hint." + 
                "Try to talk to everyone they may give you more helpful hints." + 
                "<br>Also be wary of the darkside." +
				"<br>"+
                maristFight +
				"<br>" +
				maristBack;
      }
  else
	  { mapdiv.innerHTML =
				"Welcome to my lair " + player.name +
				" it is time to battle" +
				"<br>" +
				"<button onclick='battle(nerdenemyboss)'>FIGHT</button><br>" +
				maristBack;
	  }
		
}
//mordor
function mordorTown()
{
  mapdiv.innerHTML = 
          "<button onclick='mordorBuild(1)'>Building</button>" +
          "<button onclick='mordorBuild(2)'>Building</button>" +
          "<button onclick='mordorBuild(3)'>Building</button><br>" +
          "<button onclick='mordorBuild(4)'>Building</button><br>" +
		  back2mainmap;
  document.body.background = "../game/pic/mordor.jpg";
}
function mordorBuild(num)
{
mordorFight = "<button onclick='battle(movieenemy)'>FIGHT</button>";
mordorBack = "<button onclick='mordorTown()'>Back</button>";
  if (num === 1)
      { mapdiv.innerHTML =
                "<button onclick='mordorPerson(1)'>Person</button>" +
				"<br>" +
				mordorBack;
      } 
  else if (num === 2)
      { mapdiv.innerHTML =
                "<button onclick='mordorPerson(2)'>Person</button>" +
				"<br>" +
                mordorBack;
      }
  else if (num === 3)
      { mapdiv.innerHTML =
                "<button onclick='mordorPerson(3)'>Person</button>" +
				"<br>" +
                mordorBack;
      }
  else
      { mapdiv.innerHTML =
                "<button onclick='mordorPerson(4)'>Person</button>" +
                "<br>" +
				mordorBack;
      }
}
function mordorPerson(num)
{ 
  if (num === 1)
      { mapdiv.innerHTML =
                "Finding out peoples weakness is key for victory!!" +
				"<br>" +
                 mordorFight +
				"<br>" +
				mordorBack;
      }
  else if (num === 2)
      { mapdiv.innerHTML =
                "Have you seen some hobbits running around?" +
				"<br>" +
                mordorFight +
				"<br>" +
				mordorBack;
      }
  else if (num === 3)
      { mapdiv.innerHTML = 
                "Movies are amazing I am in love with the big screen" + 
                "<br>" +
				mordorFight +
				"<br>" +
				mordorBack;
      }
  else 
	  { mapdiv.innerHTML = 
			"you may have been able to beat my brothers but there is no way you can beat me" +
			"<br>" +
			"<button onclick='battle(movieenemyboss)'>FIGHT</button>" +
			"<br>" +
			mordorBack;
			
	  }
}
//Racoon City
function racoonTown()
{
  mapdiv.innerHTML = 
          "<button onclick='racoonBuild(1)'>Building</button>" +
          "<button onclick='racoonBuild(2)'>Building</button>" +
          "<button onclick='racoonBuild(3)'>Building</button><br>" +
          "<button onclick='racoonBuild(4)'>Building</button><br>" +
		  back2mainmap;
  document.body.background = "../game/pic/racooncity.jpg";
}
function racoonBuild(num)
{
racoonBack = "<button onclick='racoonTown()'>Back</button>";
racoonFight = "<button onclick='battle(videogameenemy)'>FIGHT</button>";
  if (num === 1)
      { mapdiv.innerHTML =
                "<button onclick='racoonPerson(1)'>Person</button>" +
				"<br>" +
                racoonBack;
      } 
  else if (num === 2)
      { mapdiv.innerHTML =
                "<button onclick='racoonPerson(2)'>Person</button>" +
				"<br>" +
                racoonBack;
      }
  else if (num === 3)
      { mapdiv.innerHTML =
                "<button onclick='racoonPerson(3)'>Person</button>" +
                "<br>" +
				racoonBack;
      }
  else
      { mapdiv.innerHTML =
                "<button onclick='racoonPerson(4)'>Person</button>" +
                "<br>" +
				racoonBack;
      }
}
function racoonPerson(num)
{ 
  if (num === 1)
      { mapdiv.innerHTML =
                "Gears of War for life!" +
				"<br>" +
                racoonFight +
				"<br>" +
				racoonBack;
      }
  else if (num === 2)
      { mapdiv.innerHTML =
                "Once upon a time there was a teacher who made his students write a video game....sorry I forgot the ending." +
				"<br>" +
                racoonFight +
				"<br>" +
				racoonBack;
      }
  else if (num === 3)
      { mapdiv.innerHTML = 
                "Using items increase you chance to win." + 
				"<br>" +
                racoonFight +
				"<br>" +
				racoonBack;
                
      }
  else
	  {mapdiv.innerHTML = 
				"MUHAHAHAHAHAHAHAHAHAHA welcome to the arena" +
				"<br>" + 
				"<button onclick='battle(videogameenemyboss)'>FIGHT</button>" +
				"<br>" +
				racoonBack;
	  }
}
//Electric City
function electricTown()
{
  mapdiv.innerHTML = 
          "<button onclick='electricBuild(1)'>Building</button>" +
          "<button onclick='electricBuild(2)'>Building</button>" +
          "<button onclick='electricBuild(3)'>Building</button><br>" +
          "<button onclick='electricBuild(4)'>Building</button><br>" +
		  back2mainmap;
  document.body.background = "../game/pic/electriccity.jpg";
}
function electricBuild(num)
{
electricFight = "<button onclick='battle(animeenemy)'>FIGHT</button>";
electricBack = "<button onclick='electricTown()'>Back</button>";
  if (num === 1)
      { mapdiv.innerHTML =
                "<button onclick='electricPerson(1)'>Person</button>" +
				"<br>" +
                electricBack;
      } 
  else if (num === 2)
      { mapdiv.innerHTML =
                "<button onclick='electricPerson(2)'>Person</button>" +
				"<br>" +
                electricBack;
      }
  else if (num === 3)
      { mapdiv.innerHTML =
                "<button onclick='electricPerson(3)'>Person</button>" +
				"<br>" +
                electricBack;
      }
  else
      { mapdiv.innerHTML =
                "<button onclick='electricPerson(4)'>Person</button>" +
                "<br>" +
				electricBack;
      }
}
function electricPerson(num)
{ 
  if (num === 1)
      { mapdiv.innerHTML =
                "When life gives you lemons, watch anime." +
				"<br>" +
                electricFight +
				"<br>" +
                electricBack;
      }
  else if (num === 2)
      { mapdiv.innerHTML =
                "Welcome to otaku land." +
				"<br>" +
                electricFight +
				"<br>" +
                electricBack;
      }
  else if (num === 3)
      { mapdiv.innerHTML = 
                "Hey want to watch anime with me?" +
				"<br>" +
                electricFight +
				"<br>" +
                electricBack; 
      }
  else
	{ 	mapdiv.innerHTML="Stop letting the light in!!!!" +
		"<br>" +
		"<button onclick='battle(animeenemyboss)'>FIGHT</button>" +
		"<br>" +
        electricBack;
	}
}
function palletTown()
{ mapdiv.innerHTML = 
		"You must be strong to have made it this far but prepare to die" +
		"<br>" +
		"<button onclick='battle(finalboss)'>FIGHT</button><br>" +
		back2mainmap;
	document.body.background = "../game/pic/pallettown.png";
}
function gamewin(){
alert("CONGRATULATIONS YOU WIN, YOU ARE A GIANT NERD");
document.body.background = "../game/pic/portalcake.jpg";
mapdiv.innerHTML = 
		"<button onclick='startGame()'>Play Again</button>";
}