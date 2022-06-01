$(document).ready(function(){
 // sending a connect request to the server.
 var socket = io.connect('https://flasktest.matiasendres.repl.co:5000');
});


// An event handler for a change of value 
$('input.sync').on('input', function(e) {
    socket.emit('message', {
        who:$(this).attr('id'),  
        data: $(this).val()
     });
     return false;
 });