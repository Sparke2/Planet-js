function generatePlant(planet, lifeForm, compatibility_probability)
{
    //alert("start");
  lifeForm.type = 1; // Plant type
  if(randomInteger(1,100) > compatibility_probability)
  {

    // Generate absolutely random characteristics
    // with given probability.

    lifeForm.temMin = randomInteger(0,250);
    a = randomInteger(150,600);
    lifeForm.temMax = lifeForm.temMin + a;
    a = randomInteger(1,100);
    if (a<=60)
    {
      lifeForm.mass = randomInteger(1,50);
    }
    else if (a<=90)
    {
      lifeForm.mass = randomInteger(40,5000);
    }
    else (a<=100)
    {
      lifeForm.mass = randomInteger(5000,200000);
    }
    lifeForm.mass = Math.floor(lifeForm.mass);
    
    lifeForm.radiationMin = randomInteger(0,100);
    lifeForm.radiationMin = lifeForm.radiationMin / 100;
    lifeForm.radiationMax = lifeForm.radiationMin * 100 + randomInteger(20,350);
    lifeForm.radiationMax = lifeForm.radiationMax / 100;
    if (lifeForm.radiationMax > 10) 
    {
      lifeForm.radiationMax = 10;
    }

    // TODO
    lifeForm.metabolism = 1;

    if (randomInteger(0,100)<=20)
    {
      lifeForm.atmosphereRequired = 0;
    }
    else
    {
      lifeForm.atmosphereRequired = 1;
    }

    // TODO
    lifeForm.speed = 0;

    lifeForm.traits = [];
    lifeForm.traits[0] = "Unstable";

    
    lifeForm.food_none = 0;
    
    if (randomInteger(0,100)<=30)
    {
      lifeForm.food_light = 0;
      lifeForm.traits[1] = "Fungus";
    }
    else
    {
      lifeForm.food_light = 1;
    }

    if (randomInteger(0,100)<=10)
    {
      lifeForm.food_water = 1;
    }
    else
    {
      lifeForm.food_water = 0;
    }

    if (randomInteger(0,100)<=20)
    {
      lifeForm.food_bacteria = 1;
    }
    else
    {
      lifeForm.food_bacteria = 0;
    }

    if (randomInteger(0,100)<=2)
    {
      lifeForm.food_plant = 1;
    }
    else
    {
      lifeForm.food_plant = 0;
    }

    lifeForm.food_dead_plant = randomInteger(0,1);
    if (randomInteger(0,100)<=2)
    {
      lifeForm.food_dead_animal = 1;
    }
    else
    {
      lifeForm.food_dead_animal = 0;
    }
    if (randomInteger(0,100)<=2)
    {
      lifeForm.food_dead_humanoid = 1;
    }
    else
    {
      lifeForm.food_dead_humanoid = 0;
    }

    if(lifeForm.food_none == lifeForm.food_dead_plant == lifeForm.food_dead_animal == lifeForm.food_dead_humanoid == lifeForm.food_water == lifeForm.food_light == lifeForm.food_bacteria == lifeForm.food_animal == lifeForm.food_plant == lifeForm.food_humanoid == 0 )
    {
      lifeForm.food_water = 1;
      lifeForm.food_light = 1;
      lifeForm.food_plant = randomInteger(0,1);
      lifeForm.food_dead_animal = randomInteger(0,1);
      lifeForm.food_dead_plant = randomInteger(0,1);
      lifeForm.food_dead_humanoid = randomInteger(0,1);
    }
  }
  else
  {
    // Generate semi-random characteristics
    // depending on the environmental values.

    var variation = randomInteger(0,20) + randomInteger(0,20);
    lifeForm.temMin = planet.temMin + variation - 20;
    if (lifeForm.temMin<0)
    {
      lifeForm.temMin = 0;
    }
    lifeForm.temMax = planet.temMax + randomInteger(0,20) + randomInteger(0,20) - 20;
    if ((lifeForm.temMax-lifeForm.temMin)<100)
    {
      lifeForm.temMax = lifeForm.temMin + 100;
    }
    a = randomInteger(1,100);
    if (a<=60)
    {
      lifeForm.mass = randomInteger(1,50);
    }
    else if (a<=90)
    {
      lifeForm.mass = randomInteger(40,5000);
    }
    else (a<=100)
    {
      lifeForm.mass = randomInteger(5000,200000);
    }

    lifeForm.mass = Math.floor(lifeForm.mass / (planet.g * 2));

    lifeForm.radiationMin = (planet.radiation * 100 + randomInteger(0,250)) - 175;
    lifeForm.radiationMin = lifeForm.radiationMin / 100;
    if (lifeForm.radiationMin < 0)
    {
      lifeForm.radiationMin = 0;
    }
    lifeForm.radiationMax = planet.radiation + (variation - 10)/10;
    if (lifeForm.radiationMax > 10)
    {
      lifeForm.radiationMin = 10;
    }
    if (lifeForm.radiationMax <= lifeForm.radiationMin)
    {
      lifeForm.radiationMax = lifeForm.radiationMin + 0.1;
    }

    // TODO
    lifeForm.metabolism = 1;

   
    lifeForm.atmosphereRequired = planet.atmosphere;
    

    // TODO
    lifeForm.speed = 0;

    lifeForm.traits = [];
    if (planet.illumination<0.5)
    {
      if (randomInteger(0,100)<=90)
      {
        lifeForm.food_light = 0;
        lifeForm.traits[1] = "Fungus";
      }
      else
      {
        lifeForm.food_light = 1;
      }
    } 
    else if (planet.illumination<6)
    {
      if (randomInteger(0,100)<=10)
      {
        lifeForm.food_light = 0;
        lifeForm.traits[1] = "Fungus";
      }
      else
      {
        lifeForm.food_light = 1;
      }
    } 
    else
    {
      lifeForm.food_light = 1;
    } 

    lifeForm.food_water = planet.water;
    // Generate food chains.

    lifeForm.food_animal = 0;
    lifeForm.food_plant = 0;
    lifeForm.food_humanoid = 0;

    var has_appropriate_lifeforms = false;
    for (var i=0; i<planet.lifeforms.length; i++)
    {
      if (planet.lifeforms[i].type == 1 || planet.lifeforms[i].type == 2 || planet.lifeforms[i].type == 3)
      {
        has_appropriate_lifeforms = true;
      }
    }

    if (has_appropriate_lifeforms)
    {
      a = randomInteger(1,100);
      if (a <= 5)
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
    }
    else
    {
      lifeForm.food_dead_plant = 0;
      lifeForm.food_dead_animal = 0;
      lifeForm.food_dead_humanoid = 0;
    }

    has_appropriate_lifeforms = false;
    for (var i=0; i<planet.lifeforms.length; i++)
    {
      if (planet.lifeforms[i].type == 0)
      {
        has_appropriate_lifeforms = true;
      }
    }

    if (has_appropriate_lifeforms)
    {      
      a = randomInteger(1,100);
      if (a <= 20)
      {
        lifeForm.food_bacteria = 1;
      }
      else
      {
        lifeForm.food_bacteria = 0;
      }
    }
    else
    {
      lifeForm.food_bacteria = 0;
    }

    if(lifeForm.food_none == lifeForm.food_dead_plant == lifeForm.food_dead_animal == lifeForm.food_dead_humanoid == lifeForm.food_water == lifeForm.food_light == lifeForm.food_bacteria == lifeForm.food_animal == lifeForm.food_plant == lifeForm.food_humanoid == 0 )
    {
      lifeForm.food_water = 1;
      lifeForm.food_light = 1;
    }
  }
}