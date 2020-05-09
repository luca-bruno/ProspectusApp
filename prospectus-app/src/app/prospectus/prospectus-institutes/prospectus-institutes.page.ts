import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prospectus-institutes',
  templateUrl: './prospectus-institutes.page.html',
  styleUrls: ['./prospectus-institutes.page.scss'],
})
export class ProspectusInstitutesPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {}
  
  /**
    * Navigates to the  link. 
    */
    public courselistNav(): void {
    this.router.navigateByUrl('/courses/select')

  }
}
