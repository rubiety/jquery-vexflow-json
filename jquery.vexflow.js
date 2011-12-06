// jquery.vexflow.js
// Copyright Ben Hughes
// https://github.com/rubiety/jquery-vexflow

(function($) {

  // When called on an element, will replace the contents of that element with 
  // a rendered-out staff using VexFlow and vexflow-json.
  // 
  // Accepts a vexflow-json data object.
  //
  // data - An object of vexflow-json data.
  //
  // Returns the jQuery object
  $.fn.vexflow = function(data) {
    return this.each(function() {
      $.vexflow(this, data);
    });
  };
  
  $.vexflow = function(element, data) {
    if (!Vex.Flow.JSON) {
      throw "Must require vexflow-json before using this.";
      return false;
    }

    // If we have a data-staff attribute and passed data is undefined, use it!
    if (!data && $(element).attr("data-staff")) { data = JSON.parse($(element).attr("data-staff")); }

    // If we don't have a width/height any other way, set some defaults:
    var width = $(element).attr("data-width");
    var height = $(element).attr("data-height");

    if (!width) { width = 600; }
    if (!height) { height = 110; }

    var canvas_element = $("<canvas width='" + width + "' height='" + height + "'></canvas>");
    canvas_element.appendTo(element)
    
    return (new Vex.Flow.JSON(data)).render(canvas_element[0]);
  };

})(jQuery);
