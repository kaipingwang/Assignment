import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService ) { }

  users: any = [];
  num: any = 0;
  ngOnInit() {
     /* GET Method */
     // this.userService.getAllUsers()
     //                  .subscribe(res =>{
     //                    this.users = res;
     //                  },
     //                   err => {
     //                     console.log("Error", err);
     //                  });
     /* POST Method */
     }

   onSelect(event, value) {
     let val = event.target.value;
     let click = value || 3;
   this.userService.postAllUsers(val, click, '','')
                   .subscribe(res =>{
                       this.users = res;
                       this.num =val;
                   },
                     err => {
                     console.log("Error", err);
                   });
  }

  onSort(value, sort) {
    let val = this.num;
    let click = value || 0;
    console.log(sort);
    this.userService.postAllUsers(val, click, sort,'')
                  .subscribe(res =>{
                      this.users = res;
                      this.num =val;
                  },
                    err => {
                    console.log("Error", err);
                  });
 }

 onSearch(search) {
   let val = this.num;
   console.log("search "+search);
   this.userService.postAllUsers(val, '', '',search)
                 .subscribe(res =>{
                     this.users = res;
                 },
                   err => {
                   console.log("Error", err);
                 });
}

}
