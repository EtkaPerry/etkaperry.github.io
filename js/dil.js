var LanguageList = {
    "TR": "Türkçe",
    "EN": "English",
};

//languages Objects
var WORDS_TR = {
    "merhaba": "Merhaba!",
    "ugras": "Şuan neler ile uğraşıyorum?",
    "tweet": "Bu websiteye bir bak!",
    "android": "Android Uygulama:"
};

var WORDS_EN = {
    "merhaba": "Hello!",
    "ugras": "What I am working on right now?",
    "android": "Chech this website!",
    "android": "Android Uygulama:"
};


window.onload = initialize;

function initialize() {

    var $dropdown = $("#ddList-dil_sec");
    $.each(LanguageList, function (key, value) {
        $dropdown.
        append($("<li/>").val(key).text(value));
    });

    loadsLanguage("TR");
}

function loadsLanguage(lang) {
    /* fills all the span tags with class=lang pattern */
    $('span[class^="lang"]').each(function () {
        var LangVar = (this.className).replace('lang-', '');
        var Text = window["WORDS_" + lang][LangVar];
        $(this).text(Text);
    });
}