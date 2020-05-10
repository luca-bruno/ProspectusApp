import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prospectus-institutes',
  templateUrl: './prospectus-institutes.page.html',
  styleUrls: ['./prospectus-institutes.page.scss'],
})
export class ProspectusInstitutesPage implements OnInit {
  
  /**
   * Hide 'Find Us' div/button when Masters Degrees/Generic Degrees/CPD selected
   * ngIF url contains?
   */

  constructor(
    public router: Router
  ) { }

  ngOnInit() {}
  
  /**
    * Navigates to the select course list link. 
    */
    public courselistNav(): void {
    this.router.navigateByUrl('/courses/select')

  }
}
