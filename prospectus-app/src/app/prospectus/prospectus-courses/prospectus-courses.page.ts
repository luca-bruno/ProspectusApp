import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-prospectus-courses',
  templateUrl: './prospectus-courses.page.html',
  styleUrls: ['./prospectus-courses.page.scss'],
})
export class ProspectusCoursesPage implements OnInit {
  
  public toggleIcon = 'heart-outline';

  /**
   * Fills/unfills heart icon when toggled [different button printed]
   */
  toggleSave(icon:string){
    if(this.toggleIcon === 'heart-outline'){
      alert('Course added to favourites') //alert temporary
      this.toggleIcon = 'heart';
    }
    else{
      alert('Course removed from favourites') //alert temporary
      this.toggleIcon = 'heart-outline';
    }
  }

  /**
   * Add/remove course into/from array favouritesArray when toggled
   */
  
  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {}
    
  /**
   * Navigates back to the previously-accessed page. 
   */
  public navigateBack(): void {
    this.navCtrl.back();
  }

}
