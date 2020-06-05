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
   * Add/remove course into/from array favouritesArray when toggled // SCRAPPED
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
    for(var i = 0; i < this.institute.length; i++){ //alterative to find JSON
      for(var j = 0; j < this.institute[i].courses.length; j++){
        if(this.institute[i].courses[j].code == code){
          this.selectedInstitute = this.institute[i];
          this.courseCode = this.institute[i].courses[j].code;
          this.courseTitle = this.institute[i].courses[j].title;
          this.courseDuration = this.institute[i].courses[j].duration;
          this.courseMqf = this.institute[i].courses[j].mqf;
          this.courseCareers = this.institute[i].courses[j].careers;

          for(var k = 0; k < this.institute[i].courses[j].desc_en.length; k++){ //populates array courseDesc with desc_en fields
            this.courseDesc.push(this.institute[i].courses[j].desc_en[k]); //pushes desc_en field data into array element
          }
          for(var k = 0; k < this.institute[i].courses[j].req_entry.length; k++){ //populates array courseReqEntry with req_entry fields
            this.courseReqEntry.push(this.institute[i].courses[j].req_entry[k]); //pushes req_entry field data into array element
          }

          try{ // avoids getting req_compulsory, req_preferred, req_other fields when not available [md & cpd]
            for(var k = 0; k < this.institute[i].courses[j].req_compulsory.length; k++){ //populates array courseReqCompulsory with req_compulsory fields
              this.courseReqCompulsory.push(this.institute[i].courses[j].req_compulsory[k]); //pushes req_compulsory field data into array element
            }
            for(var k = 0; k < this.institute[i].courses[j].req_preferred.length; k++){ //populates array courseReqPrefer with req_preferred fields
              this.courseReqPrefer.push(this.institute[i].courses[j].req_preferred[k]); //pushes req_preferred field data into array element
            }
            for(var k = 0; k < this.institute[i].courses[j].req_other.length; k++){ //populates array courseReqOther with req_other fields
              this.courseReqOther.push(this.institute[i].courses[j].req_other[k]); //pushes req_other field data into array element
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
