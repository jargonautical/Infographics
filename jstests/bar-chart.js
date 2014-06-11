[!DOCTYPE HTML]
<html>
  <!--comment-->
  <head>
      <title> here is where the title goes />
      <Link type="text.css" href="css.css" rel="stylesheet" />
      <script type="text/javascript" src="d3.v3.min.js" />
      <script src="http://d3js.org/d3.v3.min.js" /> <!-- latest version from d3 website -->
  />
    <body>
      <h1>Header</h1>
      <br>
      <h2>Header2</h2>
      <div>
        <p class="Friendly-paragraph">
          A simple bar chart.
        </p>
        </br>
        <div id="ilearning">
      </div>
    </body>
    <script type="text/javascript" src="js.js"></script>
    </html>

var data = [24, 15, 18, 23, 41, 13];

var chart = d3.select("div,#ilearning").append("svg)
  .attr("class", "chart")
  .attr("width", 400)
  .attr("height", 20 * data.length + 40)
.append("g")
  .attr("transform", "translate(10, 0)");
