<?php

$to = 'chauhanjeet3@gmail.com'; // Put in your email address here
$subject  = "[volunteer Form] "; // The default subject. Will appear by default in all messages. Change this if you want.

// User info (DO NOT EDIT!)
$fname = stripslashes($_POST['fname']); // sender's name
$lname = stripslashes($_POST['lname']); // sender's email
$email = stripslashes($_POST['email']);
$zip = stripslashes($_POST['zip']);
$phone = stripslashes($_POST['phone']);
$message = stripslashes($_POST['message']);



// The message you will receive in your mailbox
// Each parts are commented to help you understand what it does exaclty.
// YOU DON'T NEED TO EDIT IT BELOW BUT IF YOU DO, DO IT WITH CAUTION!
$msg .= " Volunteer From: \r\n\n";  // add sender's name to the message
$msg .= "FirstName :".$fname."\r\n\n";  // add sender's email to the message
$msg .= "LastName  :".$lname."\r\n\n"; // add subject to the message (optional! It will be displayed in the header anyway)
$msg .= "Email     : ".$email."\r\n\n";
$msg .= "Zip       : ".$zip."\r\n\n";
$msg .= "Phone no  : ".$phone."\r\n\n";
$msg .= "Message   : ".$message."\r\n\n";
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