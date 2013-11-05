(function (root) {
  var UI = root.UI = (root.UI || {});
  var Chat = UI.Chat = function (connection) {
    this.connection = connection;
    this.socket = new Chatroom.Client(connection);
  }

  Chat.prototype.listen = function () {
    this._listenForSends();
    this._listenForEchos();
  }

  Chat.prototype._listenForSends = function () {
    var $input = $('#chat-field');
    var self = this;
    $input.on('keypress', function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        self.socket.sendMessage(e.target.value);
        $(e.target).val('');
      }
    });
  }

  Chat.prototype._listenForEchos = function () {
    var $chat = $('#chats');

    this.connection.on('echo', function (data) {
      $chat.append('<p>' + data.text + '</p>');
    });

  }

})(this);

$(function () {
  connection = io.connect();
  new UI.Chat(connection).listen();
});
