(function($) {
	$.fn.filterTable = function(filter, columnname) {
		var index = null;
		this.find("thead > tr:first > th").each(function(i) {
			if ($.trim($(this).text()) == columnname) {
				index = i;
				return false;
			}
		});
		if (index == null)
			{throw ("filter columnname: " + columnname + " not found");
			}
		this.find("tbody:first > tr").each(function() {
		    var row = $(this);
		    if (filter == "") {
		        row.show();
		    }
		    else {
		        var cellText = row.find("td:eq(" + index + ")").find('option:selected').text();
		        if (cellText == "") {
		            cellText = $(row.find(("td:eq(" + index + ")"))).text();
		        }
		        if (cellText.indexOf(filter) === -1) {
		            row.hide();
		        }
		        else {
		            row.show();
		        }
		    }
		});
		return this;
	};
})(jQuery);
function go(f, c){
	console.log(f);
	console.log(c);
	$("#table").filterTable(f,c);
}
function submitFilter(){
 // console.log("hi");
  var filt = document.getElementById('filt').value;
  //console.log(filt);
//   $(document).ready(function(){
//     $("select.column").change(function(){
//      var selectedCol = $(".column option:selected").val();
//      alert(selectedCol);
//      go(filt, selectedCol);

//     });
// });
   var e = document.getElementById("column");
   var selectedCol = e.options[e.selectedIndex].text;
   console.log(e);
    go(filt, selectedCol);

}
