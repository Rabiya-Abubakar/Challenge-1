SPEED DETECTOR GENERATOR

DESCRIPTION
This program takes the speed of a car as input and determines the driver's demerit points based on the speed limit.

If the speed is less than 70 km/h, it prints "Ok".
For every 5 km/h above the speed limit (70 km/h), the driver receives one demerit point.
If the driver accumulates more than 12 demerit points, the program prints "License suspended".
Example
Input: Speed = 80 km/h
Output: "Points: 2"
Explanation:

The speed limit is 70 km/h.
The driver's speed is 80 km/h, which is 10 km/h above the limit.
Since 10 km/h above the limit corresponds to 2 demerit points, the program outputs "Points: 2".
Usage
To use this program:

Input the speed of the car when prompted.
The program will calculate and display the appropriate message based on the input speed.
Implementation Details
The program logic is implemented as follows:

It uses conditional statements to check the speed input.
It calculates demerit points based on how much the speed exceeds the limit.
It checks if the demerit points exceed the threshold for license suspension.
javascript

Speed	Demerit Point
75	  1
85	  3
95  	5
105	  7
110	  8
115	  9
125	  11
135	  12

