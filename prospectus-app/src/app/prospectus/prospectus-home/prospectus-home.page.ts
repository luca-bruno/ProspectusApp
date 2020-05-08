import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prospectus-home',
  templateUrl: './prospectus-home.page.html',
  styleUrls: ['./prospectus-home.page.scss'],
})
export class ProspectusHomePage implements OnInit {
  
  public boldLang = 'boldLang1';
  toggleLang(string){
    if(this.boldLang === 'boldLang1'){
      alert('Lingwa mibdula għall-Malti')
      this.boldLang = 'boldLang2';
    }
    else if (this.boldLang === 'boldLang2'){
      alert('Language switched to English')
      this.boldLang = 'boldLang1';
    }
  }

    //make icon switch/bold
  constructor() { }

  ngOnInit() {
  }

}
