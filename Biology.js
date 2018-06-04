/******************************************************************************\
                                Biology
\******************************************************************************/

S = Practice.addSubject("Biología");

/******************************************************************************\
                                Block 1
\******************************************************************************/

B = S.addBlock("Bloque 1");

// Five kingdoms of living beings.

Q = B.addQuestion("choice");
Q.setGroup("Los cinco reinos de los seres vivos.");
Q.addText("Se compone de organismos unicelulares como las bacterias, que se caracterizan por no poseer membran nuclear.");
Q.addOption("Animlia", "Fungi", "Monera", "Plantae", "Protista");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Agrupa organismos pluricelulares, como las algas macroscópias, y unicelulares, como las amebas, que cuentan con membrana nuclear.");
Q.addOption();
Q.setAnswer(4);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("En este reino se encuentran levduras, hongos y mohos; organismos heterótrofos que absorben sustancias producidas por otros seres vivos.");
Q.addOption();
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Los organismos de este grupo son autótrofos, y comparten la característica de poseer clorofila para producir sus alimentos.");
Q.addOption();
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Todos son organismos heterótrofos pluricelulares, es decir, se alimentan de otros organismos para obtener energía.");
Q.addOption();
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.addText("¿Cuál de las siguientes plantas tienen propiedades medicinales y se usan en la herbolaria de nuestro país?");
Q.addOption("Manzanilla y eucalipto", "Algodón y maguey", "Cacahuate y aguacate", "Maíz y frijol");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.addText("Se da por el aumento del tamaño celular, del número de células o de ambas.");
Q.addOption("Desarrollo", "Metabolismo", "Madurez", "Crecimiento");
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.addText("¿Qué capacidad de los seres vivos permite mantener un equilibrio dinámico interno?");
Q.addOption("Irritabilidad", "Homeostasis", "Respiración", "Desarrollo");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.addText("Si quisieras observar a detalle los organelos de ua célula, ¿qué tipo de instrumento utilizarías?");
Q.addOption("Ninguno, lo haría a simple vista", "Una lupa", "Un microscopio compuesto", "Un microscopio electrónico");
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.addText("¿Cuál es el motivo por el cual se vuelven a presenta brotes de enfermedades que se creían erradicadas, como la tuberculosis?");
Q.addOption("Por consumir medicamentos genéricos.");
Q.addOption("La resistencia que las bacterias han desarrollado a ciertos antibióticos.");
Q.addOption("No acudir al doctor cuando la persona se siente enferma.");
Q.addOption("No aplicarse las vacunas respectivas.");
Q.setAnswer(1);

Q = B.addQuestion("multiple");
Q.addText("¿Las islas Galápago fueron esenciales en la elaboración del <I>Origen de las Especies</I>, de Charles Darwin, por cuales dos razones?");
Q.addOption("La presencia de especies exclusivas.");
Q.addOption("Especies con adaptaciones muy particulares.");
Q.addOption("Especies fósiles exclusivas.");
Q.addOption("Gran diversidad de especies.");
Q.setAnswer([0, 1]);

Q = B.addQuestion("choice");
Q.addText("En el siguiente esquema, ¿qué observas?");
Q.addText(htmlImage("FoodNetwork.jpg"));
Q.addOption("La interacción de seres abióticos y bióticos.");
Q.addOption("Una cadena alimentaria.");
Q.addOption("Una red alimentaria.");
Q.addOption("La relación de herbívoros y depredadores.");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.addText("¿Al decir: \"Aprovechar mejor los recursos y satisfacer las necesidades de toda la población, procurando a las futuras generaciones\", estamos hablando de:");
Q.addOption("Leyes de áreas naturales protegidas.");
Q.addOption("Conservación de ecosistemas.");
Q.addOption("Desarrollo sustentable.");
Q.addOption("Ciclos biogeoquímicos.");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.addText("Una causa frecuente de alteración ligada a las cadenas alimentarias o a las redes tróficas está asociada con...");
Q.addOption("una elevación de la temperatura ambiental.");
Q.addOption("la pérdida de biodiversidad.");
Q.addOption("la contaminación atmosférica.");
Q.addOption("la sobreexplotación de una especie.");
Q.setAnswer(3);

/******************************************************************************\
                                Block 2
\******************************************************************************/

B = S.addBlock("Bloque 2");

// Heterotrophia/Autotrophia

Q = B.addQuestion("choice");
Q.setGroup("Organismos <b>autótroficos</b> se alimentan de quimicos y <b>heterótroficos</b> se alimentan de otros organismos.");
Q.addText("¿Cuál de los siguientes organismos tiene una nutrición heterótrofa?");
Q.addOption("Animales, hongos, bacteria (parásitica, simbiótica, etc.)");
Q.addOption("Plantas, algae, bacteria (metanógenas, cyanobacteria, etc.)");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("¿Cuál de los siguientes organismos tiene una nutrición autótrofa?");
Q.addOption();
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Los organismos autótrofos son la base de las cadenas alimentarias en los ecosistemas porque");
Q.addOption("utilizan las sales minerales del suelo para fabricar vitaminas y enzimas que otros organismos aprovechan en su alimentación.");
Q.addOption("mediante la fotosíntesis fabrican nutrimentos ricos en energía química, que consumen otros organismos.");
Q.addOption("se alimentan de materia orgánica en descomposición, favoreciendo el flujo de materia y energía en los ecosistemas.");
Q.addOption("mediante sus raíces retienen el suelo, evitando su erosión, y también favorecen la humedad ambiental.");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Los organismos autótrofos utilizan el alimento que producen para efectuar sus funciones vitales; el excedente lo...");
Q.addOption("desechan al suelo por las raíces.");
Q.addOption("regresan al ambiente a través de la transpiración.");
Q.addOption("almacenan en sus estructuras de reserva.");
Q.addOption("consumen inmediatamente.");
Q.setAnswer(2);

// Food conservation

Q = B.addQuestion("choice");
Q.setGroup("Tipos de conservación en los alimentos con su procedimiento.");
Q.addText("Son sometidos a temperaturas variables de 115 a 130 °C durante 15 o 30 minutos.");
Q.addText("Esto asegura la conservación durante un periodo no inferior a las 48 h.");
Q.addOption("Esterilización", "Refrigeración", "Pasteurización", "Congelación rápida", "Deshidratación");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Se mantienen a temperaturas entre 0 y 6 °C.");
Q.addText(" Ayuda a inhibir durante algunos días el crecimiento microbiano, porque éstos no pueden crecer y desarrollarse a estas temperaturas.");
Q.addOption();
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Se calenta a unos 72 °C durante 15 o 20 segundos.");
Q.addOption();
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Son enfriados rápidamente a temperaturas de -30 °C. Pueden durar de 3 a 12 meses.");
Q.addOption();
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Se deshidratan mediante el Sol o el viento.");
Q.addText("Su duración varía de acuerdo con la humedad en el ambiente, siendo de días a meses.");
Q.addOption();
Q.setAnswer(4);

// Nutrition

Q = B.addQuestion("choice");
Q.setGroup("Los cinco nutrientes esenciales.");
Q.addText("Principal fuente de energía para el cuerpo.");
Q.addOption("Carbohidratos", "Proteínas", "Lípidos", "Vitaminas", "Minerales");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Están conformadas por aminoácidos.");
Q.addOption();
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Se dividen en grasa y aceites, aportan mucha energía.");
Q.addOption();
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Ayudan al crecimiento y evitan enfermedades.");
Q.addOption();
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("El calcio y el hierro son ejemplos de ellos.");
Q.addOption();
Q.setAnswer(4);

Q = B.addQuestion("choice");
Q.setGroup("Nutrición y digestión.");
Q.addText("¿Cuáles son los dos componentes básicos de todo los alimentos?");
Q.addOption("Fibra y carbohidratos", "Vitaminas y buen sabor", "Nutrimentos y energía", "Proteínas y minerales");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("¿Qué ocurre cuando hay desnutrición?");
Q.addOption("El páncreas ya no produce la insulina suficiente para meter la glucosa a las células.");
Q.addOption("El cuerpo emplea la energía de los alimentos sólo para mantener las funciones vitales");
Q.addOption("No hay una ingesta de alimento y por lo tanto no hay asimilación de nutrientes en el cuerpo.");
Q.addOption("Hay un exceso de nutrientes en el cuerpo, que son desechados vía orina.");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Órganos del aparato digestivo en los que se realiza, respectivamente, la absorción de los nutrientes y del agua:");
Q.addOption("Páncreas y glándulas salivales.", "Intestino degado y grueso.", "Hígado y esófago.", "Apéndice y lengua.");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Todas las funciones que lleva a cabo tu organismo requieren energía que se obtiene en la nutrición a partir de los...");
Q.addOption("alimentos.", "nutrimentos.", "consumibles.", "elementos.");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("¿Cuál de las siguientes opciones ofrece una dieta elevada en fibras?");
Q.addOption("Carne, huevo, verduras.", "Frutas, verduras, cereales.", "Frijoles, carne, fruta.", "Mariscos, carne, cereales.");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Son sustancias naturales o sintéticas que se añaden a los alimentos para modificar sus cualidades, textura, consistencia, apariencia, sabor y olor.");
Q.addOption("Saborizantes.", "Aditivos.", "Conservadores.", "Antioxidantes.");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("¿Cuál de las siguientes órganos lleva a cabo la digestión en un organismo?");
Q.addOption("Recto.", "Cavidad oral.", "Intestino grueso.", "Estómago.");
Q.setAnswer(3);


// Illnesses

Q = B.addQuestion("choice");
Q.setGroup("Enfermidades: diabetes, obesidad, bulimia.");
Q.addText("La diabetes es un conjunto de trastornos metabólicos...");
Q.addOption("en el cual el organismo es incapaz de producir o utilizar insulina de manera apropia.");
Q.addOption("alimenticio y emocional, en el cual las personas comen compulsivamente para luego vomitar el alimento.");
Q.addOption("alimenticio y emocional, en el cual las personas se perciben obesas y dejan de comer.");
Q.addOption("en el cual el organismo es incapaz de producir o utilizar glucosa de manera adecuada.");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Fernanda tiene un problem de salud que le provoca que su intestino trabaje de manera incorrecta.");
Q.addText("¿Qué función del sistema digestivo no realiza correctamente?");
Q.addOption("Descomposición de nutrimentos.");
Q.addOption("Absorción de nutrimentos.");
Q.addOption("Fraccionar los alimentos.");
Q.addOption("Absorción de agua y minerales.");
Q.setAnswer(1);

var symptoms = ["Se siente obeso y prefiere no comer.", "Cuando ha comido decide vomitar.",
					"No gasta en sus actividades la energía que obtiene al alimentarse.",
					"Hay hiperactividad.", "Emplea laxantes para defecar continuamente."];

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Lee los siguientes síntomas.");
Q.addText(htmlList(symptoms));
Q.addText("¿Cuáles son los sintomas de la bulimia en una persona?");
Q.addOption("2 y 4", "1 y 3", "1 y 4", "2 y 5");
Q.setAnswer(3);

var symptoms = ["Parte de los nutrimentos ingeridos pasan a formar parte de las reservas.",
				"Muchos órganos trabajan en excceso.", "La acumulación de grasa, bloquea las arterias"];

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Lee los siguientes síntomas.");
Q.addText(htmlList(symptoms));
Q.addText("Lo anterior es un cuadro diagnóstico de...");
Q.addOption("Obesidad", "Diabetes", "Bulimia", "Anorexia");
Q.setAnswer(0);

// Plants

Q = B.addQuestion("choice");
Q.setGroup("Plantas y fotosíntesis.");
Q.addText("Cuál de los siguientes procesos define correctamente a la fotosíntesis");
Q.addOption("Los estomas realizan el intercambio gaseoso, absorbiendo CO<SUB>2</SUB> y desechando O<SUB>2</SUB>.");
Q.addOption("La energía captada por la clorofila (contenida en los cloroplastos) ayuda a sintetizar glucosa.");
Q.addOption("Los cloroplastos generan oxígeno a partir de la ruptura del agua.");
Q.addOption("Las planta convierten la energía luminosa del Sol en energía química.");
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Elige el esquema que explica el proceso fotsintético de manera más completa.");
Q.addOption("(Glucosa) + (Oxigeno) ⇒ (Agua) + (Dioxido de carbono) + (Luz solar)");
Q.addOption("(Glucosa) + (Oxigeno) + (Luz solar) ⇒ (Agua) + (Dioxido de carbono)");
Q.addOption("(Agua) + (Dioxido de carbono) + (Luz solar) ⇒ (Glucosa) + (Oxigeno)");
Q.addOption("(Luz Solar) + (Dioxido de carbono) + (Oxigeno) ⇒ (Glucosa) + (Agua)");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Parte de la planta que se encarga de transportar agua y minerales desde las raíces hasta las hojas.");
Q.addOption("Estoma", "Floema", "Xilema", "Parénquima lagunar");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("De las siguientes opciones, ¿qué estructura conforman al cloroplasto.");
Q.addOption("Tilacoide, estoma y grana.");
Q.addOption("Tilacoide, grana y xilema.");
Q.addOption("Tilacoide, estroma y grana.");
Q.addOption("Tilacoide, grana y floema.");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("¿La presencia de que substancia <I>en</I> las plantas es esencial para poder iniciar el proceso de la fotosíntesis.");
Q.addOption("Oxígeno", "Agua", "Glucosa", "Clorofila");
Q.setAnswer(3);

/******************************************************************************\
                                Block 3
\******************************************************************************/

B = S.addBlock("Bloque 3");

Q = B.addQuestion("choice");
Q.addText("El calentamiento global es un término utilizado para referir el fenómeno del");
Q.addText("aumento de la temperatura media global de la atmósfera terrestre y de los océanos.");
Q.addText("¿Cuál de los siguientes gases es el prinipal responsable de dicho fenómeno.");
Q.addOption("Dióxido de azufre", "Nitrógeno", "Dióxido de carbono", "Amoniaco");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup("Enfermidades de los pulmones.");
Q.addText("Se pierde la elasticidad del tejido pulmonar y hay destrucción progresiva de los alveolos.");
Q.addOption("Enfisema pulmonar", "Cáncer de los pulmones", "Asma", "Neumonía");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Se ocasiona por la proliferació de células que se reproducen sin control. Se causa por fumar cigarillos.");
Q.addOption();
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Inflamación de las vías respiratorias, se dificulta la respiración y se reproduce un silbido.");
Q.addOption();
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Infección producida por bacterias, virus y hongos.");
Q.addText("Produce inflamación de los pulmones, los alveolos se llenan de flemas difcultando la respiración.");
Q.addOption();
Q.setAnswer(3);

Q = B.addQuestion("multiple");
Q.addText("De las siguientes afirmaciones, ¿cuáles tres se relacionan con el efecto invernadero?");
Q.addOption("El dióxido de carbono, el metano, los clorofluorocarburos y el ozono, son ejemplos de gases que absorben la radiación solar y el calor reflejado por la superficie terrestre.");
Q.addOption("Las modificaciones en los patrones de lluvia y de cambios de temperatura, entre otros factores, provoca el efecto invernadero.");
Q.addOption("El efecto inveradero es un proceso natural que permite un equilibrio en las temperaturas de nuestro planeta; sin embargo, en las últimas décadas este se ha visto afectado debido al aumento en las concentraciones de algunos gases producidos por las actividades humanas (clorofluorocarburos, óxidos de nitrógeno y ozono, entre otros.");
Q.addOption("Es el aumento de la temperatura promedio de la atmósfera y de los océanos en todo el planeta.");
Q.addOption("Parte de la radiación solar que llega a nuestro planeta es absorbida por el suelo y reflejada hacia la atmósfera en forma de calor.");
Q.setAnswer([0, 2, 4]);

/******************************************************************************\
                                Block 5
\******************************************************************************/

B = S.addBlock("Bloque 5");

Q = B.addQuestion("multiple");
Q.addText("Son cuatro ejemplos de malos hábitos que pueden provocar enfermedades nutrícionales.");
Q.addOption("Llevar una vida sedentaria.");
Q.addOption("Consumir alimentos ricos en grasas saturadas.");
Q.addOption("Realizar media hora de actividad física diariamente.");
Q.addOption("Consumir alimentos con alto contenido de fibra.");
Q.addOption("Ingerir más calorías de las que el cuerpo puede quemar.");
Q.addOption("Falta de higiene y equilibrio en los alimentos que con consumimos.");
Q.setAnswer([1, 3, 4, 5]);

Q = B.addQuestion("multiple");
Q.addText("Son cinco ejemplos de buenos habitos que permiten prevenir enfermidades respiratorias, sobre todo en época invernal.");
Q.addOption("Saludar de beso o mano.");
Q.addOption("Vacunarse contra la influenza estacional.");
Q.addOption("Lavarse las manos frecuentamente.");
Q.addOption("Asistir a lugares muy concurridos.");
Q.addOption("Fumar en lugares cerrados.");
Q.addOption("Exponerse a cambios de temperatura.");
Q.addOption("Ventilar nuestros hogares y salones de clase.");
Q.addOption("Comer frutas y verduras diariamente.");
Q.addOption("Evitar actividades al aire libre cuando hay contingencia.");
Q.setAnswer([1, 2, 6, 7, 8]);

Q = B.addQuestion("choice");
Q.addText("Método que permite evitar o retrasar el proceso de descomposición de los alimentos.");
Q.addOption("Pasteurización", "Empacado", "Conservación", "Filtración");
Q.setAnswer(2);

Q = B.addQuestion("multiple");
Q.addText("¿Cuáles tres de las siguientes prácticas agrícolas favorecen la conservación del ambiente?");
Q.addOption("Uso de fertilizantes organofosforados", "Rotación de cultivos", "Uso de abonos orgánicos", "Establecimiento de monocultivos", "Fumigación de cultivos", "Manejo de cultivos mixtos");
Q.setAnswer([1, 2, 5]);

Q = B.addQuestion("multiple");
Q.addText("¿Cuáles cinco de las siguientes acciones favorecen la reducción de desechos en la escuela y en el hogar?");
Q.addOption("Utilizar pilas recargables.");
Q.addOption("Uso de empaques e instrumentos de plástic y unicel.");
Q.addOption("Usar bolsas de tela para cargar el mandado.");
Q.addOption("Cambiar los equipos electrodomésticos regularmente.");
Q.addOption("Utilizar papel reciclado.");
Q.addOption("Separar los desechos para facilitar su reciclado.");
Q.addOption("Preparar composta con los residuos orgánicos.");
Q.addOption("Comprar comida para llevar en empaques de plástico.");
Q.setAnswer([0, 2, 4, 5, 6]);

Q = B.addQuestion("choice");
Q.addText("Ordena los pasos para explicar un fenómeno o proceso que se desea estudiar en una investigación cientifica.");
var invList = [];
invList[0] = ["Análisis de resultados."];
invList[1] = ["Desarrollo de explicaciones y comunicación de las mismas."];
invList[2] = ["Identificación de un problema."];
invList[3] = ["Realizar un experimento como comprobación."];
invList[4] = ["Recolección de datos mediante la observación."];
invList[5] = ["Elaboración de una hipótesis."];
Q.addText(htmlList(invList, undefined, "I"));
Q.addOption("III, V, VI, II, IV, I", "I, II, III, IV, V, VI", "III VI, V, IV, I, II", "II, IV, V");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.addText("En la investigación cientifica es muy importante comprobar las hipótesis que se generan.");
Q.addText("¿Cuáles son dos de las habilidades más utilizadas para dicha comprobación?");
Q.addOption("Diseñar un experimento y elaborar un modelo.");
Q.addOption("Hacer preguntas y elaborar un experimento.");
Q.addOption("Identificar un problema y elaborar conclusiones.");
Q.addOption("Comunicar las conclusiones obtenidas y hacer preguntas.");
Q.setAnswer(0);

Q = B.addQuestion("multiple");
Q.addText("¿Cuáles dos de las siguientes afirmaciones corresponden al concepto de diverdsidad biológica?");
Q.addOption("Incluye la variedad de ecosistemas existentes en el planeta.");
Q.addOption("Hace referencia a las diferencias físicas entre los individuos de una misma especie.");
Q.addOption("Se refiere a las diferencias en el material genético de los organismos.");
Q.addOption("Tiene en cuenta a las distintas especies que habitan el planeta.");
Q.addOption("Es el conjunto de interacciones entre los seres vivos y sy ambiente.");
Q.setAnswer([2, 3]);

Q = B.addQuestion("choice");
Q.setGroup("Relaciona el tipo de molécula orgánica con el proceso de descomposición que la afecta.");
Q.addText("Carbohidratos");
Q.addOption("Rancidez", "Fermentación", "Putrefacción");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Proteínas");
Q.addOption();
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Grasas");
Q.addOption();
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.addText("La seguridad en casa depende principalmente de:");
Q.addOption("todos los integrantes de la familia, con funciones asignadas.");
Q.addOption("todos los integrantes de la familia, de manera homogénea.");
Q.addOption("hermanos y primos.");
Q.addOption("mamá y papá.");
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup("Elige el inciso correcto.");
Q.addText("Modo rápido y eficaz de comunicar información y exponer los resultados de un proyecto.");
Q.addOption("Folletos", "Panel de discusión", "Conferencias", "Periódico mural", "Cartel");
Q.setAnswer(4);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Presentación oral de un tema por parte de un conocedor del mismo.");
Q.addOption();
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Publicación de pocas hojas, que sirve para informar sobre un tema especifico.");
Q.addOption();
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Pequeño grupo de personas que discuten un tema frente a una audiencia.");
Q.addOption();
Q.setAnswer(1);

Q = B.addQuestion("choice");
Q.setGroup();
Q.addText("Presentación escrita e ilustrada de una investigación completa a toda la comunidad.");
Q.addOption();
Q.setAnswer(3);

Q = B.addQuestion("choice");
Q.addText("Cuando se predice un posible suceso futuro con base en experiencias pasadas, se está hablando de:");
Q.addOption("Hipótesis", "Elección del tema", "Observación", "Experimento");
Q.setAnswer(0);

Q = B.addQuestion("choice");
Q.addText("¿Cuál de los siguientes eventos debe evitarse al momento en que sucede un accidente en un lugar público, por ejemplo, en la escuela?");
Q.addOption("Llamar a un médico.", "No mover al accidentado.", "Juntarse con los demás alredador del accidentado.", "Apoyar al lesionado.");
Q.setAnswer(2);

Q = B.addQuestion("multiple");
Q.addText("¿Cuando hablamos de programar actividades y elaborar la síntesis de un texto estamos refiriéndonos a cuales dos aspectos básicos del trabajo de investigación?");
Q.addOption("Mapa conceptual.", "Plan de trabajo.", "Bitácora de resultados.", "Ficha de trabajo.", "Resumen.", "Folleto.");
Q.setAnswer([1, 4]);

Q = B.addQuestion("choice");
Q.addText("Para generar tus preguntas e hipótesis es conveniente que reúnas información mínima del tema.");
Q.addText("Puede servirte buscar en las fuentes de información que ya conoces: bibliográfica vivencial, de campo y experimental.");
Q.addText("Esto se lleva a cabo durante...");
Q.addOption("el planteamiento de la pregunta y la hipótesis del proyecto.");
Q.addOption("el desarrollo del proyecto.");
Q.addOption("la planeación del proyecto.");
Q.addOption("la comunicación de resultados.");
Q.setAnswer(2);

Q = B.addQuestion("choice");
Q.addText("Una acción que ayuda a prevenir accidentes es:");
Q.addOption("una medida de seguridad.", "una acción premeditada.", "una zona de riesgo.", "una acción correctiva.");
Q.setAnswer(0);

Q = B.addQuestion("ordered");
Q.addText("Ordena las secciones relacionadas con la elaboración de un quion que sirva de apoyo para la exposición de u trabajo ante el grupo.");
Q.addOption("Objectivo", "Presentación de resultados", "Título", "Desarrollo de la investigación", "Introducción", "Conclusiones");
Q.setAnswer([2, 0, 4, 3, 1, 5]);
