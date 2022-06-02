
$(document).ready(function() {
         
   // sending a connect request to the server.
   var socket = io.connect('https://flasktest.matiasendres.repl.co:5000');
 
   // An event handler for a change of value 
   $('input.sync').on('input', function(event) {
       console.log("input changed")
       socket.emit('Slider value changed', {
           who: $(this).attr('id'),
           data: $(this).val()
       });
       return false;
   });
 
   socket.on('after connect', function(msg) {
       console.log('After connect', msg);
   });
 
   socket.on('update value', function(msg) {
       console.log('Slider value updated');
       $('#' + msg.who).val(msg.data);
   });
});