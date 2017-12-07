import { Component, OnInit } from '@angular/core';
import { CommonService } from '../-services/common.service'
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
@Component({
  selector: 'app-execute',
  templateUrl: './execute.component.html',
  styleUrls: ['./execute.component.css']
})
export class ExecuteComponent implements OnInit {
  assessmentDecision:string='Agreed';
  type:string='';

  
  dcocumentIssuingAuthorityComment=""
  dcocumentValidityComment=""
  isDcocumentValid=''
  isDcocumentVerificable=''
  isDcocumentIssuingAuthorityExists=''

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
  requestType =""
  requestQuotation=""
  assessmentComment=""
data={};

  constructor(private CommonService:CommonService, private route:ActivatedRoute,private routers: Router) { }

  ngOnInit() {

    
    this.route.params.subscribe(params => {
      
        
     //---------Get data of this id--------------
     
     
     this.CommonService.service_request_byid(params['id']).subscribe(
       res=>{
           
        
          
           this.requestId = res.requestId,
           localStorage.setItem('exeid', this.requestId);
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
           this.lastActionDate=  res.requestDate,
          
           this.assessmentDueDate= res.assessmentDueDate,
        this.type=res.requestType,
        this.quotation=res.requestQuotation,
        this.Requestors_cmts=res.assessmentComment
        
       }
     );
     //----------end of data----------
     
     
     
        });
  }


  submit(){
   this.data= {
      "$class": "org.un.uniom.ExecuteRequest",
      "request":  this.requestId,
      "isDcocumentIssuingAuthorityExists": this.isDcocumentIssuingAuthorityExists,
      "dcocumentIssuingAuthorityComment": this.dcocumentIssuingAuthorityComment,
      "isDcocumentValid": this.isDcocumentValid,
      "dcocumentValidityComment": this.dcocumentValidityComment,
      "isDcocumentVerificable": this.isDcocumentVerificable,
      "verificationDocumentURL": "NA",
      "lastActionUser": "Kitty Johnson",
      "transactionId": "",
      
    }


    this.CommonService.ExecuteRequest(this.data).subscribe(
      res=>{
           
        console.log("Below is the rrespose from the execute")
        console.log(res)
    
        this.routers.navigate(['/srlist'])
      }
    );

  }

  back(){
    this.routers.navigate(['/srlist']); 
  }

}
