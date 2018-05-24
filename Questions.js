/******************************************************************************\
	Functions for creating subjects, blocks and questions.
\******************************************************************************/

var S, B, Q;
var SavedGroup;
var SavedOptions;

var Practice = [];
Practice.subjects = [];
Practice.addSubject = function(name)
{
	var s = new Subject(name);		// New subject object.
	this.subjects.push(s);			// Push it (reference) onto the list.
	return(s);						// Return reference.
}

// Subject constructor.
function Subject(name)
{
	this.name = name;
	this.blocks = [];

	this.addBlock = function(name)
	{
		var b = new Block(name);		// New block object.
		this.blocks.push(b);			// Push it (reference) onto the list.
		return(b);						// Return reference.
	}
}

// Block constructor.
function Block(name)
{
	this.name = name;
	this.questions = [];

	this.addQuestion = function(type)
	{
		var q = new Question(type);		// New question object.
		this.questions.push(q);			// Push it (reference) onto the list.
		return(q);						// Return reference.
	}
}

// Question constructor.
function Question(type)
{
	this.type = type;
	this.group = "";
	this.text = "";
	this.options = [];
	this.map = [];
	this.score = [];

	this.init = function()
	{
		var i;

		// Call user-defined initializaion.
		// Should initialize "text" and "answer".
		// Can initialize "options".
		if(this.userInit !== undefined)
		{
			this.group = "";
			this.text = "";
			this.options = [];
			this.userInit();
		}

		// Create a random map to scramble the options
		// for simple multiple-choice, and complex multiple-choice.
		if(this.type == "choice" || this.type == "multiple")
		{
			var i, ind, ret;

			this.map = [];
			for(i=0; i<this.options.length; i++)
			{
				do {
					ind = Math.floor(this.options.length*Math.random());
					ret = this.map.indexOf(ind);
				} while(ret != -1)
				this.map[i] = ind;
			}
		}
	}

	this.addText = function(sentence)
	{
		this.text = this.text + " " + sentence;
	}

	// No arguments: use the saved value for the options.
	// One argument (string): add string to options.
	// One argument (array): set options to array.
	// Many arguments: set options array to arguments array.
	this.addOption = function()
	{
		if(arguments.length == 0)
			this.options = SavedOptions;
		else if(arguments.length == 1)
		{
			if(typeof(arguments[0]) == "object")
				this.options = arguments[0];
			else
				this.options.push(arguments[0]);
		}
		else
			this.options = arguments;
	}

	// No argument: set group to saved value.
	// One argument: set group to argument value.
	this.setGroup = function(group)
	{
		if(group === undefined)
			this.group = SavedGroup;
		else
			this.group = group;
	}

	// Last of methods to be called.
	this.setAnswer = function(ans)
	{
		this.answer = ans;

		// Save group.
		SavedGroup = this.group;

		// Save options.
		if(this.options.length > 0)
			SavedOptions = this.options;
	}
}
