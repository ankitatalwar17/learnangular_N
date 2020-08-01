import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDatailsComponent } from './artist-datails.component';

describe('ArtistDatailsComponent', () => {
  let component: ArtistDatailsComponent;
  let fixture: ComponentFixture<ArtistDatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
