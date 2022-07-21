import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add1BoardComponent } from './add1-board.component';

describe('Add1BoardComponent', () => {
  let component: Add1BoardComponent;
  let fixture: ComponentFixture<Add1BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add1BoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Add1BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
