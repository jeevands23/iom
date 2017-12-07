import { Component, OnInit } from '@angular/core';
import { CommonService } from '../-services/common.service'
import {Router} from "@angular/router";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-sr-list',
  templateUrl: './sr-list.component.html',
  styleUrls: ['./sr-list.component.css']
})
export class SrListComponent implements OnInit {
  today;
  data_arr=[];
 options = ["All request", "Under Assessment", "Agreed", "Completed"];
 select_opt="All request"
p;
  page_no=4;
  constructor(private CommonService:CommonService,private router: Router,private datePipe: DatePipe) { }

  ngOnInit() {

  this.p=localStorage.getItem("page");

//date................
this.CommonService.requestDate().subscribe(
  res=>{
        
    this.today = Date.parse(res);


    //----------------due date field...//
    this.CommonService.table_data().subscribe(
      res=>{
        
       res.forEach((element,i) => {
        let deudate=Date.parse(res[i].assessmentDueDate);
        let reqdate=Date.parse(res[i].requestDate);
        res[i].assessmentDueDate= this.datePipe.transform(res[i].assessmentDueDate, 'yyyy-MM-dd');
        res[i].requestDate= this.datePipe.transform(res[i].requestDate, 'yyyy-MM-dd');
    if(deudate <  this.today)
      {
    res[i].due=true;
      }
      else{
        false;
      }

      });
              this.data_arr=res;
        
              console.log(this.data_arr);
              console.log("sorting.................");
            
            this.data_arr .reverse();
           console.log(this.data_arr);


      
      }
    );
    
    
   
  }
);




  }


  assess_request(id,p)
  {
    localStorage.setItem("page", p);
this.router.navigate(['/assess',{'id': id}])

  }

  execute_request(id,p)
  {
    localStorage.setItem("page", p);
this.router.navigate(['/execute',{'id': id}])

  }


  complet(id,p)
  {
    localStorage.setItem("page", p);
this.router.navigate(['/view',{'id': id}])

  }

  home()
  {
    this.router.navigate(['/home'])
  }
 

}
