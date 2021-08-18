import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private http: HttpClient) {
    //lien taloha fa hanao teste Access-Control-Allow-Origin: https://127.0.0.1:8000/service/message
    this.readAPI('Access-Control-Allow-Origin: https://127.0.0.1:8000/service/message').subscribe((data) => {
      console.log(data);
    });
  }

  readAPI(URL: string){
    return this.http.get(URL);
  }

}
