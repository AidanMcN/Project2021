import { Component } from '@angular/core';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private youtube: YoutubeVideoPlayer) {}
  Youtube(){
    this.youtube.openVideo('https://www.youtube.com/watch?v=bd7DcVnrSL8');
  }
  
}
