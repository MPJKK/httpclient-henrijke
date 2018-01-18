import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogTestComponent } from './dog-test.component';

describe('DogTestComponent', () => {
  let component: DogTestComponent;
  let fixture: ComponentFixture<DogTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
