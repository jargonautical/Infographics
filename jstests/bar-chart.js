var data = [24, 15, 18, 23, 41, 13];

var chart = d3.select("div,#ilearning").append("svg)
  .attr("class", "chart")
  .attr("width", 400)
  .attr("height", 20 * data.length + 40)
.append("g")
  .attr("transform", "translate(10, 0)");
