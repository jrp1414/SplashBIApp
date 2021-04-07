import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad3',
  template: `
    <mat-card class="dashboard-card" style="background-color:aqua;color:maroon">
        <mat-card-header>
          <mat-card-title>
          <h3>{{data.title}}</h3>
            <button mat-icon-button class="more-button" [matMenuTriggerFor]="menu" aria-label="Toggle menu">
              <mat-icon>more_vert</mat-icon>
            </button>
            <mat-menu #menu="matMenu" xPosition="before">
              <button mat-menu-item>Expand</button>
              <button mat-menu-item>Remove</button>
            </mat-menu>
          </mat-card-title>
        </mat-card-header>
        <mat-card-content class="dashboard-card-content">
        <div>{{data.details | shorten }}</div>
        </mat-card-content>
      </mat-card>
  `,
  styles: [
  ]
})
export class Ad3Component implements OnInit {
  @Input() data: { title: string, details: string };
  constructor() { }

  ngOnInit(): void {
  }

}
