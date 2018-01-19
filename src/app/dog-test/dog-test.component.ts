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
  dognumber = -1;
  goodboys = 0;
  badboys = 0;
  breed = 'https://dog.ceo/api/breed';
  constructor(private dog: HttpClient) { }
    getFromApi (num) {
        interface Myinterface {
            message: string;
        }
        this.dog.get<Myinterface>(this.koira).subscribe(data => {
            this.output = data.message;
            switch (num) {
                case 1:
                  this.goodboys ++;
                  break;
                case 2:
                  this.badboys ++;
                  break;
                default:
                  break;
            }
            this.dognumber ++;
        },
            err => {
          console.log('homma ei toimi');
            });
    }
    breedApi(dogbreed) {
        interface Myinterface {
            message: string;
        }
        console.log(this.breed + dogbreed + '/images/random');
        console.log('Breed apin parametri on ' + dogbreed);
        this.dog.get<Myinterface>(this.breed + dogbreed + '/images/random').subscribe(data => {
                this.output = data.message;
                this.dognumber ++;
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
        this.getFromApi(0);
        this.getApiList();
    }
}
