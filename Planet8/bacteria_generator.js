function generateBacteria(planet, lifeForm, compatibility_probability)
{
  //alert("start");
  lifeForm.type = 0; // Bacteria type
  if(randomInteger(1,100) > compatibility_probability)
  {

    // Generate absolutely random characteristics
    // with given probability.

    lifeForm.temMin = randomInteger(0,250);
    a = randomInteger(150,600);
    lifeForm.temMax = lifeForm.temMin + a;
    lifeForm.mass = randomInteger(1,250) + randomInteger(0,250) + randomInteger(0,250) + randomInteger(0,250); // in kg^-13
    lifeForm.radiationMin = randomInteger(0,100);
    lifeForm.radiationMin = lifeForm.radiationMin / 100;
    lifeForm.radiationMax = lifeForm.radiationMin * 100 + randomInteger(300,1500);
    lifeForm.radiationMax = lifeForm.radiationMax / 100;
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

    if (randomInteger(0,100)<=25)
    {
      lifeForm.food_none = 1;
    }
    else
    {
      lifeForm.food_none = 0;
    }
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

    if(lifeForm.food_none == lifeForm.food_dead_plant == lifeForm.food_dead_animal == lifeForm.food_dead_humanoid == lifeForm.food_water == lifeForm.food_light == lifeForm.food_bacteria == lifeForm.food_animal == lifeForm.food_plant == lifeForm.food_humanoid == 0 )
    {
      lifeForm.food_none = 1;
      lifeForm.food_plant = 1;
      lifeForm.food_water = randomInteger(0,1);
      lifeForm.food_light = randomInteger(0,1);
    }
  }
  else
  {
    // Generate semi-random characteristics
    // depending on the environmental values.

    var variation = randomInteger(0,50) + randomInteger(0,50);
    lifeForm.temMin = planet.temMin + variation - 50;
    if (lifeForm.temMin<0)
    {
      lifeForm.temMin = 0;
    }
    lifeForm.temMax = planet.temMax + randomInteger(0,50) + randomInteger(0,50) - 50;
    if ((lifeForm.temMax-lifeForm.temMin)<100)
    {
      lifeForm.temMax = lifeForm.temMin + 100;
    }
    lifeForm.mass = randomInteger(1,250) + randomInteger(0,250) + randomInteger(0,250) + randomInteger(0,250); // in kg^-13

    lifeForm.radiationMin = (planet.radiation * 100 + randomInteger(0,250)) - 175;
    lifeForm.radiationMin = lifeForm.radiationMin / 100;
    if (lifeForm.radiationMin < 0)
    {
      lifeForm.radiationMin = 0;
    }
    lifeForm.radiationMax = planet.radiation + (variation - 20)/10;
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