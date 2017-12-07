
import { Injectable, EventEmitter,Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {Headers,RequestOptions } from '@angular/http';


@Injectable()
export class CommonService {

  constructor(private http: Http) { }


  requestDate():Observable<any>{
   
    const url="https://uniom.mybluemix.net/today" ;	
       return this.http.get(url).map(
          res=>{ 
                 
              const data=res.json();               
              return data;
          })
  } 

  requestId():Observable<any>{
    
     const url2="https://uniom.mybluemix.net/get-request-number " ;	
        return this.http.get(url2).map(
           res=>{                
               const data=res.json();               
               return data;
           })
   } 

   
   
   
   
   ServiceRequest_create(json_post):Observable<any> {

      const headerDict = {
          'Content-Type': 'application/json',         
       }
  const headerObj = {                                                                                                                                                                                 
          headers: new Headers(headerDict), 
      };                    
                    
      return  this.http.post(" http://184.172.242.213:31090/api/ServiceRequest",json_post)
          .map(res => {                  
                const data=res.json();
               
                return data;
          }, error => {
              console.log("error...."+error);
             
          })

     
 }

 AssessComplexRequest_create(json_post):Observable<any> {
    
          const headerDict = {
              'Content-Type': 'application/json',         
           }
      const headerObj = {                                                                                                                                                                                 
              headers: new Headers(headerDict), 
          };                    
                        
          return  this.http.post(" http://184.172.242.213:31090/api/AssessComplexRequest",json_post)
              .map(res => {                  
                    const data=res.json();
                   
                    return data;
              }, error => {
                  console.log("error...."+error);
                 
              })
    
         
     }


     ExecuteRequest(json_post):Observable<any> {
    
          const headerDict = {
              'Content-Type': 'application/json',         
           }
      const headerObj = {                                                                                                                                                                                 
              headers: new Headers(headerDict), 
          };                    
                        
          return  this.http.post("http://184.172.242.213:31090/api/ExecuteRequest",json_post)
              .map(res => {                  
                    const data=res.json();
                   
                    return data;
              }, error => {
                  console.log("error...."+error);
                 
              })
    
         
     }




 service_request_byid(id):Observable<any> {
    console.log("came 2")
          const headerDict = {
              'Content-Type': 'application/json',         
           }
      const headerObj = {                                                                                                                                                                                 
              headers: new Headers(headerDict), 
          };                    
                        
          return  this.http.get(" http://184.172.242.213:31090/api/ServiceRequest/"+id)
              .map(res => {                  
                    const data=res.json();
                  
                    return data;
              }, error => {
                  console.log("error...."+error);
                 
              })
    
         
     }


     



 
 AssessRequest(json_post):Observable<any> {
  
        const headerDict = {
            'Content-Type': 'application/json',         
         }
    const headerObj = {                                                                                                                                                                                 
            headers: new Headers(headerDict), 
        };                    
                      
        return  this.http.post(" http://184.172.242.213:31090/api/AssessRequest",json_post)
            .map(res => {                  
                  const data=res.json();
                 
                  return data;
            }, error => {
                console.log("error...."+error);
              
               
            })
   }


   table_data():Observable<any>{
    
     const url=" http://184.172.242.213:31090/api/ServiceRequest" ;	
        return this.http.get(url).map(
           res=>{ 
                  
               const data=res.json();               
               return data;
           }, error => {
            console.log("error...."+error);
           
        })
   } 

   registry_data():Observable<any>{
    
     const url="http://184.172.242.213:31090/api/system/historian" ;	
        return this.http.get(url).map(
           res=>{ 
                  
               const data=res.json();               
               return data;
           }, error => {
            console.log("error...."+error);
           
        })
   } 

  


   

//---------DASHBOARD-------------------------------

att():Observable<any> {
    console.log("came 2")
          const headerDict = {
              'Content-Type': 'application/json',         
           }
      const headerObj = {                                                                                                                                                                                 
              headers: new Headers(headerDict), 
          };                    
                        
          return  this.http.get("http://184.172.242.213:31090/api/queries/getAllAssessedRequests")
              .map(res => {                  
                    const data=res.json();
                  
                    return data;
              }, error => {
                  console.log("error...."+error);
                 
              })
    
         
     }

     ctt():Observable<any> {
        console.log("came 2")
              const headerDict = {
                  'Content-Type': 'application/json',         
               }
          const headerObj = {                                                                                                                                                                                 
                  headers: new Headers(headerDict), 
              };                    
                            
              return  this.http.get("http://184.172.242.213:31090/api/queries/getAllCompletedRequests")
                  .map(res => {                  
                        const data=res.json();
                      
                        return data;
                  }, error => {
                      console.log("error...."+error);
                     
                  })
        
             
         }

         fraud():Observable<any> {
            console.log("came 2")
                  const headerDict = {
                      'Content-Type': 'application/json',         
                   }
              const headerObj = {                                                                                                                                                                                 
                      headers: new Headers(headerDict), 
                  };                    
                                
                  return  this.http.get("http://184.172.242.213:31090/api/queries/getAllFraudRequests")
                      .map(res => {                  
                            const data=res.json();
                          
                            return data;
                      }, error => {
                          console.log("error...."+error);
                         
                      })
            
                 
             }

           upload(formData):Observable<any> {
                let headers = new Headers();
                headers.set('Accept', 'application/json');
                let options = new RequestOptions({ headers: headers });
                let dd={"documentFile":formData,"requestId":"1008"};
                return  this.http.post("http://9.204.108.206:6001/upload",dd, options)
                .map(res => {                  
                      const data=res.json();
                     
                      return data;
                }, error => {
                    console.log("error...."+error);
                  
                   
                })


            }










         





   
}


