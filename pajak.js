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
    {
        "id":"soal-php-1",
        "category":"Soal Pengantar Hukum Pajak",
        "title":"Soal PHP 1",
    },
    {
        "id":"soal-akuntansi-1",
        "category":"Soal Akuntansi Dasar",
        "title":"Soal Akuntansi Dasar 1",
    },
    {
        "id":"soal-pphop-1",
        "category":"Soal Pajak Penghasilan Orang Pribadi",
        "title":"Soal PPh OP 1",
    },
    {
        "id":"soal-pphpotput-1",
        "category":"Soal Pajak Penghasilan Pemotongan dan Pemungutan",
        "title":"Soal PPh Potput 1",
    },
    {
        "id":"soal-pphbadan-1",
        "category":"Soal Pajak Penghasilan Badan",
        "title":"Soal PPh Badan 1",
    },
    {
        "id":"soal-ppnppnbm-1",
        "category":"Soal PPN dan PPnBM",
        "title":"Soal PPN dan PPnBM 1",
    },
    {
        "id":"soal-pbbdanbm-1",
        "category":"Soal PBB, BPHTB, dan Bea Materai",
        "title":"Soal 1",
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