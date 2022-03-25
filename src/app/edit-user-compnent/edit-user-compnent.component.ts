import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { UsersDataService } from '../services/users-data.service';
import { ActivatedRoute } from '@angular/router';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user-compnent',
  templateUrl: './edit-user-compnent.component.html',
  styleUrls: ['./edit-user-compnent.component.css']
})
export class EditUserCompnentComponent implements OnInit {
  editUser =new FormGroup({
    firstname:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    role:new FormControl(''),
    status:new FormControl(''),
    password:new FormControl(''),
    cnfpPass:new FormControl(''),
  })
  users:any;
  constructor(private userData:UsersDataService, private router:ActivatedRoute) {
    this.userData.users().subscribe((data)=>{
      this.users=data;
    })
   }
  user1:any
  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id'])
    this.userData.getCurrentId(this.router.snapshot.params['id']).subscribe((result)=>{
      console.warn("result",result)
      this.user1=result;
    this.editUser =new FormGroup({
        firstname:new FormControl(this.user1['firstname']),
        lastName:new FormControl(this.user1['Last name']),
        email:new FormControl(this.user1['email']),
        phone:new FormControl(this.user1['phone']),
        role:new FormControl(this.user1['role']),
        status:new FormControl(this.user1['status']),
        password:new FormControl(this.user1['password']),
        cnfpPass:new FormControl(this.user1['cnfPass'])

      })
    })

      }

      CollectionUser(){
        console.warn(this.editUser.value)
        this.userData.UpdateUser(this.router.snapshot.params['id'],this.editUser.value).subscribe((result)=>{
        console.warn(result)
        if (this.editUser.valid) {
          alert("record has been updated!!");
          this.editUser.reset();
          
          
        }
        
        })
      }

}
