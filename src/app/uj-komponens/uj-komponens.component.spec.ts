import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjKomponensComponent } from './uj-komponens.component';

describe('UjKomponensComponent', () => {
  let component: UjKomponensComponent;
  let fixture: ComponentFixture<UjKomponensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UjKomponensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UjKomponensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
