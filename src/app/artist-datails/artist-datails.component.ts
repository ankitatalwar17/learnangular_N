import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-datails',
  templateUrl: './artist-datails.component.html',
  styleUrls: ['./artist-datails.component.css']
})
export class ArtistDatailsComponent implements OnInit {

  @Input() artist : any;

  constructor() { }

  ngOnInit(): void {
  }

}
