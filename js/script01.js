let btnSearch = document.getElementById("btn-search");
let selcProvince = document.getElementById("selc-province");

let province = selcProvince.value
btnSearch.addEventListener("click", function () {
    switch(province){
        case "cri":
            const GOURL = "/chiang_rai.html"
            window.location.href = GOURL;
        break;
    }
  });