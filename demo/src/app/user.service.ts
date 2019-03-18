import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http'; // import 我們要使用的Http
import 'rxjs/add/operator/toPromise'; // 幫助我們將RxJs轉為Promise
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  /* GET Method */
  // getAllUsers(){
  //    return this.http.get('http://127.0.0.1:3000/api/users')
  //       .map((res) =>{
  //         console.log(res.json());
  //         return res.json();
  //       });
  // }

  /* POST Method */
  postAllUsers(val, click, sort, search){
     return this.http.post("http://127.0.0.1:3000/api/users",
          {
          number:  val,
          click:  click,
          sort: sort,
          search: search
          }).map((res) =>{
            console.log(res.json());
            return res.json();
          });
  }

}
