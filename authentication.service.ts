import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';  // johnye
import { Observable } from 'rxjs/Observable';
import { IEmployee } from './employee';


// johnye: I am not using  this  one.


@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {
  
  private _url: string = '/assets/data/employees.json'  ;

  constructor(private http: HttpClient) { } // johnye

  getDescription() : string  {
    return "this is a returned strings - johnye-005";
    
  }

  getCampaigns(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);    
  }

  logout () {
      return;
  }

}
