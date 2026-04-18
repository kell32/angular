import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPages } from './detalles-pages';

describe('DetallesPages', () => {
  let component: DetallesPages;
  let fixture: ComponentFixture<DetallesPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesPages],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
