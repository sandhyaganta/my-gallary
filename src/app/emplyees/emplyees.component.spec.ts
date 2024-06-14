import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeesComponent } from './emplyees.component';

describe('EmplyeesComponent', () => {
  let component: EmplyeesComponent;
  let fixture: ComponentFixture<EmplyeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmplyeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmplyeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
