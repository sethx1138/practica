
/******************************************************************************\
								Geography 
\******************************************************************************/

S = Practice.addSubject("Geografía");

/******************************************************************************\
								Block 1 
\******************************************************************************/

B = S.addBlock("Bloque 1");

Q = B.addQuestion("choice");
Q.userInit = function()
{
	var i;
	var options = [];
	var nums = [0, 1, 2];
	var compArt = ["ganadería", "agricultura", "presas"];
	var compNat = ["clima", "suelo", "cuerpos de agua", "temperatura", "vegetación", "relieve", "fauna"];
	var comps, ans;

	var ans = getRand(0, 1, 3);

	this.addText("¿Qué opción muestra únicamente un conjunto de componentes naturales?");

	for(i=0; i<4; i++)
	{
		if(i == ans)
			comps = getRandElems(compNat, 3);
		else
		{
			comps = getRandElems(compNat, 2);
			comps.push(getRandElem(compArt));
		}

		nums = getRandElems(nums);		// Scramble strings.
		this.addOption(comps[nums[0]] + ", " + comps[nums[1]] + ", " + comps[nums[2]]);
	}

	this.setAnswer(ans);
}

Q = B.addQuestion("choice");
Q.userInit = function()
{
	var phrases = ["un espacio geográfico relativamente homogéneo",
					"un espacio con componentes naturales, sociales, culturales, y económicos similares",
					"una percepción del espacio geográfico",
					"un espacio delimitado por fronteras"];

	var ind = getRand(0, 1, phrases.length-1)

	this.addText("¿Cómo se llama " + phrases[ind] + "?");

	this.addOption("Región", "Medio", "Paisaje", "Territorio");

	this.setAnswer(ind);
}

Q = B.addQuestion("choice");
Q.addText("¿Cuál es la importancia de la escala gráfica a diferencia de la escala numérica si se modifica el tamaño del mapa?");
Q.addOption("Indica la relación entre las diferentes dimensiones.",);
Q.addOption("Es más fácil entender el contenido del mapa.");
Q.addOption("Conserva la relación entre la distancia real y la del mapa.");
Q.addOption("Sirve para conocer la dimensión real del luga.");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.userInit = function()
{
	var scale = 10000 * getRand(1, 1, 6);

	this.addText("¿Qué indica la escala 1:" + scale + "?");

	this.addOption("Un centímetro en el mapa representa " + scale + " cm en la realidad.");
	this.addOption("Un kilómetro en el mapa representa " + scale/10 + " km en la realidad.");
	this.addOption("Un centímetro en el mapa representa " + scale + " m en la realidad.");
	this.addOption("Un metro en el mapa representa " + scale/1000 + " m en la realidad.");

	this.setAnswer(0);
}

Q = B.addQuestion("choice");
Q.userInit = function()
{
	var scale = 1000 * getRand(1, 1, 6);

	this.addText("¿Qué representa en la realidad un centímetro en un mapa con escala 1:" + scale + "?");

	this.addOption(scale/10 + " cm.");
	this.addOption(scale/100 + " m.");
	this.addOption(scale/10 + " m.");
	this.addOption(scale/10 + " km.");

	this.setAnswer(1);
}

Q = B.addQuestion("choice");
Q.addText("No indica la localización de un lugar sobre la superficie terrestre,");
Q.addText("pero sí da elementos de las condiciones ambientales del lugar, como la temperatura del aire.");
Q.addOption("latitud", "altitud", "altura", "longitud");
Q.setAnswer(1);

Q = B.addQuestion("string");
Q.userInit = function()
{
	var optionsYes = ["Trópico de Cáncer", "Trópico de Capricornio", "Ecuador", "Meridiano", "Meridiano Cero", "Círculo Polar Ártico", "Círculo Polar Antártico"];
	var optionsNo = ["Meridiano de Cáncer", "Meridiano de Capricornio", "Tropico de Concha", "Círculo Europeo"];

	this.addText("En la representación de la superficie terrestre se emplean círculos que rodean la Tierra.");
	this.addText("¿Cual de los sigueintes no existe?");

	var options = getRandElems(optionsYes, 3);
	options.push(getRandElem(optionsNo));

	for(i=0; i<options.length; i++)
		this.addOption(options[i]);

	this.setAnswer(3);
}

/******************************************************************************\
								Block 2 
\******************************************************************************/

B = S.addBlock("Bloque 2");

Q = B.addQuestion("choice");
Q.addText("El origen de la cordillera de los Andes en América del Sur se relaciona con");
Q.addOption("los límites de placas tectónicas.");
Q.addOption("las zonas de sismicidad");
Q.addOption("las zonas de elevación de la corteza terrestre.");
Q.addOption("los limites de fallas.");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.addText("Los mapas de vulcanismo y los de sismicidad, coinciden como si se tratara del mismo mapa.");
Q.addText("¿Qué puedes deducir de esta circunstancia?");
Q.addOption("Coinciden por azar, no tienen ninguna relación entre si.");
Q.addOption("Tanto los sismos como los volcanes tienen un origen común.");
Q.addOption("Los volcanes ocasionan todos los terremotos.");
Q.addOption("Los volcanes son formados por los terremotos.");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.addText("Los sismos registrados frente a las costas del estado de Guerrero, se deben a la actividad de la placa de Cocos.");
Q.addText("Este fenómeno se explica adecuadamente mediante");
Q.addOption("el vulcanismo.", "la tectónica de placas.", "la erosión.", "la dervia continental.");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.addText("Las aguas oceánicas que colindan con México son:");
Q.addOption("del oceáno Atlántico al este y el Pacífico al oeste.");
Q.addOption("del oceáno Atlántico al oeste y el Pacifico al este.");
Q.addOption("del oceáno Índico al oeste y el Ártico al este.");
Q.addOption("del oceáno Pacífico al este y el Índico al oeste.");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.addText("Tipo de corriente que transporta gran cantidad de nutrientes.");
Q.addOption("Del Golfo", "Humboldt", "Ecuatorial del Norte", "Mozambique");
Q.setAnswer(1);

/******************************************************************************\
								Block 3 
\******************************************************************************/

B = S.addBlock("Bloque 3");

Q = B.addQuestion("choice");
Q.addText("¿Cuál opción  explica mejor la principla causa de pérdida de identidad nacional en los países?");
Q.addOption("Las rápidas vías de comunicación, a través de nuevas tecnologías.");
Q.addOption("La gente se interesa más por lo que sucede en el resto del mundo.");
Q.addOption("La llegada de habitantes de otros países infuluye en la cultura propia.");
Q.addOption("La cultura de otros países es más rica que la del país de orígen.");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.addText("Muchos países del mundo tienen una gran diversidad cultural gracias a la presencia");
Q.addOption("de los grupos minoritarios que migran.");
Q.addOption("de costumbres y tradiciones de la población.");
Q.addOption("del predominio de un grupo étnico sobre otro.");
Q.addOption("de étnias, lenguas y religones.");
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.addText("Son las tres entidades más pobladas de México");
Q.addOption("Estado de México, Distrito Federal y Jalisco.");
Q.addOption("Distrito Federal, Jalisco y Nuevo León.");
Q.addOption("Estado de México, Distrito Federal y Veracruz.");
Q.addOption("Distrito Federal, Jalisco y Guerrero.");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.addText("El crecimiento de las poblaciones se debe princpalment a que la natalidad es mayor que la mortalidad y a que la ________ es mayor que ________.");
Q.addOption("estancia de las personas / la migración");
Q.addOption("migración / su estancia");
Q.addOption("entrada de personas al país / su salida");
Q.addOption("edad de las personas adultas / la de los jóvenes");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.addText("En un país como Italia, el porcentaje de población de adultos mayores de 65 años supera al de los menores de 15 años.");
Q.addText("A este predominio de personas mayores sobre la jóvenes se llama:");
Q.addOption("Tendencia poblacional descendente.");
Q.addOption("Estructura en contracción.");
Q.addOption("Estructura estable.");
Q.addOption("Envejecimiento poblacional.");
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.addText("Rusia se denomina, en función de sus grupos étnicos, un país");
Q.addOption("multicultural e intercultural");
Q.addOption("multilingüistico e intercultural");
Q.addOption("multicultural y tolerante");
Q.addOption("multiracial y tolerante");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.addText("Los elementos culturales de diversos pueblos se difunden alrededor del mundo gracias a:");
Q.addOption("el comercio");
Q.addOption("los medios de transporte");
Q.addOption("los medios de comunicación masiva");
Q.addOption("las migraciones de los individuos");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.addText("En Japón, la mayoria de los estudiantes ed secundaria y  preparatoria usan pantalones de mezclilla,");
Q.addText("escuchan música como el hip-hop y comen comida rápida como las hamburguesas.");
Q.addText("Esta adopción de costumbres extranjeras tiene que ver con la.");
Q.addOption("adopción de modas que se manifiestan en ciertos periodos.");
Q.addOption("transculturización debido a los flujos comerciales.");
Q.addOption("influencia de medios de comunicación y la globalización.");
Q.addOption("globalización y los deseos de volverse occidentales.");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.addText("Nombre que recibe el odio hacia los extranjeros.");
Q.addOption("Discriminación", "Xenofobia", "Exclusión social", "Racismo");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.addText("La diversidad de culturas que se encuentran en un mismo territorio se llama");
Q.addOption("Interculturalidad", "Multiculturalidad", "Multietnicidad", "Pluriculturalidad");
Q.setAnswer(1);
