import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiojosuicoComponent } from './miojosuico.component';

describe('MiojosuicoComponent', () => {
  let component: MiojosuicoComponent;
  let fixture: ComponentFixture<MiojosuicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiojosuicoComponent]
    });
    fixture = TestBed.createComponent(MiojosuicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
