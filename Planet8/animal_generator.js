function generateAnimal(planet, lifeForm, compatibility_probability)
{
  lifeForm.type = 2; // Animal type
  if(randomInteger(1,100) > compatibility_probability)
  {

    // Generate absolutely random characteristics
    // with given probability.

    lifeForm.temMin = randomInteger(0,250);
    a = randomInteger(150,600);
    lifeForm.temMax = lifeForm.temMin + a;
    a = randomInteger(1,100);
    if (a<=50)
    {
      lifeForm.mass = randomInteger(10,30);
    }
    else if (a<=90)
    {
      lifeForm.mass = randomInteger(15,250) + randomInteger(15,250);
    }
    else (a<=100)
    {
      lifeForm.mass = randomInteger(500,100000);
    }
    lifeForm.mass = lifeForm.mass/10;
    
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
    lifeForm.speed = randomInteger(1,3);

    lifeForm.traits = [];
    lifeForm.traits[0] = "Unstable";

    
    lifeForm.food_none = 0;
    
    if (randomInteger(0,100)<=1)
    {
    	lifeForm.food_light = 1;
    }
    else
    {
    	lifeForm.food_light = 0;
    }

    if (randomInteger(0,100)<=1)
    {
    	lifeForm.food_water = 1;
    }
    else
    {
    	lifeForm.food_water = 0;
    }

    if ((lifeForm.mass<=3) & (randomInteger(0,100)<=7))
    {
    	lifeForm.food_bacteria = 1;
    }
    else
    {
    	lifeForm.food_bacteria = 0;
    }

    a = randomInteger(0,100);

    if (a<=65)
    {
    	lifeForm.food_plant = 1;
    	lifeForm.food_humanoid = 0;
    	lifeForm.food_animal = 0;
    	if (randomInteger(0,100)<=10)
    	{
    		lifeForm.food_dead_plant = 1;
    	}
    	else
    	{
    		lifeForm.food_dead_plant = 0;
    	}
    }
    else if (a<=93)
    {
    	lifeForm.food_plant = 0;
    	lifeForm.food_animal = 1;
    	lifeForm.food_humanoid = 1;
    	if (randomInteger(0,100)<=35)
    	{
    		lifeForm.food_dead_animal = 1;
    		lifeForm.food_dead_humanoid = 1;
    	}
    	else
    	{
    		lifeForm.food_dead_animal = 0;
    		lifeForm.food_dead_humanoid = 0;
    	}
    } 
    else 
    {
    	lifeForm.food_plant = 1;
    	lifeForm.food_animal = 1;
    	lifeForm.food_humanoid = 1;  
    	if (randomInteger(0,100)<=35)
    	{
    		lifeForm.food_dead_animal = 1;
    		lifeForm.food_dead_humanoid = 1;
    	}
    	else
    	{
    		lifeForm.food_dead_animal = 0;
    		lifeForm.food_dead_humanoid = 1;
    	}
    	if (randomInteger(0,100)<=10)
    	{
    		lifeForm.food_dead_plant = 1;
    		lifeForm.food_dead_plant = 1;
    	}
    	else
    	{
    		lifeForm.food_dead_plant = 0;
    		lifeForm.food_dead_plant = 0;
    	}
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
    if (a<=50)
    {
      lifeForm.mass = randomInteger(10,30);
    }
    else if (a<=90)
    {
      lifeForm.mass = randomInteger(15,250) + randomInteger(15,250);
    }
    else (a<=100)
    {
      lifeForm.mass = randomInteger(500,100000);
    }
    lifeForm.mass = lifeForm.mass/(10 * planet.g * 2);

    
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
    lifeForm.speed = randomInteger(1,3);

    lifeForm.traits = [];
    // Generate food chains.
    lifeForm.food_light = 0;
    lifeForm.food_water = 0;
    lifeForm.food_animal = 0;
    lifeForm.food_plant = 0;
    lifeForm.food_humanoid = 0;

    var has_appropriate_lifeforms = false;
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
      if (a <= 10)
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

    var has_plants = false;
    for (var i=0; i<planet.lifeforms.length; i++)
    {
      if (planet.lifeforms[i].type == 1)
      {
        has_plants = true;
      }
    }
    var has_animals = false;
    for (var i=0; i<planet.lifeforms.length; i++)
    {
      if (planet.lifeforms[i].type == 2 || planet.lifeforms[i].type == 3)
      {
        has_animals = true;
      }
    }

    if (has_plants && has_animals)
    {
    	a = randomInteger(0,100);
    	if (a<=65)
    	{
    		lifeForm.food_plant = 1;
    		lifeForm.food_humanoid = 0;
    		lifeForm.food_animal = 0;
    		if (randomInteger(0,100)<=10)
    		{
    			lifeForm.food_dead_plant = 1;
    		}
    		else
    		{
    			lifeForm.food_dead_plant = 0;
    		}
    	}
    	else if (a<=93)
    	{
    		lifeForm.food_plant = 0;
    		lifeForm.food_animal = 1;
    		lifeForm.food_humanoid = 1;
    		if (randomInteger(0,100)<=35)
    		{
    			lifeForm.food_dead_animal = 1;
    			lifeForm.food_dead_humanoid = 1;
    		}
    		else
    		{
    			lifeForm.food_dead_animal = 0;
    			lifeForm.food_dead_humanoid = 0;
    		}
    	} 
    	else 
    	{
    		lifeForm.food_plant = 1;
    		lifeForm.food_animal = 1;
    		lifeForm.food_humanoid = 1;
    		if (randomInteger(0,100)<=35)
    		{
    			lifeForm.food_dead_animal = 1;
    			lifeForm.food_dead_humanoid = 1;
    		}
    		else
    		{
    			lifeForm.food_dead_animal = 0;
    			lifeForm.food_dead_humanoid = 1;
    		}
    		if (randomInteger(0,100)<=10)
    		{
    			lifeForm.food_dead_plant = 1;
    			lifeForm.food_dead_plant = 1;
    		}
    		else
    		{
    			lifeForm.food_dead_plant = 0;
    			lifeForm.food_dead_plant = 0;
    		}
    	}
    }
    else if (!has_plants && has_animals)
    {
    	lifeForm.food_plant = 0;
    	lifeForm.food_animal = 1;
    	lifeForm.food_humanoid = 1;
    	if (randomInteger(0,100)<=35)
    	{
    		lifeForm.food_dead_animal = 1;
    		lifeForm.food_dead_humanoid = 1;
    	}
    	else
    	{
    		lifeForm.food_dead_animal = 0;
    		lifeForm.food_dead_humanoid = 0;
    	}
    }
    else if (has_plants && !has_animals)
    {
    	lifeForm.food_plant = 1;
    	lifeForm.food_humanoid = 0;
    	lifeForm.food_animal = 0;
    	if (randomInteger(0,100)<=10)
    	{
    		lifeForm.food_dead_plant = 1;
    	}
    	else
    	{
    		lifeForm.food_dead_plant = 0;
    	}
    }
    else
    {
    	lifeForm.food_bacteria = 1;
    }
  }
}