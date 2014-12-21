
/*
dataset = [ 5, 10, 15,]
d3.select("body").selectAll("p")
	.data(dataset)
	.enter()
	.append("p")
	.text (d) ->
		d
 */

(function() {
  var dataset;

  dataset = [5, 10, 15, 20, 25];

  d3.select("body").selectAll("div").data(dataset).enter().append("div").attr("class", "bar").style("height", function(d) {
    return d + "px";
  });

}).call(this);
