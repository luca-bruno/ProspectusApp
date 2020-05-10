import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prospectus-home',
  templateUrl: './prospectus-home.page.html',
  styleUrls: ['./prospectus-home.page.scss'],
})
export class ProspectusHomePage implements OnInit {
  
  public boldLang = 'boldLang1';

  /**
   * Boldens different language when toggled [different div printed]
   */
  toggleLang(string){
    if(this.boldLang === 'boldLang1'){
      alert('Lingwa mibdula għall-Malti') //debug confirmation, remove
      this.boldLang = 'boldLang2';
    }
    else if (this.boldLang === 'boldLang2'){
      alert('Language switched to English') //debug confirmation, remove
      this.boldLang = 'boldLang1';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
