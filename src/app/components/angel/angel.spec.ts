import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angel } from './angel';

describe('Angel', () => {
  let component: Angel;
  let fixture: ComponentFixture<Angel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
