import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppserverComponent } from './appserver.component';

describe('AppserverComponent', () => {
  let component: AppserverComponent;
  let fixture: ComponentFixture<AppserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppserverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
