import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProspectusTestimonialsPage } from './prospectus-testimonials.page';

describe('ProspectusTestimonialsPage', () => {
  let component: ProspectusTestimonialsPage;
  let fixture: ComponentFixture<ProspectusTestimonialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectusTestimonialsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProspectusTestimonialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
