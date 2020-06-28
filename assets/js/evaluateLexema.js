function evaluateLexema(){
    let arrayReserveds = [];
    let arrayVars = [];
    let errors = [];
    let stringInput = document.getElementById('lexemas').value;
    let arrayCadena = stringInput.split(" ");
    let arrayAuxLink = [];
    let expRegVar = /^[a-zA-z]+$/g;
    let expRegReser = /(^generate$|^-h$|^-v$|^about$|^browse$|^create-project$|^show$|^HTML$|^Node$|^Laravel$|^Angular$|^proyectHTML.git$|^proyectNode.git$|^proyectLaravel.git$|^proyectAngular.git$)/gm;
    for (let i=0; i<arrayCadena.length; i++) {
        if (arrayCadena[i] == "git") {
            arrayAuxLink.push(arrayCadena[i]);
            arrayAuxLink.push(arrayCadena[i+1]);
            arrayAuxLink.push(arrayCadena[i+2]);
            let arrayLink = arrayAuxLink.join(" ");
            let resultLink = arrayLink.match(expRegLink);
            if (resultLink) {
                arrayReserveds.push(resultLink);
                arrayCadena[i] = "*";
                arrayCadena[i+1] = "*";
                arrayCadena[i+2] = "*";
            } else {
                errors.push(resultLink);
                let i = 0;
                while (arrayAuxLink.length > 0) {
                    arrayAuxLink.pop();
                }
            }
        }
        let resultNormal = arrayCadena[i].match(expRegReser);
        let resultVar = arrayCadena[i].match(expRegVar);
        if (resultNormal) {
            arrayReserveds.push(resultNormal);
        } else if(resultVar && arrayCadena[i] != "git" && arrayCadena[i] != "clone" && arrayCadena[i] != "GIT" && arrayCadena[i] != "CLONE" && arrayCadena[i] != null) {
            arrayVars.push(resultVar);
        } else if(arrayCadena[i] != "*") {
            errors.push(arrayCadena[i]);
        }
    }

    var ulReserved = document.getElementById('listReserveds');
    for(let i=0; i<arrayReserveds.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(arrayReserveds[i][0]));
        ulReserved.appendChild(li);
    }

    var ulVars = document.getElementById('listVars');
    for(let i=0; i<arrayVars.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(arrayVars[i][0]));
        ulVars.appendChild(li);
    }

    var ulErrors = document.getElementById('listErrors');
    for(let i=0; i<errors.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(errors[i]));
        ulErrors.appendChild(li);
    }

    document.getElementById("countReserveds").innerHTML = arrayReserveds.length;
    document.getElementById("countVars").innerHTML = arrayVars.length;
    document.getElementById("countErrors").innerHTML = errors.length;
    document.getElementById("button_icon_show").className = "fas fa-eye";
    $('#ResultsTokens').css('display', 'block');
}