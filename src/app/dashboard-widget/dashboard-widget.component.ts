import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';
/*import { UsersDataService } from '../services/users-data.service';
import { Router } from '@angular/router';*/
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-dashboard-widget',
  templateUrl: './dashboard-widget.component.html',
  styleUrls: ['./dashboard-widget.component.css']
})
export class DashboardWidgetComponent implements OnInit {
  
     
  public total:any;

  public totalActiveUser:any;
  collection:any=[];

  users:any;
  constructor(private UsersData:UsersDataService,public router:Router){
    UsersData.users().subscribe((data:any)=>{
      console.warn("data",data);
      this.collection=data;

      
      
    });
  }

    activeUser()
    {
        let counter = 0;
      for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i].status === 'active') counter++;
    }

    console.log(counter);
    return counter;
  }

  inactiveUser(){
    let counter = 0;
    for (let i = 0; i < this.collection.length; i++) {
    if (this.collection[i].status === 'inactive') counter++;
  }

  console.log(counter);
  return counter;
  }

  ngOnInit(): void {

    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  

}
}