  
(function(exports) {
  function NoteController(noteList = new NoteList) {
    this.list = noteList
  };


  NoteController.prototype.control = function() {

    // this is required to access the variable in the controller
    this.list.add('Hi')
    this.list.add('Hello')
    this.list.add('Hey')
    
    var view = new NoteListView(this.list)

    document.getElementById("app").innerHTML = view.convert()
  };
  
  exports.NoteController = NoteController;
})(this);

var ctrl = new NoteController()
ctrl.control()