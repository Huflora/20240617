import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onallo3Component } from './onallo3.component';

describe('Onallo3Component', () => {
  let component: Onallo3Component;
  let fixture: ComponentFixture<Onallo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Onallo3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Onallo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
