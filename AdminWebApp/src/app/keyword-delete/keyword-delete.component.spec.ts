import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordDeleteComponent } from './keyword-delete.component';

describe('KeywordDeleteComponent', () => {
  let component: KeywordDeleteComponent;
  let fixture: ComponentFixture<KeywordDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
