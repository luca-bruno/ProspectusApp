import { Component, OnInit } from '@angular/core';
import { ProspectusService } from 'src/app/services/prospectus.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-prospectus-institutes',
  templateUrl: './prospectus-institutes.page.html',
  styleUrls: ['./prospectus-institutes.page.scss'],
})
export class ProspectusInstitutesPage implements OnInit {
    
    /**
     * The institute to be used with this page.
     */
    public institute: any = null;
    public course: any = null;
  
  /**
   * Hide 'Find Us' div/button when Masters Degrees/Generic Degrees/CPD selected
   * ngIF url contains?
   */

  constructor(
    public route: ActivatedRoute,
    public prospectusService: ProspectusService
  ) { }

  ngOnInit() 
  {  
    const code = this.route.snapshot.params.code;
    this.institute = this.prospectusService.getInstitute(code);
  
  }
}
