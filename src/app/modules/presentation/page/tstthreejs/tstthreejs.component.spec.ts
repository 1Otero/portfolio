import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TstthreejsComponent } from './tstthreejs.component';

describe('TstthreejsComponent', () => {
  let component: TstthreejsComponent;
  let fixture: ComponentFixture<TstthreejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TstthreejsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TstthreejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
