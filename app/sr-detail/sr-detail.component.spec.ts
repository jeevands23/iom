import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrDetailComponent } from './sr-detail.component';

describe('SrDetailComponent', () => {
  let component: SrDetailComponent;
  let fixture: ComponentFixture<SrDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
