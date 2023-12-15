import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PornoComponent } from './porno.component';

describe('PornoComponent', () => {
  let component: PornoComponent;
  let fixture: ComponentFixture<PornoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PornoComponent]
    });
    fixture = TestBed.createComponent(PornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
