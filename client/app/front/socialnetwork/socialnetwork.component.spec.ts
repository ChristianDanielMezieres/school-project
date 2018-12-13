import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialnetworkComponent } from './socialnetwork.component';

describe('SocialnetworkComponent', () => {
  let component: SocialnetworkComponent;
  let fixture: ComponentFixture<SocialnetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialnetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialnetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
