
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

	this.addText("¿Qué opción muestra únicamente un conjunto de componentes <I>naturales</I>?");

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
Q.setGroup("Los espacios geográficos.");
Q.addText("¿Cómo se llama un espacio geográfico relativamente homogéneo?");
Q.addOption("Región.", "Medio.", "Paisaje.", "Territorio.", "Lugar.");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("¿Cómo se llama un espacio con componentes naturales, sociales, culturales, y económicos similares?");
Q.addOption();
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("¿Cómo se llama una percepción del espacio geográfico?");
Q.addOption();
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("¿Cómo se llama un espacio delimitado por fronteras?");
Q.addOption();
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("¿Cómo se llama un espacio que se ubica por un nombre o por sus coordenadas exactas?");
Q.addOption();
Q.setAnswer(4);

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

Q = B.addQuestion("choice");
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

Q = B.addQuestion("multiple");
Q.addText("El espacio geográfico está constituido por cuales tres componentes que interactúan e influyen en su conformación:");
Q.addOption("<B>Sociales:</B> son el resultado de actividades humanes, como las expresiones artśticas.");
Q.addOption("<B>Naturales:</B> corresponden a las características físicas de la Tierra, como ríos, montañas, minerales, clima, entre otros.");
Q.addOption("<B>Económicos:</B> provienen del aprovechamiento de los recursos naturales, su transformación, servicios y actividades que impliquen trabajo, por ejemplo la agricultura, minería, hotelería, entre otros.");
Q.addOption("<B>Tecnológicos:</B> uso de la ciencia y técnica para interpretar los espacios geográficos, por ejemplo SIG y GPS.");
Q.setAnswer([0, 1, 2]);

Q = B.addQuestion("choice");
Q.addText("Es la superficie terrestre transformada continuamente por la interacción entre la naturaleza y la sociedad.");
Q.addText("¿A qué se refiere?");
Q.addOption("Al espacio geográfico.");
Q.addOption("Al espacio humanizado.");
Q.addOption("A la corteza continental.");
Q.addOption("A la corteza terrestre.");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.addText("Si tuvieras que hacer una pirámide poblacional de México, ¿qué fuentes de información geográfica utilizarías?");
Q.addOption("Documentales y cartográficas.");
Q.addOption("Gráficas y estadisticas..");
Q.addOption("Cartográficas.");
Q.addOption("Gráficas.");
Q.setAnswer(1);

Q = B.addQuestion("multiple");
Q.addText("¿Las formas de representación del espacio geográfic son principlamente el mapa, el plano y que otras tres?");
Q.addOption("Globo terráqueo.", "Grafismo", "Croquis", "Atlas");
Q.setAnswer([0, 2, 3]);

Q = B.addQuestion("choice");
Q.setGroup("Las proyecciones cartográficas permiten reducir las deformaciones de las representaciones de una superficie esférica a un plano.");
Q.addText("Esta proyección se construye envolviendo la superficie de la tierra con un cilindro.");
Q.addOption("Proyección azimutal.", "Proyección cónica", "Proyección de Mercator.");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Esta proyección consiste en proyectar la superficie terrestre sobre un plano tangente.");
Q.addOption();
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.addText("Los componentes <I>sociales</I> del espacio geográfico se caracterizan por");
Q.addOption("estar relacionados con la población y sus costumbres.");
Q.addOption("estar relacionados con el relieve y la vegetación.");
Q.addOption("aprovechar industrialmente los productos.");
Q.addOption("formar parte de las actividades productivas.");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.addText("Es el medio donde se concentran la mayores cantidades de población.");
Q.addOption("Ciudades.", "Territorios.", "Poblaciones.", "Países.");
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.addText("Es la proyección más adecuada para localizar los volcanes del continente antártico.");
Q.addOption("De Peters.", "Cónica.", "Cilíndrica.", "Azimutal.");
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.addText("Escoge el enunciado que se relaciona con la categoría de territorio.");
Q.addOption("<B>La Reserva de la Biosfera del Vizcaíno</B> en Baja California Sur, posee una extensa reserva faunística que cubre más de 500,000 hectáras.");
Q.addOption("<B>El Sistema Vocánico Transversal</B> tiene montañas que alcanzan más de 5000 msnm y sus cumbres están cubiertas de nieve.");
Q.addOption("Debido a cantidad de poblaión <B>la ciudad de Guadalajara</B>, capital del estado de Jalisco, es la segunda ciudad más importante de México.");
Q.addOption("<B>El estado de Chihuahua</B>, el estado mas grande de México, limita al norte con Estados Unidos de América, al sur con Durango, al este con Coajuila y al oeste con Sonora.");
Q.setAnswer(3);

/******************************************************************************\
								Block 2 
\******************************************************************************/

B = S.addBlock("Bloque 2");

Q = B.addQuestion("choice");
Q.addText("Nombre de las placas tectónicas que están relacionadas con la actividad sísmica y volcánica de Japón.");
Q.addOption("Africana e Indoaustraliana.");
Q.addOption("Indoaustraliana y Arábiga.");
Q.addOption("Eurasiática y Pacífica.");
Q.addOption("Cocos y Caribe.");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.addText("Capa interna de la Tierra donde se encuentran las placas tectónicas.");
Q.addOption("Manto interior.", "Núcleo.", "Corteza terrestre.", "Astenósfera.");
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.addText("Sistema de relieve formado a causa del tectonismo en la que se encuentra el punto más alto de la Tierra.");
Q.addOption("Alpes.", "Himalaya.", "Pirineos.", "Sierra Madre Occidental.");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.addText("Tipo de erosión más frecuente en los desiertos.");
Q.addOption("Fluvial.", "Eólica.", "Pluvial.", "Karstica.");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.addText("Mar que favorece el transporte entre continentes.");
Q.addOption("Mediterráneo.", "Cortés.", "Del Norte.", "Atlántico.");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.addText("Ríos que son fronteras de México.");
Q.addOption("Suchiate y Bravo.", "Usumacinta y Pánuco.", "Coatzacoalcos y Grijalva.", "Hondo y Lerma.");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.addText("Países cuyo clima es cálido debido a su latitud.");
Q.addOption("Argentina y México.", "Estados Unidos y Canadá.", "India y Brasil.", "Sudáfrica y Uruguay.");
Q.setAnswer(2);

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

Q = B.addQuestion("choice");
Q.addText("Las estaciones del año se dan por");
Q.addOption("cambios en la inclinación del eje terrestre.");
Q.addOption("la forma elíptica de la órbita de la Tierra.");
Q.addOption("el movimiento de traslación y la inclinación del eje terrestre.");
Q.addOption("el movimiento de rotación y la inclinación del eje terrestre.");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.addText("Elige la opción que completa de la forma más adecuada la siguiente frase: El ciclo del agua es");
Q.addOption("la forma en la que el agua escurre hasta llegar al mar.");
Q.addOption("la manera en la que el agua circula por la superficie del planeta y escurre hasta los océanos.");
Q.addOption("el proceso por medio del cual el agua circula entre la litosfera, la atmósfera y la hidrosfera.");
Q.addOption("un proceso que implica la evaporación y la lluvia.");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.addText("México es considerado primer lugar en su diversidad de");
Q.addOption("reptiles", "mamíferos", "peces", "aves");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.addText("La distribución de los climas y en consecuencia las regiones naturales que caracterizan se deben a la latitud y la _______.");
Q.addOption("altitud", "incidencia de la luz de Sol", "inclinación del eje terrestre", "longitud");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.addText("¿Por sus condiciones naturales ¿Qué entidad recibe mayor cantidad de precipitación?");
Q.addOption("Tamaulipas", "San Luis Potosí", "Yucatán", "Tabasco");
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.addText("Tipo de cuenca del río que desemboca en un lago, presa o laguna:");
Q.addOption("parteaguas.", "arreica.", "exorreica.", "endorreica.");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.addText("El agua se presenta en tres estados: líquido, gaseoso y sólido.");
Q.addText("Tambien puede ser salada o dulce.");
Q.addText("¿Cuál es la reserva de agua dulce más importante de la Tierra?");
Q.addOption("Los mantos acuíferos.", "Los lagos.", "Los ríos.", "Los polos y glacieres.");
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.addText("La principal región volcánica en México se conforma por el Sistema Volcánico Transversal, que se extiende desde _______ hasta _______.");
Q.addOption("Nayarit / Veracruz.", "Sonora / Chiapas.", "Chihuahua / Tabasco.", "Michoacán / Puebla.");
Q.setAnswer(0);

/******************************************************************************\
								Block 3 
\******************************************************************************/

B = S.addBlock("Bloque 3");

Q = B.addQuestion("choice");
Q.addText("Continente con mayor número de habitantes");
Q.addOption("América.", "África.", "Asia.", "Europa.");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.addText("Principal causa de la concentración de la población en las ciudades.");
Q.addOption("Falta de escuelas en los pueblos.");
Q.addOption("Mejor oportunidad de empleo en las ciudades.");
Q.addOption("Cercanía entre las ciudades y los pueblos.");
Q.addOption("Mejores servicios médicos en las ciudades.");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.addText("Son los tres países más poblados del mundo.");
Q.addOption("China, India y Japón.", "China, India y Estados Unidos de Ámerica.", "China, Pakistán e India.", "China, India y Alemania.");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.addText("¿Cuál opción  explica mejor la principla causa de pérdida de identidad nacional en los países?");
Q.addOption("Las rápidas vías de comunicación, a través de nuevas tecnologías.");
Q.addOption("La gente se interesa más por lo que sucede en el resto del mundo.");
Q.addOption("La llegada de habitantes de otros países infuluye en la cultura propia.");
Q.addOption("La cultura de otros países es más rica que la del país de orígen.");
Q.setAnswer(0);

var hdr = ["Opción", "Entidad", "Población", "Superficie (km<SUP>2</SUP>)"];
var data = [];
data[0] = ["a", "Nuevo León", 4653458, 64156];
data[1] = ["b", "Tlaxcala", 1169936, 3997];
data[2] = ["c", "Estado de México", 15175862, 22351];
data[3] = ["d", "Morelos", 1777227, 4879];

Q = B.addQuestion("string");
Q.addText("¿Qué entidad tiene una mayor <I>densidad</I> de población?");
Q.addText(htmlTable(hdr, data));
Q.setAnswer("c");

Q = B.addQuestion("choice");
Q.addText("Muchos países del mundo tienen una gran diversidad cultural gracias a la presencia");
Q.addOption("de los grupos minoritarios que migran.");
Q.addOption("de costumbres y tradiciones de la población.");
Q.addOption("del predominio de un grupo étnico sobre otro.");
Q.addOption("de étnias, lenguas y religones.");
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.addText("Son las tres entidades más pobladas de México.");
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

/******************************************************************************\
                                Block 4
\******************************************************************************/

B = S.addBlock("Bloque 4");

Q = B.addQuestion("choice");
Q.addText("Organismo que se encarga de regir el comercio internacional.");
Q.addOption("FMI", "OMC", "ONU", "Banco Mundial");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.addText("Entidades federativas que desarrollan el turismo histórico como el principal tipo de turismo.");
Q.addOption("Yucatán y Guerrero", "Jalisco y Nuevo León", "Guanajuato y Puebla", "Distrito Federal y Yucatán");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.addText("Principal socio comercial de México.");
Q.addOption("China", "España", "Estados Unidos de América", "Brasil");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.addText("Gran productor de petróleo, en comparación con los países de la región en la que se ubica.");
Q.addOption("Libia", "Arabia Saudita", "Irán", "Venezuela");
Q.setAnswer(3);

Q = B.addQuestion("multiple");
Q.addText("Las <B>dos</B> transacciones que favorecen los ingresos de divisas al país son:");
Q.addOption("<B>El petróleo</B>: debido a que es un energético de fácil obtención y comercialización");
Q.addOption("<B>Las remesas</B>: envíos de dinero desde el extranjero al interior del país");
Q.addOption("<B>El turismo</B>: México cuenta con diversos espacios turísticos de fama mundial como Chichén Itzá");
Q.addOption("<B>La industria maquiladora</B>: predomina en las entidades fronterizas");
Q.setAnswer([0, 1]);

Q = B.addQuestion("choice");
Q.addText("Las entidades federativas con mayor producción de carne de res son:");
Q.addOption("Querétaro y Durango", "Michoacán y Jalisco", "Aguascalientes y Durango", "Veracruz y Jalisco");
Q.setAnswer(3);

/******************************************************************************\
                                Block 5
\******************************************************************************/

B = S.addBlock("Bloque 5");

Q = B.addQuestion("choice");
Q.setGroup("Relaciona la medida de conservación con el componente natural necesario para una buena calidad de vida.");
Q.addText("<B>Medida:</B> Planes para desarrollar la reforestación.");
Q.addOption("Agua", "Biodiversidad", "Suelo", "Aire");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("<B>Medida:</B> Retroalimentación de mantos acuíferos.");
Q.addOption();
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("<B>Medida:</B> Regulación de actividades industriales.");
Q.addOption();
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("<B>Medida:</B> Cuidado al desarrollar el ecoturismo.");
Q.addOption();
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.addText("Reunión al nivel internacional que, en 1997, buscó crear conciencia en los gobiernos para reducción de la emsión de gases a la atmósfera.");
Q.addOption("Protocolo de Montreal.", "Cumbre de la Tierra.", "Protocolo de Kioto.", "Convenio de Viena.");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup("La legislación ambiental ha desarrollado diverentes políticas para el cuidado del medio ambiente. Relaciona el propósito con su política.");
Q.addText("<B>Proposito:</B> Mejorar el desarrollo económico del país  y proteger sus recursos naturales y el medio ambiente.");
Q.addOption("Mejoramiento de la calidad del aire en área urbanos.");
Q.addOption("Mejoramiento de la administración de los desechos peligrosos.");
Q.addOption("Descentralización de la administración del agua para garantizar un uso más racional.");
Q.addOption("Incluir el desarrollo sustentable como un objetivo dentro del Plan Nacional de Desarrollo.");
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("<B>Proposito:</B> Disminuir las emisiones de dióxido de carbono y dióxido de azufre a la atmósfera para evitar enfermedades respiratorias.");
Q.addOption();
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("<B>Proposito:</B> Aumentar la capacidad de tratar y eliminar estos residuos tan dañinos para el medio ambiente.");
Q.addOption();
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("<B>Proposito:</B> Crear los llamados consejos de cuencas en zonas agrícolas, para que los propios usuarios administren este recurso.");
Q.addOption();
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup("Áreas naturales.");
Q.addText("¿Cómo se le conoce al área natural protegida establecida en una zona caracterizada por una considerable riqueza de flora o fauna, o por la presencia de especies, subespecies o hábitats de distribución restringida?");
Q.addOption("Parque nacional.", "Santuario.", "Monumento natural.", "Reserva de la biosfera.");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("¿Cuál es el nombre del área natural protegida que por su valor ecológico, científico e histórico puede desarrollar el turismo?");
Q.addOption();
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.addText("Es un ejemplo de la aplicación de tecnologías limpias.");
Q.addOption("Los servicios ambientales.", "La implementación de un parque eólico.", "La reforestación de bosques y selvas.", "La construcción de ua represa.");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.addText("¿Cuál es la mejor medida que se puede tomar para evitar un desastre durante un fenómeno meteorológico?");
Q.addOption("No permitir los asentamientos humanos en zonas de riesgo, como las cercanas a un río.");
Q.addOption("Construcción de medios de transporte para que la gente sea evacuada rápidamente.");
Q.addOption("Mejor preparación por parte de Protección Civil en la posible zona de desastre.");
Q.addOption("Instalación de albergues en zonas cercanas a la posible zona de desastre.");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.setGroup("Relaciona la acción llevada a cabo por el gobierno con su riesgo corresepondiente.");
Q.addText("<B>Acción:</B> Mantener monitoreada la temperatura de los océanos próximos.");
Q.addOption("Tectonismo.", "Vulcanismo.", "Huracanes.", "Tornados.");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("<B>Acción:</B> Establecer leyes en la construcción de edificaciones y el cumplimiento de simulacros.");
Q.addOption();
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("<B>Acción:</B> Monitoreo constante en sismos locales y en el aumento de azufre en las áreas locales.");
Q.addOption();
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("<B>Acción:</B> Monitorear la diferencia entre las presiones de la atmśfera.");
Q.addOption();
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.addText("En nuestro país, cada año, llegan alrededor de cuatro huracanes de gran intensidad.");
Q.addText("Las costas son zonas de riesgo yq que reciben de manera inmediata los efectos de ese fenómeno natural.");
Q.addText("Sim embargo, tierra adentro también hay zonas de riesgo.");
Q.addOption("Asentamientos irregulares en las cañadas.", "Las grandes ciudades.", "La llanuras y mesetas.", "Las zonas con gran concentración poblacional.");
Q.setAnswer(0);

Q = B.addQuestion("multiple");
Q.addText("El riesgo para que cualquier tipo de población sufra un desastre, se debe a cuales dos factores:");
Q.addOption("<I>Amenaza:</I> peligro de que ocurra algún fenómeno natural o de origen humano.");
Q.addOption("<I>Disponibilidad:</I> la posición de la población para enfrentar eventos naturales o humanos.");
Q.addOption("<I>Vulnerabilidad:</I> qué tan dañada puede resultar la población como consecuencia de fenómenos naturales o antropogénicos.");
Q.setAnswer([0, 2]);

Q = B.addQuestion("choice");
Q.addText("Las medidas de evaluación y prevención para evita ser víctima de un desastre son importantes.");
Q.addText("Para estimar el riesgo del lugar en el que vivimos se debemos tomar en cuenta los siguientes aspectos:");
var medList = ["Análisis de vulnerabilidad", "Identificación de peligros o riesgos", "Reparación de los daños", "Cálculo de posibles daños"];
Q.addText(htmlList(medList, undefined, "1"));
Q.addOption("4, 1, 2, 3");
Q.addOption("3, 2, 4, 1");
Q.addOption("1, 2, 3, 4");
Q.addOption("2, 1, 4, 3");
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.addText("La identificación de factores de riesgo, el análisis de vulnerabilidad y la educación son una forma de...");
Q.addOption("conocer el desastre.", "prevenir el desastre", "mitigar el riesgo.", "anular el riesgo");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.addText("La elaboración de mapas de fen'omenos naturales relacionados con riegosgeológicos e hidrometeorológicos, son una forma de...");
Q.addOption("conocer los riesgos.", "prevenir los desastres", "estudiar los desastres.", "atender los riesgos.");
Q.setAnswer(1);

