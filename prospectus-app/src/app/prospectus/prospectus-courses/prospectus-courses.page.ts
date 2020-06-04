import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProspectusService } from 'src/app/services/prospectus.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prospectus-courses',
  templateUrl: './prospectus-courses.page.html',
  styleUrls: ['./prospectus-courses.page.scss'],
})
export class ProspectusCoursesPage implements OnInit {
  
  public institute: any = {};
  public courses: any = null;
  public courseCode: string;
  public courseTitle: string;
  public courseDuration: string;
  public courseDesc: any = new Array();
  public courseMqf: string;
  public courseCareers: string;
  public courseReqEntry: any = new Array();
  public courseReqCompulsory: any = new Array();
  public courseReqPrefer: any = new Array();
  public courseReqOther: any = new Array();
  public selectedInstitute: any = {};

  public toggleIcon = 'heart-outline';

  /**
   * Fills/unfills heart icon when toggled [different button printed]
   */
  toggleSave(icon:string){
    if(this.toggleIcon === 'heart-outline'){
      alert('Course added to favourites')
      this.toggleIcon = 'heart';
    }
    else{
      alert('Course removed from favourites')
      this.toggleIcon = 'heart-outline';
    }
  }

  /**
   * Add/remove course into/from array favouritesArray when toggled
   */
  
  constructor(
    public navCtrl: NavController,
    public prospectusService: ProspectusService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.institute = this.prospectusService.getInstitutes();
    const code = this.route.snapshot.params.code;
    console.log(this.institute);
    for(var i = 0; i < this.institute.length; i++){ //alterative to find
      for(var j = 0; j < this.institute[i].courses.length; j++){
        if(this.institute[i].courses[j].code == code){
          this.selectedInstitute = this.institute[i];
          this.courseCode = this.institute[i].courses[j].code;
          this.courseTitle = this.institute[i].courses[j].title;
          this.courseDuration = this.institute[i].courses[j].duration;
          this.courseMqf = this.institute[i].courses[j].mqf;
          this.courseCareers = this.institute[i].courses[j].careers;

          for(var k = 0; k < this.institute[i].courses[j].desc_en.length; k++){
            this.courseDesc.push(this.institute[i].courses[j].desc_en[k]);
          }
          for(var k = 0; k < this.institute[i].courses[j].req_entry.length; k++){
            this.courseReqEntry.push(this.institute[i].courses[j].req_entry[k]);
          }

          try{ // avoids getting req_compulsory, req_preferred, req_other fields when not available [md & cpd]
            for(var k = 0; k < this.institute[i].courses[j].req_compulsory.length; k++){
              this.courseReqCompulsory.push(this.institute[i].courses[j].req_compulsory[k]);
            }
            for(var k = 0; k < this.institute[i].courses[j].req_preferred.length; k++){
              this.courseReqPrefer.push(this.institute[i].courses[j].req_preferred[k]);
            }
            for(var k = 0; k < this.institute[i].courses[j].req_other.length; k++){
              this.courseReqOther.push(this.institute[i].courses[j].req_other[k]);
            }
          } catch (error){}
        }
        
      }
    }
  }
    
  /**
   * Navigates back to the previously-accessed page. 
   */
  public navigateBack(): void {
    this.navCtrl.back();
  }

}
