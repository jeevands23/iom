import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  CSR()
  {
  
    this.router.navigate(['/csr']);
  }
  dashboard()
  {
    this.router.navigate(['/dashboard'])
  }
  tsr(){
    this.router.navigate(['/srlist']);
  }
}
