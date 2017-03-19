import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class SearchService {

  constructor(private http: Http) { }
  
  searchJob(job_title: string){
      return this.http.get("https://www.google.com.ph/?q=${job_title}%20salary").map( res => res.json())
  }

}
