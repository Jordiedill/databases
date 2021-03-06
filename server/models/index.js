var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      var queryStr = 'select messages.id, messages.text, messages.roomname from messages \
                       left outer join users on (messages.userid = user.id) \
                       order by messages.id desc';
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    }, // a function which produces all the messages
    post: function () {
      var queryStr = 'insert into messages(text, userid, roomname) \
                      values (?, (select id from user where username = ? limit = 1), ?) \
                      ';
      db.query(queryStr, params, function(err, results) {
        callback(results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {

    var queryStr = 'select * from users';
    db.query(queryStr, function(err, results) {
      callback(results);
    });
  },
    post: function (params, callback) {
      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, function(err, results) {
        callback(results);
      });
    }
  }
};

