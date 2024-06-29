import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsszetettAdatComponent } from './osszetett-adat.component';

describe('OsszetettAdatComponent', () => {
  let component: OsszetettAdatComponent;
  let fixture: ComponentFixture<OsszetettAdatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OsszetettAdatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OsszetettAdatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
