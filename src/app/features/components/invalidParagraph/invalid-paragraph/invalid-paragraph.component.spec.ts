import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidParagraphComponent } from './invalid-paragraph.component';

describe('InvalidParagraphComponent', () => {
  let component: InvalidParagraphComponent;
  let fixture: ComponentFixture<InvalidParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
