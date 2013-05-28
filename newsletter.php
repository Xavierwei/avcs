<?php
$email = "test@test.com";
$data = 'source='.urlencode("Avene CS").'&key='.urlencode('DSiTDSiTEADSiTEST').'&email='.urlencode($email);
echo $data;
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://avenetst.abc-myclub.com/Subscribe.ashx');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true) ;
curl_setopt($ch, CURLOPT_BINARYTRANSFER, true) ;
echo $output = curl_exec($ch) ;