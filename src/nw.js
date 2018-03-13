const option = {
  key : "Ctrl+Command+L",
  active : function() {
    const win = global.nw.Window.get()
    win.show()
    win.focus()
  },
  failed : function(msg) {
    // :(, fail to register the |key| or couldn't parse the |key|.
    console.log(msg);
  }
};

if(global.nw){
    // Create a shortcut with |option|.
    const shortcut = new global.nw.Shortcut(option)
    // Register global desktop shortcut, which can work without focus.
    global.nw.App.registerGlobalHotKey(shortcut)
}
