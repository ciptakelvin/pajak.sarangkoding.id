sidelink=[
    {
        "id":"kup-definisi",
        "category":"Ketentuan Umum Perpajakan",
        "title":"Definisi",
    },
    {
        "id":"timeline",
        "category":"Ketentuan Umum Perpajakan",
        "title":"Batas Waktu/Timeline",
    },
    {
        "id":"sanksi",
        "category":"Ketentuan Umum Perpajakan",
        "title":"Sanksi/Denda",
    },
    {
        "id":"penagihan",
        "category":"Ketentuan Umum Perpajakan",
        "title":"Penagihan Pajak",
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
}

start();