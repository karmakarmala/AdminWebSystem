import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordAddComponent } from './keyword-add.component';

describe('KeywordAddComponent', () => {
  let component: KeywordAddComponent;
  let fixture: ComponentFixture<KeywordAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
