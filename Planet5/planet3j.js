function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

var planet = {};
generatePlanet(planet);

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

function initWorld (planet)
{
  var bacteria = {};
  planet.lifeforms = new Array();
  // first bacteria
  generateBacteria(planet, bacteria, 90);
  planet.lifeforms[planet.lifeforms.length] = bacteria;
  var bacteria = {};

  // second bacteria
  generateBacteria(planet, bacteria, 90);
  planet.lifeforms[planet.lifeforms.length] = bacteria;
  var bacteria = {};

  // third bacteria
  generateBacteria(planet, bacteria, 90);
  planet.lifeforms[planet.lifeforms.length] = bacteria;
  var bacteria = {};

  // semi-compatible bacteria
  generateBacteria(planet, bacteria, 20);
  planet.lifeforms[planet.lifeforms.length] = bacteria;

  displayPlanetAtElement(planet, "planet_holder");
}

function displayPlanetAtElement(planet, element_id)
{
  var toHTML = "";

  toHTML += "" + "<br>" + "<br>";
  toHTML += "" + "<table>" + "---------------------------------------------------------------------------------------------" + "</table>";
  toHTML += "" + "<table>" + "Planet " + "  " + "</table>";
  toHTML += "" + "<table>" + "planet.mass: " + planet.mass + "</table>";
  toHTML += "" + "<table>" + "G: " + planet.g + "</table>";
  toHTML += "" + "<table>" + "planet.atmosphere: " + planet.atmosphere + "</table>";
  toHTML += "" + "<table>" + "planet.water: " + planet.water + "</table>";
  toHTML += "" + "<table>" + "planet.radiation: " + planet.radiation + "</table>";
  toHTML += "" + "<table>" + "planet.illumination: " + planet.illumination + "</table>";
  toHTML += "" + "<table>" + "Temperature Min: " + planet.temMin + "</table>";
  toHTML += "" + "<table>" + "Temperature Max: " + planet.temMax + "</table>";
  toHTML += "" + "<table>" + "---------------------------------------------------------------------------------------------" + "</table>";
  toHTML += "" + "<br>" + "<br>";

  for(var i=0;i<planet.lifeforms.length;i++)
  {
    toHTML += "" + "<table>" + "Lifeform " + i + ": " + planet.lifeforms[i].type + "</table>";
    toHTML += "" + "<table>" + "temMin: " + planet.lifeforms[i].temMin + "</table>";
    toHTML += "" + "<table>" + "temMax: " + planet.lifeforms[i].temMax + "</table>";
    toHTML += "" + "<table>" + "Mass: " + planet.lifeforms[i].mass + "</table>";
    toHTML += "" + "<table>" + "radiationMin: " + planet.lifeforms[i].radiationMin + "</table>";
    toHTML += "" + "<table>" + "radiationMax: " + planet.lifeforms[i].radiationMax + "</table>";
    toHTML += "" + "<table>" + "Metabolism: " + planet.lifeforms[i].metabolism + "</table>";
    toHTML += "" + "<table>" + "Speed: " + planet.lifeforms[i].speed + "</table>";
    toHTML += "" + "<table>" + "Atmosphere: ";
    
    if(planet.lifeforms[i].atmosphereRequired == 1) toHTML += "Yes";
    else toHTML += "No";

    toHTML += "</table>";
    toHTML += "" + "<table>" + "Traits: ";
    for (var j = 0; j<planet.lifeforms[i].traits.length;j++)
    {
      toHTML += "" + planet.lifeforms[i].traits[j] + ", ";
    }
    toHTML += "</table>";
    toHTML += "" + "<table>" + "Diet: ";

    if(planet.lifeforms[i].food_none == 1) toHTML += "None  ";
    if(planet.lifeforms[i].food_water == 1) toHTML += "Water  ";
    if(planet.lifeforms[i].food_light == 1) toHTML += "Light  ";
    if(planet.lifeforms[i].food_bacteria == 1) toHTML += "Bacteria  ";
    if(planet.lifeforms[i].food_plant == 1) toHTML += "Plant  ";
    if(planet.lifeforms[i].food_animal == 1) toHTML += "Animal  ";
    if(planet.lifeforms[i].food_humanoid == 1) toHTML += "Humanoid  ";
    if(planet.lifeforms[i].food_dead_plant == 1) toHTML += "Corpse(Plant)  ";
    if(planet.lifeforms[i].food_dead_animal == 1) toHTML += "Corpse(Animal)  ";
    if(planet.lifeforms[i].food_dead_humanoid == 1) toHTML += "Corpse(Humanoid)  ";

    toHTML += "</table>";

    toHTML += "" + "<table>" + "----------" + "</table>";
  }

  document.getElementById(element_id).innerHTML += toHTML;
}



function generateLife (planet)
{

  /*
  alert(planet.mass);
  alert(planet.volume);
  alert(planet.g);
  */
  var lifeForm = {};
  a = randomInteger(1, 100);
  if (a<=10) 
  {
    lifeForm.type = randomInteger(0,2);
    switch (lifeForm.type)
    {
      case lifeForm.type==0:
      generateBacteria(planet, lifeForm, 90);
      break;
      case lifeForm.type==1:
      generatePlant(planet, lifeForm, 90);
      break;
      case lifeForm.type==2:
      generateAnimal(planet, lifeForm, 90);
      break;
    }
  } 
  else 
  {

  }
}

/*var array = [];
for (var i = 0; i<1000; i++)
{
  array[i] = randomInteger(1,250) + randomInteger(0,250) + randomInteger(0,250) + randomInteger(0,250);
}*/

function randomSquare(array)
{
  var mid = 0;
  for (var i=0;i<array.length;i++)
  {
    mid += array[i];
  }
  mid = mid/array.length;

  //alert(mid);
  var sqre = 0;
  for (var i=0;i<array.length;i++)
  {
    sqre += (array[i] - mid) * (array[i] - mid);
  }
  sqre = sqre / array.length;
  sqre = Math.sqrt(sqre);

  alert(sqre);
}

function generateBacteria(planet, lifeForm, compatibility_probability)
{
  //alert("start");
  lifeForm.type = 0; // Bacteria type
  if(randomInteger(1,100)>compatibility_probability)
  {

    // Generate absolutely random characteristics
    // with given probability.

    lifeForm.temMin = randomInteger(0,250);
    a = randomInteger(150,600);
    lifeForm.temMax = lifeForm.temMin + a;
    lifeForm.mass = randomInteger(1,250) + randomInteger(0,250) + randomInteger(0,250) + randomInteger(0,250); // in kg^-13
    lifeForm.radiationMin = 0;
    lifeForm.radiationMax = lifeForm.radiationMin + randomInteger(3,15);
    if (lifeForm.radiationMax > 10) 
    {
      lifeForm.radiationMax = 10;
    }

    // TODO
    lifeForm.metabolism = 1;

    if (randomInteger(0,100)<=30)
    {
      lifeForm.atmosphereRequired = 0;
    }
    else
    {
      lifeForm.atmosphereRequired = 1;
    }

    // TODO
    lifeForm.speed = 1;

    lifeForm.traits = [];
    lifeForm.traits[0] = "Unstable";

    lifeForm.food_none = randomInteger(0,1);
    lifeForm.food_light = randomInteger(0,1);   
    lifeForm.food_water = randomInteger(0,1);
    if (randomInteger(0,100)<=30)
    {
      lifeForm.food_bacteria = 1;
    }
    else
    {
      lifeForm.food_bacteria = 0;
    }
    if (randomInteger(0,100)<=5)
    {
      lifeForm.food_plant = 1;
    }
    else
    {
      lifeForm.food_plant = 0;
    }

    lifeForm.food_dead_plant = randomInteger(0,1);
    lifeForm.food_dead_animal = randomInteger(0,1);
    lifeForm.food_dead_humanoid = randomInteger(0,1);
  }
  else
  {
    // Generate semi-random characteristics
    // depending on the environmental values.

    var variation = randomInteger(-40,25);
    lifeForm.temMin = planet.temMin + variation;
    if (lifeForm.temMin<0)
    {
      lifeForm.temMin = 0;
    }
    lifeForm.temMax = planet.temMax + randomInteger(-25,40);
    if ((lifeForm.temMax-lifeForm.temMin)<100)
    {
      lifeForm.temMax = lifeForm.temMin + 100;
    }
    lifeForm.mass = randomInteger(1,250) + randomInteger(0,250) + randomInteger(0,250) + randomInteger(0,250); // in kg^-13
    
    variation = randomInteger(-0.2,0.2);
    lifeForm.radiationMin = planet.radiationMin + variation;
    if (lifeForm.radiationMin < 0)
    {
      lifeForm.radiationMin = 0;
    }
    variation = randomInteger(-0.2,0.2);
    lifeForm.radiationMax = planet.radiationMax + variation;
    if (lifeForm.radiationMin > 10)
    {
      lifeForm.radiationMin = 10;
    }
    if (lifeForm.radiationMax <= lifeForm.radiationMin)
    {
      lifeForm.radiationMax = lifeForm.radiationMin + 0.1;
    }

    // TODO
    lifeForm.metabolism = 1;

    if (planet.atmosphere == 1)
    {
      lifeForm.atmosphereRequired = randomInteger(0,1);
    }
    else
    {
      lifeForm.atmosphereRequired = 0;
    }

    // TODO
    lifeForm.speed = 1;

    lifeForm.traits = [];

    // Generate food chains.

    lifeForm.food_animal = 0;
    lifeForm.food_plant = 0;
    lifeForm.food_humanoid = 0;

    if(planet.water == 1)
    {
      a = randomInteger(1,100);
      if (a <= 30)
      {
        lifeForm.food_water = 0;
      }
      else
      {
        lifeForm.food_water = 1;
      }
    }
    else
    { 
      lifeForm.food_water = 0;
    }

    if(planet.illumination >= 1)
    {
      a = randomInteger(1,100);
      if (a <= 10 * planet.illumination)
      {
        lifeForm.food_light = 1;
      }
      else
      {
        lifeForm.food_light = 0;
      }
    }

    a = randomInteger(1,100);
    if (a <= 60)
    {
      lifeForm.food_dead_plant = 1;
      lifeForm.food_dead_animal = 1;
      lifeForm.food_dead_humanoid = 1;
    }
    else
    {
      lifeForm.food_dead_plant = 0;
      lifeForm.food_dead_animal = 0;
      lifeForm.food_dead_humanoid = 0;
    }

    a = randomInteger(1,100);
    if (a <= 30)
    {
      lifeForm.food_bacteria = 1;
    }
    else
    {
      lifeForm.food_bacteria = 0;
    }

    a = randomInteger(1,100);
    if (a <= 10)
    {
      lifeForm.food_none = 1;
    }
    else
    {
      lifeForm.food_none = 0;
    }

    if(lifeForm.food_none == lifeForm.food_dead_plant == lifeForm.food_dead_animal == lifeForm.food_dead_humanoid == lifeForm.food_water == lifeForm.food_light == lifeForm.food_bacteria == lifeForm.food_animal == lifeForm.food_plant == lifeForm.food_humanoid == 0 )
    {
      lifeForm.food_none = 1;
      lifeForm.food_plant = 1;
      lifeForm.food_water = randomInteger(0,1);
      lifeForm.food_light = randomInteger(0,1);
    }
  }

  //alert(lifeForm);
}

function generatePlant(planet, lifeForm)
{

}

function generateAnimal(planet, lifeForm)
{

}

function generateHumanoid(planet, lifeForm)
{

}



/* Planet Object

  planet.mass;
  planet.volume;
  planet.g;
  planet.atmosphere;
  planet.water;
  planet.radiation;
  planet.illumination;
  planet.temMin;
  planet.temMax;
  planet.temDiapason;
  planet.lifeforms[];
  */

/* Lifeform types
  
  0 = bacteria
  1 = plant
  2 = animal
  3 = humanoid
  */

/* LifeForm Object
  
  lifeform.type; // 0, 1, 2 or 3
  lifeform.population;
  lifeform.mass;
  lifeform.temMin;
  lifeform.temMax;
  lifeform.radiationMin;
  lifeform.radiationMax;
  lifeform.metabolism;
  lifeform.traits[];
  lifeform.atmosphereRequired;
  lifeform.speed;

  lifeform.food_none;          // true or false
  lifeform.food_light;         // true or false
  lifeform.food_water;         // true or false
  lifeform.food_bacteria;      // true or false
  lifeform.food_plant;         // true or false
  lifeform.food_dead_plant;    // true or false
  lifeform.food_animal;        // true or false
  lifeform.food_dead_animal;   // true or false
  lifeform.food_humanoid;      // true or false
  lifeform.food_dead_humanoid; // true or false
  */

/*
function test()
{
  return 10;
}
*/