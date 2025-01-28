import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerBasePageComponent } from './manager-base-page.component';

describe('ManagerBasePageComponent', () => {
  let component: ManagerBasePageComponent;
  let fixture: ComponentFixture<ManagerBasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerBasePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerBasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
