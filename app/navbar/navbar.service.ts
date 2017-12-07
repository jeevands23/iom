import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
@Injectable()
export class NavbarService {

 // name: any;
 // nameChange: Subject<string> = new Subject<string>();

  private _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public showNavBarEmitter: Observable<any> = this._showNavBar.asObservable();


  constructor() { }

  showNavBarWithTitle(ifShow: boolean) {

   
    this._showNavBar.next(ifShow);
     
}

}
