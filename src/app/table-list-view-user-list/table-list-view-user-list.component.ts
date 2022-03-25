import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-table-list-view-user-list',
  templateUrl: './table-list-view-user-list.component.html',
  styleUrls: ['./table-list-view-user-list.component.css']
})
export class TableListViewUserListComponent implements OnInit {
  public filterString : string ='';

  public status=true;
  

  status2(){
    if(this.status)
    {
      return "active";
    }
    else{
      return "inactive";
    }
  }
  
  public successClass="success";
  public failedClass="fail";
  
  public messege={
    "success":this.status,
    "fail":!this.status
  }
  collection:any=[];

  users:any;
  constructor(private UsersData:UsersDataService,public router:Router){
    UsersData.users().subscribe((data:any)=>{
      console.warn("data",data);

       this.users=data;
    });
  

  }

  clickFun(){
    
    this.router.navigate(['add-user-component']);
  }
  deleteUser(id:any){
    this.users.splice(id-1,1)
    this.UsersData.DeleteUser(id).subscribe((result)=>{
      console.warn("result",result)
    })
  }

  ngOnInit(): void {
  }
 /* Users=[{

    id:13,
    Name:'krushna',
    Email:'krushnabansode@gmail.com',
    Role:'manager',
    status:'active',



  }]*/


 }


  

