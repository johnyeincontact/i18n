import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';  // johnye
import { Observable } from 'rxjs/Observable';
import { IEmployee } from './employee';


import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CampaignsService {

  //  httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization':  'bearer ' + ''                                
  //   })
  // };

  
  private _incontactUrl : string = 'http://hc-c6web01.in.lab/InContactAPI/services/v1.0/agents/skills';

  constructor(private http: HttpClient) { } // johnye

  getDescription() : string  {
    return "this is a returned strings - johnye-006";
    
  }

 
  getSkills(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._incontactUrl);
  }


}
