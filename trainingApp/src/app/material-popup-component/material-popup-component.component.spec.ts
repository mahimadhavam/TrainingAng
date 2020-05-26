import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPopupComponentComponent } from './material-popup-component.component';

describe('MaterialPopupComponentComponent', () => {
  let component: MaterialPopupComponentComponent;
  let fixture: ComponentFixture<MaterialPopupComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialPopupComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
