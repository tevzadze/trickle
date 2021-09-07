<?php 
	if(isset($_POST['email'])){
		$to = "admin@trickle.cloud"; // this is your Email address
		$email = $_POST['email']; // this is input
		$subject = "Form submission";
		$message = "New subscribe:" . $email . "\n\n";
		$headers = "Trickle" . $email;
			mail($to,$subject,$message,$headers);
			// echo ($send_email) ? 'success' : 'error';
		}
?>