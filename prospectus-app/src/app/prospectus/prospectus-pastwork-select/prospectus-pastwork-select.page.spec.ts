import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProspectusPastworkSelectPage } from './prospectus-pastwork-select.page';

describe('ProspectusPastworkSelectPage', () => {
  let component: ProspectusPastworkSelectPage;
  let fixture: ComponentFixture<ProspectusPastworkSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectusPastworkSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProspectusPastworkSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
