import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisagensComponent } from './paisagens.component';

describe('PaisagensComponent', () => {
  let component: PaisagensComponent;
  let fixture: ComponentFixture<PaisagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
