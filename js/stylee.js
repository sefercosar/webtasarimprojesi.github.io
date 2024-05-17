var hizmetler = [
    { baslik: "Özel Tatlar", aciklama: "Çikolata dünyamızda özel olarak hazırladığımız tatlarla sizi buluşturuyoruz. Denemek için sabırsızlanıyoruz!", resim: "images/hizmet1.jpg" },
];

$(document).ready(function(){
    var hizmetlerHTML = "";
    hizmetler.forEach(function(hizmet){
        hizmetlerHTML += '<div class="col-md-4">';
        hizmetlerHTML += '<div class="card">';
        hizmetlerHTML += '<img src="' + hizmet.resim + '" class="card-img-top" alt="' + hizmet.baslik + '">';
        hizmetlerHTML += '<div class="card-body">';
        hizmetlerHTML += '<h5 class="card-title hizmet-baslik">' + hizmet.baslik + '</h5>';
        hizmetlerHTML += '<p class="card-text hizmet-aciklama">' + hizmet.aciklama + '</p>';
        hizmetlerHTML += '</div></div></div>';
    });
    $("#hizmetlerListesi").html(hizmetlerHTML);
});

$(document).ready(function(){
    $(".navbar").css("background-color", "rgba(255, 0, 0, 0.5)");

    $(".card").hover(
        function() {
            $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
        }, 
        function() {
            $(this).removeClass('shadow-lg');
        }
    );

    $("#anaHeader .headerbaslik").css("color", "blue");

    $(".carousel-control-prev, .carousel-control-next").hide();

    $(".card-title").css("font-weight", "bold");

    $("a[href='contact.html']").on("contextmenu", function(e) {
        alert("İletişim Sayfası");
        e.preventDefault();
    });

    $("#carouselExampleCaptions").carousel('cycle');

    $("input[type='search']").focus();

    $("#ftr1").html("<strong>@Tüm Hakları Saklıdır.</strong>");

    $("#carouselExampleCaptions").carousel({
        interval: 2000 
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $(".navbar").addClass("fixed-top");
        } else {
            $(".navbar").removeClass("fixed-top");
        }
    });

    $(".btn").click(function() {
        window.location.href = "newpage.html";
    });

    $(".toggle-content").click(function() {
        $("#content").toggle();
    });

    $(window).on('load', function() {
        var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        console.log("Sayfa yükleme süresi: " + loadTime + " milisaniye");
    });
});
