import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProspectusHomePage } from './prospectus-home.page';

describe('ProspectusHomePage', () => {
  let component: ProspectusHomePage;
  let fixture: ComponentFixture<ProspectusHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectusHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProspectusHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
