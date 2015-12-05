
var myTool = d3.select("body")                    
    .append("div")
    .attr("class", "mytooltip")
    .style("opacity", "0")
    .style("display", "none");


function dodajTT (d,k) {
  

  d3.select('.mytooltip')
  .transition()
  .duration(500)
  .style("opacity", "1")                           
  .style("display", "block")

}

function skloniTT (d,j) {
  d3.select(this)
    .transition()
    .duration(500)
    .attr("x", function(d) { return x(d.cocoa) - 20; })
    .style("cursor", "normal")
    .attr("width", 40)
    
  d3.select('.mytooltip').transition()
      .duration(500)
      .style("opacity", "0")            
      .style("display", "none")
}


function staviSadrzajTT (d,j, event) {

  d3.select('.mytooltip').html("<div id='thumbnail'><span>" + d.name + "</span><img src='" + d.image + "'/></div>")
    .style("left", (d3.event.pageX - 113) + "px")   
    .style("top", (d3.event.pageY - 190) + "px")
    .on("mouseout", skloniTT )

}
