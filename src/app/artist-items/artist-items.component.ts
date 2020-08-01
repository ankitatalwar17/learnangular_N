import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html',
  
  
})
export class ArtistItemsComponent implements OnInit {
  @Input() artist_c : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
