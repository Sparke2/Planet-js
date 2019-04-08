function generatePlanet(planet)
{
  //var counter = document.getElementById("planet1").value;
  //document.getElementById("planet_holder").innerHTML = "";
  //alert(counter);

  //for (var i = 0; i<counter; i++)
  //{
    var a;
    a = randomInteger(1, 100);
    if (a<=10) {
      planet.mass = randomInteger(10,50);
    } else if (a>=80){
      planet.mass = randomInteger(300,1000);
    } else {
      planet.mass = randomInteger(50,300);
    }
    planet.mass = planet.mass/100;

    a = randomInteger(1, 100);
    if (a<=10) {
      planet.volume = randomInteger(10,50);
    } else if (a>=80){
      planet.volume = randomInteger(300,1000);
    } else {
      planet.volume = randomInteger(50,300);
    }
    planet.volume = planet.volume/100;

    planet.g = planet.mass/planet.volume;

    
    a = randomInteger(1, 100);
    if (a>=30){
      planet.atmosphere = 1;
    } else {
      planet.atmosphere = 0;
    }

    
    a = randomInteger(1, 100);
    if (a>=30){
      planet.water = 1;
    } else {
      planet.water = 0;
    }

    planet.illumination = randomInteger(1, 10);
    planet.radiation = randomInteger(1,10);

    planet.temMin;
    a = randomInteger(0, 100);
    switch (a) {
      case a<=10:
      planet.temMin = randomInteger(3,190);
      break;
      case (a<=25)&(a>=15):
      planet.temMin = randomInteger(190,220);
      break;
      case (a<=75)&(a>=25):
      planet.temMin = randomInteger(220,250);
      break;
      case (a<=90)&(a>=75):
      planet.temMin = randomInteger(250,280);
      break;
      default:
      planet.temMin = randomInteger(280,600);
    }

    planet.temDiapason = 20;
    planet.temMax;

    if ((planet.atmosphere==1)&(planet.water==1))
    {
      a = randomInteger(0.1,4);
    } 
    else if ((planet.atmosphere==1)&(planet.water==0))
    {
      a = randomInteger(0.7,10);
    }
    else if ((planet.atmosphere==0)&(planet.water==1)) 
    {
      a = randomInteger(0.7,12);
    } 
    else ((planet.atmosphere==0)&(planet.water==0)) 
    {
      a = randomInteger(3,32);
    } 

    planet.temDiapason = planet.temDiapason*a;
    planet.temMax = planet.temMin+planet.temDiapason;

  planet.lifeforms = new Array();

/*
  planet.lifeforms[0] = "life1";
  planet.lifeforms[1] = "life2";
  planet.lifeforms[2] = "life3";

  alert(planet.lifeforms);
  */
}