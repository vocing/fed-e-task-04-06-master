import { Component } from '@angular/core'


interface List {
  id: number
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  search: string = ""
  list: List[] = []
  add() {
    this.list.push({
      id: this.list.length,
      name: this.search
    })
  }
  delete(index: number) {
    console.log(index)
    this.list.splice(index, 1)
  }
  identify(index: number, item: List){
    return item.id 
  }
}
