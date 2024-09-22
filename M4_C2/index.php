<?php
declare(strict_types=1);

// Array (indexed array, associative array, multi-dimensional array)

//Indexed Array

// $numbers = [1, 2, 3, 4, 5];
// echo $numbers[2] . "<br>";
// $numbers[2] = 50;

// echo $numbers[2];
// print_r($numbers);
// $person = ["John", 30, "Michael"];
// $person = [
//     "name" => "John",
//     "age" => 30,
//     "best_ friend" => "Michael"
// ];

// echo $person["name"] . "<br>";
// echo $person["best_ friend"];

// foreach ($person as  $key => $value) {
//     echo $key . " : " . $value . "<br>";
// }

// foreach ($person as  $value) {
//     echo $value . "<br>";
// }

// Multidimentional array

// $marks = [
//     [30,70,90], // 0
//     [50,90,100], // 1
//     [80,40,88] // 2
// ];
// print_r($marks[1][2]);
// $middle_array = $marks[1];
// print_r($middle_array);
// echo $middle_array[2];

// $marks = [
//    "bangla" => [30,70,90], 
//    "english" => [50,90,99], 
//     "math" => [80,40,88] 
// ];

// echo $marks["english"][2];

// foreach($marks as $key => $value){
//     echo $key . " : " ;
//     // var_dump($value);
//     foreach($value as $mark){
//         echo $mark . ", ";
//     }
//     echo "<br>";
// }

// Remove element from last

// $numbers = [1, 2, 3, 4, 5];

// array_pop($numbers);
// print_r($numbers);

// add element from last
// array_push($numbers, 6);
// print_r($numbers);

// Remove Element from first
// array_shift($numbers);
// print_r($numbers);

// add Element from first
// array_unshift($numbers, 100); 
// print_r($numbers);

// Adding element in any position
// $fruits = ["apple", "banana", "orange"];
// array_splice($fruits, 1, 0, "mango");
// print_r($fruits);

// Deleting element in any position
// array_splice($fruits, 1, 1);
// print_r($fruits);

// array_slice(array $input, int $offset, int $length = null, bool $preserve_keys = false);

// $fruits = ["apple", "banana", "orange"];
// array_push($fruits, "mango");
// $new_fruits = array_slice($fruits, 1, 2);
// print_r($new_fruits);

// $reverse_fruits = array_reverse($fruits);

// print_r($reverse_fruits);
// if(in_array("mango", $fruits)){
//     echo "It's there";
// }else{
//     echo "It's not there";
// }

// Function

// Declaration/Definition
// function add($num1, $num2){ // parameters
//     return $num1 + $num2;
// }

//Function Call
// echo add(5,6); // arguments

// function add($num1, $num2 = 0){ // default parameters
//     return $num1 + $num2;
// }

// echo add(5);

// variadic Function

// function sum(...$numbers){
//     // var_dump($numbers);
//     $result = 0;
//     foreach($numbers as $number){
//         $result = $result + $number;
//     }
//     return $result;
// }
// echo sum(1,2,3);

// Arrow Function
// $add = fn($num1, $num2) => $num1 + $num2;
// echo $add(50,60);

// Named Argument

// function greet($name = "Guest", $msg = "Hello"){
//     return $msg . " " . $name;
// }
// echo greet( "Good Morning", "Prince");

// function introduction($name ="Guest", $age = 0){
//     return "My name is " . $name . " and my age is " . $age;
// }
// echo introduction();
// echo introduction(age: 40, name: "Prince");

// Type Hinting
// function add(int $num1, int | string  $num2) : int{
//     return $num1 + $num2;
// }

// echo add(1, 8);

// Object Oriented Programming


// class Person{
//     //Properties
//     public $name = "John";
//     public $age = 20;
//     public $weight = 40;

//     // Method
//     public function sayName (){
//         return "Hello, my name is " . $this->name;
//     }
// }

class Person{
    //Properties
    public $name;
    public $age;
    public $weight;

    // Access Modifier
    // protected $name;
    // private $name;

    public function __construct($name, $age, $weight)
    {
        $this->name = $name;
        $this->age = $age;
        $this->weight = $weight;
    }

    // Method
    public function sayName (){
        return "Hello, my name is " . $this->name;
    }
}

// Instance/Object , Initialization
$p1 = new Person("Prince", 30, 40);
// $p1->name = "X";
// echo $p1 -> name;
// echo $p1 -> sayName() . "<br>";

$p2 = new Person("John", 60, 90);
// echo $p2 -> name;
// echo $p2 -> sayName() . "<br>";


class Student extends Person{
       //Properties
        public $stu_id;

    public function __construct($name, $age, $weight, $stu_id)
    {
        parent::__construct($name, $age, $weight);
        $this->stu_id = $stu_id;
    }

    public function sayName (){
        return "Student: Hello, my name is " . $this->name;
    }
    // Method
    public function studentInfo (){
        return "Hello, my name is " . $this->name . " and my id is " . $this->stu_id;
    }
}

$s1 = new Student("Michle", 20, 50, 122912912);
echo $s1 -> sayName() . "<br>";
echo $s1 -> studentInfo() . "<br>";