$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/bryonurbanec.json',
    dataType: 'jsonp',
    success: function(response) {
      for (var x = 0; x < response.courses.completed.length; x++) {
        var div = $("<div>").attr("class", "course");
        $(div).append($("<h3>").html(response.courses.completed[x].title));
        $(div).append($("<img>").attr("src", response.courses.completed[x].badge));
        $(div).append($("<a>").attr("href", response.courses.completed[x].url)
          .attr("target", "_blank")
          .addClass("btn btn-primary")
          .html("See Course")
        );
        $("#badges").append(div);
      }
    }
  });
});
