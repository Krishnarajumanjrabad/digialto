import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CasestudiesPage } from './casestudies.page';

describe('CasestudiesPage', () => {
  let component: CasestudiesPage;
  let fixture: ComponentFixture<CasestudiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasestudiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CasestudiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
