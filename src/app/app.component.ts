import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'earn';
  public earn!: number;
  public dataTime!: Date;
  public jsonObj!: any;

  ngOnInit() {
    timer(0, 1000).subscribe(() => {
      this.dataTime = new Date();
    });
  }
  decimalFilter(event: any){
    const reg = /^-?\d*(\.\d*)?$/
    let input = event.target.value + String.fromCharCode(event.charCode)

    if(!reg.test(input)){
      event.preventDefault()
    }
  }
}
