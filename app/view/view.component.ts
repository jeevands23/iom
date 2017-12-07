import { Component, OnInit } from '@angular/core';
import { CommonService } from '../-services/common.service'
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
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
  dcocumentVerificationDate=""
  verif_doc_url=""
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
           this.verif_doc_url="http://uniom.mybluemix.net/download?requestId="+res.requestId+"&isVerificationDoc=Y"
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
        this.Requestors_cmts=res.assessmentComment,
        this.isDcocumentIssuingAuthorityExists=res.isDcocumentIssuingAuthorityExists,
        this.dcocumentIssuingAuthorityComment=res.dcocumentIssuingAuthorityComment,
        this.isDcocumentValid=res.isDcocumentValid,
        this.dcocumentValidityComment=res.dcocumentValidityComment,
        this.isDcocumentVerificable=res.isDcocumentVerificable,
        this.dcocumentVerificationDate=res.dcocumentVerificationDate.slice(0, 10)
        
       }
     );
     //----------end of data----------
     
     
     
        });

  }
  close()
  {
    this.routers.navigate(['/srlist'])
  }

}
