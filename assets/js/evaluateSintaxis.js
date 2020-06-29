function evaluateSintaxis() {
    let index = 0;
    let error_description;
    let aux_array = [];
    let input_string = $('#sintaxis').val();
    let input_array = input_string.split(" ");
    console.log("length : " + input_array.length);
    console.log("length : " + input_array[1]);
    try {
        if (input_array[index] === "generate") {
            console.log("completo generate");
            index++;
            let expRegOptions = /(^-h$|^-v$|^about$|^browse$)/gm;
            let result = input_array[index].match(expRegOptions);
            if (result) {
                console.log("completo primer evaluación: " + result);
                if (input_array.length - 1 > index) {
                    console.log("Error, ya no se esperaban más argumentos");
                    error_description = "Error, ya no se esperaban más argumentos";
                }
            } else {
                if (input_array[index] === "create-project") {
                    index++;
                    let expRegArguments = /(^HTML$|^Node$|^Laravel$|^Angular$)/gm;
                    let result = input_array[index].match(expRegArguments);
                    if (result) {
                        index++;
                        let expRegNombre = /^[a-zA-Z]+$/g;
                        let result = input_array[index].match(expRegNombre);
                        if (result) {
                            index++;
                            aux_array.push(input_array[index]);
                            aux_array.push(input_array[index+1]);
                            aux_array.push(input_array[index+2]);
                            let array_git = aux_array.join(" ");
                            let expRegClone = /^git clone https\:\/\/github.com\/SalimVazquez\/$/gm;
                            let result = array_git.match(expRegClone);
                            if (result) {
                                index = index + 3;
                                let expRegIdRepo = /(^proyectHTML.git$|^proyectNODE.git$|^proyectLaravel.git$|^proyectAngular.git$)/gm;
                                let result = input_array[index].match(expRegIdRepo);
                                if (result) {
                                    if (input_array.length - 1 > index) {
                                        console.log("Error, ya no se esperaban más argumentos");
                                        error_description = "Error, ya no se esperaban más argumentos";
                                    } else {
                                        console.log("Exito!");
                                    }
                                } else {
                                    console.log("Error, se recibio: " + input_array[index] + " cuando se esperaba: idRepo");
                                    error_description = "Error, se recibio: " + input_array[index] + ", cuando se esperaba: idRepo";
                                }
                            } else {
                                console.log("Error, se recibio: " + input_array[index] + " cuando se esperaba: cloneProject");
                                error_description = "Error, se recibio: " + input_array[index] + " cuando se esperaba: cloneProject";
                            }
                        } else {
                            console.log("Error, se recibio: " + input_array[index] + " cuando se esperaba: name");
                            error_description = "Error, se recibio: " + input_array[index] + " cuando se esperaba: name";
                        }
                    } else {
                        console.log("Error, se recibio: " + input_array[index] + " cuando se esperaba: argumentos");
                        error_description = "Error, se recibio: " + input_array[index] + " cuando se esperaba: argumentos";
                    }
                } else if (input_array[index] === "show") {
                    index++;
                    let expRegTipo = /(^HTML$|^Node$|^Laravel$|^Angular$)/gm;
                    let result = input_array[index].match(expRegTipo);
                    if (result) {
                        if (input_array.length - 1 > index) {
                            console.log("Error, ya no se esperaban más argumentos");
                            error_description = "Error, ya no se esperaban más argumentos";
                        } else {
                            console.log("Exito!");
                        }
                    } else {
                        console.log("Error, se recibio: " + input_array[index] + " cuando se esperaba: tipo");
                        error_description = "Error, se recibio: " + input_array[index] + " cuando se esperaba: tipo";
                    }
                } else {
                    console.log("Error, se recibio: " + input_array[index] + " cuando se esperaba: options");
                    error_description = "Error, se recibio: " + input_array[index] + " cuando se esperaba: options";
                }
            }
        } else {
            console.log("Error, se recibio: " + input_array[index] + " cuando se esperaba: generate");
            error_description = "Error, se recibio: " + input_array[index] + " cuando se esperaba: generate";
        }
    } catch (error) {
        console.log("Error en: " + error);
        error_description = "Error, se esperaban más datos";
    }

    $('#ResultsSintaxis').css('display', 'block');
    document.getElementById('button_icon_show_sintaxis').className = "fas fa-eye";
    if (error_description == null) {
        document.getElementById('status_sintaxis').className = "style2";
        document.getElementById('icon_sintaxis').className = "fas fa-spell-check";
        document.getElementById('message_sintaxis').innerHTML = "Entrada correcta";
    } else {
        document.getElementById('status_sintaxis').className = "style3";
        document.getElementById('icon_sintaxis').className = "fas fa-ban";
        document.getElementById('message_sintaxis').innerHTML = error_description;
    }
}