import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css'
})
export class FooComponent implements OnInit{
    data!: Object;
    loading!: boolean;
    o! :Observable<Object>;
}
