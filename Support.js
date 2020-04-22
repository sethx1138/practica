
function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++)
	{
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);

        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return("");
}

// Get random element from specified array.
// Ensure that return value is different from "avoid" parameter if set.

function getRandElem(arr, avoid)
{
	var val;

	do {
		val = arr[Math.floor((arr.length*Math.random()))];
	} while(val == avoid);

	return(val);
}

// Return "num" distinct random elements from array "arr".
// Unknown results if "num" is greater than arr.length.

function getRandElems(arr, num)
{
	var i;
	var ind;
	var sub = [];
	var copy = arr.slice();

	if(num === undefined) num = arr.length;

	for(i=0; i<num; i++)
	{
		ind = Math.floor((copy.length*Math.random()));	// Get index of element.
		sub[i] = copy[ind];								// Save this element.
		copy.splice(ind, 1);							// Remove this element.
	}

	return(sub);
}

// Random values in the range [start, stop].
// That is up to, and including, the stop value.
function getRand(start, step, stop, avoid)
{
	var val;

	var nval = (stop-start)/step + 1;		// Number of possible values.

	do {
		val = start + step * Math.floor((nval*Math.random()));
	} while(val == avoid);

	return(val);
}

// Random values in the range [start, stop).
// That is up to, but excluding, the stop value.
function getRandExcl(start, step, stop, avoid)
{
	var val;

	var nval = (stop-start)/step;		// Number of possible values.

	do {
		val = start + step * Math.floor((nval*Math.random()));
	} while(val == avoid);

	return(val);
}

// Randomly shuffle an array. For small arrays since the
// array parameter is passed by value, not reference.
function shuffle(array)
{
	var temporaryValue, randomIndex;
	var currentIndex = array.length;

	// While there remain elements to shuffle...
	while(currentIndex != 0)
	{
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);

		currentIndex--;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return(array);
}

function htmlPower(v, p)
{
	return(v + "<sup>" + p + "</sup>");
}

function htmlFraction(a, b)
{   
    return("<div class=\"frac\"> <span>" + a + "</span> <span class=\"symbol\">/</span> <span class=\"bottom\">" + b + "</span> </div>");
}

function htmlImage(file)
{
	return("<div><img src='Images/" + file + "'></div>");
}

// Parameter "map" is optional array of indices into "arr".
// Should be the same size as "arr".

function htmlList(arr, map, type)
{
	var i, list;

	if(type === undefined)
		type = "a";

	list = "<OL type='" + type + "'>";

	if(map === undefined)
		for(i=0; i<arr.length; i++)
			list = list + "<LI>" + arr[i] + "</LI>";
	else
		for(i=0; i<arr.length; i++)
			list = list + "<LI>" + arr[map[i]] + "</LI>";

	list += "</OL>";

	return(list);
}

function htmlTable(hdr, arr)
{
	var i, j;
	var nr = arr.length;
	var nc = arr[0].length;

	var table = "<TABLE CLASS='qt'>";

	table += "<TR>";
	for(j=0; j<nc; j++)
		table += ("<TH CLASS='qt'>" + hdr[j] + "</TH>");
	table += "</TR>";

	for(i=0; i<nr; i++)
	{
		table += "<TR>";
		for(j=0; j<nc; j++)
			table += ("<TD CLASS='qt'>" + arr[i][j] + "</TD>");
		table += "</TR>";
	}
	table += "</TABLE>";

	return(table);
}

function addPara(node, str)
{
	var p = document.createElement("P");
	var t = document.createTextNode(str);
	p.appendChild(t);
	node.appendChild(p);

	return(p);
}

// Format a polynomial in one variable.
// "c" is an array of numbers for the coefficients.
// "v" is a string containing the name of the variable (indeterminate).

function htmlPolynomial(c, v)
{
	var str = [];
	var tmp, o;
	var sign, signOld;

	// Format polynomial starting from highest order variable and corresponding coefficient.
	signOld = 0;
	for(o=0; o<c.length; o++)
	{
		sign = Math.sign(c[o]);

		if(sign == 0) continue

		// Show coefficient without sign, if neccessary.
		if(o == 0 || sign*c[o] != 1)
			tmp = sign*c[o];
		else
			tmp = "";

		// Show indeterminate, if neccessary.
		if(o == 1)
			tmp = tmp + v;
		else if(o > 1)
			tmp = tmp + htmlPower(v, o);

		if(signOld == 0 || o == 0)
			str = tmp + str;
		else if(signOld > 0)
			str = tmp + " + " + str;
		else if(signOld < 0)
			str = tmp + " - " + str;

		// Save sign.
		signOld = sign;
	}

	if(signOld < 0) str = "-" + str;

	//return(str);
    return("<i>" + str + "</i>");
}

// Format a multivariable equation.
// "c" is an array of coefficients (numbers).
// "v" is an array of powers of variables (strings).

function htmlEquation(c, v)
{
    var str = [];
    var tmp, i;
    var sign, signOld;

    signOld = 0;
    for(i=0; i<c.length; i++)
    {
        sign = Math.sign(c[i]);

        if(sign == 0) continue

        // Show coefficient without sign, if neccessary.
        if(sign*c[i] != 1)
            tmp = sign*c[i];
        else
            tmp = "";

        tmp += v[i];

        if(signOld == 0 || i == 0)
            str = tmp + str;
        else if(signOld > 0)
            str = tmp + " + " + str;
        else if(signOld < 0)
            str = tmp + " - " + str;

        // Save sign.
        signOld = sign;
    }

    if(signOld < 0) str = "-" + str;

    //return(str);
    return("<i>" + str + "</i>");
}
