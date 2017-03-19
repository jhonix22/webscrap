import { Component } from '@angular/core';

import {SearchService} from './search.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {
  constructor(private searchService: SearchService){}
  searchJob(job_title: string){
      if(job_title){
          console.log(this.searchService.searchJob(job_title))
      }
  }
}
