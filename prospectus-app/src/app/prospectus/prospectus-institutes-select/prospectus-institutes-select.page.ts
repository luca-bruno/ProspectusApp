import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prospectus-institutes-select',
  templateUrl: './prospectus-institutes-select.page.html',
  styleUrls: ['./prospectus-institutes-select.page.scss'],
})
export class ProspectusInstitutesSelectPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {}
  
  /**
    * Navigates to the  link. 
    */
    public institutesviewNav(): void {
    this.router.navigateByUrl('/institutes/view')
  }
}

