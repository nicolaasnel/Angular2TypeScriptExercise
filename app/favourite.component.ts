import {Component} from 'angular2/core'

@Component({
  selector: "fav",
  template: `
    <span [class]="favClass" (click)="onClick()"></span>  
  `
})

export class FavComponent{
  selected = false
  favClass = "glyphicon glyphicon-star-empty"
  onClick() {
    this.selected = !this.selected
    this.favClass = this.selected ? "glyphicon glyphicon-star" : "glyphicon glyphicon-star-empty"
  }
}