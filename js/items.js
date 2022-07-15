$(document).ready(function () {
    var url = "http://localhost:8081/findNft"
    $.ajax({
        type: "POST",
        url: url,
        dataType: "JSON",
        data: JSON.stringify({
            "nftId": 0,
        }),
        crossDomain: true,
        headers: {
            "content-type": "application/json;charset=UTF-8",
            "authorization": "Bearer " + window.localStorage.getItem("token"),
        },
        success: function (data) {
            console.log("ok");
            length = data.data.length;
            var html = "";
            for (var i = 0; i < length; i += 4) {
                html += "<div class='row''>";
                for (var j = 0; j < 4; j++) {
                    if (data.data[i + j] !== undefined) {
                        html += "<div class='col text-center'>";
                        html += "<div class='card shadow h-100 py-2'>";
                        html += "<img src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsrc.sotu114.com%2Fdata%2Fattachment%2Fforum%2F202006%2F09%2F192722c24vs5swau4wuadv.item.jpg-ture&refer=http%3A%2F%2Fsrc.sotu114.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660482786&t=396d6501d09db40603a77867014cb2a5' width='350px' height='350px'>";
                        html += "<span>" + data.data[i + j].name + "</span>";
                        html += "<span>$" + data.data[i + j].price + "</span>";
                        html += "</div>";
                        html += "</div>";
                    } else {
                        html += "<div class='col'>";
                        html += "</div>";
                    }
                }
                html += "</div>";
            }
            document.getElementById("items_body").innerHTML = html;
        },
    });
});