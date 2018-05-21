var CurrSubject=0;
var CurrBlock=0;
var CurrQuestion=0;

//var Scores=[];

// Nodes.
var eBox, eSpan, eSubjectSel, eBlockSel;
var qBox, qGroup, qTitle, qQuestion, qText, qInput, qResult;
var cBox, cButtonP, cButtonA, cButtonO, cButtonN;
var sBox, sTable;

function createSelect(selNode, arr, selected, onChangeFunc)
{
	var i;
	var opt;

	while (selNode.hasChildNodes()) {  
		selNode.removeChild(selNode.firstChild);
	}

    selNode.onchange = onChangeFunc;
    for(i=0; i<arr.length; i++)
    {
        var opt = document.createElement("OPTION");
        opt.text = arr[i].name;
        selNode.add(opt);
    }
    selNode.selectedIndex = selected.toString();
}

function changeSubject()
{
    CurrSubject = eSubjectSel.selectedIndex;
    CurrBlock = 0;
    CurrQuestion = 0;

	// Update block selector.
	createSelect(eBlockSel, Practice.subjects[CurrSubject].blocks, CurrBlock, changeBlock);

	// Load new question.
	showQuestion();

	showNumQuest();

    //showScores();

    // Update cookies

    setCookie("CurrSubject", CurrSubject, 30);
    setCookie("CurrBlock", CurrBlock, 30);
    setCookie("CurrQuestion", CurrQuestion, 30);
}

function changeBlock()
{
    CurrBlock = eBlockSel.selectedIndex;;
    CurrQuestion = 0;

	// Load new question.
	showQuestion();

	showNumQuest();

    //showScores();

    // Update cookies

    setCookie("CurrSubject", CurrSubject, 30);
    setCookie("CurrBlock", CurrBlock, 30);
    setCookie("CurrQuestion", CurrQuestion, 30);
}

function prevQuestion()
{
    B = Practice.subjects[CurrSubject].blocks[CurrBlock];

	CurrQuestion--;
	if(CurrQuestion < 0)
		CurrQuestion = B.questions.length-1;

	showQuestion();

	// Update cookie
    setCookie("CurrQuestion", CurrQuestion, 30);
}

function nextQuestion()
{
    B = Practice.subjects[CurrSubject].blocks[CurrBlock];

	CurrQuestion++;
	if(CurrQuestion == B.questions.length)
		CurrQuestion = 0;

	showQuestion();
	
	// Update cookie
    setCookie("CurrQuestion", CurrQuestion, 30);
}

function logObjects()
{
	var s, b, q;

	for(s=0; s<Practice.subjects.length; s++)
	{
		S = Practice.subjects[s];
		console.log("Section: " + S.name);

		for(b=0; b<S.blocks.length; b++)
		{
			B = S.blocks[b];
			console.log("  Block: " + B.name);

			for(q=0; q<B.questions.length; q++)
			{
				Q = B.questions[q];

				Q.init();

				console.log("    Question: " + (q+1));
				console.log("      type: " + Q.type);
				console.log("      answer: " + Q.answer);
			}
		}
	}
}

// For [±10, ±∞) return number as an integer without decimal places.
// For [±0.01, ±10) return two significant digits.
// For [0, ±0.01) return number converted to string.

function fmtReal(val)
{
	var dp;
	var upper = 100;
	var lower = 10;

	// Remove and save sign of value.
	var sign = (val >= 0)?1:-1;
	val *= sign;
	
	// Return big numbers without decimal places.
	if(val >= lower)
		return(sign*val.toFixed(0));

	for(dp=0; dp<4; dp++)
	{
		if(upper > val && val >= lower)
			return(sign*val.toFixed(dp));
		upper /= 10;
		lower /= 10;
	}

	// Return small numbers unchanged.
	return(val.toString());
}

function fmtInput(input)
{
	var arr = input.toLowerCase().split(/[ ,]/).join("").split("");
	arr.sort();
	return(arr.join(", "));
}

function fmtMultiple(arr, map)
{
	var i, tmp=[];

	for(i=0; i<arr.length; i++)
		tmp[i] = String.fromCharCode(map.indexOf(arr[i]) + 97);

	return(tmp.sort().join(", "));
}

function checkAnswer(e)
{
	if(!e) var e = window.event;
	if(e.keyCode !== 13) return;

    Q = Practice.subjects[CurrSubject].blocks[CurrBlock].questions[CurrQuestion];

	if(Q.type == "real")
		match = (0.95*Q.answer < qInput.value && qInput.value < 1.05*Q.answer);
	else if(Q.type == "string")
		match = (qInput.value.toUpperCase() == Q.answer.toUpperCase());
	else if(Q.type == "choice")
		match = (qInput.value.toLowerCase().charCodeAt(0) - 97 == Q.map.indexOf(Q.answer));
	else if(Q.type == "multiple")
		match = (fmtInput(qInput.value) == fmtMultiple(Q.answer, Q.map))
	else
		match = (qInput.value == Q.answer);

	if(match)
	{
		//Scores[CurrSubject][CurrBlock][CurrQuestion][1]++;

		// Disable "see answer" button.
		cButtonA.disabled = true;

		// Disable input area.
		qInput.disabled = true;

		var f = 0xDE00 + getRand(1, 1, 15);
		var faceStr = String.fromCharCode(0xD83D, f);
		var res = "Corecto! " + faceStr;

		//td = document.getElementById("std" + CurrQuestion + "_" + 1);
		//nc = Number(td.innerHTML);
		//td.innerHTML = nc + 1;
	}
	else
	{
		//Scores[CurrSubject][CurrBlock][CurrQuestion][2]++;

		var f = 0xDE20 + getRand(1, 1, 15);
		var faceStr = String.fromCharCode(0xD83D, f);
		var res = "Lo siento. Intenta otra vez! " + faceStr;

		//td = document.getElementById("std" + CurrQuestion + "_" + 2);
		//nc = Number(td.innerHTML);
		//td.innerHTML = nc + 1;
	}

	qResult.innerHTML = res;

}

function showNumQuest()
{
	var numQuest = Practice.subjects[CurrSubject].blocks[CurrBlock].questions.length;
    eSpan.innerHTML = "(Preguntas: " + numQuest + ")"
}
   
function showQuestion()
{
    Q = Practice.subjects[CurrSubject].blocks[CurrBlock].questions[CurrQuestion];
	Q.init();

	if(Q.group.length > 0)
		qGroup.innerHTML = Q.group;
	else
		qGroup.innerHTML = "";

    qTitle.innerHTML = "Pregunta " + (CurrQuestion + 1);
    qText.innerHTML = Q.text + htmlList(Q.options, Q.map)
    qResult.innerHTML ="Ingresa tu respuesta.";

    qInput.value = "";
    qInput.disabled = false;
    qInput.focus();

    cButtonP.disabled = false;
    cButtonA.disabled = false;
    cButtonO.disabled = false;
    cButtonN.disabled = false;
}

function showAnswer()
{
	qInput.disabled = true;
	cButtonA.disabled = true;

    Q = Practice.subjects[CurrSubject].blocks[CurrBlock].questions[CurrQuestion];

	if(Q.type == "choice")
		qResult.innerHTML = "La respuesta es: " + String.fromCharCode(Q.map.indexOf(Q.answer) + 97);
	else if(Q.type == "multiple")
		qResult.innerHTML = "La respuesta es: " + fmtMultiple(Q.answer, Q.map);
	else
		qResult.innerHTML = "La respuesta es: " + Q.answer;
}

function Practica()
{
	// Nodes.
    var option;
	var table, tr;

// Read cookies.

    CurrSubject = Number(getCookie("CurrSubject"));
    CurrBlock = Number(getCookie("CurrBlock"));
    CurrQuestion = Number(getCookie("CurrQuestion"));

// Create table to organize content.

    table = document.createElement("TABLE");
    document.body.appendChild(table);

// Exam box.

    tr = document.createElement("TR");
    table.appendChild(tr);

    eBox = document.createElement("TD");
    eBox.style.backgroundColor = "#DDDDFF";
    eBox.style.border = "1px solid #AAAAFF";
    eBox.style.padding = "10pt";
    tr.appendChild(eBox);

    var span = document.createElement("SPAN");
    span.style.paddingLeft = "2em"
    span.style.paddingRight = "1em"
    span.innerHTML = "Tema";
    eBox.appendChild(span);

	// Create subject selection.
    eSubjectSel = document.createElement("SELECT");
	createSelect(eSubjectSel, Practice.subjects, CurrSubject, changeSubject);
	eBox.appendChild(eSubjectSel);

	// Create block selection.
    eBlockSel = document.createElement("SELECT");
	createSelect(eBlockSel, Practice.subjects[CurrSubject].blocks, CurrBlock, changeBlock);
    eBox.appendChild(eBlockSel);

    eSpan = document.createElement("SPAN");
    eSpan.style.paddingLeft = "2em"
    eSpan.style.paddingRight = "1em"
    eBox.appendChild(eSpan);
	showNumQuest();

	//logObjects();

// Control box.

	tr = document.createElement("TR");
	table.appendChild(tr);

	cBox = document.createElement("TD");
	cBox.style.backgroundColor = "#DDDDFF";
	cBox.style.border = "1px solid #AAAAFF";
    cBox.style.padding = "10pt";
	tr.appendChild(cBox);

    cButtonP = document.createElement("BUTTON");
    text = document.createTextNode("<=Previa");
    cButtonP.appendChild(text);
	cButtonP.onclick = prevQuestion;
    cBox.appendChild(cButtonP);

    cButtonA = document.createElement("BUTTON");
    text = document.createTextNode("Ver respuesta");
    cButtonA.appendChild(text);
	cButtonA.onclick = showAnswer;
    cBox.appendChild(cButtonA);

    cButtonO = document.createElement("BUTTON");
    text = document.createTextNode("Otra vez");
    cButtonO.appendChild(text);
	cButtonO.onclick = showQuestion;
    cBox.appendChild(cButtonO);

    cButtonN = document.createElement("BUTTON");
    text = document.createTextNode("Siguiente=>");
    cButtonN.appendChild(text);
	cButtonN.onclick = nextQuestion;
    cBox.appendChild(cButtonN);

// Question box.

    tr = document.createElement("TR");
    table.appendChild(tr);

    qBox = document.createElement("TD");
    qBox.style.backgroundColor = "#FFDDDD";
    qBox.style.border = "1px solid #FFAAAA";
    qBox.style.padding = "10pt";
    tr.appendChild(qBox);

    qGroup = document.createElement("P");
    qBox.appendChild(qGroup);

    qTitle = document.createElement("P");
    qTitle.style.textDecoration="underline";
    qBox.appendChild(qTitle);

    qText = document.createElement("P");
    qBox.appendChild(qText);

    var br = document.createElement("BR");
    qBox.appendChild(br);

    qInput = document.createElement("INPUT");
    qInput.type = "text";
    qInput.onkeypress = checkAnswer;
    qInput.focus();
    qBox.appendChild(qInput);

    qResult = document.createElement("P");
    qBox.appendChild(qResult);

	showQuestion();
}
