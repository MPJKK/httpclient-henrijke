import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-dog-test',
  templateUrl: './dog-test.component.html',
  styleUrls: ['./dog-test.component.scss']
})
export class DogTestComponent implements OnInit {

  koira = 'https://dog.ceo/api/breeds/image/random';
  output = 'temp';
  rodut = 'https://dog.ceo/api/breeds/list';
  rodutList = '';
  constructor(private dog: HttpClient) { }

    getFromApi () {
        interface Myinterface {
            message: string;
        }
        this.dog.get<Myinterface>(this.koira).subscribe(data => {
            this.output = data.message;
        },
            err => {
          console.log('homma ei toimi');
            });
    }
    getApiList () {
      interface MyInterface {
        message: string;
        status: boolean;
      }
      this.dog.get<MyInterface>(this.rodut).subscribe(data => {
        this.rodutList = data.message;
        console.log(this.rodutList);
      }, err => {
            console.log('homma ei toimi' + err);
        });
    }

    ngOnInit() {
        this.getFromApi();
        this.getApiList();
    }
}
