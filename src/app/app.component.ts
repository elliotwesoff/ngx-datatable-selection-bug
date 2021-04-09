import { Component, VERSION } from "@angular/core";

@Component({
selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  rows: any[];
  selected: any[];

  constructor() {
    this.selected = [];
    this.rows = [
      { name: "Steve", age: 18, address: "123 1st St." },
      { name: "Dave", age: 19, address: "432 13th St." },
      { name: "John", age: 20, address: "100 41st St." }
    ];
  }

  onSelect(selected: any[]): void {
    this.selected = selected;
  }

  removeSelected(): void {
    const removeNames = this.selected.map(r => r['name']);
    this.rows = [...this.rows.filter(r => !removeNames.includes(r['name']))];
    this.selected = [];
  }
}
