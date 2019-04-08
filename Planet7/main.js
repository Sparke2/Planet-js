function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

var planet = {};
generatePlanet(planet);

function initWorld (planet)
{
  generatePlanet(planet);
  var abstract_lifeform = {};
  planet.lifeforms = new Array();
  // first bacteria
  generateBacteria(planet, abstract_lifeform, 90);
  planet.lifeforms[planet.lifeforms.length] = abstract_lifeform;
  var abstract_lifeform = {};

  // second bacteria
  generateBacteria(planet, abstract_lifeform, 90);
  planet.lifeforms[planet.lifeforms.length] = abstract_lifeform;
  var abstract_lifeform = {};

  // third bacteria
  generateBacteria(planet, abstract_lifeform, 90);
  planet.lifeforms[planet.lifeforms.length] = abstract_lifeform;
  var abstract_lifeform = {};

  // plant
  generatePlant(planet, abstract_lifeform, 90);
  planet.lifeforms[planet.lifeforms.length] = abstract_lifeform;
  var abstract_lifeform = {};

  // semi-compatible bacteria
  generateBacteria(planet, abstract_lifeform, 20);
  planet.lifeforms[planet.lifeforms.length] = abstract_lifeform;

  displayPlanetAtElement(planet, "planet_holder");
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