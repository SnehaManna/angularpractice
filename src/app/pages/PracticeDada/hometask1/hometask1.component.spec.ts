import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hometask1Component } from './hometask1.component';

describe('Hometask1Component', () => {
  let component: Hometask1Component;
  let fixture: ComponentFixture<Hometask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hometask1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hometask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
