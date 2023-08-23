sidelink=[
    {
        "id":"kup-definisi",
        "category":"Ketentuan Umum Perpajakan",
        "title":"Definisi",
    },
    {
        "id":"kode-formulir",
        "category":"Ketentuan Umum Perpajakan",
        "title":"Kode Formulir",
    },
    {
        "id":"soal-kup-1",
        "category":"Soal Ketentuan Umum Perpajakan",
        "title":"Soal KUP 1",
    },
];

content={
    "kup-definisi":{
        "title":"Definisi",
        "html":"<b>Pajak</b><p></p>"
    },
    "timeline":{
        "title":"Batas Waktu",
        "html":"<p>Ehe</p>"
    },
    "sanksi":{
        "title":"Sanksi",
        "html":"<p>Ehe</p>"
    },
    "penagihan":{
        "title":"Penagihan",
        "html":"<p>Ehe</p>"
    }
}

function start(){
    
    setSidebar();
    setActive();
    setLogo();
    setHamburger();
}
function setHamburger(){
    $("body").prepend('<i class="hamburger fa-solid fa-bars"></i>');
    $(".hamburger").click(function(e){
        $(".sidebar").fadeToggle("1000");
    });
}
function setLogo(){
    $(".sidebar").prepend("<p class='sideCategory'>Sarang Koding</p>");
}
function setActive(){
    var path=$(location).attr('href');
    var token=path.split("/");
    var link=token[token.length-1];
    $(".sideButton[href='"+link+"']").addClass("sideButtonActive");
}
function setSidebar(){
    var out="";
    var currentCategory="";
    out+="<a href='index.html' class='sideButton'>Home</a>"
    sidelink.forEach(function(e){
        if(e["category"]!=currentCategory){
            currentCategory=e["category"];
            out+="<p class='sideCategory'>"+e["category"]+"</p>";
        }
        out+="<a href='"+e["id"].toLowerCase()+".html' class='sideButton'>"+e["title"]+"</a>";
    });
    $(".sidebar").html(out);
    if($(window).width()<600){
        $(".sidebar").hide();
    }
}

start();