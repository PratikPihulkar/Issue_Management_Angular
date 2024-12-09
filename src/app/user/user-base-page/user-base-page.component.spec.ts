import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBasePageComponent } from './user-base-page.component';

describe('UserBasePageComponent', () => {
  let component: UserBasePageComponent;
  let fixture: ComponentFixture<UserBasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserBasePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
