import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hija2Component } from './hija2.component';

describe('Hija2Component', () => {
  let component: Hija2Component;
  let fixture: ComponentFixture<Hija2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hija2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hija2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
