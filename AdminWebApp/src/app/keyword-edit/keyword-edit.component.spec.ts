import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordEditComponent } from './keyword-edit.component';

describe('KeywordEditComponent', () => {
  let component: KeywordEditComponent;
  let fixture: ComponentFixture<KeywordEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
