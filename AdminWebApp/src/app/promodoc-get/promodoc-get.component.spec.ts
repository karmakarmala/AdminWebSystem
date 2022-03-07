import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromodocGetComponent } from './promodoc-get.component';

describe('PromodocGetComponent', () => {
  let component: PromodocGetComponent;
  let fixture: ComponentFixture<PromodocGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromodocGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromodocGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
