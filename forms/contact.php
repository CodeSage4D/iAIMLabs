<?php
// Email addresses for receiving messages
$primary_email = 'info.iaimlabs@gmail.com';
$alternative_email = 'iaimlabs@zohomail.in';

// Path to the PHP Email Form library
$php_email_form_path = '../assets/vendor/php-email-form/php-email-form.php';

if (file_exists($php_email_form_path)) {
    include($php_email_form_path);
} else {
    die('Unable to load the "PHP Email Form" Library!');
}

$contact = new PHP_Email_Form;
$contact->ajax = true;

// Set the recipient email address
$contact->to = $primary_email;

// Optionally, set the CC recipient email address (uncomment if needed)
// $contact->cc = $alternative_email;

$contact->from_name = $_POST['name'];
$contact->from_email = $_POST['email'];
$contact->subject = $_POST['subject'];

// Uncomment and configure the following lines to use SMTP
/*
$contact->smtp = array(
    'host' => 'smtp.yourdomain.com', // Replace with your SMTP server
    'username' => 'yourusername',     // Replace with your SMTP username
    'password' => 'yourpassword',     // Replace with your SMTP password
    'port' => '587'                   // Replace with your SMTP port
);
*/

// Add messages to the email
$contact->add_message($_POST['name'], 'Name');
$contact->add_message($_POST['email'], 'Email');
$contact->add_message($_POST['message'], 'Message', 10);

// Send the email and output the result
echo $contact->send();
?>
