import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordGetComponent } from './keyword-get.component';

describe('KeywordGetComponent', () => {
  let component: KeywordGetComponent;
  let fixture: ComponentFixture<KeywordGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
