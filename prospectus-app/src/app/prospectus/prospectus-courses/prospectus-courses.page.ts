import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-prospectus-courses',
  templateUrl: './prospectus-courses.page.html',
  styleUrls: ['./prospectus-courses.page.scss'],
})
export class ProspectusCoursesPage implements OnInit {
  
  public toggleIcon = 'heart-outline';
  toggleSave(icon:string){
    if(this.toggleIcon === 'heart-outline'){
      alert('Course added to favourites')
      this.toggleIcon = 'heart';
    }
    else{
      alert('Course removed from favourites')
      this.toggleIcon = 'heart-outline';
    }
    //make icon fill in
  }

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {}
    
  /**
   * Navigates to the back link. 
   */
  public navigate(): void {
    this.navCtrl.back();
  }

}
