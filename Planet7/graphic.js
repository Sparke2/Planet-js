function displayPlanetAtElement(planet, element_id)
{
  var toHTML = "";

  toHTML += "" + "<br>" + "<br>";
  toHTML += "" + "<table>" + "---------------------------------------------------------------------------------------------" + "</table>";
  toHTML += "" + "<table>" + "Planet " + "  " + "</table>";
  toHTML += "" + "<table>" + "planet.mass: " + planet.mass + "</table>";
  toHTML += "" + "<table>" + "planet.volume: " + planet.volume + "</table>";
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

  document.getElementById(element_id).innerHTML = toHTML;
}
