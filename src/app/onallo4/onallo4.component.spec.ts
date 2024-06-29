import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onallo4Component } from './onallo4.component';

describe('Onallo4Component', () => {
  let component: Onallo4Component;
  let fixture: ComponentFixture<Onallo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Onallo4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Onallo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
