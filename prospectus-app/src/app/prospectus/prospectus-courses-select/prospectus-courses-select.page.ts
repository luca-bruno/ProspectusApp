import { Component, OnInit } from '@angular/core';
import { ProspectusService } from 'src/app/services/prospectus.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prospectus-courses-select',
  templateUrl: './prospectus-courses-select.page.html',
  styleUrls: ['./prospectus-courses-select.page.scss'],
})
export class ProspectusCoursesSelectPage implements OnInit {

  public institute: any = {};

    /**
     * The course to be used with this page.
     */
    public courses: any = null;

  constructor(
    public route: ActivatedRoute,
    public prospectusService: ProspectusService
  ) { }

  ngOnInit() {
    const code = this.route.snapshot.params.code;
    this.institute = this.prospectusService.getInstitute(code);

  }

}
