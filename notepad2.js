goog.provide("tutorial.notepad");
goog.provide("tutorial.notepad.Note");

goog.require("goog.dom");
goog.require("goog.ui.Zippy");

goog.require("goog.fx.DragDrop");
//goog.require("goog.events");

tutorial.notepad.Note = function(title, content, noteContainer){
	this.title = title;
	this.content = content;
	this.parent = noteContainer;
};

tutorial.notepad.Note.prototype.makeNoteDom = function(){
	this.headerElement =goog.dom.createDom("div", 
	{"style": "background-color: #EEE"}, this.title);
	this.contentElement = goog.dom.createDom("div", null, this.content);
	
	this.editorElement = goog.dom.createDom("textarea");
	
	var saveBtn = goog.dom.createDom("input", {"type" : "button", "value" : "Save"});
	
	this.editorContainer = goog.dom.createDom("div", {"style" : "display:none"}, this.editorElement,
		saveBtn);
	
	
	this.contentContainer = goog.dom.createDom("this", null, this.contentElement, this.editorContainer);
	
	var newNote = goog.dom.createDom("div", null, this.headerElement,
	this.contentContainer);
	
	goog.dom.appendChild(this.parent, newNote);
	
	goog.events.listen(this.contentElement, goog.events.EventType.CLICK, this.openEditor, false, this);
	
	goog.events.listen(saveBtn, goog.events.EventType.CLICK, this.save, false, this);
	
	return new goog.ui.Zippy(this.headerElement, this.contentContainer);
};


tutorial.notepad.Note.prototype.openEditor = function (e){
	
	this.editorElement.value = this.content;
	this.editorContainer.style.display = "inline";
	this.contentElement.style.display = "none";
};

tutorial.notepad.Note.prototype.closeEditor = function (){
	this.contentElement.innerHTML = this.content;
	this.editorContainer.style.display = "none";
	this.contentElement.style.display = "inline";
	
};

tutorial.notepad.Note.prototype.save = function(e){
	this.content = this.editorElement.value;
	this.closeEditor();
};



tutorial.notepad.makeNotes = function(data, noteContainer){
	var notes = [];
	
	for (var i = 0; i< data.length; i++){
		var note = new tutorial.notepad.Note(data[i].title,
			data[i].content, noteContainer);
			notes.push(note);
			note.makeNoteDom();
	}
	
	return notes;
};




































































