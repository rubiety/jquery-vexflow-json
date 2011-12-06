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
    if (!data) {
      throw "Must provide data to render a staff.";
      return false;
    }
  
    return this.each(function() {
      $.vexflow(this, data);
    });
  };
  
  $.vexflow = function(element, data) {
    if (!Vex.Flow.JSON) {
      throw "Must require vexflow-json before using this.";
      return false;
    }

    var canvas_element = $("<canvas width='#{this.canvas_width}' height='#{this.canvas_height}'></canvas>")
    canvas_element.appendTo(element)
    
    return (new Vex.Flow.JSON(data)).render(canvas_element[0]);
  };

})(jQuery);
