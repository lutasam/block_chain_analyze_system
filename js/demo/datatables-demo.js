// Call the dataTables jQuery plugin

var data = {
  "total": 2,
  "data": [{
      "id": 1,
      "media": "<img src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202102%2F05%2F20210205215936_c7b07.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660227169&t=0db74a71f1a5cc19b8ae6026f25b56eb' width='50px' height:='50px'>",
      "name": "111",
      "author": "nihao",
      "price": 1.23,
      "supply": 5,
      "description": "test test test",
      "address": "0x12345",
    },
    {
      "id": 2,
      "media": "<img src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202102%2F05%2F20210205215936_c7b07.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660227169&t=0db74a71f1a5cc19b8ae6026f25b56eb' width='50px' height:='50px'>",
      "name": "222",
      "author": "nihao22",
      "price": 2.232,
      "supply": 7,
      "description": "ssf test test test",
      "address": "0x123451231",
    }
  ],
};

$(document).ready(function () {
  var url = "http://localhost:9000/get_all_assets"
  $.get(url, function (data) {
    console.log("ok");
  });
  $('#dataTable').DataTable({
    data: data.data,
    columns: [{
        data: 'id'
      },
      {
        data: 'media'
      },
      {
        data: 'name'
      },
      {
        data: 'author'
      },
      {
        data: 'price'
      },
      {
        data: 'supply'
      },
      {
        data: 'description'
      },
      {
        data: 'address'
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
});

function addRiskLevel(e) {
  var id = e.parentNode.parentNode.children[0].innerHTML;
  var riskLevel = e.parentNode.parentNode.children[8].children[0].value;
  console.log(id);
  console.log(riskLevel);

  var url = "http://localhost:9000/set_risk_level?" +
    "id=" + id + "&" +
    "risk_level=" + riskLevel;
  console.log(url);
  $.get(url, function () {
    console.log("ok");
    // 设置成功
  })
}