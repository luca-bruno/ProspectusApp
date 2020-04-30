import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProspectusInstitutesSelectPage } from './prospectus-institutes-select.page';

describe('ProspectusInstitutesSelectPage', () => {
  let component: ProspectusInstitutesSelectPage;
  let fixture: ComponentFixture<ProspectusInstitutesSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectusInstitutesSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProspectusInstitutesSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
