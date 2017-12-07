import { Component, OnInit } from '@angular/core';
import { CommonService } from '../-services/common.service'
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
@Component({
  selector: 'app-assess',
  templateUrl: './assess.component.html',
  styleUrls: ['./assess.component.css']
})
export class AssessComponent implements OnInit {
  assessmentDecision:string='';
  type:string='Complex';
  doc_url;
  documentType=""
  requestId=""
  memberState=""
  consularOfficerName=""
  applicantName=""
  requestDate=""
  documentIssuingCountry=""
  requestorComment=""
  status=""
  documentIssuingAuthority=""
  documentURL="NA"
  lastActionDate=""
  assessmentDueDate=""
  Requestors_cmts=""
  quotation=""
data={};

  constructor(private CommonService:CommonService, private route:ActivatedRoute,private routers: Router) { }

  ngOnInit() {



    




    this.route.params.subscribe(params => {
 
   
//---------Get data of this id--------------


this.CommonService.service_request_byid(params['id']).subscribe(
  res=>{
      
   
     
    this.requestId = res.requestId,
    this.doc_url="http://uniom.mybluemix.net/download?requestId="+res.requestId
      this.status= res.status,
      this.memberState= res.memberState,
      this.consularOfficerName= res.consularOfficerName,
      this.applicantName= res.applicantName,
      this.requestDate= res.requestDate.slice(0, 10),
 
      this.documentIssuingCountry= res.documentIssuingCountry,
      this.requestorComment= res.requestorComment,
      this.documentType= res.documentType,
      this.documentIssuingAuthority= res.documentIssuingAuthority,
      this.documentURL= "NA",
      this.lastActionDate= res.requestDate,
     
      this.assessmentDueDate= res.assessmentDueDate
   
    
  }
);



//----------end of data----------



   });




  }

  save()
  {
  
    this.data={
      "$class": "org.un.uniom.AssessComplexRequest",
      "lastActionUser":"Kitty Johnson",
      "assessmentDecision":this.assessmentDecision,
      "request": this.requestId,
      "requestQuotation": this.quotation,
      "assessmentComment": this.Requestors_cmts,
      "transactionId":"",
    }
  



this.CommonService.AssessComplexRequest_create(this.data).subscribe(
  res=>{
       
    console.log("Below is the rrespose from the AssessComplexRequest_create")
    console.log(res)

    this.routers.navigate(['/srlist'])
  }
);

  }
  back(){
    this.routers.navigate(['/srlist']); 
  }

}
