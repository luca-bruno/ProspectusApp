import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite-courses',
  templateUrl: './favourite-courses.page.html',
  styleUrls: ['./favourite-courses.page.scss'],
})
export class FavouriteCoursesPage implements OnInit {

  // define favouritesArray for courses favourited
  // if none, display div
  // if >0, print array list info
  
  constructor(
    public router: Router
  ) { }

  ngOnInit() {}
  
  /**
    * Navigates to the  link. 
    */
    public courseviewNav(): void {
    this.router.navigateByUrl('/courses/view')
  }
}
