import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAndaComponent } from './no-anda.component';

describe('NoAndaComponent', () => {
  let component: NoAndaComponent;
  let fixture: ComponentFixture<NoAndaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoAndaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoAndaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
