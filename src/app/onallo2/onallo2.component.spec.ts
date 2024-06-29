import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onallo2Component } from './onallo2.component';

describe('Onallo2Component', () => {
  let component: Onallo2Component;
  let fixture: ComponentFixture<Onallo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Onallo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Onallo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
