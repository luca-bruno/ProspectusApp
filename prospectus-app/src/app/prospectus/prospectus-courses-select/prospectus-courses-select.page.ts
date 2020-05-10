import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prospectus-courses-select',
  templateUrl: './prospectus-courses-select.page.html',
  styleUrls: ['./prospectus-courses-select.page.scss'],
})
export class ProspectusCoursesSelectPage implements OnInit {
  
  constructor(
    public router: Router
  ) { }

  ngOnInit() {}
  
  /**
    * Navigates to the course link. 
    */
    public courseview(): void {
    this.router.navigateByUrl('/courses/view')
  }
}
