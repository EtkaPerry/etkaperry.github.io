var LanguageList = {
    "TR": "Türkçe",
    "EN": "English",
};

//languages Objects
var WORDS_TR = {
    "merhaba": "Merhaba!",
    "text2": "text Two"
};

var WORDS_EN = {
    "merhaba": "Hello!",
    "text2": "texto Dos"
};


window.onload = initialize;

function initialize() {

    var $dropdown = $("#country_select");
    $.each(LanguageList, function (key, value) {
        $dropdown.
        append($("<option/>").val(key).text(value));
    });

    loadsLanguage("TR");
}

function loadsLanguage(lang) {
    /*fills all the span tags with class=lang pattern*/
    $('span[class^="lang"]').each(function () {
        var LangVar = (this.className).replace('lang-', '');
        var Text = window["WORDS_" + lang][LangVar];
        $(this).text(Text);
    });
}
