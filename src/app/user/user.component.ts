import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Data} from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
// export class UserComponent implements OnInit {
//   id: number
//   constructor(private route: ActivatedRoute){}

//   ngOnInit(){
//     this.route.params.subscribe(
//       (params: Params)=>{
//         console.log(params);
//         this.id = parseInt(params['id']);
//       }
//     )
//   }

// }

export class UserComponent implements OnInit {
  id: number
  info: string
  constructor( private route: ActivatedRoute,
    private users: UsersService){
  }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params)=>{
        console.log(params);
        this.id = parseInt(params['id']);
      }
    )

    // let promise = new Promise((resolve, reject) =>{
    //   setTimeout(() => {
    //     resolve(this.id);
    //   }, 2000);
    // })
    // promise
    //   .then(
    //     id => {
    //       console.log(id)
    //       return +id
    //     }
    //   )
    //   .then(
    //     (id) => console.log(id+1)
    //   )
  }

  onActivate(){
    this.users.userActivated.next(this.id);
  }
}