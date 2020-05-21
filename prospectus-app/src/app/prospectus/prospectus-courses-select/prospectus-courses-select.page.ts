import { Component, OnInit } from '@angular/core';
import { ProspectusService } from 'src/app/services/prospectus.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prospectus-courses-select',
  templateUrl: './prospectus-courses-select.page.html',
  styleUrls: ['./prospectus-courses-select.page.scss'],
})
export class ProspectusCoursesSelectPage implements OnInit {
  
    /**
     * The institute to be used with this page.
     */
    public institute: any = null;

        /**
     * The institute to be used with this page.
     */
    public course: any = null;

  constructor(
    public route: ActivatedRoute,
    public prospectusService: ProspectusService
  ) { }

  ngOnInit() {
    const code = this.route.snapshot.params.code;
    this.institute.course = this.prospectusService.getCourse(code);
  }

}
