import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarService } from '../navbar/navbar.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private navbarService: NavbarService) { }

  ngOnInit() {
    localStorage.removeItem("userDetails"); 
    this.navbarService.showNavBarWithTitle(false); 
  
    
  }
 
login(un,up){

  localStorage.setItem("userDetails", un);

  this.navbarService.showNavBarWithTitle(true);

  this.router.navigate(['/home']);
  
}
}
