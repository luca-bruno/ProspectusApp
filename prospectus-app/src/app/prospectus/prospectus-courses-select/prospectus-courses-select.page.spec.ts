import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProspectusCoursesSelectPage } from './prospectus-courses-select.page';

describe('ProspectusCoursesSelectPage', () => {
  let component: ProspectusCoursesSelectPage;
  let fixture: ComponentFixture<ProspectusCoursesSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectusCoursesSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProspectusCoursesSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
