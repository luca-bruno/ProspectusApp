import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProspectusCorporateServicesPage } from './prospectus-corporate-services.page';

describe('ProspectusCorporateServicesPage', () => {
  let component: ProspectusCorporateServicesPage;
  let fixture: ComponentFixture<ProspectusCorporateServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectusCorporateServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProspectusCorporateServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
