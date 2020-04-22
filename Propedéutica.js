
/******************************************************************************\
						Propedéutica
\******************************************************************************/

S = Practice.addSubject("Propedéutica");

var PI = 3.141592;
var VARS = ["u", "v", "w", "x", "y", "z"];

/******************************************************************************\
						Pensamiento Matemático
\******************************************************************************/

B = S.addBlock("Matemática");

Q = B.addQuestion("choice");
Q.userInit = function()
{
	var c = [];
	var opts = [];
	var v = getRandElem(VARS);

	var A0 = getRand(-9, 1, 9, 0);
	var A1 = getRand(-9, 1, 9, A0);
	var eqA = htmlPolynomial([A0, A1], v);

	var B0 = getRand(-9, 1, 9, 0);
	var B1 = getRand(-9, 1, 9, B0);
	var eqB = htmlPolynomial([B0, B1], v);

	c = [2*A0 + 2*B0, 2*A1 + 2*B1];
	opts[0] = htmlPolynomial(c, v);

	c = [2*A0 + 2*B0, -2*A1 + 2*B1];
	opts[1] = htmlPolynomial(c, v);

	c = [2*A0 + 2*B0, 2*A1 - 2*B1];
	opts[2] = htmlPolynomial(c, v);

	c = [-2*A0 + 2*B0, 2*A1 - 2*B1];
	opts[3] = htmlPolynomial(c, v);

	c = [2*A0 - 2*B0, 2*A1 - 2*B1];
	opts[4] = htmlPolynomial(c, v);

	this.addText("Cuál es el perímetro de un rectángulo que mide de base " + eqB + " y de alto " + eqA + ".");
	this.addOption(opts);

	this.setAnswer(0);
}

Q = B.addQuestion("choice");
Q.userInit = function()
{
	var c = [];
	var opts = [];
	var v = getRandElem(VARS);
	var shape = getRandElem(["rectángulo", "triángulo"]);

	var A0 = getRand(-6, 1, 6, 0);
	var A1 = getRand(-6, 1, 6, 0);
	var eqA = htmlPolynomial([A0, A1], v);

	var B0 = getRand(-6, 2, 6, 0);
	var B1 = getRand(-6, 2, 6, 0);
	var eqB = htmlPolynomial([B0, B1], v);

	// Blend in the factor of 2 for the triangle.
	if(shape == "triángulo")
	{
		B0 /= 2;
		B1 /= 2;
	}

	c = [A0*B0, A0*B1 + A1*B0, A1*B1];
	opts[0] = htmlPolynomial(c, v);

	c = [A0*B0, A0*B1 - A1*B0, A1*B1];
	opts[1] = htmlPolynomial(c, v);

	c = [-A0*B0, -A0*B1 + A1*B0, A1*B1];
	opts[2] = htmlPolynomial(c, v);

	c = [A0*B0, A0*B1 + A1*B0, -A1*B1];
	opts[3] = htmlPolynomial(c, v);

	this.addText("Cuál es el área de un " + shape + " que mide de base " + eqB + " y de alto " + eqA + ".");
	this.addOption(opts);

	this.setAnswer(0);
}

Q = B.addQuestion("choice");
Q.userInit = function()
{
	var c = [];
	var d = [];
	var v = [];
	var u = [];
	var opts = [];
	var eqStr;

	// Note that neither "c₀" and "c₁" are zero.
	c[0] = getRand(-4, 1, 4, 0);
	c[1] = getRand(-4, 1, 4, 0);

	v[0] = getRandElem(VARS);
	v[1] = getRandElem(VARS, v[0]);

	// Form a string that derived from (c₀*v₀ + c₁*v₁)²
	eqStr = htmlEquation(c, v);
	eqStr = "(" + eqStr + ")";
	eqStr = htmlPower(eqStr, 2);

	// New variables: [v₀², 2*v₀*v₁, v₁²]
	u = [htmlPower(v[0], 2), v[0] + v[1], htmlPower(v[1], 2)];

	// Coefficients option: [c₀², 2*c₀*c₁, c₁²]
	d = [c[0]*c[0], 2*c[0]*c[1], c[1]*c[1]];
	opts[0] = htmlEquation(d, u);

	// Coefficients option: [-c₀², 2*c₀*c₁, c₁²]
	d = [-c[0]*c[0], 2*c[0]*c[1], c[1]*c[1]];
	opts[1] = htmlEquation(d, u);

	// Coefficients option: [c₀², -2*c₀*c₁, c₁²]
	d = [c[0]*c[0], -2*c[0]*c[1], c[1]*c[1]];
	opts[2] = htmlEquation(d, u);

	// Coefficients option: [c₀², 2*c₀*c₁, -c₁²]
	d = [c[0]*c[0], 2*c[0]*c[1], -c[1]*c[1]];
	opts[3] = htmlEquation(d, u);

	this.addText("Cuál es el desarrollo de la expresión " + eqStr + "?");
	this.addOption(opts);

	this.setAnswer(0);
}

Q = B.addQuestion("choice");
Q.userInit = function()
{
	var eqStr;
	var opts = [];
	var a = [], c = [], d = [];
	var v = getRandElem(VARS);
	var i;

	a[0] = a[2] = getRand(-5, 1, 5, 0);
	a[1] = a[3] = getRand(-5, 1, 5, 0);

	// Change the sign of one coefficient.
	var s = getRand(0, 1, 4);
	a[s] *= -1;

	var c = [0, 0, a[0]*a[2], 0, a[1]*a[3]];

	// Form a string of the form "(a₄*v⁴ + a₂*v²)".
	eqStr = htmlPolynomial(c, v);
	eqStr = "(" + eqStr + ")";

	// Correct answer.
	c = [0, a[0], a[1]];
	d = [0, a[2], a[3]];
	opts[0] = '(' + htmlPolynomial(c, v) + ')(' + htmlPolynomial(d, v) + ')';

	// Incorrect answers.
	for(i=0; i<4; i++)
	{
		a[i] *= -1;
		c = [0, a[0], a[1]];
		d = [0, a[2], a[3]];
		opts[i+1] = '(' + htmlPolynomial(c, v) + ')(' + htmlPolynomial(d, v) + ')';
		a[i] *= -1;
	}

	this.addText("Cuál es el resultado de factorización de la expresión " + eqStr + "?");
	this.addOption(opts);

	this.setAnswer(0);
}

function coefStrA(c)
{
	var str = "";

	if(c == -1) str += "-";
	else if(c != 1) str += c;

	return(str);
}

function coefStrB(c)
{
	var str = "";
	var s = Math.sign(c);

	if(s > 0) str += " + ";
	else str += " - ";

	if(c != s) str += (s*c);

	return(str);
}
	
Q = B.addQuestion("choice");
Q.userInit = function()
{
	var eqStr;
	var opts = [];
	var a = [0, 0];
	var c = [], v = [], vn = [];
	var i;

	// Get two variable names.
	vn[0] = getRandElem(VARS);
	vn[1] = getRandElem(VARS, vn[0]);

	// Coefficients for question equation.
	for(i=0; i<6; i++)
		c[i] = getRand(-3, 1, 3, 0);

	// v[i] is either 0 or 1, i = 0,1,2,3.
	for(i=0; i<4; i++)
		v[i] = getRand(0, 1, 1);

	eqStr = "";
	eqStr += coefStrA(c[0]) + vn[v[0]];
	eqStr += coefStrB(c[1]) + "[";
	eqStr += coefStrA(c[2]) + vn[v[1]];
	eqStr += coefStrB(c[3]) + "(";
	eqStr += coefStrA(c[4]) + vn[v[2]];
	eqStr += coefStrB(c[5]) + vn[v[3]] + ")]";

	// Form array of option strings.
	for(i=0; i<5; i++)
	{
		// Change slightly the options, except option 0.
		var r = [1, 1, 1, 1];
		if(i>0) r[i-1] = -1;

		a[0] = a[1] = 0;

		a[v[0]] += r[0]*c[0];
		a[v[1]] += r[1]*c[1]*c[2];
		a[v[2]] += r[2]*c[1]*c[3]*c[4];
		a[v[3]] += r[3]*c[1]*c[3]*c[5];

		if(a[0] == 0 && a[1] == 0)
			opts[i] = "0";
		else
		{
			opts[i] = "";

			if(a[0] != 0) opts[i] += (coefStrA(a[0]) + vn[0]);

			if(a[1] != 0) opts[i] += (coefStrB(a[1]) + vn[1]);
		}
	}

	this.addText("Al suprimir los símbolos de asociación y reducir los términos semejantes,");
	this.addText("cuál es el resultado de factorización de la expresión algebraica " + eqStr);

	this.addOption(opts);

	this.setAnswer(0);
}

Q = B.addQuestion("choice");
Q.userInit = function()
{
	var opts = [];

	var a = getRand(-5, 1, 5, 0)
	var b = getRand(-5, 1, 5, 0)
	var c = getRand(-5, 1, 5, 0)
	var v = getRandElem(VARS);

	var eqStr = "restarle " + a; 

	if(b < 0) eqStr += " menos "; 
	else eqStr += " más "; 

	eqStr = eqStr + Math.abs(b) + v + " a ";

	eqStr = eqStr + c + v;

	opts[0] = htmlPolynomial([-a, c-b], v);
	opts[1] = htmlPolynomial([a, -c+b], v);
	opts[2] = htmlPolynomial([a, c+b], v);
	opts[3] = htmlPolynomial([-a, c+b], v);

	this.addText("Cuál es el resultado de " + eqStr + "?");

	this.addOption(opts);

	this.setAnswer(0);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var primes = [2, 3, 5, 7];

	var n1 = getRandElem(primes);
	var d1 = getRandElem(primes, n1);

	var n2 = getRandElem(primes, n1);
	var d2 = getRandElem(primes, n2);

	var s = d2*n1*getRandElem(primes)*getRandElem(primes);

	this.addText("Para una proporción de " + htmlFraction(n1, d1) + " se utilizan " + s + " gr de una sustancia.");
	this.addText("¿Cuántos gramos se requiere para una proporción de " + htmlFraction(n2, d2) + "?");

	this.setAnswer((s*n2*d1)/(d2*n1));
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var mult = ["unused", "mismo número", "doble", "triple"];
	var snacks = getRandElem(["galletas", "dulces", "cacahuates", "uvas"]);

	var a2 = getRand(1, 1, 3);
	var p2 = getRand(5, 1, 15);

	var a1 = getRand(1, 1, 3);
	var p1 = a2*p2;

	var b = getRand(1, 1, 10);
	var p3 = a1*p1 + b;

	var n = p1 + p2 + p3;

	this.addText("Se reparten " + n + " " + snacks + " entre 3 platos distintos.");
	this.addText("El primer plato tiene el " + mult[a2] + " de " + snacks + " que el segundo,");
	this.addText("y el tercer plato tiene el " + mult[a1] + " de " + snacks + " que el primero más " + b + " " + snacks + ".");
	this.addText("¿Cuántos " + snacks + " tiene el primer plato?");

	this.setAnswer(p1);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var perfectTriangles = [ [9, 12, 15], [5, 12, 13], [7, 24, 25]];
	var trigFunctions = ["coseno", "seno"];
	var medir = ["altura", "sombra"];

	var o = getRand(0, 1, 1);		// 0 or 1.
	var func = trigFunctions[o];
	var tri = getRandElem(perfectTriangles);

	this.addText("Un edificio alto proyecta una sombra en el suelo, formando un triángulo de 90 grados.");
	this.addText("El " + func + " del ángulo que se forma de la punta de la sombra hasta el edificio es " + htmlFraction(tri[o], tri[2]) + ".");
	this.addText("El " + medir[o] + " del edificio mide " + tri[o] + ".");
	this.addText("¿Cuánto mide la " + medir[1-o] + " del edificio?");

	this.setAnswer(tri[1-o]);
}

Q = B.addQuestion("choice");
Q.userInit = function()
{
	var opts = [];

	var a = getRand(10, 1, 20)
	var b = getRand(1, 1, 6)
	var c = getRand(1, 1, 6)
	var v = getRandElem(VARS);

	var eqStr1 = "(" + htmlPolynomial([b, 1], v) + ")";
	var eqStr2 = "(" + htmlPolynomial([-c, 1], v) + ")";
	var eqStr3 = " = " + a;

	opts[0] = eqStr1 + eqStr2 + eqStr3;
	opts[1] = eqStr1 + " + " + eqStr2 + eqStr3;
	opts[2] = "2 × " + eqStr1 + eqStr2 + eqStr3;
	opts[3] = eqStr1 + "²" + eqStr2 + "²" + eqStr3;

	this.addText("La superficie de un rectángulo es de " + a + "m²,");
	this.addText("su lado mayor es una cantidad más " + b + " unidades ");
	this.addText("y su lado menor es la misma cantidad menos " + c + " unidades.");
	this.addText("¿Cuál ecuación representa este problema?");

	this.addOption(opts);

	this.setAnswer(0);
}

var PropGroup = {
	string: undefined,
	questOld: undefined,
	init: function(quest)
	{
		// First time a question in this group selected.
		if(this.questOld == undefined)
		{
			this.questOld = quest;
		}
		// Previous question was other question in this group.
		// Don't change common group text (i.e. return "undefined").
		else if(quest != this.questOld)
		{
			this.questOld = quest;
			return(undefined);
		}

		this.value = getRand(10, 10, 100);

		var m = 1;
		var body = [];
		var header = ["Metros", "Costo ($)"];
		var material = getRandElem(["tela", "cuerda", "madera"]);

		for(i=0; i<4; i++)
		{
			m = getRand(m+1, 1, m+3);
			body[i] = [m, m*PropGroup.value];
		}

		this.meters = getRand(m+1, 1, m+3);
		this.cost = this.value * getRand(this.meters+1, 1, this.meters+3);

		var tmpStr = "La tabla muestra el costo de una ";
		tmpStr += material;
		tmpStr += ".";
		tmpStr += htmlTable(header, body);

		return(tmpStr);
	}
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	this.setGroup(PropGroup.init(0));

	Q.addText("¿Cuál es el valor de proporcionalidad de esa mercancia?");

	Q.setAnswer(PropGroup.value);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	this.setGroup(PropGroup.init(1));

	this.addText("¿Cuánto cuesta " + PropGroup.meters + " metros de esa mercancia?");

	this.setAnswer(PropGroup.meters*PropGroup.value);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	this.setGroup(PropGroup.init(2));

	this.addText("¿Cuánto metros se compró de esa mercancia si se pagó $" + PropGroup.cost + "?");

	this.setAnswer(PropGroup.cost/PropGroup.value);
}

Q = B.addQuestion("choice");
Q.userInit = function()
{
	var opts = [];
	var v = getRandElem(VARS);
	var a = [getRand(-5, 1, 5, 0), getRand(-5, 1, 5, 0)];
	var b = a.slice();
	var chg = getRand(0, 1, 1);

	b[chg] = -b[chg];

	var eqStr = "(" + htmlPolynomial(a, v);
	eqStr = eqStr + ")(" + htmlPolynomial(b, v) + ")";

	opts[0] = htmlPolynomial([a[0]*b[0], a[1]*b[1]], v);
	opts[1] = htmlPolynomial([-a[0]*b[0], a[1]*b[1]], v);
	opts[2] = htmlPolynomial([a[0]*b[0], -a[1]*b[1]], v);
	opts[3] = htmlPolynomial([-a[0]*b[0], -a[1]*b[1]], v);

	this.addText("¿Cuál es el producto de la expresión " + eqStr + "?");

	this.addOption(opts);
 
	this.setAnswer(0);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var mult = ["unused", "mismo número", "doble", "triple"];
	var snacks = getRandElem(["galletas", "dulces", "cacahuates", "uvas"]);

	mph = getRand(15, 1, 25);
	h1 = getRand(2, 1, 4);
	h2 = getRand(2, 1, 6, h1);
 
	var n1 = h1 * mph;
	var n2 = h2 * mph;

	this.addText("Un adolescente envia " + n1 + " mensajes por celular en " + h1 + " horas.");
	this.addText("¿Cuántas horas le tomará enviar " + n2 + " mensajes?");

	this.setAnswer(h2);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var nFamília = getRand(3, 1, 7);
	var nComió = getRand(2, 1, 3);
	var nPastel = getRand(2, 1, 6);
	var nNiños = getRand(2, 1, 3);
	var nPapás = getRand(2, 1, 3);
	var nMamá = getRand(8, 1, 12);
	var nQuedó = getRand(5, 1, 15);

	var nTotal = nQuedó + nFamília*nComió + nPastel + (nFamília-2)*nNiños + 2*nPapás - nMamá;
 
	this.addText("Una família de " + nFamília + " integrantes tenia " + nTotal + " manzanas.");
	this.addText("Cada miembro de la família se comió " + nComió + " manzanas y " + nPastel + " se utilizaron para un pastel.");
	this.addText("Posteriormente cada niño se las llevó " + nNiños + " manzanas a la escuela,");
	this.addText("y cada papá se las llevó " + nPapás + " de las manzanas a su trabajo.");
	this.addText("La mamá regresó a la casa con " + nMamá + " más que compró en la tienda.");
	this.addText("¿Cuántas manzanas quedaron?");

	this.setAnswer(nQuedó);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var v = getRandElem(VARS);
	var a = [], b = [];

	for(i=0; i<2; i++)
	{
		do {
			a[i] = getRand(-5, 1, 5, 0);
			b[i] = getRand(-5, 1, 5, 0);
		} while(a[i] == b[i])
	}

	var den = a[1] - b[1];
	var ans = b[0] - a[0];

	a[0] *= den;
	b[0] *= den;

	var eqStr = htmlPolynomial(a, v) + " = " + htmlPolynomial(b, v);

	this.addText("¿Cuál es el resultado (valor de " + v + ") de la ecuación " + eqStr + "?");

	this.setAnswer(ans);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var inc = getRand(0, 1, 1);
	var s = getRand(10+inc, 2, 20+inc, 0);
	var d = getRand(2+inc, 2, 8+inc, 0);
	var prod = (s*s - d*d)/4;

	this.addText("La suma de 2 números es " + s + " y su diferencia es " + d + ".");
	this.addText("¿Cuál es su producto?");

	this.setAnswer(prod);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var sizes = [];
	var count = [];
	var nSold = getRand(8, 1, 12);
	var szBeg = 21;
	var szEnd = 27;
	var szMode = getRand(szBeg, 1, szEnd);
	var i, sz;

	for(i=szBeg; i<=szEnd; i++)
		count[i] = 0;

	var lstr = "";
	for(i=0; i<nSold; i++)
	{
		sz = getRand(szBeg, 1, szEnd);

		// Make sure there is just one size for the statistical mode.
		if(sz != szMode && count[sz]+1 >= count[szMode])
			sz = szMode;

		sizes[i] = sz;
		count[sz]++;
	}

	shuffle(sizes);

	for(i=0; i<nSold; i++)
	{
		lstr += sizes[i];
		if(i < nSold-1) lstr += ", ";
	}

	this.addText("En una zapatería se vendieron el día de hoy " + nSold + " pares de zapatos de las siguientes medidas: " + lstr + ".");
	this.addText("¿Qué es la moda del conjunto de datos?");

	this.setAnswer(szMode);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var ncolors = getRand(1, 1, 4);
	var nsocks = getRand(6, 2, 10);

	this.addText("En el cajon de la cómoda hay " + ncolors + " colores de calcetines.");
	this.addText("De cada color hay " + nsocks + " calcetines.");
	this.addText("Sin dirigir la mirada hacia los calcetines ");
	this.addText("¿Cuál es el menor número de calcetines que se debe sacar para estar seguro de haber sacado un par de color igual?");

	this.setAnswer(ncolors+1);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var pythagoreanTriples = [ [3, 4, 5], [5, 12, 13], [7, 24, 25], [8, 15, 17], [9, 40, 41], [11, 60, 61] ];
	var triangle = getRandElem(pythagoreanTriples);
	var base = getRand(0, 1, 1);

	var b = triangle[base];
	var a = triangle[1-base];
	var h = triangle[2];

	var area = (a*b)/2;

	this.addText("Un triángulo rectángulo tiene unu hipotenusa de " + h + "m y su base mide " + b + "m.");
	this.addText("Determina el área del triángulo.");

	this.setAnswer(area);
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var ap = getRand(1, 1, 3);		// Height of small tree.
	var sp = getRand(ap, 1, 5);		// Shadow of small tree (longer than its height).
	var sg = getRand(sp+5, 1, 15);	// Shadow of large tree (longer than small tree).
	var ag = ap*sg/sp				// Height of large tree

	this.addText("Un jardinero quiere medir la altura de un arbol grande que es demasiado alto para su cinta de medir.");
	this.addText("Se le ocurre que se puede sacar esta medida utilizando la altura de un arbol pequeño y la sombras de los dos arboles.");
	this.addText("La sombra del arbol grande es " + sg + "m y del arbol pequeño " + sp + "m.");
	this.addText("La altura del arbol pequeño es " + ap + "m.");
	this.addText("¿Cuál es la altura del arbol grande?");

	this.setAnswer(ag);
}

Q = B.addQuestion("real");
Q.userInit = function()
{
	var funcs = ["coseno", "seno"];
	var f = getRand(0, 1, 1);

	var a = getRand(1, 1, 5);		// One side.
	var h = getRand(a, 1, 7);		// Hypotenuse.

	var ah = a/h;
	var bh = Math.sqrt(1-(ah*ah));

	this.addText("El " + funcs[f] + " de un triángulo rectángulo es " + fmtReal(ah) + ".");
	this.addText("¿Cuál es el " + funcs[1-f] + "del triángulo?");

	this.setAnswer(bh);
}

/******************************************************************************\
						Pensamiento Analítico
\******************************************************************************/

B = S.addBlock("Analítica");

Q = B.addQuestion("choice");
Q.userInit = function()
{
	var nopts = 4;
	var nseq = 4;
	var p, primes = [2, 3, 5, 7];
	var ind = getRandExcl(0, 1, nopts);
	var i, j, k;
	var opts = [];
	var n = [], ninc = [1, 1, 1, 1];
	var d0, d = [], dinc = [2, 3, 4, 5];

	// Loop over number of options.
	for(i=0; i<nopts; i++)
	{
		opts[i] = "";
		ninc[i] = 1;
		dinc[i] = i + 2;

		// Compute first member in sequence.
		// Multiple top and bottom by "dinc[i]" to have common denominator.
		n[0] = dinc[i] * getRand(1, 1, 3);
		d0 = getRand(2, 1, 7, n[0]);
		d[0] = dinc[i] * d0;

		// Compute remaining members in sequence.
		for(j=1; j<nseq; j++)
		{
			n[j] = n[j-1] + ninc[i]*d0;
			d[j] = d[j-1];
		}

		// Reduce all members (fractions) if possible.
		for(j=0; j<nseq; j++)
		{
			//Try dividing by the first few primes.
			for(k=0; k<primes.length; k++)
			{
				p = primes[k];
				while(n[j]%p == 0 && d[j]%p == 0) 
				{
					n[j] /= p;
					d[j] /= p;
				}
			}

			if(d[j] == 1)
				opts[i] = opts[i] + n[j];
			else
				opts[i] = opts[i] + htmlFraction(n[j], d[j]);

			if(j < nseq-1) opts[i] += ", ";
		}
	}

	this.addText("¿En cuál opción es la diferencia entre los términos consecutivos igual a " + htmlFraction(ninc[ind], dinc[ind]) + "?");

	this.addOption(opts);
 
	this.setAnswer(ind);
}

Q = B.addQuestion("integer");
Q.userInit = function()
{
	var fs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
	var m = getRandExcl(1, 1, fs.length);
	var i;

	var str = "Completa la serie de Fibonacci: ";
	for(i=0; i<fs.length; i++)
	{
		if(i == m) str += "__";
		else str += fs[i];

		if(i < fs.length-1) str += ", ";
	}
	this.addText(str + ".");

	this.setAnswer(fs[m]);
}

Q = B.addQuestion("choice");
Q.userInit = function()
{
	var opts = [];
	
	var ntup = 2;					// Number of tuples to display.
	var nopt = 4;					// Number of answer options.

	var tnum = getRand(3, 1, 5);	// Size of tuple (3, 4, or 5).

	var nbeg = getRand(-3, 1, 3);
	var ninc = getRand(-2, 1, 2, 0);

	var abeg = getRand(10, 1, 20);
	var ainc = getRand(-1, 1, 1, 0);
	var aloc = getRandExcl(0, 1, tnum);

	n = nbeg;
	a = abeg;
	var ser = "";
	for(i=0; i<ntup; i++)
	{
		for(j=0; j<tnum; j++)
		{
			if(j == aloc)		// Add next letter.
			{
				a += ainc;
				ser += String.fromCharCode(65+a);
			}
			else				// Add next number.
			{
				n += ninc;
				ser += n;
			}

			if(j < tnum-1) ser += ", ";
		}

		if(i < ntup)
			ser += ", ";
	}

	// Save values for answer options.
	nbeg = n;
	abeg = a;

	for(i=0; i<nopt; i++)
	{
		// Show same tuple in options, but slightly modified.
		n = nbeg;
		a = abeg;

		opts[i] = "";
		for(j=0; j<tnum; j++)
		{
			// Random values added to tuples for answer options (except first option,
			// which is the correct one).
			if(i == 0)
				rinc = 0;
			else
				rinc = getRand(-1, 1, 1, 0);

			if(j == aloc)		// Add next letter.
			{
				a += ainc;
				opts[i] += String.fromCharCode(65+a+rinc);
			}
			else				// Add next number.
			{
				n += ninc;
				opts[i] += (n+rinc);
			}

			if(j < tnum-1) opts[i] += ", ";
		}
	}

	this.addText("¿Cuál opción da continuidad a la serie: " + ser + "?");

	this.addOption(opts);

	this.setAnswer(0);
}
