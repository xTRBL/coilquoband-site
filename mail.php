<?php $name = $_POST['contactName'];
$email = $_POST['contactEmail'];
$message = $_POST['contactComments'];
$website = $_POST['contactWebsite'];
$formcontent="From: $name \n Website: $website \nMessage: $message";
$recipient = "gil@crankshiftnyc.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='../index.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>