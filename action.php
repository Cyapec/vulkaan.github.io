<?php 
if (isset($_COOKIE["NENADO"])) {
		header('Location: http://google.com/');
	return;
	}
if (isset($_SERVER['HTTP_CF_CONNECTING_IP'])) { $_SERVER['REMOTE_ADDR'] = $_SERVER['HTTP_CF_CONNECTING_IP']; }
$ip = $_SERVER['REMOTE_ADDR'];
$format = 'json';
$email = $_POST['email'];
$api_key = '6wecgofc3cttrbtqzipess6hb5fesrjdk7w6uthe';
$list_ids = '20613408';   // тут менять id листа 
$double_optin = '0';
$overwrite = '0';

$result=array(
	'format' => $format,
	'fields[email]' => $email,
	'api_key' => $api_key,
	'list_ids' => $list_ids,
	'double_optin' => $double_optin,
	'overwrite' => $overwrite,
);
$url = "https://api.unisender.com/en/api/subscribe";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
curl_setopt($ch, CURLOPT_REFERER, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $result);
$return = curl_exec($ch);
curl_close($ch);
setcookie("NENADO", "123");

date_default_timezone_set('Europe/Moscow');
$time = date('Y-m-d H:i:s');
$message = " $time;$ip;$email;$return\n";
file_put_contents('logs.txt', $message, FILE_APPEND | LOCK_EX); 

echo json_encode($result);
?>

