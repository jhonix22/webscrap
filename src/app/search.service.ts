import { Injectable } from '@angular/core';
import {Http,Headers, RequestMethod,Response} from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class SearchService {
  headers: any;
  constructor(private http: Http) { }
  
  searchJob(job_title: string, country: string){
      return this.http.get(`/scrape/${job_title}/${country}`)
            .map( (res:Response) => res.text());
  }

}

