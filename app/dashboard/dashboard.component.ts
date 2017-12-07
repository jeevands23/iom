import { Component, OnInit } from '@angular/core';
import { CommonService } from '../-services/common.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  digit:number = 0;
  digit_Att:number = 0;
  digit_Ctt:number = 0;
  result:string;
  result_Att:string;
  result_Ctt:string;
  Tval =false;
  num_rec=0;
  total_req;
  fraud_req;
chart=0;
  status_ua=0;
  status_a=0;
  status_c=0;
  doughnutChartLabels=[]; doughnutChartData=[]; doughnutChartType;
  barChartOptions; barChartLabels=[];  barChartType; barChartLegend;barChartData=[];
  Sri_Lanka=0; Myanmar=0; Thailand=0; Vietnam=0; Egypt=0;Sudan=0;
  constructor(private CommonService:CommonService,private router: Router) { }

  ngOnInit() {

  


    this.CommonService.att().subscribe(
      res=>{
      
       res.forEach((element,i) => {
         console.log("inside....")
        this.digit_Att=this.digit_Att+parseInt(res[i].assessmentTurnAroundTime)
        this.num_rec=i;
      });
      console.log("outside.")
      this.digit_Att=this.digit_Att/(this.num_rec+1)
      console.log( this.digit_Att)

      }
    );

    this.CommonService.ctt().subscribe(
      res=>{
       this.total_req=Object.keys(res).length;
       res.forEach((element,i) => {
        
        this.digit_Ctt=this.digit_Ctt+parseInt(res[i].turnAroundTime)
        this.num_rec=i;
      });
      console.log( this.digit_Ctt+"divid"+(this.num_rec+1))
      this.digit_Ctt=this.digit_Ctt/(this.num_rec+1)
      console.log( this.digit_Ctt)

      //-----fraud----------


      this.CommonService.fraud().subscribe(
        res=>{
          this.fraud_req=Object.keys(res).length;
          this.digit=   (this.fraud_req / this.total_req)*100;
        }
      );

      
      //---------fraud...........

      }
    );


    this.CommonService.table_data().subscribe(
      res=>{
        res.forEach((element,i) => {
         if(res[i].status=="Under Assessment")
         {this.status_ua++;}
        if(res[i].status=="Agreed")
          {this.status_a++;}
        if(res[i].status=="Completed")
          {this.status_c++;}
        
        if(res[i].documentIssuingCountry=='Sri Lanka') {this.Sri_Lanka++;}
        if(res[i].documentIssuingCountry=='Myanmar') {this.Myanmar++;}
        if(res[i].documentIssuingCountry=='Thailand') {this.Thailand++;}
        if(res[i].documentIssuingCountry=='Vietnam') {this.Vietnam++;}
        if(res[i].documentIssuingCountry=='Egypt') {this.Egypt++;}
        if(res[i].documentIssuingCountry=='Sudan') {this.Sudan++;}
      
       });
   this.chart=1;
       this.doughnutChartLabels = [ 'Under Assesment', 'Agreed', 'Completed'];
       
       this.doughnutChartData = [ this.status_ua, this.status_a, this.status_c];
         this.doughnutChartType = 'doughnut';

         //-------------


       this.barChartOptions= {
        scaleShowVerticalLines: false,
        responsive: true
      }; 
      this. barChartLabels = ["Sri Lanka", "Myanmar", "Thailand", "Vietnam", "Egypt", "Sudan"];
      this.  barChartType = 'horizontalBar';
      this. barChartLegend = false;
     
      this.barChartData= [
        {data: [this.Sri_Lanka, this.Myanmar, this.Thailand, this.Vietnam, this.Egypt,this.Sudan]}
      ];
     

      }
      
    );

   
  

    

    /*condition for ATT*/
  	if(this.digit_Att >= 0 && this.digit_Att <=10){
      this.result_Att = "Excellent";
    }
    else if(this.digit_Att > 10 && this.digit_Att <=20){
      this.result_Att = "Good";
    }
    else{
      this.result_Att = "Bad";
    }
  
    /*condition for CTT*/
    if(this.digit_Ctt >= 0 && this.digit_Ctt <=1){
      this.result_Ctt = "Excellent";
    }
    else if(this.digit_Ctt > 1 && this.digit_Ctt <=2){
      this.result_Ctt = "Good";
    }
    else{
      this.result_Ctt = "Bad";
    }
  
    /*condition for Froud*/
    if(this.digit == 0 ){
      this.result = "Excellent";
    }
    else if(this.digit >0 && this.digit <=1){
      this.result = "Good";
    }
    else{
      this.result = "Bad";
    }
  }






   // Doughnut


   // events

 
 
 
 
   home()
   {
     this.router.navigate(['/home'])
   }
  

}
