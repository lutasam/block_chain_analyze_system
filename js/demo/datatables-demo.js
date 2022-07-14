// Call the dataTables jQuery plugin

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
      "content-type": "application/json;charset=UTF-8"
    },
    success: function (data) {
      console.log("ok");
      console.log(data.data)
      $('#dataTable').DataTable({
        data: data.data,
        columns: [{
            data: 'id'
          },
          {
            data: 'name'
          },
          {
            data: 'create_time'
          },
          {
            data: 'author_id'
          },
          {
            data: 'author'
          },
          {
            data: 'mark'
          },
          {
            data: 'address'
          },
          {
            data: 'price'
          },
          {
            data: 'total_number'
          },
          {
            data: null,
            "render": function (data, type, full, meta) {
              var html = "<input type='text' class='risk_level_input' id='risk_input' placeholder='请输入风险等级'>" +
                "<button type='button' class='btn btn-success btn-circle' onclick='addRiskLevel(this)'><i class='fas fa-check'></i></button>";
              return html;
            }
          }
        ]
      });
    },
  });
});

function addRiskLevel(e) {
  var id = e.parentNode.parentNode.children[0].innerHTML;
  var riskLevel = e.parentNode.parentNode.children[8].children[0].value;
  console.log(id);
  console.log(riskLevel);

  var url = "http://localhost:8081/set_risk_level"
  console.log(url);
  $.ajax({
    type: "POST",
    url: url,
    dataType: "JSON",
    data: JSON.stringify({
      "id": id,
      "plaId": 1,
      "risk_level": riskLevel,
    }),
    crossDomain: true,
    headers: {
      "content-type": "application/json;charset=UTF-8"
    },
    success: function (data) {
      console.log("ok");
      console.log(data.data)
    },
  });
}