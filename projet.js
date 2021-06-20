
// Requete GET pour faire appel au fichier xml
var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		result(this);
		}
	};
	xhttp.open("GET", "prj_caspar_LenaTV.xml", true);
	xhttp.send();

// fonction result => complète le tableau (id=main) avec éléments emanant du xml
    function result(xml) {
        var xmlDoc = xml.responseXML;

// fonction lenth, trouver nombre de balise dans fichier xml
// nodelist_type => combien de balise <type> dans le xml
        var nodelist_type = xmlDoc.getElementsByTagName("type").length;
        var nodelist_label = xmlDoc.getElementsByTagName("label").length;
        var nodelist_timecode = xmlDoc.getElementsByTagName("timecode").length;

//boucle for => complète tableau (id=main) en fonction du nombre de balise contenu dans le xml
        var i;
		var j=0;
		var seconds = 0.0;
		var horaire = 52200.0; //14h30 en seconde

        for (i = 0; i < nodelist_type; i++) {
                var table = document.getElementById("main");


                if (xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue == "GROUP" || 
		    xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue == "STILL") {
					; // Si dans le fichier XML il trouve les balise <type> contenant 
					  //les valeurs "GROUP" et "STILL" -> ne pas completer le tableau
				} else {
                        var row = table.insertRow(-1); //inserer colonne sous le tableau "main"
                        var cell0 = row.insertCell(0); //cell0 implémente la 1er colonne
                        var cell1 = row.insertCell(1); //cell1 implémente la 2eme colonne
                        var cell2 = row.insertCell(2); //cell2 implémente la 3eme colonne
						var cell3 = row.insertCell(3); //cell2 implémente la 4eme colonne

                        cell0.innerHTML = xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue; 
					// va chercher la valeur de la ième balise <type>
                        cell1.innerHTML = xmlDoc.getElementsByTagName("label")[i].childNodes[0].nodeValue;
                        cell2.innerHTML = xmlDoc.getElementsByTagName("timecode")[j].childNodes[0].nodeValue;

			horaire = horaire + seconds;
			var toto = new Date(horaire * 1000).toISOString().substr(11, 8); // conversion format HH:MM:SS
			cell3.innerHTML = toto;
			var hms = xmlDoc.getElementsByTagName("timecode")[j].childNodes[0].nodeValue;
			var a = hms.split(':'); // separe en format list
			seconds = ( ((+a[0]) * 60 * 60 ) + ((+a[1]) * 60 ) + (+a[2])); // conversion en seconde
			j=j+1;
                }
        }
}
