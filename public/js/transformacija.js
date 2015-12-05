function transformData(all) {
        var tempObje = {
            "name": "Bezbednost",
            "children": []
        };

        var dobra = all.filter(function(la) {
            return la.predmet == "Dobra";
        })
        var usluge = all.filter(function(la) {
            return la.predmet == "Usluge";
        })
        var radovi = all.filter(function(la) {
            return la.predmet == "Radovi";
        })

        var poljaZaDif = ["restriktivni", "otvoreni", "sa objavljivanjem", "bez objavljivanja", "kvalifikacioni"];

        dobra = filter2nivo("Dobra",dobra, poljaZaDif, colors.dobra.izvedene);
        usluge = filter2nivo("Usluge",usluge, poljaZaDif, colors.usluge.izvedene);
        radovi = filter2nivo("Radovi",radovi, poljaZaDif, colors.radovi.izvedene);

        var tempDobra = [];
        var tempUsluge = [];
        var tempRadovi = [];

        dobra.forEach(function (funk) {
        	if(funk.children != undefined)
        	tempDobra = tempDobra.concat(funk.children)		
        })
        usluge.forEach(function (funk) {
        	if(funk.children != undefined)
        	tempUsluge = tempUsluge.concat(funk.children)		
        })
        radovi.forEach(function (funk) {
        	if(funk.children != undefined)
        	tempRadovi = tempRadovi.concat(funk.children)		
        })

        tempObje.children.push({
            "name": "Dobra",
            "children": tempDobra,
            "color":colors.dobra.osnovna
        });
        tempObje.children.push({
            "name": "Usluge",
            "children": tempUsluge,
            "color":colors.usluge.osnovna
        });
        tempObje.children.push({
            "name": "Radovi",
            "children": tempRadovi,
            "color":colors.radovi.osnovna
        });

        return tempObje;
    }


    function filter2nivo(kat, niz, poljaZaDif, boje) {

        var param = 'opis_predmeta';
        
        var uslovArra = [];

        var katego = 
        	["restriktivni", "otvoreni", "sa objavljivanjem", "bez objavljivanja", "kvalifikacioni"];

        poljaZaDif.forEach(function(to) {
            
            var tempOb = {
                "name": to.charAt(0).toUpperCase() + to.slice(1),
                "children": [],
                /*"parent":kat,*/
                "color" : "red"
            };

            var tempArr = niz.filter(function(nesto) {
                //nazivi ove kategorije su mnogo dugacki, pa samo uporedjujem deo
                return nesto.postupak.toLowerCase().indexOf(to) != -1;
            })

            tempArr.map(function(te) {
            	var boja1 = "";
            	katego.forEach(function(la){
            		if(te.postupak.toLowerCase().indexOf(la)!=-1)
            		boja1 = la.replace(" ","_"); 
            	})
                

                te.name = te.firma ; /*+ " " +  te.cena_pdv + " din"*///te[param]/*.substr(0, 15)*/ ;
                
                te.color = boje[boja1];
                return te;
            })

            tempOb.children = tempArr;
            //uslovArra.concat(tempArr);

        	uslovArra.push(tempOb);    
        })


        return uslovArra;
    }