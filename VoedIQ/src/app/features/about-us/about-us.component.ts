import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../shared/components/info-block/info-block.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [InfoBlockComponent, RouterLink],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
