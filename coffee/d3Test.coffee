###
dataset = [ 5, 10, 15,]
d3.select("body").selectAll("p")
	.data(dataset)
	.enter()
	.append("p")
	.text (d) ->
		d
###
dataset = [ 5, 10, 15, 20, 25 ];
d3.select("body").selectAll("div")
	.data(dataset)
	.enter()
	.append("div")
	.attr("class", "bar")
	.style(
		"height",
		(d) ->
			d + "px"
			)
