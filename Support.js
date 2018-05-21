
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

function getRand(start, step, stop, avoid)
{
	var val;

	var nval = (stop-start)/step + 1;		// Number of possible values.

	do {
		val = start + step * Math.floor((nval*Math.random()));
	} while(val == avoid);

	return(val);
}

function htmlFraction(a, b)
{   
    return("<div class=\"frac\"> <span>" + a + "</span> <span class=\"symbol\">/</span> <span class=\"bottom\">" + b + "</span> </div>");
}

function htmlImage(file)
{
	return("<div><img src='Images/" + file + "'></div>");
}

// Parameter "ind" is optional array of indices into "arr".
// Should be the same size as "arr".

function htmlList(arr, ind)
{
	var i;

	var list = "<OL type='a'>";

	if(ind === undefined)
		for(i=0; i<arr.length; i++)
			list = list + "<LI>" + arr[i] + "</LI>";
	else
		for(i=0; i<arr.length; i++)
			list = list + "<LI>" + arr[ind[i]] + "</LI>";

	list += "</OL>";

	return(list);
}

function htmlTable(arr)
{
	var i, j;
	var nr = arr.length;
	var nc = arr[0].length;

	var table = "<TABLE border=1>";

	table += "<TR><TD>Ingrediente</TD><TD>Peso (kg)</TD></TR>";

	for(i=1; i<nr; i++)
	{
		table += "<TR>";
		for(j=0; j<nc; j++)
			table += "<TD>" + arr[i][j] + "</TD>";
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