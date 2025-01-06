import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaVersionComponent } from './java-version.component';

describe('JavaVersionComponent', () => {
  let component: JavaVersionComponent;
  let fixture: ComponentFixture<JavaVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaVersionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
