import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prospectus-pastwork-select',
  templateUrl: './prospectus-pastwork-select.page.html',
  styleUrls: ['./prospectus-pastwork-select.page.scss'],
})
export class ProspectusPastworkSelectPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {}
  
  /**
    * Navigates to the past work link. 
    */
    public pastworkviewNav(): void {
    this.router.navigateByUrl('/pastwork/view')
  }
}
