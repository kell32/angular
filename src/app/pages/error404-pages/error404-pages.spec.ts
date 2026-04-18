import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error404Pages } from './error404-pages';

describe('Error404Pages', () => {
  let component: Error404Pages;
  let fixture: ComponentFixture<Error404Pages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Error404Pages],
    }).compileComponents();

    fixture = TestBed.createComponent(Error404Pages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
