import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProspectusTestimonialsSelectPage } from './prospectus-testimonials-select.page';

describe('ProspectusTestimonialsSelectPage', () => {
  let component: ProspectusTestimonialsSelectPage;
  let fixture: ComponentFixture<ProspectusTestimonialsSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectusTestimonialsSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProspectusTestimonialsSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
