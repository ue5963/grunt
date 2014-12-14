(function() {
  hoge(function() {
    return console.log('aaa');
  });

  hege();

}).call(this);
