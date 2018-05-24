
/******************************************************************************\
								Mathematics
\******************************************************************************/

S = Practice.addSubject("Matemática");

var Names = ["Carmen", "Susana", "Karen", "Jorge", "Camila", "Katia", "Pamela", "Luis"];

var PI = 3.141592;

/******************************************************************************\
								Block 1
\******************************************************************************/

B = S.addBlock("Bloque 1");

Q = B.addQuestion("real");
Q.userInit = function()
{
	var dishes = ["enchiladas suizas", "quesadillas", "sincronizadas"];
	var denom = getRand(2, 1, 5);
	var numer = getRand(1, 1, denom-1);

	this.addText(getRandElem(Names) + " queire preparar " + getRandElem(dishes) + " y para ello necesita adquirir de");
	this.addText(htmlFraction(numer, denom) + " kg queso, por lo que fue al supermercado a comprarlo.");
	this.addText("¿Qué peso registrará la báscula digital?");

	this.setAnswer(numer / denom);
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var dishes = ["enchiladas suizas", "quesadillas", "sincronizadas"];
	var wt = getRand(10, 10, 20);
	var wc = getRand(20, 1, 30);

	this.addText("En su trabajo " + getRandElem(Names) + " contesta el teléfono, responde correos electrónicos y elabora reportes.");
	this.addText("En una hora de trabajo invierte " + wt + " minutos en contestar el teléfono y " + wc + " minutos en responder correos electrónicos.");
	this.addText("¿Qué fracción de su primera hora de trabajo elabora reportes?");

	var ans = (60 - wt - wc) / 60;
	this.setAnswer(ans.toFixed(2));
}

Q = B.addQuestion("string");
Q.userInit = function()
{
	var n1 = getRandElem(Names);
	var n2 = getRandElem(Names, n1);
	var n3 = getRandElem(Names, n2);

	// Make sure name 3 is not the same as name 1.
	while(n3 == n1) n3 = getRandElem(Names, n2);

	this.addText(n1 + ", " + n2 + " y " + n3 + " apostaron al lanzar dos monedas.");
	this.addText(n1 + " ganará se sale un disparejo; " + n2 + ", si caen dos águilas; y " + n3 + ", si caen dos soles.");
	this.addText("¿Quién tiene mayor probabilidad de ganar el juego?");

	this.setAnswer(n1);
}

Q = B.addQuestion("string");
Q.userInit = function()
{
	var i, dp;
	var ingreds = ["Ajos", "Arroz", "Camarones", "Jitomate", "Cebolla"];
	var weights = [getRand(0.01, 0.05, 0.21), getRand(0.02, 0.05, 0.22), getRand(0.03, 0.05, 0.23), getRand(0.04, 0.05, 0.24), getRand(0.05, 0.05, 0.25)];
	var items = [ ["Ingredientes", "Peso(kg)"] ];

	var minind = 0;
	for(i=0; i<ingreds.length; i++)
	{
		dp = getRand(2, 1, 3);
		items[i+1] = [ingreds[i], weights[i].toFixed(dp)];

		if(weights[minind] > weights[i])
			minind = i;
	}

	var tstr = htmlTable(["Ingrediente", "Peso (Kg)"], items);
	
	this.addText(getRandElem(Names) + " y su hermana tienen un negocio de paella y necesitan algunos ingredientes que les falta.");
	this.addText("¿Cuál es el ingrediente que tiene menor peso?");
	this.addText(tstr);

	this.setAnswer(ingreds[minind]);
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var a = getRand(2, 1, 5);
	var denom = getRand(2, 1, 5);
	var numer = getRand(1, 1, denom-1);

	this.addText("¿Cómo representarías en forma deicmal el número " + a + htmlFraction(numer, denom) + " ?");

	var ans = a + (numer/denom);
	this.setAnswer(ans.toFixed(2));
}

/******************************************************************************\
								Block 2
\******************************************************************************/

B = S.addBlock("Bloque 2");

Q = B.addQuestion("real");
Q.userInit = function()
{
	var kgv = getRand(1, 1, 5);
	var kgc = getRand(2, 0.5, 7);
	var kgm_n = getRand(1, 1, 3);
	var kgm_d = getRand(2, 1, 5, kgm_n);

	this.addText("En una bodega de materiales para construcción se debe surtir un pedido:");
	this.addText(kgv + " Kg de varilla, " + kgc + " Kg de cemento y " + htmlFraction(kgm_n, kgm_d) + " Kg de mortero.");
	this.addText("¿Qué peso debe soportar el camión que surtirá el pedido?");

	var ans = kgv + kgc + (kgm_n/kgm_d);
	this.setAnswer(ans.toFixed(ans));
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var k = getRand(1, 1, 10);
	var md = getRand(0.1, 0.1, 0.9);
	var kmd = k + md;
	var m = 1000.0 * md;

	this.addText("¿" + kmd.toFixed(1) + " kilometros es equivalente a " + k + " km y cuantos metros?");

	this.setAnswer(m);
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var h = getRand(1, 1, 12);
	var md = getRand(0.1, 0.1, 0.9);
	var hmd = h + md;
	var m = 60.0 * md;

	this.addText("¿" + hmd + " horas es equivalente a " + h + " horas y cuantos minutos?");

	this.setAnswer(m);
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var k = getRand(1, 1, 10);
	var gd = getRand(0.1, 0.1, 0.9);
	var kgd = k + gd;
	var g = 1000.0 * gd;

	this.addText("¿" + kgd + " kilograms es equivalente a " + k + " kg y cuantos gramos?");

	this.setAnswer(g);
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var a = getRand(2, 1, 6);
	var b = getRand(1, 1, 4);
	var c = getRand(1, 1, 3);
	var d = getRand(2, 1, 5, c);

	this.addText("Resuelve la siguiente operación aritmética de fracción: " + a + " \u00D7 " + b + htmlFraction(c, d));

	this.setAnswer(a * (b + (c/d)));
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var a = getRand(1, 1, 3);
	var b = getRand(2, 1, 5, a);
	var c = getRand(2, 1, 6);

	this.addText("Resuelve la siguiente operación aritmética de fracción: " + htmlFraction(a, b) + " \u00F7 " + c);

	var ans = (a/b)/c;
	this.setAnswer(ans.toFixed(3));
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var pies = ["fresa", "limón", "manzana", "queso"];
	var pkg = getRand(2, 0.5, 5);
	var nf = getRand(5, 1, 8);

	this.addText(getRandElem(Names) + " tiene un pay de " + getRandElem(pies));
	this.addText("de " + pkg + " kg y lo quiere repartir equitativamente entre los " + nf + " miembros de su familia.");
	this.addText("¿Cuánto le toca a cada quién?");
 
	this.setAnswer(pkg / nf);
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var products = ["café", "azúcar", "harina", "frijol"];

	var nb = getRand(40, 5, 70);
	var w1 = getRand(4, 1, 7);

	var wd = getRand(2, 1, 4);
	var wn = getRand(1, 1, wd-1);

	this.addText("¿Cuántos kilogramos de " + getRandElem(products) + " contienen " + nb + " bolsas de " + w1 + htmlFraction(wn, wd) + " kg?");
 
	var ans = nb * (w1 + (wn/wd));
	this.setAnswer(ans.toFixed(1));
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var h1 = getRand(5, 1, 8);
	var w1 = getRand(4, 1, 7, h1);
	var red = getRand(0.5, 0.1, 0.9);
	var ans = red*h1;

	ans = ans.toFixed(1);

	this.addText("Una foto mide " + h1 + " cm de largo por " + w1 + " cm de ancho. Se obtiene una reducción cuyo largo es de " + ans + " cm.");
	this.addText("¿Cuál es el ancho de esa reducción?");
 
	this.setAnswer(red*w1);
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var boxes = getRand(8, 1, 11);
	var bottles = getRand(8, 2, 12);
	var denom = getRand(2, 1, 4);

	this.addText(getRandElem(Names) + " tiene que entregar " + boxes + " cajas de leche y cada caja tiene");
	this.addText(bottles + " envases de " + htmlFraction(1, denom) + " litro.");
	this.addText("¿Cuántos litros tiene que entregar?");
 
	var ans = boxes * bottles / denom;
	this.setAnswer(ans.toFixed(1));
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var termo = getRand(2, 1, 6);
	var jugo = getRand(400, 100, 600);

	this.addText("¿Con cuántos jugos de " + jugo + " ml se rellena un termo de " + termo + " litros?");
 
	this.setAnswer(1000 * termo / jugo);
}

/******************************************************************************\
								Block 3
\******************************************************************************/

B = S.addBlock("Bloque 3");

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var varNames = ["a", "b", "x", "y", "z"];
	var vn = getRandElem(varNames);

	var ans = getRand(10, 10, 50);
	var coef0 = getRand(10, 10, 50);
	var coef1 = getRand(2, 1, 4);

	var rhs = coef1*ans + coef0;

	var equation = coef1 + vn + " + " + coef0 + " = " + rhs;

	this.addText("¿Cuál es el valor de '" + vn + "' en la ecuación " + equation + "?");

	this.setAnswer(ans);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var varNames = ["a", "b", "x", "y", "z"];
	var vn = getRandElem(varNames);

	var ans = getRand(10, 10, 50);

	var coef0 = getRand(50, 1, 60);
	var coef1 = getRand(40, 0.5, 50);
	var denom = getRand(2, 1, 4);

	var equation = coef0 + " - " + htmlFraction(vn, denom) + " = " + coef1;

	this.addText("Determina el valor de '" + vn + "' en la siguiente ecuación: " + equation);

	this.setAnswer(denom * (coef0 - coef1));
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var vehicles = ["tren", "automóvil", "aeroplano"];
	var veh = getRandElem(vehicles);

	var dist0 = getRand(5, 5, 40);
	var time0 = getRand(2, 1, 5);
	var time1 = getRand(2, 1, 5, time0);

	this.addText("Un " + veh + " que viaja a velocidad constante recorre " + dist0 + " km en " + time0 + " horas.");
	this.addText("¿Que distancia recorre en " + time1 + " horas?");

	this.setAnswer(time1 * dist0 / time0);
}

/******************************************************************************\
								Block 4
\******************************************************************************/

B = S.addBlock("Bloque 4");

Q = B.addQuestion("real");
Q.userInit = function()
{
    var seller = getRandElem(Names);
    var buyer = getRandElem(Names, seller);

	var products = ["queso", "harina", "azúcar"];
	var product = getRandElem(products);

	var p1 = getRand(5, 5, 50);

	var weights = [0.25, 0.5, 0.75, 1.0];
	var k1 = getRandElem(weights);
	var k2 = getRandElem(weights, k1);

	this.addText(seller + " vende " + k1 + "kg de " + product + " en " + p1 + " pesos.");
	this.addText("¿Cuánto debe cobrarle a " + buyer + " por " + k2 + " kg de " + product + " que compro?");

	var ans = k2 * p1 / k1;
	this.setAnswer(ans.toFixed(2));
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var r2 = getRand(2, 1, 5);
	var r1 = getRand(1, 1, r2-1);

	this.addText("Un aro se forma de un disco de " + r2 + " cm de radio con un claro circular de " + r1 + " cm de radio.");
	this.addText("¿Cuál es la superficia de la cara del aro, considerando que Π = 3.14?");

	var ans = PI * (r2*r2 - r1*r1);
	this.setAnswer(ans.toFixed(2));
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var animals = ["un criadero de pollos", "un rebaño de vacas", "un rebaño de ovejas", "una bandada de patos"];
	var animal = getRandElem(animals);

	var groupSize = getRand(10, 10, 50);
	var foodIndiv = getRand(10, 10, 50);

    var seller = getRandElem(Names);

	this.addText(getRandElem(Names) + " tiene " + animal + ". Los junta en grupos de");
	this.addText(groupSize + " y les da diaro " + foodIndiv + " g de complemento alimentario a cada uno.");
	this.addText("¿Cuanto gramos de complemento consume al día cada grupo?");

	this.setAnswer(foodIndiv * groupSize);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var nc = getRand(4, 1, 7);
	var ncs = getRand(2, 1, nc-1);

	var nt = getRand(2, 1, 5);
	var nts = getRand(1, 1, nt-1);

	this.addText("Una escuela tiene " + nc + " carreras y " + nt + " turnos, pero sólo");
	this.addText(ncs + " carreras tienen los " + nt + " turnos, las demás sólo " + nts + ".");
	this.addText("¿Cuántas opciones de carrera y turno tienes?");

	this.setAnswer(ncs*nt + (nc-ncs)*nts);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var foodTypes = ["china", "corrida", "mexicana", "hindu", "japonés"];

	var ne = getRand(2, 1, 5);
	var ns = getRand(2, 1, 4);
	var ng = getRand(2, 1, 5);
	var np = getRand(2, 1, 3);

	this.addText("Un menú de comida " + getRandElem(foodTypes) + " presenta " + ne + " entradas, " + ns + " sopas,");
	this.addText(ng + " guisados y " + np + " postres.");
	this.addText("¿Cuántas opciones de diferentes de comida con una entradas, una sopa, un guisado y un postre se pueden pedir?");

	this.setAnswer(ne*ns*ng*np);
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var r = getRand(2, 1, 5);

	this.addText("¿Cuántas centímetros se recorren con una vuelta de una llanta con radio de " + r + " cm?");
	this.addText("Considera que Π = 3.14");

	var ans = 2.0 * PI * r;
	this.setAnswer(ans.toFixed(2));
}
  
Q = B.addQuestion("integer");
Q.userInit = function()
{
	var hotPlaces = ["La Ciudad de México", "San Diego", "Guadalajara", "Pittsboro", "Salamanca"];
	var coldPlaces = ["Calgary", "Siberia", "Polo Norte"];

	var hotTemp = getRand(20, 1, 30);
	var coldTemp = -getRand(20, 1, 40);

	this.addText("La temperatura en " + getRandElem(hotPlaces) + " es de " + hotTemp + " °C, mientras que en");
	this.addText(getRandElem(coldPlaces) + " es de " + coldTemp + " °C.");
	this.addText("¿Cuántos grados hay de diferencia entre ambos lugares?");

	this.setAnswer(hotTemp - coldTemp);
}

// (+) - (+)
Q = B.addQuestion("integer");
Q.userInit = function()
{
	var a = getRand(10, 1, 20);
	var b = getRand(10, 1, 20, a);

	this.addText("Resuelve la siguiente operación: " + a + " - " + b);

	this.setAnswer(a - b);
}

// (+) - (-)
Q = B.addQuestion("integer");
Q.userInit = function()
{
	var a = getRand(10, 1, 20);
	var b = -getRand(10, 1, 20, a);

	this.addText("Resuelve la siguiente operación: " + a + " - (" + b + ")");

	this.setAnswer(a - b);
}

// (-) + (-)
Q = B.addQuestion("integer");
Q.userInit = function()
{
	var a = -getRand(10, 1, 20);
	var b = -getRand(10, 1, 20, -a);

	this.addText("Resuelve la siguiente operación: " + a + " + (" + b + ")");

	this.setAnswer(a + b);
}

// (-) - (-)
Q = B.addQuestion("integer");
Q.userInit = function()
{
	var a = -getRand(1, 1, 10);
	var b = -getRand(1, 1, 10, -a);

	this.addText("Resuelve la siguiente operación: " + a + " - (" + b + ")");

	this.setAnswer(a - b);
}

// (-) + (-)
Q = B.addQuestion("integer");
Q.userInit = function()
{
	var denom = getRand(2, 1, 4);

	var tot = denom * getRand(1, 1, 5);
	var n1 = getRand(1, 1, tot-1);
	var n2 = tot - n1;

	this.addText("Resuelve la siguiente operación: - " + htmlFraction(n1, denom) + " + (- " + htmlFraction(n2, denom) + ")");

	this.setAnswer(-n1/denom + (-n2/denom));
}

// (+) - (-)
Q = B.addQuestion("real");
Q.userInit = function()
{
	var n1 = getRand(3, 0.1, 5);
	var n2 = getRand(3, 0.1, 5, n1);

	this.addText("Resuelve la siguiente operación: " + n1 + " - (-" + n2 + ")");

	var ans = n1 + n2;
	this.setAnswer(ans.toFixed(2))
}

/******************************************************************************\
								Geometry
\******************************************************************************/

B = S.addBlock("Geometry");

Q = B.addQuestion("real");
Q.userInit = function()
{
	var a = getRand(2, 1, 5);
	var b = getRand(1, 1, a-1);

	this.addText("Determina el área del triángulo si la altura 'a' es " + a + " y el base 'b' is " + b + ".");
	this.addText(htmlImage("Triangle1.png"));

	area = 0.5*a*b;

	this.setAnswer(area.toFixed(2));
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var r = getRand(2, 1, 5);

	this.addText("Determina el área del círculo si 'r' es " + r + ".");
	this.addText(htmlImage("Circle1.png"));

	area = PI*r*r;

	this.setAnswer(area.toFixed(2));
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var a = getRand(2, 1, 5);
	var b = getRand(a, 1, a+2);

	this.addText("Determina el área del rectangulo si a = " + a + " y 'b' = " + b + ".");
	this.addText(htmlImage("Rectangle1.png"));

	this.setAnswer(a*b);
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var a = getRand(2, 1, 5);
	var b = getRand(a+1, 1, a+3);
	var c = 1.5*a;

	this.addText("¿Cuál es el área del paralelogramo si 'a' es " + a + ", 'b' es " + b + " y 'c' es " + c + "?");
	this.addText(htmlImage("Parallelogram1.png"));

	this.setAnswer(a*b);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var s = getRand(2, 1, 6);

	this.addText("¿Cuál es el perímetro del pentágono si cada lado (s) mide " + s + "?");
	this.addText(htmlImage("Pentagon1.png"));

	this.setAnswer(5*s);
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var s = getRand(2, 1, 6);
	var a = 0.5*s/Math.tan(PI/6);

	this.addText("¿Cuál es el área del pentágano si el apotema (a) es " + a.toFixed(2) + " y cada lado (s) mide " + s + "?");
	this.addText(htmlImage("Pentagon2.png"));

	area = 5*a*s/2;
	this.setAnswer(area.toFixed(2));
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var s = getRand(2, 1, 6);

	this.addText("¿Cuál es el perímetro del hexágano si cada lado (s) mide " + s + "?");
	this.addText(htmlImage("Hexagon1.png"));

	this.setAnswer(6*s);
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var s = getRand(2, 1, 6);
	var a = 0.5*s/Math.tan(PI/6);

	this.addText("¿Cuál es el área del hexágano si el apotema (a) es " + a.toFixed(2) + " y cada lado (s) mide " + s + "?");
	this.addText(htmlImage("Hexagon2.png"));

	area = 6*a*s/2;
	this.setAnswer(area.toFixed(2));
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var r = getRand(2, 1, 6);
	var s = getRand(1, 1, r-1);

	this.addText("¿Cuál es el área del círculo de radio " + r + " si tiene un hoyo cadrado que mide " + s + " cada lado?");
	this.addText(htmlImage("Washer1.png"));

	area = PI*r*r - s*s;
	this.setAnswer(area.toFixed(2));
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var s = getRand(2, 1, 6);
	var r = getRand(1, 1, s-1);

	this.addText("¿Cuál es el área del cuadrado con lado " + s + " si tiene un hoyo círcular con radio " + r + "?");
	this.addText(htmlImage("Washer2.png"));

	area = s*s - PI*r*r;
	this.setAnswer(area.toFixed(2));
}

/******************************************************************************\
								Percentage
\******************************************************************************/

B = S.addBlock("Porcentaje");

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var flavors = ["chocolate", "vanilla"];
	var fraction = getRand(0.1, 0.1, 0.9);
	var n1 = getRandElem(Names);

	this.addText(n1 + " ate " + fraction.toFixed(1) + " of a " + getRandElem(flavors) + " cake.");
	this.addText("What percentage of the cake did " + n1 + " eat?");

	var perc = 100*fraction;

	this.setAnswer(perc.toFixed(0));
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var total = getRand(1, 1, 3);
	var drank = getRand(0.1, 0.1, total-0.1);
	var n1 = getRandElem(Names);

	this.addText(n1 + " drank " + drank.toFixed(1) + " liters of milk from a " + total + " liter bottle.");
	this.addText("What percentage of the milk did " + n1 + " drink?");

	var perc = 100*(drank/total);

	this.setAnswer(perc.toFixed(0));
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var flavors = ["a strawberry", "a cherry", "an apple", "a banana"];
	var denom = getRand(2, 1, 6);
	var numer = getRand(1, 1, denom-1);
	var n1 = getRandElem(Names);
	var n2 = getRandElem(Names, n1);

	this.addText(n1 + " gives " + htmlFraction(numer, denom) + " of " + getRandElem(flavors) + " pie to " + n2 + ".");
	this.addText("What percentage of the pie did " + n2 + " receive?");

	var perc = 100*numer/denom;

	this.setAnswer(perc.toFixed(2));
}
