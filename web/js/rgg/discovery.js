
/**
 *  Realiza el discovery a la direccion especificada modifcando los elementos 
 *  asocados a la id del nodo.
 *  
 * @param {type} ip
 * @param {type} idNodo
 * @returns {undefined}
 */
function discovery(ip, idNodo) {

    var bar = "#bar_nodo_" + idNodo;
    var textBar = "#bar_text_nodo_" + idNodo;
    var status = "#status_nodo_" + idNodo;
    var btn = "#btn_nodo_" + idNodo;
    var inputHidden = "#modo_nodo_" + idNodo;

    $(document).on("ready", function () {
        $.get("Discovery", {ip_nodo: ip}, function (responseText) {
            $(bar).removeClass("active");
            $(bar).removeClass("progress-bar-striped");
            $(textBar).text("Completado");
            $(btn).removeAttr("disabled");

            if (responseText === "conectado") {
                $(bar).addClass("progress-bar-success");
                $(btn).text("Ver Detalles");
                $(btn).removeClass("btn-primary");
                $(btn).addClass("btn-success");
                $(status).text("Nodo en Línea");
                $(inputHidden).attr("value", "online");
            } else {
                $(bar).addClass("progress-bar-warning");
                $(btn).text("Ver Reportes Offline");
                $(btn).removeClass("btn-primary");
                $(btn).addClass("btn-warning");
                $(status).text("Nodo Desconectado");
                $(inputHidden).attr("value", "offline");

            }
        });
    });

}

function load_homea() {

    $("#myModal").modal({
        fadeDuration: 100
    });
    //alert("cargando home");
}

function test_js() {
    alert('hola soy el testing');
}

function test_jquery() {
    $(document).on("ready", function () {
        $("#myModal").modal({
            fadeDuration: 100
        });
    });

}