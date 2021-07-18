import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComaignComponent } from './edit-comaign.component';

describe('EditComaignComponent', () => {
  let component: EditComaignComponent;
  let fixture: ComponentFixture<EditComaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
