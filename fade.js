 $(document).ready(function() {

 	$("#fadeExp1 img").fadeTo(0,.1);
 	$("#fadeExp1 img").hover(function() {
 		$(this).fadeTo("slow", 1.0);	
 		},
 		function() {$(this).fadeTo("slow, 0.3"); 			
 		}
 	);
 });