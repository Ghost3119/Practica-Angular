import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nadia } from './nadia';

describe('Nadia', () => {
  let component: Nadia;
  let fixture: ComponentFixture<Nadia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nadia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nadia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
