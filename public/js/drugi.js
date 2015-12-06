/*


    function mrdniGa() {
        //uzmi ceo i transliraj ga na ivicu
        d3.select("#container").attr("transform", "translate(" + (width + 20) + "," + (height / 2) + ")");

        //uzmi sve podatke i filtriraj ih, da odgovaraju samo jednoj kategoriji

    }

    function rotirajGa(argument) {
        //uzmi prethodnu vrednost
        //dodaj jos 10 stepeni

        //uzmi element na koji je kliknuto
        var prev = b.previousElementSibling
        var next = b.previousElementSibling

        d3.select("#rotiraj").style("transform", "rotateZ(10deg)")
    }
*/
    function secondGraph(data) {
        var width = 350;
        var height = 600;

        var svgDrugi = d3.select("#chart2").append("svg")

        .append("g")
            .attr('id', "resList")
            .attr("transform", "translate(" + 0 + "," + 0 + ")");


        var niz_pokazatelj = data.map(function(po){return +po.cena_pdv});

        var max = d3.max( niz_pokazatelj );
        var min = d3.min( niz_pokazatelj  );    
         
        var x = d3.scale.linear().range([50, 180]);


        var y = d3.scale.ordinal()
            .rangeRoundBands([0, height],.25);


        x.domain(
        	niz_pokazatelj);

        y.domain(
        	data.map(function(d) {
            	return +d.cena_pdv ;
        	})
    	)


        svgDrugi.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", function(d) {
                return "bar negative";
            })
            .attr("x", function(d) {
                return 0;
            })
            .attr("y", function(d) {
                //return +d.idNum * 15;	
                return y(+d.cena_pdv) ;
            })
            .attr("width",function (d,j) {
            	return  d3.max(350 -  Math.floor(  x(+d.cena_pdv), 0 ) );
            }  )
            .attr("height", 12)
            .on("mouseover", function(l, e) {
                console.log(l)
            })
            .on("click", function (d, j) {
            	change(data)
            });

        function change(data, nes) {
            //clearTimeout(sortTimeout);
            
                // Copy-on-write since tweens are evaluated after a delay.
            var y0 = y.domain(
                    data.sort(
                        nes ? function(a, b) {
                            return b.cena_pdv - a.cena_pdv;
                        } : function(a, b) {
                            return a.cena_pdv - b.cena_pdv;
                        })
                    .map(function(d) {
                        return +d.cena_pdv;
                    }))
                .copy();

            svgDrugi.selectAll(".bar")
                .sort(function(a, b) {
                    return y0(a.cena_pdv) - y0(b.cena_pdv);
                });

            var transition = svgDrugi.transition().duration(750),
                delay = function(d, i) {
                    return i * 50;
                };

            transition.selectAll(".bar")
                .delay(delay)
                .attr("y", function(d) {
                    return y0(d.cena_pdv) ;
                });
				// .attr("transform", function(d, i) { return "translate(0," + y0(d.cena_pdv)+ ")"; });

        }

    }

    /*=====  End of filterPretraga  ======*/