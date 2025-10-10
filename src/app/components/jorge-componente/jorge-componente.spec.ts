import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JorgeComponente } from './jorge-componente';

describe('JorgeComponente', () => {
  let component: JorgeComponente;
  let fixture: ComponentFixture<JorgeComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JorgeComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JorgeComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
