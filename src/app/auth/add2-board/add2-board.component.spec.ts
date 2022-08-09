import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add2BoardComponent } from './add2-board.component';

describe('Add2BoardComponent', () => {
  let component: Add2BoardComponent;
  let fixture: ComponentFixture<Add2BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add2BoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Add2BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
