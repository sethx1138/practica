
/******************************************************************************\
								Physics
\******************************************************************************/

S = Practice.addSubject("Física");

var PI = 3.141592;

/******************************************************************************\
								Block 1
\******************************************************************************/

B = S.addBlock("Bloque 1");

Q = B.addQuestion("choice");
Q.userInit = function()
{
	var ans, dir, v1, v2;

	ans = getRand(0, 1, 3);

	if(ans == 0 || ans == 3)
		dir = "una a la otra";
	else
		dir = "en la misma dirección";

	v1 = getRand(5, 5, 30)

	if(ans == 0 || ans == 1 || ans == 2)
		v2 = 2*v1;
	else
		v2 = getRand(5, 5, 30, v1)

	this.addText("Dos personas que corren en un parque se dirigen " + dir + ".");
	this.addText("Una alcanza una rapidez de " + v1 + " m/s, mientras que la otra recorre " + v2 + " metros cada dos segundos.");
	this.addText("¿Cuál de las siguientes afirmaciones es verdadera?");

	this.addOption("La rapidez de ambos personas es la misma, pero su velocidad es diferente.");
	this.addOption("La rapidez de ambos personas es diferente, pero su velocidad es iqual.");
	this.addOption("La rapidez y velocidad de ambos personas son iquales.");
	this.addOption("La rapidez y velocidad de ambos personas son diferentes.");
 
	this.setAnswer(ans);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var time = getRand(5, 5, 35);

	var dist = 5*time;

	this.addText(htmlImage("Runner.png"));
	this.addText("En esta gráfica se muestra la relación entre la posición (metros) y el tiempo (segundos) de una corredora de distancias cortas.");
	this.addText("¿Qué distancia ha cubierto la corredora en el tiempo <I>t</I> = " + time + " segundos?");

	this.setAnswer(dist);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var vel = getRand(1, 1, 5);
	var time = getRand(2, 1, 5);
	var dist = time*vel;

	this.addText("Una niña camina con una rapidez de " + vel + " km/h.");
	this.addText("¿Cuántos kilometros recorre en " + time + " horas?");

	this.setAnswer(dist);
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var vel = getRand(10, 5, 20);
	var time = getRand(10, 10, 50);
	var dist = time*vel/60;

	this.addText("Una joven anda en bici con una rapidez de " + vel + " km/h.");
	this.addText("¿Cuántos kilometros recorre en " + time + " <U>minutos</U>?");

	this.setAnswer(dist);
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var vel = getRand(100, 10, 150);
	var time = getRand(10, 10, 50);
	var dist = 1000*time*vel/60;

	this.addText("Una chofer maneja un coche con una rapidez de " + vel + " km/h.");
	this.addText("¿Cuántos <U>metros</U> recorre en " + time + " <U>minutos</U>?");

	this.setAnswer(dist);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var vel = getRand(180, 60, 420);
	var time = getRand(6, 6, 42);
	var dist = 1000*time*vel/60/60;

	this.addText("Una mujer pilota un avión con una rapidez de " + vel + " km/h.");
	this.addText("¿Cuántos <U>metros</U> recorre en " + time + " <U>segundos</U>?");

	this.setAnswer(dist);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var vel = getRand(100, 10, 200);
	var dist = getRand(1, 1, 10)*vel;
	var time = dist/vel;

	this.addText("Un coche se mueve con una rapidez de " + vel + " km/h.");
	this.addText("¿Cuántos horas le llevará recorrer " + dist + " kilometros?");

	this.setAnswer(time);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var vel = getRand(5, 5, 30);
	var time = getRand(6, 6, 60);
	var dist = 1000*vel*time/60;

	this.addText("Una persona se mueve con una rapidez de " + vel + " km/h.");
	this.addText("¿Cuántos <U>minutos</U> le llevará recorrer " + dist + " <U>metros</U>?");

	this.setAnswer(time);
}
