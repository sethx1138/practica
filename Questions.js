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

	this.init = function()
	{
		// Call user-define initializaion.
		// Should initialize "text" and "answer".
		// Can initialize "options".
		if(this.userInit !== undefined)
		{
			this.group = "";
			this.text = "";
			this.options = [];
			this.userInit();
		}
	}

	this.addText = function(sentence)
	{
		this.text = this.text + " " + sentence;
	}

	// No arguments: use the saved value for the options.
	// One argument: add argument to options.
	// Many arguments: set options to arguments array.
	this.addOption = function()
	{
		if(arguments.length == 0)
			this.options = SavedOptions;
		else if(arguments.length == 1)
			this.options.push(arguments[0]);
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

		if(this.options.length > 0)
		{
			// Save options.
			SavedOptions = this.options;

			// Add options to question text.
			this.text = this.text + htmlList(this.options);
		}
	}
}
