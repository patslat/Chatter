(function (root) {
  var Chatroom = root.Chatroom = (root.Chatroom || {});

  Chatroom.Client = function (connection) {
    this.socket = connection;
  }

  Chatroom.Client.prototype.sendMessage = function (message) {
    this.socket.emit('message', message);
  }

})(this);
