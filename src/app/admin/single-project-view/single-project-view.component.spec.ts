import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectViewComponent } from './single-project-view.component';

describe('SingleProjectViewComponent', () => {
  let component: SingleProjectViewComponent;
  let fixture: ComponentFixture<SingleProjectViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleProjectViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
