import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProspectusService } from 'src/app/services/prospectus.service';

@Component({
  selector: 'app-prospectus-institutes-select',
  templateUrl: './prospectus-institutes-select.page.html',
  styleUrls: ['./prospectus-institutes-select.page.scss'],
})
export class ProspectusInstitutesSelectPage implements OnInit {

    /**
     * The institute list available to this page.
     */
    public institutes: any[] = [];

  constructor(
    public router: Router,
    
    // if to be used in HTML, use public or ionic will give errors on build
    public prospectusService: ProspectusService
  ) { }

  ngOnInit() {
    this.institutes = this.prospectusService.getInstitutes();
  }

}

