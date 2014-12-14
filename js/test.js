(function() {
  hoge(function() {
    console.log('aaa');
    return console.log('git test');
  });

  hege();

}).call(this);
