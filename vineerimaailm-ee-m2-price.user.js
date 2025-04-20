// ==UserScript==
// @name        Show m2 price - vineerimaailm.ee
// @namespace   Violentmonkey Scripts
// @match       https://www.vineerimaailm.ee/outlet
// @icon        https://www.vineerimaailm.ee/assets/images/favIcon/favicon-196x196.png
// @grant       none
// @version     1.2.3
// @author      Cougar
// @description 4/6/2024, 6:39:26 PM
// @require https://cdn.jsdelivr.net/npm/@violentmonkey/shortcut@1
// ==/UserScript==

window.updateTable = function() {
  if (document.getElementById("m2price")) {
    console.log("price already calculated");
    return;
  }
  var table = $("#resHTML").find("table");
  $('<col style="width: 160px;">').insertAfter($(table.find("colgroup > col:eq(7)")));
  $('<th id="m2price"><strong>HIND (EUR/m²)</strong></th>').insertAfter($(table.find("thead > tr > th:eq(7)")));
  $(table).find("tbody > tr").each(function(i) {
    var processElement = $(this);
    var t = $(this).find(".thick").html().replace(',', '.');
    var l = $(this).find(".length").html();
    var w = $(this).find(".width").html();
    var m2 = l * w / 1000000;
    var newp = $(this).find(".price").html().replace(/(\d+([\.,]\d+)?)/g, function(match) {
      var number = parseFloat(match.replace(',', '.'));
      var m2p = number / m2;
      var m2t = (m2p / t) * 6;
      return(m2p.toFixed(2).replace('.', ',') + '/' + m2t.toFixed(2).replace('.', ','));
    });
    $('<td class="price">' + newp + '</td>').insertAfter($(this).find(".price"));
  });
}

$(document).ready(function() {
  $('<h1><button type="button" class="btn" onclick="updateTable()">Näita m² hind</button></h1>').insertBefore("#resHTML");
  updateTable();
});

