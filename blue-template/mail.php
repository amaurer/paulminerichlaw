<?php

$to = 'chauhanjeet3@gmail.com'; // Put in your email address here
$subject  = "[Virtue Contact] "; // The default subject. Will appear by default in all messages. Change this if you want.

// User info (DO NOT EDIT!)
$name = stripslashes($_POST['first_name']); // sender's name
$email = stripslashes($_POST['email']); // sender's email
$contact = stripslashes($_POST['contact']);
$message = stripslashes($_POST['message']);

// The message you will receive in your mailbox
// Each parts are commented to help you understand what it does exaclty.
// YOU DON'T NEED TO EDIT IT BELOW BUT IF YOU DO, DO IT WITH CAUTION!
$msg .= "From: ".$name."\r\n";  // add sender's name to the message
$msg .= "E-mail: ".$email."\r\n";  // add sender's email to the message
$msg .= "Subject: ".$subject."\r\n\n"; // add subject to the message (optional! It will be displayed in the header anyway)
$msg .= "Contact us regarding: ".$contact."\r\n\n";
$msg .= "---Message--- \r\n";
$msg .= nl2br(stripslashes($message)); // the message itself
$msg .= "\r\n\n"; 

$mail = mail($to, $subject, $msg, "From:".$email);  // This command sends the e-mail to the e-mail address contained in the $to variable

if($mail) {
	header("Location:index.html"); //This is the message that will be shown when the message is successfully send
} else {
	echo 'Message could not be sent!';   //This is the message that will be shown when an error occured: the message was not send
}

?>