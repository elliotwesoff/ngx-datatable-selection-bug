import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { SelectionType } from "@swimlane/ngx-datatable";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html"
})
export class TableComponent {

  @Input() rows: any[]; 
  @Output() rowsSelected: EventEmitter<any[]>;
  SelectionType = SelectionType
  columns: any[]; 
  selectionType: SelectionType;

  constructor() {
    this.rows = [];
    this.columns = [{ checkboxable: true }, { name: "Name" }, { name: "Age" }, { name: "Address" }];
    this.selectionType = SelectionType.checkbox;
    this.rowsSelected = new EventEmitter();
  }

  onSelect(event: any) {
    this.rowsSelected.emit(event.selected);
  }
}
