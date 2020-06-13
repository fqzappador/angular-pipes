import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'Captain America';
  name2: string = 'frEddY MoiSEs zAppaDOr';
  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arrays: string[] = ['Spiderman', 'Thor', 'Loki', 'Groot', 'Rocket', 'StarLord', 'IronMan'];
  PI: number = Math.PI;
  // with the 5 at the end it is rounded when it is without decimals, with decimals it is not rounded
  percentages: number = 0.235;
  salary: number = 1234.5;
  date: Date = new Date();
  enable: boolean = true;

  language: string;
  videoUrl: string = 'https://www.youtube.com/embed/23o0evRtrFI';

  promiseValue = new Promise<string>( (resolve) => {

    setTimeout(() => {
      resolve('the data arrived in 3.5 seconds');
    }, 3500);

  });

  heroe = {
    name: 'Logan',
    hidden: 'Wolverine',
    age: 500,
    address: {
      street: 'First',
      home: 20
    }
  };
}
