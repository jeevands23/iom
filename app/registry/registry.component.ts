import { Component, OnInit } from '@angular/core';
import { CommonService } from '../-services/common.service'
import {Router} from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  constructor(private CommonService:CommonService,private router: Router,private datePipe: DatePipe) {this.select_opt="" }
  data_arr=[];
  options = ["Sri Lanka", "Myanmar", "Thailand", "Vietnam", "Egypt", "Sudan"];
  select_opt=""
  page_no=6;
  app_name=null;

  ngOnInit() {


    this.CommonService.registry_data().subscribe(
      res=>{
         
       




        res.forEach((element,i) => {
         // console.log(res[i].eventsEmitted[0].length)
        
         if(res[i].eventsEmitted[0])
          {
          this.data_arr.push(res[i].eventsEmitted[0]);
         console.log(i)
          }
          
        });
console.log(this.data_arr.length)
        /*for(let j=0;j< this.data_arr.length;j++)
          {
            console.log(j+"..."+this.data_arr[j].LastActionDateTime)
        
        this.data_arr[j].LastActionDateTime = this.datePipe.transform(this.data_arr[j].LastActionDateTime, 'yyyy-MM-dd');}*/
        console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,")
        //console.log( this.data_arr[0].LastActionDateTime)
        this.data_arr.sort(function(a, b) {
          b=new Date(b.LastActionDateTime)
          a=new Date(a.LastActionDateTime)
          console.log(b - a)
          return b - a;
      });
      console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,")
     // console.log( this.data_arr[0].LastActionDateTime)
      
      }
    );


  }
  home()
  {
    this.router.navigate(['/home'])
  }

}
