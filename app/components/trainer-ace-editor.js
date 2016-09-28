import Ember from 'ember';

const TrainerAceEditorComponent = Ember.Component.extend({

  editorContent: Ember.computed({
    get() {
      return this.editor.getSession().getValue();
    },
    set(key, val) {
      if (!this.editor) {
        this.preset = val;
        return val;
      }

      var cursor = this.editor.getCursorPosition();
      this.editor.getSession().setValue(val);
      this.editor.moveCursorToPosition(cursor);
      return val;
    }
  }),

 didInsertElement: function() {
   this.editor = window.ace.edit('editor');
   this.editor.$blockScrolling = Infinity;
   this.editor.setTheme('ace/theme/pastel_on_dark');
   this.editor.getSession().setMode('ace/mode/sql');
   this.editor.setOptions({
     fontSize: "12pt"
   });

   this.editor.resize();

   var self = this;
   this.editor.on('change', function() {
     self.notifyPropertyChange('editorContent');
   });

   if (this.preset) {
     this.set('editorContent', this.preset);
     this.preset = null;
   }
 },

 actions: {
   exportData() {
      this.get('onExportData')(this.get('editorContent'));
   }
 }
});

TrainerAceEditorComponent.reopenClass({
});

export default TrainerAceEditorComponent;
