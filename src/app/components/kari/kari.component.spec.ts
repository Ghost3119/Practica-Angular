import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KariComponent } from './kari.component';

describe('KariComponent', () => {
  let component: KariComponent;
  let fixture: ComponentFixture<KariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KariComponent] // importa el componente standalone
    }).compileComponents();

    fixture = TestBed.createComponent(KariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
