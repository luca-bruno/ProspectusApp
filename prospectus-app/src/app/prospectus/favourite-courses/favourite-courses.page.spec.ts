import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavouriteCoursesPage } from './favourite-courses.page';

describe('FavouriteCoursesPage', () => {
  let component: FavouriteCoursesPage;
  let fixture: ComponentFixture<FavouriteCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteCoursesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavouriteCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
