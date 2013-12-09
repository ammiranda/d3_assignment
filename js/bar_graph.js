var dataset = [14, 23, 34, 12, 20, 40, 36, 16, 21, 38, 45];

d3.select("body").selectAll("div")
	.data(dataset)
	.enter()
	.append("div")
	.attr("class", "bar")
	.style("height", function(d) {
		var barHeight = d * 5;
		return barHeight + "px";
	});