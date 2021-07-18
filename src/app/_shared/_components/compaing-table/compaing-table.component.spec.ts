import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaingTableComponent } from './compaing-table.component';

describe('CompaingTableComponent', () => {
  let component: CompaingTableComponent;
  let fixture: ComponentFixture<CompaingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
