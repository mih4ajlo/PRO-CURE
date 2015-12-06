
/*function napraviTT (argument) {
     d3.select("body")                    
      .append("div")
      .attr("class", "mytooltip")
      .style("opacity", "0")
      .style("display", "none");

      return d3.select(".mytooltip");
}




function dodajTT (d,k, coord) {
  var temp = d3.select('.mytooltip');

  if( temp.empty() ) temp = napraviTT();

  temp
  .transition()
  .duration(500)
  .style("opacity", "1")                           
  .style("display", "block")
  .style('left', coord(0) )
  .style('top', coord(1) )

}

function skloniTT () {
  d3.select(this)
    .transition()
    .duration(500)
    //.attr("x", function(d) { return x(d.cocoa) - 20; })
    .style("cursor", "normal")
    .attr("width", 40)
    
  d3.select('.mytooltip').transition()
      .duration(500)
      .style("opacity", "0")            
      .style("display", "none")
}


function staviSadrzajTT (d,j, event) {
  var narucilac = "" ;
  if(d.narucilac != undefined) narucilac =  d.narucilac
//<img src='" + d.image + "'/>
  d3.select('.mytooltip').html("<div id='thumbnail'><span>" + d.name + "</span><br /> <div> 2014"+
    .narucilac+"</div> </div>")
    .style("left", (d3.event.pageX - 113) + "px")   
    .style("top", (d3.event.pageY - 80) + "px")
    .on("mouseout", skloniTT )

}*/
