var w = 1200;
var h = 300;
var barPadding = 2;

var dataset = [];
var labels = [];

var data = [
		["2018-12-31",13760.435],
		["2017-12-31",12633.41],
		["2016-12-31",11584.528],
		["2015-12-31",10641.323],
		["2014-12-31",9761.201],
		["2013-12-31",8939.327],
		["2012-12-31",8221.015],
		["2011-12-31",7321.986],
		["2010-12-31",5930.393],
		["2009-12-31",4990.526],
		["2008-12-31",4519.951],
		["2007-12-31",3494.235],
		["2006-12-31",2712.917],
		["2005-12-31",2256.919],
		["2004-12-31",1931.646],
		["2003-12-31",1640.961],
		["2002-12-31",1453.833],
		["2001-12-31",1324.814],
		["2000-12-31",1198.477],
		["1999-12-31",1083.284],
		["1998-12-31",1019.48],
		["1997-12-31",952.649],
		["1996-12-31",856.084],
		["1995-12-31",727.947],
		["1994-12-31",559.224],
		["1993-12-31",613.223],
		["1992-12-31",488.222],
		["1991-12-31",409.165],
		["1990-12-31",390.279],
		["1989-12-31",451.311],
		["1988-12-31",404.149],
		["1987-12-31",323.973],
		["1986-12-31",297.59],
		["1985-12-31",307.017],
		["1984-12-31",310.686],
		["1983-12-31",301.803],
		["1982-12-31",281.28],
		["1981-12-31",286.979],
		["1980-12-31",303.365]
		];

data.reverse();

_.each(data, function(d,i){
	labels.push(data[i][0].substring(0,4));
});

_.each(data, function(d,i){
	dataset.push(data[i][1].toFixed(0));
});

console.log(dataset);
console.log(labels);

console.log(d3.max(dataset));

var xScale = d3.scale.linear()
						.domain([0, dataset.length])
						.range([0,dataset.length]);

var yScale = d3.scale.linear()
						.domain([0, 13760])
						.range([0,h]);
var yScale2 = d3.scale.linear()
						.domain([0, 13760])
						.range([h,0]);

var xAxis = d3.svg.axis()
				.scale(xScale)
				.orient("bottom");

var yAxis = d3.svg.axis()
				.scale(yScale2)
				.orient("right")
				.tickValues([2000, 4000, 6000, 8000, 10000, 12000]);



var svg = d3.select("body")
						.append("svg")
						.attr("width", w)
						.attr("height", h + 20);

			svg.selectAll("rect")
			   .data(dataset)
			   .enter()
			   .append("rect")
			   .attr("x", function(d, i) {
			   		return i * (w / dataset.length);
			   })
			   .attr("y", function(d) {
			   		return h - (yScale(d));
			   })
			   .attr("width", w / dataset.length - barPadding)
			   .attr("height", function(d) {
			   		return yScale(d);
			   })
			   .attr("fill", "red");

			svg.selectAll("text")
				.data(dataset)
				.enter()
				.append("text")
				.text(function(d){
					return d;
				})
				.attr("text-anchor", "middle")
				.attr("x", function(d, i){
					return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
				})
				.attr("y", function(d){
					return h - yScale(d) + 7;
				})
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "10px")
			   .attr("fill", "yellow");


			svg.selectAll("text")
			   .data(labels)
			   .enter()
			   .append("text")
			   .text(function(d) {
			   		return d;
			   })
			   .attr("text-anchor", "middle")
			   .attr("x", function(d, i) {
			   		return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
			   })
			   .attr("y", function(d, i) {
			   		return h - 10;
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "12px")
			   .attr("fill", "yellow");

			svg.append("g")
				.attr("class", "axis")
				.attr("transform", "translate(0," + barPadding + ", 0)")
				.call(yAxis)
				.append("text")
					.attr("transform", "rotate(-90)")
					.attr("y", 6)
					.attr("dy", ".71em")
					.style("text-anchor", "end")

			svg.append("g")
				.attr("class", "axis")
				.attr("transform", "translate(" + 10 + "," + h +")")
				.call(xAxis)
				.append("text")
					.attr("x", 6)
					.attr("dx", ".71em")
