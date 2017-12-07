import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showNavbar: boolean = true;

  userName=localStorage.getItem("userDetails");
  constructor(private serviceInstance: NavbarService) {

   /* if (localStorage.getItem("userDetails") === null) { 
      this.showNavbar=false;
      alert("set to false")
            }
            else{
              this.userName=localStorage.getItem("userDetails");
              alert("its true")
            }*/
            this.subscribeToChangeEvent();

            
   }


   subscribeToChangeEvent() {
    
    this.serviceInstance.showNavBarEmitter.subscribe((navData) => {
   
     if (navData != null)   { 
     if(navData==false)
      {
      this.showNavbar=false;
     
      }
            
            else{
              this.showNavbar=true;
            
              this.userName=localStorage.getItem("userDetails");
             
            }
          }
    });
  }

  ngOnInit() {

   
  }
  
  logout()
  {
    localStorage.clear();
  }
}
