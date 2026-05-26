
var message=["Make yourself familiar with the insturments by hovering over them, then click on start button to start the experiment.",
"Turn on the weighing machine.",
"Place the empty petri dish on the weighing machine.",
"Press the tare button to reset the weight measurement.",
"Weight the sugar powder using spatula.",
"Add more sugar powder upto 30.0 gm.",
"Good!\nNow, drop the powder into empty conical flask by lifting the petri dish.",
"With the help of a pipette, take 60ml of distilled water from the beaker and pour it into the flask.",
"Your 50% sugar concentrated solution is ready.\n\nNow, click on Next button to move to the next step of the experiment.",

"Click on pipette to take 10ml of distilled water.",
"Pour it into empty flask.",
"Click on pipette to take 40ml of 50% sugar concentrated solution.",
"Add this sugar solution to the flask containing distilled water.",
"Great!\nYour 40% sugar concentrated solution is ready. Now wash the pipette and \n\nClick on pipette to take 30ml of distilled water.",
"Pour it into empty flask.",
"Click on pipette to take 20ml of 50% sugar concentrated solution.",
"Add this sugar solution to the flask containing distilled water.",
"Great!\nYour 20% sugar concentrated solution is ready.  Now wash the pipette and \n\nClick on pipette to take 40ml of distilled water.",
"Pour it into empty flask.",
"Click on pipette to take 10ml of 50% sugar concentrated solution.",
"Add this sugar solution to the flask containing distilled water.",
"Great!\nYour 10% sugar concentrated solution is ready.  Now wash the pipette and \n\nClick on pipette to take 45ml of distilled water.",
"Pour it into empty flask.",
"Click on pipette to take 5ml of 50% sugar concentrated solution.",
"Add this sugar solution to the flask containing distilled water.",
"Great!\nYour 5% sugar concentrated solution is ready.\n\nNow, click on Next button to move to the next step of the experiment.",

"Turn on the weighing machine",
"Place the empty pycnometer(beside conical flask) on the weighing machine and note down the weight of it.",
"Now, put back the empty pycnometer on the table.",
"Using a pipette, take sufficient amount of distilled water.",
"Pour the water into empty pycnometer",
"Again using a pipette, take sufficient amount of 50% sugar concentrated solution.",
"Pour the solution into empty pycnometer",
"Put the pipette back in its place",
"Place the pycnometer filled with water on the weighing machine and note down the weight of it.",
"Now, put back the water filled pycnometer on the table.",
"Place the pycnometer filled with sugar solution on the weighing machine and note down the weight of it.",
"Now, put back the pycnometer filled with sugar solution on the table.",
"Now wash the pipette and, take sufficient amount of 40% sugar concentrated solution.",
"Pour the solution into empty pycnometer",
"Put the pipette back in its place",
"Place the pycnometer filled with sugar solution on the weighing machine and note down the weight of it.",
"Now, put back the pycnometer filled with sugar solution on the table. And repeat the steps for 20%, 10% and 5% solutions",
  
"Wash the pipette and then take sufficient amount of given unknown sugar concentrated solution.",
"Pour the solution into empty pycnometer",
"Put the pipette back in its place",
"Place the pycnometer filled with sugar solution on the weighing machine and note down the weight of it.",
"Now, put back the pycnometer filled with sugar solution on the table.",
"Now, click on Next button to move to the next step of the experiment.",

"Using a pippette, take sufficient amount of distilled water.",
"Pour this solution into the viscometer upto mark C",
"From the other side of viscometer, suck the sugar solution using the suction knob(red colour) of the viscometer at the end of pipe.",
"Good! now press and release the suction knob(red colour) to let the sugar solution fall freely.\n\n Wait for some time till the soultion reaches to Mark B",
"Click on the Forward button to get the final results.",
"Note down the time taken to reach the sugar solution from Mark A to Mark B and click on Reset button.\n\n After that, Click on next button.",

"Using a pippette, take sufficient amount of 5% sugar concentrated solution.",
"Pour this solution into the viscometer upto mark C",
"From the other side of viscometer, suck the sugar solution using the suction knob(red colour) of the viscometer at the end of pipe.",
"Good! now press and release the suction knob(red colour) to  let the sugar solution fall freely.\n\n Wait for some time till the soultion reaches to Mark B",
"Click on the Forward button to get the final results.",
"Note down the time taken to reach the sugar solution from Mark A to Mark B and click on Reset button.\n\n After that, Click on next button.",

"Using a pippette, take sufficient amount of Unknown sugar concentrated solution.",
"Pour this solution into the viscometer upto mark C",
"From the other side of viscometer, suck the sugar solution using the suction knob(red colour) of the viscometer at the end of pipe.",
"Good! now press and release the suction knob(red colour) to  let the sugar solution fall freely.\n\n Wait for some time till the soultion reaches to Mark B",
"Click on the Forward button to get the final results.",
"Note down the time taken to reach the sugar solution from Mark A to Mark B and click on Reset button.\n\n After that, Click on next button.",

"Excellent! you have completed all the steps of the experiment.\n\nNow, you may proceed to the calculation part."
]



var lab =document.querySelector("#lab")
var zlab =document.querySelector("#zlab")
var start =document.querySelector("#start")
var next1 =document.querySelector("#next")
var forward1 =document.querySelector("#forward")
var visco =document.querySelector("#viscometer")
var viscofill =document.querySelector("#viscometerfill")
var viscosuc1 =document.querySelector("#viscometersuc1")
var viscosuc2 =document.querySelector("#viscometersuc2")
var viscosuc3 =document.querySelector("#viscometersuc3")
var viscofall1 =document.querySelector("#viscometerfall1")
var viscofall2 =document.querySelector("#viscometerfall2")
var viscofall3 =document.querySelector("#viscometerfall3")
var viscofall4 =document.querySelector("#viscometerfall4")
var viscofall5 =document.querySelector("#viscometerfall5")
var viscofall6 =document.querySelector("#viscometerfall6")
var viscofall7 =document.querySelector("#viscometerfall7")
var mach =document.querySelector("#machine")
var num =document.querySelector("#number")
var on1 =document.querySelector("#on")
var tare1 =document.querySelector("#tare")
var suc =document.querySelector("#suction")
var dish =document.querySelector("#pdish")
var pow =document.querySelector("#pow")
var pow1 =document.querySelector("#pow1")
var pow1c =document.querySelector("#pow1c")
var pow2 =document.querySelector("#pow2")
var spat =document.querySelector("#spatula")
var fspat =document.querySelector("#fspatula")
var fun =document.querySelector("#funnel")
var fun2 =document.querySelector("#funnel2")
var wbeak =document.querySelector("#wbeaker")
var obot =document.querySelector("#obottle")
var fobot =document.querySelector("#fobottle")
var bot =document.querySelector("#bottle")
var fbot1 =document.querySelector("#fbottle1")
var bot2 =document.querySelector("#bottle2")
var fbot2 =document.querySelector("#fbottle2")
var edishv =document.querySelector("#edish")
var ef1=document.querySelector("#eflask1")
var ef2=document.querySelector("#eflask2")
var ef3=document.querySelector("#eflask3")
var ef4=document.querySelector("#eflask4")
var sol=document.querySelector("#sol")
var sol50=document.querySelector("#sol50")
var sol40=document.querySelector("#sol40")
var sol20=document.querySelector("#sol20")
var sol10=document.querySelector("#sol10")
var sol5=document.querySelector("#sol5")
var solunk=document.querySelector("#solunk")
var pip1=document.querySelector("#pip")
var pip60=document.querySelector("#pip60")
var pip40=document.querySelector("#pip40")
var pip30=document.querySelector("#pip30")
var pip20=document.querySelector("#pip20")
var pip10=document.querySelector("#pip10")
var pip45=document.querySelector("#pip45")
var pip5=document.querySelector("#pip5")
var wdrop1=document.querySelector("#waterdrop1")
var wdrop2=document.querySelector("#waterdrop2")
var wdrop3=document.querySelector("#waterdrop3")
var wdropAlt=document.querySelector("#waterdropAlt")
var wc;

var lab = document.querySelector("#lab");
var zlab = document.querySelector("#zlab");
var start = document.querySelector("#start");
var next1 = document.querySelector("#next");
var forward1 = document.querySelector("#forward");
var visco = document.querySelector("#viscometer");
var viscofill = document.querySelector("#viscometerfill");
var viscosuc1 = document.querySelector("#viscometersuc1");
var viscosuc2 = document.querySelector("#viscometersuc2");
var viscosuc3 = document.querySelector("#viscometersuc3");
var viscofall1 = document.querySelector("#viscometerfall1");
var viscofall2 = document.querySelector("#viscometerfall2");
var viscofall3 = document.querySelector("#viscometerfall3");
var viscofall4 = document.querySelector("#viscometerfall4");
var viscofall5 = document.querySelector("#viscometerfall5");
var viscofall6 = document.querySelector("#viscometerfall6");
var viscofall7 = document.querySelector("#viscometerfall7");
var mach = document.querySelector("#machine");
var num = document.querySelector("#number");
var on1 = document.querySelector("#on");
var tare1 = document.querySelector("#tare");
var suc = document.querySelector("#suction");
var dish = document.querySelector("#pdish");
var pow = document.querySelector("#pow");
var pow1 = document.querySelector("#pow1");
var pow1c = document.querySelector("#pow1c");
var pow2 = document.querySelector("#pow2");
var spat = document.querySelector("#spatula");
var fspat = document.querySelector("#fspatula");
var fun = document.querySelector("#funnel");
var fun2 = document.querySelector("#funnel2");
var wbeak = document.querySelector("#wbeaker");
var obot = document.querySelector("#obottle");
var fobot = document.querySelector("#fobottle");
var bot = document.querySelector("#bottle");
var fbot1 = document.querySelector("#fbottle1");
var bot2 = document.querySelector("#bottle2");
var fbot2 = document.querySelector("#fbottle2");
var edishv = document.querySelector("#edish");
var ef1 = document.querySelector("#eflask1");
var ef2 = document.querySelector("#eflask2");
var ef3 = document.querySelector("#eflask3");
var ef4 = document.querySelector("#eflask4");
var sol = document.querySelector("#sol");
var sol50 = document.querySelector("#sol50");
var sol40 = document.querySelector("#sol40");
var sol20 = document.querySelector("#sol20");
var sol10 = document.querySelector("#sol10");
var sol5 = document.querySelector("#sol5");
var solunk = document.querySelector("#solunk");
var pip1 = document.querySelector("#pip");
var pip60 = document.querySelector("#pip60");
var pip40 = document.querySelector("#pip40");
var pip30 = document.querySelector("#pip30");
var pip20 = document.querySelector("#pip20");
var pip10 = document.querySelector("#pip10");
var pip45 = document.querySelector("#pip45");
var pip5 = document.querySelector("#pip5");
var wdrop1 = document.querySelector("#waterdrop1");
var wdrop2 = document.querySelector("#waterdrop2");
var wdrop3 = document.querySelector("#waterdrop3");
var wdropAlt = document.querySelector("#waterdropAlt");
var wc;

var ins = document.querySelector("#ins");
var mes = document.querySelector("#text");
var langselector = document.querySelector("#langselector");

var hovt0 = document.querySelector("#hovt");
var hviscometer0 = document.querySelector("#hviscometer");
var hmachine0 = document.querySelector("#hmachine");
var hfunnel0 = document.querySelector("#hfunnel");
var hspatula0 = document.querySelector("#hspatula");
var hpdish0 = document.querySelector("#hpdish");
var hpow0 = document.querySelector("#hpow");
var heflask10 = document.querySelector("#heflask1");
var hwbeaker0 = document.querySelector("#hwbeaker");
var hbottle0 = document.querySelector("#hbottle");
var hpip0 = document.querySelector("#hpip");
var distilledflask = document.querySelector("#distilledflask");

var f;
var nb;
var ob = 0;
var tb;
var rsize;
var lang = "eng";
var messcounter = 0;

function update(){
    if (mes && message[messcounter]) {
        mes.innerText = message[messcounter];
        messcounter += 1; 
    }
}

// Automatically clear language selection and start in English
window.addEventListener('load', function() {

    if (langselector) langselector.style.display = "none";
    update();
});


 function start1(){
    // console.log("hii");
    lab.style.visibility="hidden"
    zlab.style.visibility="visible"
    start.style.visibility="hidden"
    visco.style.visibility="hidden"
    bot.style.visibility="hidden"
    hviscometer0.style.visibility="hidden"
    hmachine0.style.visibility="hidden"
    hfunnel0.style.visibility="hidden"
    hspatula0.style.visibility="hidden"
    hpdish0.style.visibility="hidden"
    hpow0.style.visibility="hidden"
    heflask10.style.visibility="hidden"
    hwbeaker0.style.visibility="hidden"
    hbottle0.style.visibility="hidden"
    hpip0.style.visibility="hidden"
    resize()
    update()
    
}
spat.style.transform="rotate(20deg)";
fspat.style.transform="rotate(20deg)";
function resize(){
  mach.style.height="15%"
  mach.style.width="17%"
  mach.style.top="71%"
  mach.style.left="11%"
  num.style.top="79%"
  num.style.left="17%"
  num.style.fontsize="2.5vw";
  on1.style.visibility="visible"
  on1.style.top="77.4%"
  on1.style.left="25.5%"
  on1.style.height="2.5%"
  on1.style.width="1.5%"
  tare1.style.visibility="visible"
  tare1.style.top="80.7%"
  tare1.style.left="24.8%"
  tare1.style.height="2.5%"
  tare1.style.width="2.5%"
  edishv.style.visibility="visible"
  edishv.style.top="88%"
  edishv.style.left="30%"
  dish.style.top="88%"
  dish.style.left="40.3%"
  pow.style.top="85.3%"
  pow.style.left="40.3%"
  pow.style.height="6%"
  pow.style.width="7.5%"
  spat.style.top="87%"
  spat.style.left="50%"
  fspat.style.top="87%"
  fspat.style.left="50%"
  fun.style.visibility="hidden";
  ef1.style.top="56%"
  ef1.style.left="50%"
  ef1.style.height="23%"
  sol.style.top="56%"
  sol.style.left="50%"
  sol.style.height="23%"
  pip1.style.top="63%"
  pip1.style.left="70%"
  pip1.style.width="1.5%"
  pip60.style.top="63%"
  pip60.style.left="70%"
  pip60.style.width="1.5%"
  wbeak.style.top="64%"
  wbeak.style.left="83%"

}
function on(){
  if(ob==0){
    num.style.visibility="visible"
    f=0;
    update()
  }
  if(ob==1){
    num.style.visibility="visible"
    f=21;
    ob=2;
    update()
  }
}
function tare(){
  if(tb==0){
    num.innerText="0.0 gm"
    f=1;
    tb=1;
    update()
  }

}

function edish(){
  if(f==0){
    edishv.style.transform="translate(-190%,-450%)";
    setTimeout(function(){
      num.innerText="0.5 gm"
      update()
    },1000)
    tb=0;
    
  }
  if(f==3){
    fun2.style.visibility="visible";
    fun2.style.height="15%"
    fun2.style.top="48.5%"
    fun2.style.left="50%"
    edishv.style.transform="translate(200%,-1150%) rotate(45deg)";
    pow1.style.transform="translate(1050%,-900%) rotate(45deg)";
    pow2.style.transform="translate(970%,-900%) rotate(45deg)";
    pow1.style.visibility="hidden"
    pow2.style.visibility="hidden"
    num.innerText="0.0 gm"
    setTimeout(function(){
      pow1c.style.visibility="visible"
      edishv.style.visibility="hidden"
      fun2.style.visibility="hidden";
      update()
    },1000)
    f=4;
    
  }
 
}

 function spatula(){
  if(f==1){
    spat.style.transform="translate(-55% ,-85%) rotate(0deg)";
    fspat.style.transform="translate(-55% ,-85%) rotate(0deg)";
    setTimeout(function(){
      fspat.style.visibility="visible";
      spat.style.visibility="hidden";
      fspat.style.transform="translate(-250%,-270%)";
      spat.style.transform="translate(-250%,-270%)";
    },1000)
    setTimeout(function(){
        fspat.style.visibility="hidden"
        pow1.style.visibility="visible"
        spat.style.visibility="visible";
        num.innerText="15.0 gm"

    },2500)
    setTimeout(function(){
      spat.style.transform="translate(-55% ,-85%) rotate(0deg)";
      fspat.style.transform="translate(-55% ,-85%) rotate(0deg)";
      update()
    },3500)
    f=2;
     
  } 
  else if(f==2){
      fspat.style.visibility="visible";
      spat.style.visibility="hidden";
      fspat.style.transform="translate(-235%,-270%)";
      spat.style.transform="translate(-235%,-270%)";
      setTimeout(function(){
        fspat.style.visibility="hidden"
        pow2.style.visibility="visible"
        num.innerText="30.0 gm"
        spat.style.visibility="visible";
      },2500)
      setTimeout(function(){
        spat.style.transform="translate(0%,0%)rotate(20deg)"
        fspat.style.transform="translate(0%,0%)rotate(20deg)"
        update()
      },3500)
      f=3;
      
  }
}

function pipette(){
  if(f==4){
    pip1.style.transform="translate(-1350%,-83%) rotate(-90deg)";
    pip60.style.transform="translate(-1350%,-83%) rotate(-90deg)";
    setTimeout(function(){
      pip1.style.top="78%"
      pip60.style.top="78%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
    },2300)
    setTimeout(function(){
      pip1.style.top="60%"
      pip60.style.top="60%"
    },3000)
    setTimeout(function(){
      pip1.style.top="55%"
      pip1.style.left="35.7%"
      pip60.style.top="55%"
      pip60.style.left="35.7%"
    },4000)
    setTimeout(function(){
      pip1.style.top="75%"
      pip60.style.top="75%"
    },5500)
    setTimeout(function(){
      pip1.style.visibility="visible"
      pow1c.style.visibility="hidden"
      pip60.style.visibility="hidden"
      sol.style.visibility="visible"
      ef1.style.visibility="hidden"
    },6700)
    setTimeout(function(){
      pip1.style.top="55%"
      pip60.style.top="55%"
    },7500)
    setTimeout(function(){
      pip1.style.transform="translate(300%,-180%) rotate(0deg)";
      next1.style.visibility="visible"
      distilledflask.style.visibility= "visible"
      update() 
    },8500)
    nb=1;
    f=null;
  }
  if(f==5){
    // next1.style.visibility= "visible"
    pip1.style.transform="translate(-1350%,-83%) rotate(-90deg)";
    pip40.style.transform="translate(-1350%,-83%) rotate(-90deg)";
    pip30.style.transform="translate(-1350%,-83%) rotate(-90deg)"; 
    pip20.style.transform="translate(-1350%,-83%) rotate(-90deg)"; 
    pip10.style.transform="translate(-1350%,-83%) rotate(-90deg)"; 
    pip45.style.transform="translate(-1350%,-83%) rotate(-90deg)"; 
    pip5.style.transform="translate(-1350%,-83%) rotate(-90deg)";
    setTimeout(function(){
      pip1.style.top="78%"
      pip10.style.top="78%"
    },1000)
    setTimeout(function(){
      pip10.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2000)

    // ef1.style.visibility= "hidden";
    // ef2.style.visibility= "hidden";
    // ef3.style.visibility= "hidden";
    // ef4.style.visibility= "hidden";
    // pip10.style.visibility="hidden"
    // pip1.style.visibility="hidden"
    // pip40.style.visibility="hidden"
    // pip30.style.visibility="hidden"
    // pip20.style.visibility="hidden"
    // pip20.style.visibility="hidden"
    // pip45.style.visibility="hidden"
    // pip45.style.visibility="hidden"

    f=6;
  } 
  if(f==7){
    pip1.style.top="55%"
    pip10.style.top="55%"
    setTimeout(function(){
      pip1.style.left="35.6%"
      pip40.style.left="35.6%"
      pip30.style.left="35.6%"
      pip20.style.left="35.6%"
      pip10.style.left="35.6%"
      pip45.style.left="35.6%"
      pip5.style.left="35.6%"

    },1500)
    setTimeout(function(){
      pip1.style.top="78%"
      pip40.style.top="78%"
    },2500)
    setTimeout(function(){
      pip40.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },3300)
    f=8;
  }
  if(f==9){
    pip1.style.top="55%"
    pip40.style.top="55%"

    setTimeout(function(){
      pip1.style.left="58%"
      pip40.style.left="58%"
      pip30.style.left="58%"
      pip20.style.left="58%"
      pip10.style.left="58%"
      pip45.style.left="58%"
      pip5.style.left="58%"
    },1500)  

    setTimeout(() => {
       pip1.style.top="78%"
       pip40.style.top="78%"
    }, 2500);

    setTimeout(() => {
      pip1.style.top="55%"
      pip40.style.top="55%"
    }, 3300);
    
     setTimeout(function(){
      pip1.style.left="70%"
      pip40.style.left="70%"
      pip30.style.left="70%"
      pip20.style.left="70%"
      pip10.style.left="70%"
      pip45.style.left="70%"
      pip5.style.left="70%"
    },4500)
    setTimeout(function(){
      pip1.style.top="78%"
      pip30.style.top="78%"
    },5500)
    setTimeout(function(){
      pip30.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },6300)
    f=10;
  }
  if(f==11){
    pip1.style.top="55%"
    pip30.style.top="55%"
    setTimeout(function(){
      pip1.style.left="35.6%"
      pip40.style.left="35.6%"
      pip30.style.left="35.6%"
      pip20.style.left="35.6%"
      pip10.style.left="35.6%"
      pip45.style.left="35.6%"
      pip5.style.left="35.6%"
    },1500)
    setTimeout(function(){
      pip1.style.top="78%"
      pip20.style.top="78%"
    },2500)
    setTimeout(function(){
      pip20.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },3300)
    f=12;
  }
  if(f==13){
    pip1.style.top="55%"
    pip20.style.top="55%"

    setTimeout(function(){
      pip1.style.left="58%"
      pip40.style.left="58%"
      pip30.style.left="58%"
      pip20.style.left="58%"
      pip10.style.left="58%"
      pip45.style.left="58%"
      pip5.style.left="58%"
    },1500)  

    setTimeout(() => {
       pip1.style.top="78%"
       pip40.style.top="78%"
    }, 2500);

    setTimeout(() => {
      pip1.style.top="55%"
      pip40.style.top="55%"
    }, 3300);

    setTimeout(function(){
      pip1.style.left="70%"
      pip40.style.left="70%"
      pip30.style.left="70%"
      pip20.style.left="70%"
      pip10.style.left="70%"
      pip45.style.left="70%"
      pip5.style.left="70%"
    },4500)
    setTimeout(function(){
      pip1.style.top="78%"
      pip40.style.top="78%"
    },5500)
    setTimeout(function(){
      pip40.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },6300)
    f=14;
  }
  if(f==15){
    pip1.style.top="55%"
    pip40.style.top="55%"
    setTimeout(function(){
      pip1.style.left="35.6%"
      pip40.style.left="35.6%"
      pip30.style.left="35.6%"
      pip20.style.left="35.6%"
      pip10.style.left="35.6%"
      pip45.style.left="35.6%"
      pip5.style.left="35.6%"
    },1500)
    setTimeout(function(){
      pip1.style.top="78%"
      pip10.style.top="78%"
    },2500)
    setTimeout(function(){
      pip10.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },3300)
    f=16;
  }
  if(f==17){
    pip1.style.top="55%"
    pip10.style.top="55%"
     setTimeout(function(){
      pip1.style.left="58%"
      pip40.style.left="58%"
      pip30.style.left="58%"
      pip20.style.left="58%"
      pip10.style.left="58%"
      pip45.style.left="58%"
      pip5.style.left="58%"
    },1500)  

    setTimeout(() => {
       pip1.style.top="78%"
       pip40.style.top="78%"
    }, 2500);

    setTimeout(() => {
      pip1.style.top="55%"
      pip40.style.top="55%"
    }, 3300);
    setTimeout(function(){
      pip1.style.left="70%"
      pip40.style.left="70%"
      pip30.style.left="70%"
      pip20.style.left="70%"
      pip10.style.left="70%"
      pip45.style.left="70%"
      pip5.style.left="70%"
    },4500)
    setTimeout(function(){
      pip1.style.top="78%"
      pip45.style.top="78%"
    },5500)
    setTimeout(function(){
      pip45.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },6300)
    f=18;
  }
  if(f==19){
    pip1.style.top="55%"
    pip45.style.top="55%"
    setTimeout(function(){
      pip1.style.left="35.6%"
      pip40.style.left="35.6%"
      pip30.style.left="35.6%"
      pip20.style.left="35.6%"
      pip10.style.left="35.6%"
      pip45.style.left="35.6%"
      pip5.style.left="35.6%"
    },1500)
    setTimeout(function(){
      pip1.style.top="78%"
      pip5.style.top="78%"
    },2500)
    setTimeout(function(){
      pip5.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },3300)
    f=20;
  }

  if(f==23){
    pip60.style.top="78%"
    pip60.style.left="69.9%"   
    pip1.style.transform="translate(-1350%,-83%) rotate(-90deg)";
    // pip60.style.transform="translate(-1350%,-83%) rotate(-90deg)";
    setTimeout(function(){
      pip1.style.top="78%"
      // pip60.style.top="78%"
    },1000)

    setTimeout(function(){         
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      obot.style.visibility="visible"
      update()
    },2000)
    f=24;
  }
  if(f==25){
    pip1.style.top="55%"
    pip60.style.top="55%"
    obot.style.left="33%"
    fbot1.style.visibility="visible"
    setTimeout(function(){
      pip1.style.left="35.6%"
      pip60.style.left="35.6%"
      fobot.style.visibility="hidden"
    },1000)
    setTimeout(function(){
      pip1.style.top="78%"
      pip60.style.top="78%"
      obot.style.visibility="visible"
    },2000)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      fobot.style.left="33%"
      update()
    },2500)
    f=26;
  }
  if(f==27){
    pip1.style.top="55%"
    pip60.style.top="55%"
    fbot2.style.visibility="visible"
    setTimeout(function(){
      fobot.style.visibility="hidden"
      pip1.style.transform="translate(0%,0%)rotate(0deg)"
      pip1.style.top="63%"
      pip1.style.left="70%"
      pip60.style.transform="translate(0%,0%)rotate(0deg)"
      pip60.style.top="63%"
      pip60.style.left="70%"
      update()
    },1000)
    f=28;
  }

  //solution 40 is being filled here
  if(f==32){

    pip1.style.transform="rotate(-90deg)";
    pip1.style.top="20%"
    pip1.style.left="74.8%"
    // pip60.style.transform="rotate(-90deg)";

     setTimeout(function(){
      pip1.style.top="40%"
      // pip60.style.top="40%"
    },1500)
    
    setTimeout(() => {
      pip1.style.left= "51.5%"
      pip1.style.top= "20%"
      // pip60.style.top="20%"
    }, 3000);

    setTimeout(function(){
      pip60.style.transform="rotate(-90deg)";
      pip1.style.top="33%"
      pip60.style.top="33%"
      pip60.style.left="51.5%"
    },4000)
   
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      obot.style.visibility="visible"
      update()
    },5000)
    f=33;
  }
  if(f==34){
    pip1.style.top="20%"
    pip60.style.top="20%"
    fbot2.style.visibility="visible"
    setTimeout(function(){
      fobot.style.visibility="hidden"
      pip1.style.transform="translate(0%,0%)rotate(0deg)"
      pip1.style.top="63%"
      pip1.style.left="70%"
      pip60.style.transform="translate(0%,0%)rotate(0deg)"
      pip60.style.top="63%"
      pip60.style.left="70%"
      update()
    },1000)
    f=35;
  }
  //solution 20 is being filled here
  if(f==37){
    pip1.style.transform="rotate(-90deg)";
    pip1.style.top="20%"
    pip1.style.left="52.2%"
    pip60.style.transform="rotate(-90deg)";
    pip60.style.top="20%"
    pip60.style.left="52.2%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1000)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      obot.style.visibility="visible"
      update()
    },2000)
    f=38;
  }
  if(f==39){
    pip1.style.top="20%"
    pip60.style.top="20%"
    fbot2.style.visibility="visible"
    setTimeout(function(){
      fobot.style.visibility="hidden"
      pip1.style.transform="translate(0%,0%)rotate(0deg)"
      pip1.style.top="63%"
      pip1.style.left="70%"
      pip60.style.transform="translate(0%,0%)rotate(0deg)"
      pip60.style.top="63%"
      pip60.style.left="70%"
      update()
    },1000)
    f=40;
  }
  //solution 10 is being filled here
  if(f==42){
    pip1.style.transform="rotate(-90deg)";
    pip1.style.top="20%"
    pip1.style.left="52.2%"
    pip60.style.transform="rotate(-90deg)";
    pip60.style.top="20%"
    pip60.style.left="52.2%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1000)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      obot.style.visibility="visible"
      update()
    },2000)
    f=43;
  }
  if(f==44){
    pip1.style.top="20%"
    pip60.style.top="20%"
    fbot2.style.visibility="visible"
    setTimeout(function(){
      fobot.style.visibility="hidden"
      pip1.style.transform="translate(0%,0%)rotate(0deg)"
      pip1.style.top="63%"
      pip1.style.left="70%"
      pip60.style.transform="translate(0%,0%)rotate(0deg)"
      pip60.style.top="63%"
      pip60.style.left="70%"
      update()
    },1000)
    f=45;
  }
   //solution 5 is being filled here
   if(f==47){
    pip1.style.transform="rotate(-90deg)";
    pip1.style.top="20%"
    pip1.style.left="52.2%"
    pip60.style.transform="rotate(-90deg)";
    pip60.style.top="20%"
    pip60.style.left="52.2%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1000)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      obot.style.visibility="visible"
      update()
    },2000)
    f=48;
  }
  if(f==49){
    pip1.style.top="20%"
    pip60.style.top="20%"
    fbot2.style.visibility="visible"
    setTimeout(function(){
      fobot.style.visibility="hidden"
      pip1.style.transform="translate(0%,0%)rotate(0deg)"
      pip1.style.top="63%"
      pip1.style.left="70%"
      pip60.style.transform="translate(0%,0%)rotate(0deg)"
      pip60.style.top="63%"
      pip60.style.left="70%"
      update()
    },1000)
    f=50;
  } 
   //solution unknown is being filled here
   if(f==52){
    pip1.style.transform="rotate(-90deg)";
    pip1.style.top="20%"
    pip1.style.left="74.8%"
    // pip60.style.transform="rotate(-90deg)";

     setTimeout(function(){
      pip1.style.top="40%"
      // pip60.style.top="40%"
    },1500)
    
    setTimeout(() => {
      pip1.style.left= "51.5%"
      pip1.style.top= "20%"
      // pip60.style.top="20%"
    }, 3000);

    setTimeout(function(){
      pip60.style.transform="rotate(-90deg)";
      pip1.style.top="33%"
      pip60.style.top="33%"
      pip60.style.left="51.5%"
    },4000)
   
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      obot.style.visibility="visible"
      update()
    },5000)
    f=53
  }
  if(f==54){
    pip1.style.top="20%"
    pip60.style.top="20%"
    fbot2.style.visibility="visible"
    setTimeout(function(){
      fobot.style.visibility="hidden"
      pip1.style.transform="translate(0%,0%)rotate(0deg)"
      pip1.style.top="63%"
      pip1.style.left="70%"
      pip60.style.transform="translate(0%,0%)rotate(0deg)"
      pip60.style.top="63%"
      pip60.style.left="70%"
      update()
    },1000)
    f=55;
  }

  //Viscosity measure using 5% sugar concentrated solution (First time)
  if(f==58){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=59;
  }
  //Viscosity measure using 5% sugar concentrated solution (Second time)
  if(f==75){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=76;
  }
  //Viscosity measure using 5% sugar concentrated solution (Third time)
  if(f==92){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=93;
  }


  //Viscosity measure using 10% sugar concentrated solution (First time)
  if(f==109){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=110;
  }
  //Viscosity measure using 10% sugar concentrated solution (Second time)
  if(f==126){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=127;
  }
  //Viscosity measure using 10% sugar concentrated solution (Third time)
  if(f==143){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=144;
  }

  //Viscosity measure using 20% sugar concentrated solution (First time)
  if(f==160){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=161;
  }
  //Viscosity measure using 20% sugar concentrated solution (Second time)
  if(f==177){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=178;
  }
  //Viscosity measure using 20% sugar concentrated solution (Third time)
  if(f==194){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=195;
  }

  //Viscosity measure using 40% sugar concentrated solution (First time)
  if(f==211){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=212;
  }
  //Viscosity measure using 40% sugar concentrated solution (Second time)
  if(f==228){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=229;
  }
  //Viscosity measure using 40% sugar concentrated solution (Third time)
  if(f==245){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=246;
  }

  //Viscosity measure using 50% sugar concentrated solution (First time)
  if(f==262){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=263;
  }
  //Viscosity measure using 50% sugar concentrated solution (Second time)
  if(f==279){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=280;
  }
  //Viscosity measure using 50% sugar concentrated solution (Third time)
  if(f==296){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=297;
  }

  //Viscosity measure using Unknown sugar concentrated solution (First time)
  if(f==313){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=314;
  }
  //Viscosity measure using Unknown sugar concentrated solution (Second time)
  if(f==330){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=331;
  }
  //Viscosity measure using Unknown sugar concentrated solution (Third time)
  if(f==347){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=348;
  }

  //Viscosity measure using water(First time)
  if(f==364){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=365;
  }
  //Viscosity measure using water(Second time)
  if(f==381){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=382;
  }
  //Viscosity measure using water(Third time)
  if(f==398){
    pip1.style.transform="translate(0%,0%)rotate(-90deg)"
    pip1.style.top="20%"
    pip1.style.left="48.3%"
    pip60.style.transform="translate(0%,0%)rotate(-90deg)"
    pip60.style.top="20%"
    pip60.style.left="48.3%"
    setTimeout(function(){
      pip1.style.top="40%"
      pip60.style.top="40%"
    },1500)
    setTimeout(function(){
      pip60.style.visibility="visible"
      pip1.style.visibility="hidden"
      update()
    },2300)
    f=399;
  }  
  
}
function pipette60(){
  if(f==24){
    pip1.style.top="55%"
    pip60.style.top="55%"
    bot.style.visibility="hidden"
    setTimeout(function(){
      pip1.style.left="25%"
      pip60.style.left="25%"
    },1000)
    setTimeout(function(){
      pip1.style.top="78%"
      pip60.style.top="78%"
    },2000)
    setTimeout(function(){
      pip1.style.visibility="visible"
      pip60.style.visibility="hidden"
    },3000)
    setTimeout(function(){
      fobot.style.visibility="visible"
      obot.style.visibility="hidden"
      update()
    },3300)
    f=25;
  }

  if(f==26){
    pip1.style.top="55%"
    pip60.style.top="55%"
    bot2.style.visibility="hidden"
    setTimeout(function(){
      pip1.style.left="18%"
      pip60.style.left="18%"
    },1000)
    setTimeout(function(){
      pip1.style.top="78%"
      pip60.style.top="78%"
    },2000)
    setTimeout(function(){
      pip1.style.visibility="visible"
      pip60.style.visibility="hidden"
    },2500)
    setTimeout(function(){
      fobot.style.visibility="visible"
      obot.style.visibility="hidden"
      update()
    },2700)
    f=27;
  }

  //solution 40 is being filled here
  if(f==33){
    pip1.style.top="20%"
    pip60.style.top="20%"
    bot2.style.visibility="hidden"
    setTimeout(function(){
      pip1.style.left="34.2%"
      pip60.style.left="34.2%"
    },1000)
    setTimeout(function(){
      pip1.style.top="35%"
      pip60.style.top="35%"
    },2000)
    setTimeout(function(){
      pip1.style.visibility="visible"
      pip60.style.visibility="hidden"
    },2500)
    setTimeout(function(){
      fobot.style.visibility="visible"
      obot.style.visibility="hidden"
      update()
    },2700)
    f=34;
  }
  //solution 20 is being filled here
  if(f==38){
    pip1.style.top="20%"
    pip60.style.top="20%"
    bot2.style.visibility="hidden"
    setTimeout(function(){
      pip1.style.left="34.5%"
      pip60.style.left="34.5%"
    },1000)
    setTimeout(function(){
      pip1.style.top="43%"
      pip60.style.top="43%"
    },2000)
    setTimeout(function(){
      pip1.style.visibility="visible"
      pip60.style.visibility="hidden"
    },2500)
    setTimeout(function(){
      fobot.style.visibility="visible"
      obot.style.visibility="hidden"
      update()
    },2700)
    f=39;
  }
   //solution 10 is being filled here
   if(f==43){
    pip1.style.top="20%"
    pip60.style.top="20%"
    bot2.style.visibility="hidden"
    setTimeout(function(){
      pip1.style.left="34.5%"
      pip60.style.left="34.5%"
    },1000)
    setTimeout(function(){
      pip1.style.top="43%"
      pip60.style.top="43%"
    },2000)
    setTimeout(function(){
      pip1.style.visibility="visible"
      pip60.style.visibility="hidden"
    },2500)
    setTimeout(function(){
      fobot.style.visibility="visible"
      obot.style.visibility="hidden"
      update()
    },2700)
    f=44;
  }
  //solution 5 is being filled here
  if(f==48){
    pip1.style.top="20%"
    pip60.style.top="20%"
    bot2.style.visibility="hidden"
    setTimeout(function(){
      pip1.style.left="34.5%"
      pip60.style.left="34.5%"
    },1000)
    setTimeout(function(){
      pip1.style.top="43%"
      pip60.style.top="43%"
    },2000)
    setTimeout(function(){
      pip1.style.visibility="visible"
      pip60.style.visibility="hidden"
    },2500)
    setTimeout(function(){
      fobot.style.visibility="visible"
      obot.style.visibility="hidden"
      update()
    },2700)
    f=49;
  }
  //solution unknown is being filled here
  if(f==53){
    pip1.style.top="20%"
    pip60.style.top="20%"
    bot2.style.visibility="hidden"
    setTimeout(function(){
      pip1.style.left="34.2%"
      pip60.style.left="34.2%"
    },1000)
    setTimeout(function(){
      pip1.style.top="35%"
      pip60.style.top="35%"
    },2000)
    setTimeout(function(){
      pip1.style.visibility="visible"
      pip60.style.visibility="hidden"
    },2500)
    setTimeout(function(){
      fobot.style.visibility="visible"
      obot.style.visibility="hidden"
      update()
    },2700)
    f=54;
  }
  //Viscosity measure using 5% sugar concentrated solution (First time)
  if(f==59){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=60;
  }
  //Viscosity measure using 5% sugar concentrated solution (Second time)
  if(f==76){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=77;
  }
  //Viscosity measure using 5% sugar concentrated solution (Third time)
  if(f==93){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=94;
  }

  //Viscosity measure using 10% sugar concentrated solution (First time)
  if(f==110){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=111;
  }
  //Viscosity measure using 10% sugar concentrated solution (Second time)
  if(f==127){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=128;
  }
  //Viscosity measure using 10% sugar concentrated solution (Third time)
  if(f==144){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=145;
  }

  //Viscosity measure using 20% sugar concentrated solution (First time)
  if(f==161){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=162;
  }
  //Viscosity measure using 20% sugar concentrated solution (Second time)
  if(f==178){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=179;
  }
  //Viscosity measure using 20% sugar concentrated solution (Third time)
  if(f==195){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=196;
  }

  //Viscosity measure using 40% sugar concentrated solution (First time)
  if(f==212){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=213;
  }
  //Viscosity measure using 40% sugar concentrated solution (Second time)
  if(f==229){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=230;
  }
  //Viscosity measure using 40% sugar concentrated solution (Third time)
  if(f==246){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=247;
  }

  //Viscosity measure using 50% sugar concentrated solution (First time)
  if(f==263){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=264;
  }
  //Viscosity measure using 50% sugar concentrated solution (Second time)
  if(f==280){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=281;
  }
  //Viscosity measure using 50% sugar concentrated solution (Third time)
  if(f==297){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=298;
  }

  //Viscosity measure using Unknown sugar concentrated solution (First time)
  if(f==314){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=315;
  }
  //Viscosity measure using Unknown sugar concentrated solution (Second time)
  if(f==331){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=332;
  }
  //Viscosity measure using Unknown sugar concentrated solution (Third time)
  if(f==348){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=349;
  }

  //Viscosity measure using water (First time)
  if(f==365){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=366;
  }
  //Viscosity measure using water(Second time)
  if(f==382){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=383;
  }
  //Viscosity measure using water(Third time)
  if(f==399){
    pip60.style.top="20%"
    pip1.style.top="20%"
    setTimeout(function(){
      pip60.style.left="23%"
      pip60.style.top="1%"
      pip1.style.left="23%"
      pip1.style.top="1%"
    },1300)
    setTimeout(function(){
      pip60.style.top="20%"
      pip1.style.top="20%"
    },2500)
    setTimeout(function(){
      pip60.style.visibility="hidden"
      pip1.style.visibility="visible"
    },3000)
    setTimeout(function(){
      viscofill.style.visibility="visible"
    },3700)
    setTimeout(function(){
      pip1.style.top="1%"
      pip60.style.top="1%"
    },4700)
    setTimeout(function(){
      pip1.style.transform="translate(0%,0%) rotate(0deg)";
      pip1.style.left="70%"
      pip1.style.top="67%"
      pip60.style.transform="translate(0%,0%) rotate(0deg)";
      pip60.style.left="70%"
      pip60.style.top="63%"
      update()
    },5700)
    f=400;
  }
}


function pipette10(){
  if(f==6){
    pip1.style.top="60%"
    pip10.style.top="60%"
    sol.style.top="56%"
    sol.style.left="42%"
    setTimeout(function(){
      pip1.style.top="55%"
      pip1.style.left="27.6%"
      pip10.style.top="55%"
      pip10.style.left="27.6%"
      pip20.style.top="55%"
      pip20.style.left="27.6%"
      pip30.style.top="55%"
      pip30.style.left="27.6%" 
      pip40.style.top="55%"
      pip40.style.left="27.6%"
      pip45.style.top="55%"
      pip45.style.left="27.6%"
      pip5.style.top="55%"
      pip5.style.left="27.6%"  
    },1000);
    setTimeout(function(){
      pip10.style.top="75%"
      pip1.style.top="75%"
    },2000)
    setTimeout(function(){
      pip1.style.visibility="visible"
      pip10.style.visibility="hidden"
      sol.style.visibility="visible"
      ef1.style.visibility="hidden"
      update()
    },3300)
    f=7;
  }
  if(f==16){
    pip1.style.top="55%"
    pip10.style.top="55%" 
    setTimeout(function(){
      pip1.style.left="7.6%"
      pip30.style.left="7.6%"
      pip40.style.left="7.6%"
      pip20.style.left="7.6%"
      pip10.style.left="7.6%"
      pip45.style.left="7.6%"
      pip5.style.left="7.6%"
    },1000)
    setTimeout(function(){
      pip1.style.top="78%"
      pip10.style.top="78%"
     },2000)
     setTimeout(function(){
      pip1.style.visibility="visible"
      pip10.style.visibility="hidden"
      sol10.style.visibility="visible"
      sol.style.visibility="hidden"
      update()
    },3000)
    f=17;
  }
}
function pipette40(){
  if(f==8){
    pip1.style.top="55%"
    pip40.style.top="55%"
    sol40.style.top="56%"
    sol40.style.left="42%" 
    setTimeout(function(){
      pip1.style.left="27.6%"
      pip40.style.left="27.6%"
      pip30.style.left="27.6%"
      pip20.style.left="27.6%"
      pip10.style.left="27.6%"
      pip45.style.left="27.6%"
      pip5.style.left="27.6%"
    },1000)
    setTimeout(function(){
    pip1.style.top="78%"
    pip40.style.top="78%"
    },2000)
    setTimeout(function(){
      pip1.style.visibility="visible"
      pip40.style.visibility="hidden"
      sol40.style.visibility="visible"
      sol.style.visibility="hidden"
      update()
    },3000)
    f=9;  
  }
  if(f==14){
    pip1.style.top="55%"
    pip40.style.top="55%"
    sol.style.top="56%"
    sol.style.left="22%"
    setTimeout(function(){
      pip1.style.left="7.6%"
      pip40.style.left="7.6%"
      pip30.style.left="7.6%"
      pip20.style.left="7.6%"
      pip10.style.left="7.6%"
      pip45.style.left="7.6%"
      pip5.style.left="7.6%"
    },1000)
    setTimeout(function(){
    pip1.style.top="78%"
    pip40.style.top="78%"
    },2000)
    setTimeout(function(){
      pip1.style.visibility="visible"
      pip40.style.visibility="hidden"
      sol.style.visibility="visible"
      ef3.style.visibility="hidden"
      update()
    },3000)
    f=15;

  }
}
function pipette30(){
  if(f==10){
    pip1.style.top="55%"
    pip30.style.top="55%"
    sol.style.top="56%"
    sol.style.left="32%" 
    setTimeout(function(){
      pip1.style.left="17.6%"
      pip30.style.left="17.6%"
      pip40.style.left="17.6%"
      pip20.style.left="17.6%"
      pip10.style.left="17.6%"
      pip45.style.left="17.6%"
      pip5.style.left="17.6%"
    },1000)
    setTimeout(function(){
      pip1.style.top="78%"
      pip30.style.top="78%"
     },2000)
     setTimeout(function(){
      pip1.style.visibility="visible"
      pip30.style.visibility="hidden"
      sol.style.visibility="visible"
      ef2.style.visibility="hidden"
      update()
    },3000)
    f=11;
  }
}
function pipette20(){
  if(f==12){
    pip1.style.top="55%"
    pip20.style.top="55%"
    setTimeout(function(){
      pip1.style.left="17.6%"
      pip30.style.left="17.6%"
      pip40.style.left="17.6%"
      pip20.style.left="17.6%"
      pip10.style.left="17.6%"
      pip45.style.left="17.6%"
      pip5.style.left="17.6%"
    },1000)
    setTimeout(function(){
      pip1.style.top="78%"
      pip20.style.top="78%"
     },2000)
    setTimeout(function(){
      pip1.style.visibility="visible"
      pip20.style.visibility="hidden"
      sol20.style.visibility="visible"
      sol.style.visibility="hidden"
      update()
    },3000)
    f=13; 
  }
}
function pipette45(){
  if(f==18){
    pip1.style.top="55%"
    pip45.style.top="55%"
    sol.style.top="56%"
    sol.style.left="14.5%" 
    setTimeout(function(){
      pip1.style.left="0.1%"
      pip40.style.left="0.1%"
      pip30.style.left="0.1%"
      pip20.style.left="0.1%"
      pip10.style.left="0.1%"
      pip45.style.left="0.1%"
      pip5.style.left="0.1%"
    },1000)
    setTimeout(function(){
    pip1.style.top="78%"
    pip45.style.top="78%"
    },2000)
    setTimeout(function(){
      pip1.style.visibility="visible"
      pip45.style.visibility="hidden"
      sol.style.visibility="visible"
      ef4.style.visibility="hidden"
      update()
    },3000)
    f=19;  
  }
}
function pipette5(){
  if(f==20){
    pip1.style.top="55%"
    pip5.style.top="55%" 
    setTimeout(function(){
      pip1.style.left="0.1%"
      pip40.style.left="0.1%"
      pip30.style.left="0.1%"
      pip20.style.left="0.1%"
      pip10.style.left="0.1%"
      pip45.style.left="0.1%"
      pip5.style.left="0.1%"
    },1000)
    setTimeout(function(){
    pip1.style.top="78%"
    pip5.style.top="78%"
    },2000)
    setTimeout(function(){
      pip1.style.visibility="visible"
      pip5.style.visibility="hidden"
      sol5.style.visibility="visible"
      sol.style.visibility="hidden"
    },3000)
    setTimeout(function(){
      pip1.style.top="55%"
      pip5.style.top="55%"
      },4000)
    setTimeout(function(){
      pip1.style.transform="translate(300%,-350%) rotate(0deg)";
      next1.style.visibility="visible"
      // distilledflask.style.visibility= "hidden"
      update()
    },5000)
    nb=2;
    f=null;
  }
}

function bottle(){
  if(f==21){
    bot.style.transform="translate(-530%,-40%)";
    setTimeout(function(){
      num.style.left="16%"
      num.innerText="11.7064 gm"
      update()
      f=22;
    },500)
  }
  if(f==22){
    bot.style.transform="translate(0%,0%)";
    num.style.left="17%"
    num.innerText="0.0 gm"
    update()
    f=23; 
  }
}

function fbottle1(){
  if(f==28){
    fbot1.style.transform="translate(-530%,-40%)";
    setTimeout(function(){
      num.style.left="16%"
      num.innerText="21.5076 gm"
      update()
      f=29;
    },500)
  }
  if(f==29){
    fbot1.style.transform="translate(0%,0%)";
    num.style.left="17%"
    num.innerText="0.0 gm"
    update()
    f=30; 
  }
}

function fbottle2(){
  if(f==30){
    fbot2.style.transform="translate(-350%,-40%)";
    setTimeout(function(){
      num.style.left="16%"
      num.innerText="23.0224 gm"
      update()
      f=31;
    },500)
  }
  if(f==31){
    fbot2.style.transform="translate(0%,0%)";
    num.style.left="17%"
    num.innerText="0.0 gm"
    sol40.style.left="50%"
    sol40.style.top="56%"
    setTimeout(function(){
      bot2.style.visibility="visible"
      fbot2.style.visibility="hidden"
      sol40.style.visibility="visible"
      sol50.style.visibility="hidden"
    },1000)
    update()
    f=32; 
  }
  //solution 40 is being weighted here
  if(f==35){
    fbot2.style.transform="translate(-350%,-40%)";
    setTimeout(function(){
      num.style.left="16%"
      num.innerText="22.7159 gm"
      update()
      f=36;
    },500)
  }
  if(f==36){
    fbot2.style.transform="translate(0%,0%)";
    num.style.left="17%"
    num.innerText="0.0 gm"
    solunk.style.left="50%"
    solunk.style.top="56%"
    setTimeout(function(){
      bot2.style.visibility="visible"
      fbot2.style.visibility="hidden"
      sol40.style.visibility="hidden"
      // sol20.style.visibility="visible"
       solunk.style.visibility="visible"
    },1000)
    update()
    f=52; 
  }
  //solution 20 is being weighted here
  if(f==40){
    fbot2.style.transform="translate(-350%,-40%)";
    setTimeout(function(){
      num.style.left="16%"
      num.innerText="22.2570 gm"
      update()
      f=41;
    },500)
  }
  if(f==41){
    fbot2.style.transform="translate(0%,0%)";
    num.style.left="17%"
    num.innerText="0.0 gm"
    sol10.style.left="50%"
    sol10.style.top="56%"
    setTimeout(function(){
      bot2.style.visibility="visible"
      fbot2.style.visibility="hidden"
      sol20.style.visibility="hidden"
      sol10.style.visibility="visible"
    },1000)
    update()
    f=42; 
  }
  //solution 10 is being weighted here
  if(f==45){
    fbot2.style.transform="translate(-350%,-40%)";
    setTimeout(function(){
      num.style.left="16%"
      num.innerText="21.8218 gm"
      update()
      f=46;
    },500)
  }
  if(f==46){
    fbot2.style.transform="translate(0%,0%)";
    num.style.left="17%"
    num.innerText="0.0 gm"
    sol5.style.left="50%"
    sol5.style.top="56%"
    setTimeout(function(){
      bot2.style.visibility="visible"
      fbot2.style.visibility="hidden"
      sol10.style.visibility="hidden"
      sol5.style.visibility="visible"
    },1000)
    update()
    f=47; 
  }
  //solution 5 is being weighted here
  if(f==50){
    fbot2.style.transform="translate(-350%,-40%)";
    setTimeout(function(){
      num.style.left="16%"
      num.innerText="21.7254 gm"
      update()
      f=51;
    },500)
  }
  if(f==51){
    fbot2.style.transform="translate(0%,0%)";
    num.style.left="17%"
    num.innerText="0.0 gm"
    solunk.style.left="50%"
    solunk.style.top="56%"
    setTimeout(function(){
      bot2.style.visibility="visible"
      fbot2.style.visibility="hidden"
      sol5.style.visibility="hidden"
      solunk.style.visibility="visible"
    },1000)
    update()
    f=52; 
  }
    //solution unknown is being weighted here
    if(f==55){
      fbot2.style.transform="translate(-350%,-40%)";
      setTimeout(function(){
        num.style.left="16%"
        num.innerText="22.4111 gm"
        update()
        f=56;
      },500)
    }
    if(f==56){
      fbot2.style.transform="translate(0%,0%)";
      num.style.left="17%"
      num.innerText="0.0 gm"
      update()
      f=57;
      next1.style.visibility="visible"
      distilledflask.style.visibility="hidden"
      nb=3;
    }
}


function suction(){
  console.log("value of->  " + f );
  //Viscosity measure using water solution (First time)
  if(f==60){
    viscosuc1.style.visibility="visible"
    viscofill.style.visibility="hidden"
    update()
    f=65;
  }

  else if(f==65){
            tens = "00";
            seconds = "00";
            viscosuc1.style.visibility="hidden"
            suc.style.visibility="hidden"
            getSeconds.innerHTML = seconds;
            getTens.innerHTML = tens;
            viscofall1.style.visibility = "visible";
            interval = setInterval(startTimer, 10);
        setTimeout(() => {
             viscofall2.style.visibility="visible"
        }, 2500);
          setTimeout(() => {
             viscofall3.style.visibility="visible"
        }, 4500);
        setTimeout(() => {
             viscofall4.style.visibility="visible"
        }, 6500);
        setTimeout(() => {
             viscofall5.style.visibility="visible"
        }, 8500);
        setTimeout(() => {
             viscofall6.style.visibility="visible"
        }, 9500);
            setTimeout(() => {
             viscofall7.style.visibility="visible"
            forward1.style.visibility="visible"
        }, 10500);
          setTimeout(() => {
              tens =   '00';
             seconds = '120';
             getSeconds.innerHTML = seconds;
             getTens.innerHTML = tens;
             clearInterval(interval)
               suc.style.visibility="visible"
              f=73
        }, 10600);
   
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    wc=1;
    update()
  }
  else if(f==66){
    viscofall2.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '34';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=67;
  }
  else if(f==67){
    viscofall3.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '51';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=68;
  }
  else if(f==68){
    viscofall4.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '68';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=69;
  }
  else if(f==69){
    viscofall5.style.visibility="visible"
    forward1.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '85';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    // wc=1;
    // f=70;
    // update()
  }
  else if(f==70){
    viscofall6.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '102';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=71;
  }
  else if(f==71){
    viscofall7.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '115';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=72;
  }
  else if(f==72){
    wdrop3.style.visibility="visible"
    wdrop3.style.top="43%"
    tens = '00';
    seconds = '123';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=73;  
  }
  //Viscosity measure using 5% sugar concentrated solution (First time)
  if(f==77){
    viscosuc1.style.visibility="visible"
    viscofill.style.visibility="hidden"
    update()
    f=82;
  }

  else if(f==79){
    viscosuc3.style.visibility="visible"
    viscosuc2.style.visibility="hidden"
    wdrop1.style.visibility="visible"
    update()
    f=80;
  }
  else if(f==80){
    wdrop1.style.top="35.5%"
    update()
    f=81;
  }
  else if(f==81){
    wdrop2.style.visibility="visible"
    wdrop2.style.top="37%"
    update()
    f=82;
  }
  else if(f==82){
            tens = "00";
            seconds = "00";
            suc.style.visibility="hidden"
            viscosuc1.style.visibility="hidden"
            getSeconds.innerHTML = seconds;
            getTens.innerHTML = tens;
            viscofall1.style.visibility = "visible";
            interval = setInterval(startTimer, 10);
          setTimeout(() => {
             viscofall2.style.visibility="visible"
        }, 2500);
          setTimeout(() => {
             viscofall3.style.visibility="visible"
        }, 4500);
        setTimeout(() => {
             viscofall4.style.visibility="visible"
        }, 6500);
        setTimeout(() => {
             viscofall5.style.visibility="visible"
        }, 8500);
        setTimeout(() => {
             viscofall6.style.visibility="visible"
        }, 9500);
            setTimeout(() => {
             viscofall7.style.visibility="visible"
            forward1.style.visibility="visible"
        }, 10500);
          setTimeout(() => {
              tens =   '00';
             seconds = '123';
             getSeconds.innerHTML = seconds;
             getTens.innerHTML = tens;
             clearInterval(interval)
               suc.style.visibility="visible"
              f=345;
        }, 10600);
   
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    wc=2;
    update()

  }
  else if(f==83){
    viscofall2.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '34';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=84;
  }
  else if(f==84){
    viscofall3.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '51';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=85;
  }
  else if(f==85){
    viscofall4.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '68';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=86;
  }
  else if(f==86){
    viscofall5.style.visibility="visible"
    forward1.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '85';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    wc=2;
    f=342;
    update()
  }
  else if(f==342){
    viscofall6.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '102';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=343;
  }
  else if(f==343){
    viscofall7.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '115';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=344;
  }
  else if(f==344){
    wdrop3.style.visibility="visible"
    wdrop3.style.top="43%"
    tens = '00';
    seconds = '124';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=345;
  }
  //Viscosity measure using 5% sugar concentrated solution (Third time)


  //Viscosity measure using 10% sugar concentrated solution (First time)

  //Viscosity measure using 10% sugar concentrated solution (Second time)
 
  //Viscosity measure using 10% sugar concentrated solution (Third time)


  //Viscosity measure using 20% sugar concentrated solution (First time)

  //Viscosity measure using 20% sugar concentrated solution (Second time)

  //Viscosity measure using 20% sugar concentrated solution (Third time)


  //Viscosity measure using 40% sugar concentrated solution (First time)

  //Viscosity measure using 40% sugar concentrated solution (Second time)
 
  //Viscosity measure using 40% sugar concentrated solution (Third time)


  //Viscosity measure using 50% sugar concentrated solution (First time)
 
  //Viscosity measure using 50% sugar concentrated solution (Second time)

  //Viscosity measure using 50% sugar concentrated solution (Third time)

  //Viscosity measure using Unknown sugar concentrated solution (First time)

  //Viscosity measure using Unknown sugar concentrated solution (Second time)

  //Viscosity measure using Unknown sugar concentrated solution (Third time)
  if(f==349){
    viscosuc1.style.visibility="visible"
    viscofill.style.visibility="hidden"
    update()
    f=354;
  }
  
  else if(f==354){       
            tens = "00";
            seconds = "00";
            suc.style.visibility="hidden"
            viscosuc1.style.visibility="hidden"
            getSeconds.innerHTML = seconds;
            getTens.innerHTML = tens;
            viscofall1.style.visibility = "visible";
            interval = setInterval(startTimer, 10);
          setTimeout(() => {
             viscofall2.style.visibility="visible"
        }, 2500);
          setTimeout(() => {
             viscofall3.style.visibility="visible"
        }, 4500);
        setTimeout(() => {
             viscofall4.style.visibility="visible"
        }, 6500);
        setTimeout(() => {
             viscofall5.style.visibility="visible"
        }, 8500);
        setTimeout(() => {
             viscofall6.style.visibility="visible"
        }, 9500);
            setTimeout(() => {
             viscofall7.style.visibility="visible"
            forward1.style.visibility="visible"
        }, 10500);
          setTimeout(() => {
              tens =   '00';
             seconds = '194';
             getSeconds.innerHTML = seconds;
             getTens.innerHTML = tens;
             clearInterval(interval)
             suc.style.visibility="visible"
              f=413;
        }, 10600);
   
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    wc=18;
    update()
  }
  else if(f==355){
    viscofall2.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '54';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=356;
  }
  else if(f==356){
    viscofall3.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '81';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=357;
  }
  else if(f==357){
    viscofall4.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '108';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=358;
  }
  else if(f==358){
    viscofall5.style.visibility="visible"
    forward1.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '135';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    wc=18;
    f=410;
    update()
  }
  else if(f==410){
    viscofall6.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '162';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=411;
  }
  else if(f==411){
    viscofall7.style.visibility="visible"
    interval = setInterval(startTimer, 10);
    tens = '00';
    seconds = '185';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=412;
  }
  else if(f==412){
    wdrop3.style.visibility="visible"
    wdrop3.style.top="43%"
    tens = '00';
    seconds = '196';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    f=413;  
  }

  //Viscosity measure using water (First time)

  //Viscosity measure using water (Second time)

  //Viscosity measure using water (Third time)
}



function next(){
  if(nb==1){
    next1.style.visibility="hidden"
    mach.style.visibility="hidden"
    on1.style.visibility="hidden"
    tare1.style.visibility="hidden"
    dish.style.visibility="hidden"
    pow.style.visibility="hidden"
    num.style.visibility="hidden"
    spat.style.visibility="hidden"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip1.style.top="63%"
    pip1.style.left="70%"
    pip1.style.width="1.5%"
    sol.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="50%"
    sol50.style.height="23%"
    sol50.style.visibility="visible"
    ef1.style.visibility="visible"
    ef2.style.visibility="visible"
    ef3.style.visibility="visible"
    ef4.style.visibility="visible"
    ef1.style.top="56%"
    ef1.style.left="42%"
    ef2.style.top="56%"
    ef2.style.left="32%"
    ef3.style.top="56%"
    ef3.style.left="22%"
    ef4.style.top="56%"
    ef4.style.left="14.5%"
    f=5;
    update()
  }
  if(nb==2){
  next1.style.visibility="hidden"
  sol5.style.visibility="hidden"
  sol10.style.visibility="hidden"
  sol20.style.visibility="hidden"
  sol40.style.visibility="hidden"
  mach.style.visibility="visible"
  on1.style.visibility="visible"
  tare1.style.visibility="visible"
  bot.style.visibility="visible"
  bot2.style.visibility="visible"
  pip1.style.transform="translate(0%,0%)rotate(0deg)"
  pip1.style.top="63%"
  pip1.style.left="70%"
  pip1.style.width="1.5%"
  bot.style.top="64%"
  bot.style.left="40%"
  bot.style.height="15%"
  bot2.style.top="64%"
  bot2.style.left="33%"
  bot2.style.height="15%"
  fbot1.style.top="64%"
  fbot1.style.left="40%"
  fbot1.style.height="15%"
  obot.style.top="64%"
  obot.style.left="40%"
  obot.style.height="15%"
  fobot.style.top="64%"
  fobot.style.left="40%"
  fobot.style.height="15%"
  fbot2.style.top="64%"
  fbot2.style.left="33%"
  fbot2.style.height="15%"
  ob=1;
  update()
  }
  if(nb==3){
    next1.style.visibility="hidden"
    mach.style.visibility="hidden"
    mach.style.visibility="hidden"
    on1.style.visibility="hidden"
    tare1.style.visibility="hidden"
    num.style.visibility="hidden"
    fbot1.style.visibility="hidden"
    fbot2.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="visible"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=58;
    update()     
  }
  if(nb==4){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    wbeak.style.transition="none"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="visible"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=75;
    update()     
  }
  if(nb==5){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="visible"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=92;
    update()     
  }

  if(nb==6){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="visible"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=109;
    update()     
  }
  if(nb==7){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="visible"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=126;
    update()     
  }
  if(nb==8){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="visible"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=143;
    update()     
  }

  if(nb==9){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="visible"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=160;
    update()     
  }
  if(nb==10){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="visible"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=177;
    update()     
  }
  if(nb==11){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="visible"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=194;
    update()     
  }
  if(nb==12){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="visible"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=211;
    update()     
  }
  if(nb==13){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="visible"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=228;
    update()     
  }
  if(nb==14){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="visible"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=245;
    update()     
  }

  if(nb==15){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="visible"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=262;
    update()     
  }
  if(nb==16){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="visible"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=279;
    update()     
  }
  if(nb==17){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="visible"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=296;
    update()     
  }

  if(nb==18){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="visible"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=313;
    update()     
  }
  if(nb==19){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="visible"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=330;
    update()     
  }
  if(nb==20){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="visible"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=347;
    update()     
  }

  if(nb==21){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="visible"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=364;
    update()     
  }
  if(nb==22){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="visible"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=381;
    update()     
  }
  if(nb==23){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="visible"
    suc.style.visibility="visible"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="visible"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="visible"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=398;
    update()     
  }
  if(nb==24){
    next1.style.visibility="hidden"
    wbeak.style.visibility="hidden"
    visco.style.visibility="hidden"
    suc.style.visibility="hidden"
    visco.style.height="60%"
    visco.style.top="23%"
    visco.style.left="13%"
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    viscosuc3.style.visibility="hidden"
    viscofall1.style.visibility="hidden"
    viscofall2.style.visibility="hidden"
    viscofall3.style.visibility="hidden"
    viscofall4.style.visibility="hidden"
    viscofall5.style.visibility="hidden"
    viscofall6.style.visibility="hidden"
    viscofall7.style.visibility="hidden"
    wdropAlt.style.visibility="hidden"
    wdrop1.style.visibility="hidden"
    wdrop1.style.top="34%"
    wdrop1.style.left="18.2%"
    wdrop2.style.visibility="hidden"
    wdrop2.style.top="35.5%"
    wdrop2.style.left="18.2%"
    wdrop3.style.visibility="hidden"
    wdrop3.style.top="41.2%"
    wdrop3.style.left="18.2%"
    sol5.style.visibility="hidden"
    sol5.style.top="56%"
    sol5.style.left="46%"
    sol10.style.visibility="hidden"
    sol10.style.top="56%"
    sol10.style.left="46%"
    sol20.style.visibility="hidden"
    sol20.style.top="56%"
    sol20.style.left="46%"
    sol40.style.visibility="hidden"
    sol40.style.top="56%"
    sol40.style.left="46%"
    sol50.style.visibility="hidden"
    sol50.style.top="56%"
    sol50.style.left="46%"
    solunk.style.visibility="hidden"
    solunk.style.top="56%"
    solunk.style.left="46%"
    wbeak.style.visibility="hidden"
    wbeak.style.top="63%"
    wbeak.style.left="46%"
    pip1.style.visibility="hidden"
    pip1.style.top="67%"
    pip1.style.left="70%"
    pip60.style.top="67%"
    pip60.style.left="70%"
    pip1.style.transform="translate(0%,0%)rotate(0deg)"
    pip60.style.transform="translate(0%,0%)rotate(0deg)"
    swatch.style.visibility="hidden"
    swatch.style.top="60%"
    swatch.style.left="60%"
    f=415;
    update()     
  }
  
}


//Stopwatch 
let seconds = 0o0;
let tens = 0o0;
let swatch = document.querySelector('.wrapper');
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let btnStart = document.querySelector('#btn-start');
let btnStop = document.querySelector('#btn-stop');
let btnReset = document.querySelector('#btn-reset');
let interval;


btnStart.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
})
btnStop.addEventListener('click', () => {
  clearInterval(interval);
})
btnReset.addEventListener('click', () => {
  clearInterval(interval);
  tens = '00';
  seconds = '00';
  getSeconds.innerHTML = seconds;
  getTens.innerHTML = tens;
})
function forward(){
  if(wc==1){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '120';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=4;
    f=74;  
  }
  //Viscosity measure using 5% sugar concentrated solution (Second time)
  if(wc==2){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '123';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=20;
    f=346;  
  }
  //Viscosity measure using 5% sugar concentrated solution (Third time)
  if(wc==3){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '124';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=6;
    f=108;  
  }


  //Viscosity measure using 10% sugar concentrated solution (First time)
  if(wc==4){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '135';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=7;
    f=125;  
  }
  //Viscosity measure using 10% sugar concentrated solution (Second time)
  if(wc==5){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '136';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=8;
    f=142;  
  }
  //Viscosity measure using 10% sugar concentrated solution (Third time)
  if(wc==6){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '136';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=9;
    f=159;  
  }
  
  //Viscosity measure using 20% sugar concentrated solution (First time)
  if(wc==7){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '170';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=10;
    f=176;  
  }
  //Viscosity measure using 20% sugar concentrated solution (Second time)
  if(wc==8){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '173';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=11;
    f=193;  
  }
  //Viscosity measure using 20% sugar concentrated solution (Third time)
  if(wc==9){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '172';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=12;
    f=210;  
  }

  //Viscosity measure using 40% sugar concentrated solution (First time)
  if(wc==10){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '254';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=13;
    f=227;
  }
  //Viscosity measure using 40% sugar concentrated solution (Second time)
  if(wc==11){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '255';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=14;
    f=244;
  }
  //Viscosity measure using 40% sugar concentrated solution (Third time)
  if(wc==12){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '255';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=15;
    f=261;
  }

  //Viscosity measure using 50% sugar concentrated solution (First time)
  if(wc==13){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '351';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=16;
    f=278;
  }
  //Viscosity measure using 50% sugar concentrated solution (Second time)
  if(wc==14){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '351';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=17;
    f=295;
  }
  //Viscosity measure using 50% sugar concentrated solution (Third time)
  if(wc==15){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '351';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=18;
    f=312;
  }

  //Viscosity measure using Unknown sugar concentrated solution (First time)
  if(wc==16){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '194';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=19;
    f=329;
  }
  //Viscosity measure using Unknown sugar concentrated solution (Second time)
  if(wc==17){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '197';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=20;
    f=346;
  }
  //Viscosity measure using Unknown sugar concentrated solution (Third time)
  if(wc==18){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '194';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=24;
    f=414;
  }

  //Viscosity measure using water (First time)
  if(wc==19){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '120';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=22;
    f=380;
  }
  //Viscosity measure using water (Second time)
  if(wc==20){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '121';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=23;
    f=397;
  }
  //Viscosity measure using water (Third time)
  if(wc==21){
    viscofall7.style.visibility="visible"
    wdropAlt.style.visibility="visible"
    clearInterval(interval);
    tens = '00';
    seconds = '122';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    next1.style.visibility="visible"
    forward1.style.visibility="hidden"
    update()
    wc=null;
    nb=24;
    f=414;
  }
}

function startTimer(){
  if((f>64&&f<73)||(f>81&&f<90)||(f>98&&f<107)||(f>115&&f<124)||(f>132&&f<141)||(f>149&&f<158)||(f>166&&f<175)||(f>183&&f<192)||(f>200&&f<209)||(f>217&&f<226)||(f>234&&f<243)||(f>251&&f<260)||(f>268&&f<277)||(f>285&&f<294)||(f>302&&f<311)||(f>319&&f<328)||(f>336&&f<345)||(f>353&&f<362)||(f>370&&f<379)||(f>387&&f<396)||(f>404&&f<413)){
  tens++;
  if(tens <= 9){
    getTens.innerHTML = '0' + tens;
  }
  if(tens > 9){
    getTens.innerHTML = tens;
  }
  if(tens > 99){
    seconds++;
    getSeconds.innerHTML = '0' + seconds;
    tens = 0;
    getTens.innerHTML = '0' + 0;
  }
  if(seconds > 9){
    getSeconds.innerHTML = seconds;
  }
  }
}
