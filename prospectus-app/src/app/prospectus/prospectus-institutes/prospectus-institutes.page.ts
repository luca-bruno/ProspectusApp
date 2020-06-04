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
    public acronymShow = ['ias', 'ibmc', 'ics', 'ica', 'iet', 'iict', 'cpd'];
    public titleShow = ['ias', 'ibmc', 'ics', 'ica', 'iet', 'iict', 'gc', 'gd', 'md', 'oc'];
    public descShow = ['ias', 'ibmc', 'ics', 'ica', 'iet', 'iict', 'gc', 'gd'];
    public displayAcronymDiv: boolean;
    public displayTitleDiv: boolean;
    public displayDescDiv: boolean;
    public FindUsMosta = ['ica'];
    public FindUsGozo = ['gc'];
    public location: string;
    
  
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

    if(this.FindUsMosta.indexOf(code)!=-1){
      this.location = "https://www.google.com/maps?q=MCAST+Mosta,+Mosta&hl=en"
    }else if(this.FindUsGozo.indexOf(code)!=-1){
      this.location = "https://www.google.com/maps?q=MCAST+Gozo+Campus,+Ghajnsielem&hl=en"
    }else{
      this.location = "https://www.google.com/maps?q=MCAST,+Triq+Kordin,+Paola&hl=en"
    }
    

    if(this.acronymShow.indexOf(code)!=-1){
      this.displayAcronymDiv = true;
    }else{
      this.displayAcronymDiv = false;
    }

    if(this.titleShow.indexOf(code)!=-1){
      this.displayTitleDiv = true;
    }else{
      this.displayTitleDiv = false;
    }

    if(this.descShow.indexOf(code)!=-1){
      this.displayDescDiv = true;
    }else{
      this.displayDescDiv = false;
    }
      
    
  }
}
