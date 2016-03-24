import {Component} from 'angular2/core'

@Component({
  selector: "fav",
  template: `
    <span 
      class="glyphicon"
      [class.glyphicon-star-empty] = "!selected"
      [class.glyphicon-star] = "selected"
      (click)="onClick()">
     </span>  
  `
})

export class FavComponent{
  selected = false
  onClick() {
    this.selected = !this.selected
  }
}