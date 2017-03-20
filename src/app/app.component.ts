import { Component } from '@angular/core';

import {SearchService} from './search.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {
  content: string;
  constructor(private searchService: SearchService){}
  searchJob(job_title: string,country: string){
      let text: string;
      if(job_title && country){
         this.searchService
           .searchJob(job_title,country)
           .subscribe(
             data => {this.content = data;}
           )

      }
  }
}
