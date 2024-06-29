import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onallo1Component } from './onallo1.component';

describe('Onallo1Component', () => {
  let component: Onallo1Component;
  let fixture: ComponentFixture<Onallo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Onallo1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Onallo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
