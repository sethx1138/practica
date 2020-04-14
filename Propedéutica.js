

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

	var A0 = getRand(-9, 1, 9);
	var A1 = getRand(-9, 1, 9, A0);
	var eqA = htmlPolynomial([A0, A1], v);

	var B0 = getRand(-9, 1, 9);
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

	this.addText("Cuál es el perímetro de un rectangulo que mide de base " + eqB + " y de alto " + eqA + ".");
	this.addOption(opts);

	this.setAnswer(0);
}

Q = B.addQuestion("choice");
Q.userInit = function()
{
	var c = [];
	var opts = [];
	var v = getRandElem(VARS);
	var shape = getRandElem(["rectangulo", "triangulo"]);

	var A0 = getRand(-6, 1, 6, 0);
	var A1 = getRand(-6, 1, 6, 0);
	var eqA = htmlPolynomial([A0, A1], v);

	var B0 = getRand(-6, 2, 6, 0);
	var B1 = getRand(-6, 2, 6, 0);
	var eqB = htmlPolynomial([B0, B1], v);

	// Blend in the factor of 2 for the triangle.
	if(shape == "triangulo")
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
