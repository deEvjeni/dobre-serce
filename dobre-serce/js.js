var modalSearch = document.getElementById("searchModal");
var btnSearch = document.getElementById("searchButton");
var spanSearch = document.getElementById("closeSearch");
var inputSearch = document.getElementById("searchInput");
var modalFind = document.getElementById("contentFind");

btnSearch.onclick  = function() {
    modalSearch.style.display = "block";
}
spanSearch.onclick = function() {
    $("#searchInput").val('');
    modalSearch.style.display = "none";
    modalFind.style.display = "none";
}
inputSearch.onkeypress = function(event) {
    modalFind.style.display = "block";
    $("#searchModal").addClass("bluring");  
}


var modalKindofhelp = document.getElementById("kindofhelpModal");
var btnKindofhelp = document.getElementById("kindofhelpButton");
var spanKindofhelp = document.getElementById("closeKindofhelp");

btnKindofhelp.onclick = function() {
    modalKindofhelp.style.display = "block";
}
spanKindofhelp.onclick = function() {
    modalKindofhelp.style.display = "none";
}


var modalHelp = document.getElementById("helpModal");
var btnHelp = document.getElementById("helpButton");
var spanHelp = document.getElementById("closeHelp");

btnHelp.onclick = function() {
    modalHelp.style.display = "block";
}
spanHelp.onclick = function() {
    modalHelp.style.display = "none";
}


var btnYur = document.getElementById("yurosoba");
var btnPhiz = document.getElementById("phizosoba");
var form = document.getElementById("forms2");
var pointer1 = document.getElementById("pointer1");
var pointer2 = document.getElementById("pointer2");

btnYur.onclick = function() {
    pointer1.style.display = "none";
    pointer2.style.display = "block";
    form.style.display = "flex";
    $("#phizosoba").removeClass("activeTab");
    $("#yurosoba").addClass("activeTab");

}
btnPhiz.onclick = function() {
    pointer1.style.display = "block";
    pointer2.style.display = "none";
    form.style.display = "none";
    $("#yurosoba").removeClass("activeTab");
    $("#phizosoba").addClass("activeTab");
}


var btnMasterCard = document.getElementById("mastercard");
var btnPrivat24 = document.getElementById("privat");
var btnTerminal = document.getElementById("terminal");
var btnWebMoney = document.getElementById("webmoney");
var btnPayPal = document.getElementById("paypal");

btnMasterCard.onclick = function() {
    $("#mastercard").addClass("activePay");
    $("#privat").removeClass("activePay");
    $("#terminal").removeClass("activePay");
    $("#webmoney").removeClass("activePay");
    $("#paypal").removeClass("activePay");
}
btnPrivat24.onclick = function() {
    $("#mastercard").removeClass("activePay");
    $("#privat").addClass("activePay");
    $("#terminal").removeClass("activePay");
    $("#webmoney").removeClass("activePay");
    $("#paypal").removeClass("activePay");
}
btnTerminal.onclick = function() {
    $("#mastercard").removeClass("activePay");
    $("#privat").removeClass("activePay");
    $("#terminal").addClass("activePay");
    $("#webmoney").removeClass("activePay");
    $("#paypal").removeClass("activePay");
}
btnWebMoney.onclick = function() {
    $("#mastercard").removeClass("activePay");
    $("#privat").removeClass("activePay");
    $("#terminal").removeClass("activePay");
    $("#webmoney").addClass("activePay");
    $("#paypal").removeClass("activePay");
}
btnPayPal.onclick = function() {
    $("#mastercard").removeClass("activePay");
    $("#privat").removeClass("activePay");
    $("#terminal").removeClass("activePay");
    $("#webmoney").removeClass("activePay");
    $("#paypal").addClass("activePay");
}

var btnTabDo = document.getElementById("tabDo");
var btnTabFinanc = document.getElementById("tabFinanc");
var btnTabCloth = document.getElementById("tabCloth");
var btnTabDonation = document.getElementById("tabDonation");
var payBlock1 = document.getElementById("pay");
var payBlock2 = document.getElementById("creditCard");

btnTabDo.onclick = function() {
    $("#pointer1").css({"left":"154px"});
    $("#pointer2").css({"left":"154px"});
    payBlock1.style.display = "none";
    payBlock2.style.display = "none";
}
btnTabFinanc.onclick = function() {
    $("#pointer1").css({"left":"410px"});
    $("#pointer2").css({"left":"410px"});
    payBlock1.style.display = "block";
    payBlock2.style.display = "block";
}
btnTabCloth.onclick = function() {
    $("#pointer1").css({"left":"665px"});
    $("#pointer2").css({"left":"665px"});
    payBlock1.style.display = "none";
    payBlock2.style.display = "none";
}
btnTabDonation.onclick = function() {
    $("#pointer1").css({"left":"923px"});
    $("#pointer2").css({"left":"923px"});
    payBlock1.style.display = "none";
    payBlock2.style.display = "none";
}

var modalShare = document.getElementById("shareForm");
var btnShare = document.getElementById("buttonShare");
var spanShare = document.getElementById("closeShareForm");

btnShare.onclick = function() {
    $("#helpVolont").css("background", "rgba(0, 0, 0, 0.2)");
    $("#helpVolontSVG").css({
        "background": "rgba(157, 94, 154, 0.9)", 
        "box-shadow": "0 0 10px rgba(255, 255, 255, 0.7)", 
        "opacity": "1"
    });
    $("#contentShareForm").animate({
        height: "70%", 
        opacity: 1
    }, 400);
    $("#shareForm").animate({
        height: "show",
    }, 400);
}
spanShare.onclick = function() {
    $("#contentShareForm").animate({
        height: "0%", 
        opacity: 0.2
    }, 400);
    $("#shareForm").animate({
        height: "hide",
    }, 400);
}

var shareModal = document.getElementById("shareModal");
var btnShareModal = document.getElementById("buttonModalShare");
var spanShareModal = document.getElementById("closeShareModal");

btnShareModal.onclick = function() {
    $("#contentShareModal").animate({
        opacity: 1
    }, 400);
    $("#shareModal").animate({
        opacity: "show",
    }, 400);
}
spanShareModal.onclick = function() {
    $("#contentShareModal").animate({
        opacity: 0.2
    }, 400);
    $("#shareModal").animate({
        opacity: "hide",
    }, 400);
}

var btnHelpVolont = document.getElementById("helpVolont");
var btnHelpFinanc = document.getElementById("helpFinanc");
var btnHelpCloth = document.getElementById("helpCloth");

btnHelpVolont.onclick = function() {
    $("#volontBlock").css("display", "flex");
    $("#volontHeader").css("display" , "block");
    $("#helpVolont").css("background", "rgba(0, 0, 0, 0.2)");
    $("#helpVolontSVG").css({
        "background": "rgba(157, 94, 154, 0.9)", 
        "box-shadow": "0 0 10px rgba(255, 255, 255, 0.7)", 
        "opacity": "1"
    });
    $("#moneyHeader, #moneyBlock").css("display", "none");
    $("#clothHeader, #clothBlock").css("display", "none");
    $("#helpFinanc, #helpCloth").css("background", "transparent");
    $("#helpFinancSVG, #helpClothSVG").css({
        "background": "transparent", 
        "box-shadow": "none", 
        "opacity": "0.5"
    });
}
btnHelpFinanc.onclick = function() {
    $("#moneyBlock").css("display", "flex");
    $("#moneyHeader").css("display" , "block");
    $("#helpFinanc").css("background", "rgba(0, 0, 0, 0.2)");
    $("#helpFinancSVG").css({
        "background": "rgba(157, 94, 154, 0.9)", 
        "box-shadow": "0 0 10px rgba(255, 255, 255, 0.7)", 
        "opacity": "1"
    });
    $("#volontHeader, #volontBlock").css("display", "none");
    $("#clothHeader, #clothBlock").css("display", "none");
    $("#helpVolont, #helpCloth").css("background", "transparent");
    $("#helpVolontSVG, #helpClothSVG").css({
        "background": "transparent", 
        "box-shadow": "none", 
        "opacity": "0.5"
    });
}
btnHelpCloth.onclick = function() {
    $("#clothBlock").css("display", "flex");
    $("#clothHeader").css("display" , "block");
    $("#helpCloth").css("background", "rgba(0, 0, 0, 0.2)");
    $("#helpClothSVG").css({
        "background": "rgba(157, 94, 154, 0.9)", 
        "box-shadow": "0 0 10px rgba(255, 255, 255, 0.7)", 
        "opacity": "1"
    });
    $("#moneyHeader, #moneyBlock").css("display", "none");
    $("#volontHeader, #volontBlock").css("display", "none");
    $("#helpFinanc, #helpVolont").css("background", "transparent");
    $("#helpFinancSVG, #helpVolontSVG").css({
        "background": "transparent", 
        "box-shadow": "none", 
        "opacity": "0.5"
    });
}
