var init = function() {
  var box = document.querySelector('.container').children[0],
      showPanelButtons = document.querySelectorAll('#show-buttons button'),
      panelClassName = 'show-front',

      onButtonClick = function( event ){
		  console.log("panelClassName: " + panelClassName);
        box.removeClassName( panelClassName );
        panelClassName = event.target.className;
		console.log("JSON: " + JSON.stringify(event.target.className));
		console.log("panelClassName: " + panelClassName);
        box.addClassName( panelClassName );
      };

  for (var i=0, len = showPanelButtons.length; i < len; i++) {
    showPanelButtons[i].addEventListener( 'click', onButtonClick, false);
  }
  
  document.getElementById('toggle-backface-visibility').addEventListener( 'click', function(){
    box.toggleClassName('panels-backface-invisible');
  }, false);
  
};
  
window.addEventListener( 'DOMContentLoaded', init, false);