import { Component, OnInit } from '@angular/core';
import { CommonService } from '../-services/common.service'
import { DatePipe } from '@angular/common';
import {Router} from "@angular/router";
import {ViewChild, ElementRef}from '@angular/core';
import {FormBuilder, FormGroup, Validators,ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  @ViewChild('fileInput') fileInput: ElementRef;

  show_loader=false;
  
  doc_list=["Education Certificate","Residential Proof","Driving licence",]
  country_list=["Sri Lanka", "Myanmar", "Thailand", "Vietnam", "Egypt", "Sudan"]
 val;
  documentType="Education Certificate"
  requestId=""
  memberState="Australia"
  consularOfficerName=""
  applicantName=""
  requestDate=""
  documentIssuingCountry=""
  requestorComment=""
  
  documentIssuingAuthority=""
  documentURL="NA"
  lastActionDate=""
  assessmentDueDate;
  csr={};
  execute_json={};
  newDate;
  reqDate;

  constructor(private CommonService:CommonService,private datePipe: DatePipe,private router: Router,private fb: FormBuilder) { this.createForm(); }
  

  
  today = new Date();
  ngOnInit() {

    this.CommonService.requestDate().subscribe(
      res=>{
     
        this.requestDate=res;
       
        console.log("Call requestDate successful" + res); 
        this.newDate = new Date(res);
        this.reqDate= new Date(res);
        this.newDate.setDate(this.newDate.getDate() + 2);
        this.reqDate.setDate(this.reqDate.getDate());

        this.assessmentDueDate= this.datePipe.transform(this.newDate, 'yyyy-MM-dd');
        this.requestDate=this.datePipe.transform(this.reqDate, 'yyyy-MM-dd');
      //  this.assessmentDueDate=newDate;
      }
    );


    this.CommonService.requestId().subscribe(
      res=>{
        console.log("Call requestId successful");   
        this.requestId=res;
         
        console.log("...........................................")
        console.log( this.requestId)
     
        localStorage.setItem('reqid', this.requestId);
        console.log(localStorage.getItem("reqid")+"ppppppppppppppppppp")
      }
    );


  }

createForm() {
    this.form = this.fb.group({
     
      avatar: null
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('avatar').setValue({
         
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }

  onSubmit1() {
    const formModel = this.form.value;
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      console.log(formModel);
      alert('done!');
      this.loading = false;
      this.CommonService.upload(formModel.avatar.value).subscribe(
        res=>{
          console.log("Call requestId successful");   
          this.requestId=res;});
    }, 1000);
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }


  onSubmit(){

    this.show_loader=true;
   
        //...........................

       
            // Json data to send to creat service req
 
this.csr={
  "$class": "org.un.uniom.ServiceRequest",
  "requestId": this.requestId,
  "status": "New",
  "memberState": this.memberState,
  "consularOfficerName": this.consularOfficerName,
  "applicantName": this.applicantName,
  "requestDate":  this.reqDate,
  "documentIssuingCountry": this.documentIssuingCountry,
  "requestorComment": this.requestorComment,
  "documentType": this.documentType,
  "documentIssuingAuthority": this.documentIssuingAuthority,
  "documentURL": "NA",
  "lastActionDate": this.reqDate,
  "lastActionUser": "David Lim",
  "assignedGroup": "IOMFP",
  "assignedUser": "Kitty Johnson",
  "assessmentDueDate": this.assessmentDueDate
} 
this.execute_json={
  "$class": "org.un.uniom.AssessRequest",
  "request": this.requestId,
  "transactionId": ""
}
            //creat req...
  this.CommonService.ServiceRequest_create(this.csr).subscribe(
  res=>{
    console.log("Call ServiceRequest_create successful" + res);     
     
    this.CommonService.AssessRequest(this.execute_json).subscribe(
      res=>{
        console.log("Call excecute req successful" + res);   
        this.router.navigate(['/home']);   
        this.show_loader=false;
         
      
      }
    );

  }
);

          
         
    
        
      
   



    



  }


//.....................


back(){
  this.router.navigate(['/srlist']); 
}



//.....................




}
