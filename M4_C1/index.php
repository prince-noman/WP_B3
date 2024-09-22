<?php

// echo "Hello World!" . "\n";
// echo "Hello World!" . PHP_EOL;
// Printing
// echo "<h1>Hello World!</h1> <br>";
// print("Hello World!!!!");

// Variable

 //Conventions
// Rules for PHP variables:
//     A variable starts with the $ sign, followed by the name of the variable
//     A variable name must start with a letter or the underscore character
//     A variable name cannot start with a number
//     A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
//     Variable names are case-sensitive ($age and $AGE are two different variables)

// $name = "prince";
// $full_name = "prince noman";
// echo $full_name;


// Comments

// Single Line Comment
// This is a single line comment.
# This is a single line comment.

// Multiline Comment

/*
this is
Multiline 
comment
*/

// Datatypes (int, string, boolean, array, object, null)

// $number = 1; // Integer
// $float = 1.1; // Float
// $string = "Hello"; // String
// $boolean = true; // Boolean true/false
// $array = [1, 2, 3]; // Array
// $array2 = array(1,2,4); // Array
// // print_r($array2);
// $object = new stdClass(); // Object
// $null = null; // Null

// Getting varible type
// echo gettype($number);

// Printing array
// print_r($array);
// var_dump($array);


//  String Concatenation
// $name = "Prince";
// $age = 28;

// echo "My name is " . $name ." and my age is ". $age . "<br>";
// echo "My name is $name and my age is  $age" . "<br>";
// echo 'My name is $name and my age is  $age' . "<br>";
// echo "My name is {$name} and my age is  {$age}";

// Loops (for, while, do while, foreach)
// For loop
// for($i = 1; $i <= 10; $i++){
//     echo $i . "\n";
// }

// While loop
// $i=1;
// while($i<=5){
//     echo $i . "\n";
//     $i++;
// }

//do while loop
// $i = 1;
// do{
//     echo $i . PHP_EOL;
//     $i++;
// }while($i<=3);

// foreach loop
$fruits = ["apple", "banana", "orange"];
// echo $fruits[0] . "\n";
// echo $fruits[1] . "\n";

// foreach($fruits as $item){
//     echo $item . "\n";
// }
// $fruits_count = count($fruits);
// echo $fruits_count;
// for($i=0; $i < $fruits_count; $i++){
// echo $i . "\n";
//     echo $fruits[$i] . "\n";
// }

// Conditionals
$age = 16;

// if ($age >= 18) echo "You can vote" . PHP_EOL;
// else echo "You can not vote" . PHP_EOL;
// if($age >= 18){
//     echo "You can vote" . PHP_EOL;
//     if(false){
//         echo "true" . PHP_EOL;
//     }else{
//         echo "false" . PHP_EOL;
//     }
// }else{
//     echo "You can not vote" . PHP_EOL;
// }

// $marks = 55;

// if($marks >= 80){
//     echo "A+";
// }else if($marks >= 70 && $marks < 80){
//     echo "A";
// }else{
//     echo "fail";
// }

// Switch

// $day = "Tuesday";

// switch($day){
//     case "Sunday":
//         echo "Sunday";
//         break;
//     case "Monday":
//         echo "Monday";
//         break;
//     case "Tuesday":
//         echo "Tuesday";
//         break;
//     case "Wednesday":
//         echo "Wednesday";
//         break;
//     default:
//         echo "No such day";
// }

// Break & Continue
// for ($i = 1; $i <= 10; $i++){ // 1, 2, 3, 4, 5
    
//     // if($i===5){ // 1, 2, 3, 4, 5
//     //     break;
//     // }
//     echo $i . PHP_EOL;
// }

// for ($i = 1; $i <= 10; $i++){ // 1, 2, 3, 4, 5
    
//     if($i%2===0){ // 1, 2, 3
//         continue;
//     }
//     echo $i . PHP_EOL;
// }

//Match 

// $sub = 'CSS'; 
  
//   $val = match ($sub) { 
//       'CSS' => 'CSS Course', 
//       'PHP' => 'PHP Course', 
//   }; 
  
//  echo $val;

// Strings
// count string
// $name = "prince";
// $string_count = strlen($name);
// echo "this string contains ". strlen($name) . " characters";
// echo "this string contains {$string_count} characters";

// String Slicing
// $str = "Hello";
// echo substr($str, 3, 2) . PHP_EOL;
// echo substr($str, -2, 2);

// String Replace
// $str = "Hello John";
// echo str_replace("Hello", "Hi", $str);

// Lowecase
// $str = "hElLO woRlD";
// echo strtolower($str). PHP_EOL;
// echo strtoupper($str). PHP_EOL;
// echo ucfirst($str). PHP_EOL;
// echo ucwords($str). PHP_EOL;
// echo ucwords(strtolower($str)). PHP_EOL;

// Triming
// $name = "    prince       ";
// echo ltrim($name) . PHP_EOL;
// echo rtrim($name) . PHP_EOL;
// echo trim($name) . PHP_EOL;

// $str = "<script>alert('hello world');</script>";
// $plain_string =  htmlspecialchars($str);
// echo $plain_string;

// $str = "Hello World";
// $names_array = explode(" ", $str);
// print_r($names_array) . PHP_EOL;
// echo $names_array[0]. PHP_EOL;

// $names = ["John", "Peter", "Mary"];
// $names_string = implode(", ", $names);
// echo $names_string . PHP_EOL;








?>
