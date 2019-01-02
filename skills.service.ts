import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { ISkills } from './skill';

@Injectable({
  providedIn: 'root'
})


export class SkillsService {

  private _incontactUrl : string = 'http://hc-c6web01.in.lab/InContactAPI/services/v1.0/agents/skills';

  constructor(private http: HttpClient) { } 

  getSkills(): Observable<ISkills[]> {
    return this.http.get<ISkills[]>(this._incontactUrl);
  }

}
