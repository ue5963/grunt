(function() {
  var ajaxSucsessHandler, getUserId, hoge;

  hoge = function() {
    console.log('aaa');
    return console.log('git test');
  };

  hoge();

  ajaxSucsessHandler = function(data, callback) {
    return callback(data.userId);
  };

  getUserId = function(callback) {
    var defer;
    defer = $.Deferred();
    return $.ajax({
      url: '/sample/user.json',
      dataType: 'json',
      success: function(json) {
        var data;
        data = json;
        ajaxSucsessHandler(data, callback);
        return defer.promise();
      }
    }).done(function() {
      return console.log("success");
    }).fail(function() {
      return console.log("error");
    }).always(function() {
      return console.log("complete");
    });
  };

  $(function() {
    var promise;
    promise = getUserId(function(userId) {
      return alert('ユーザーidは' + userId);
    });
    promise.done(function() {
      console.log('toshi!');
      return this;
    });
    return this;
  });

}).call(this);
