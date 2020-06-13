# Angular Pipes

Pipes allow us to visually transform our data without changing its real value, in this way we can show data with a better user experience, below are the most used examples:

# Variable:                             Pipe ( | )                             Output

Captain America                         uppercase                           CAPTAIN AMERICA
Captain America                         lowercase                           captain america
Captain America                         slice:3                             tain America
Captain America                         slice:0:3                           Cap
1,2,3,4,5,6,7,8,9,10	                slice:1:5	                        2,3,4,5
3.141592653589793	                    number:'3.0-0' (decimal)	        003
3.141592653589793	                    number:'.0-2' (decimal)	            3.14
0.235	                                percent	                            24%
0.235	                                percent:'2.2-2'	                    23.50%
1234.5	                                currency (USD for default)	        $1,234.50
1234.5	                                currency:'EUR'	                    €1,234.50
1234.5	                                currency:'GBP'	                    £1,234.50
Sat Jun 13 2020 10:56:48 GMT-0400 	    date	                            Jun 13, 2020
Sat Jun 13 2020 10:56:48 GMT-0400	    date:'medium'	                    Jun 13, 2020, 10:56:48 AM
Sat Jun 13 2020 10:56:48 GMT-0400 	    date:'short'	                    6/13/20, 10:56 AM
Sat Jun 13 2020 10:56:48 GMT-0400 	    date:'MMMM - dd'	                June - 13
Sat Jun 13 2020 10:56:48 GMT-0400 	    date:'MMMM - dd':'':'fr'	        juin - 13
Sat Jun 13 2020 10:56:48 GMT-0400 	    date:'MMMM - dd':'':'es'	        junio - 13


Examples of slice pipe with ngFor:

array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] | slice:5:10

6
7
8
9
10


array: string[] = ['Spiderman', 'Thor', 'Loki', 'Groot', 'Rocket', 'StarLord', 'IronMan'] | slice:4:10

Rocket
StarLord
IronMan


json pipe - (object created with all characteristics you see) called heroe with pipe ( | ) json

Example:

heroe | json


{
  "name": "Logan",
  "hidden": "Wolverine",
  "age": 500,
  "address": {
    "street": "First",
    "home": 20
    }
}


# More in the repository. Download and enjoy your pipe that you need the most

# in the app.component.html look all pipes, run ng serve and you will see all the pipes, where you will also find folders with created and custom pipes.