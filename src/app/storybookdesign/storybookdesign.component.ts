import { OnInit, AfterContentInit, ViewChild, TemplateRef, Input, Component } from '@angular/core';

@Component({
  selector: 'app-storybookdesign',
  templateUrl: './storybookdesign.component.html',
  styleUrls: ['./storybookdesign.component.css']
})
export class StorybookdesignComponent implements OnInit, AfterContentInit {
  @ViewChild('greet', { static: true })
  greet!: TemplateRef<any>;
  @ViewChild('svk', { static: true })
  svk!: TemplateRef<any>;
  @ViewChild('eng', { static: true })
  eng!: TemplateRef<any>;
  @ViewChild('storydesign', { static: true })
  storydesign!: TemplateRef<any>;

  myContext = { $implicit: 'World', localSk: 'Svet' };
  tems: TemplateRef<any> = this.greet;


  @Input()
  myselectedtemp: string = 'greet';


  ngAfterContentInit() {

    switch (this.myselectedtemp) {
      case 'greet':
        this.tems = this.greet;
        break;
      case 'svk':
        this.tems = this.svk;
        break;
      case 'eng':
        this.tems = this.eng;
        break;
      case 'storydesign':
        this.tems = this.storydesign;
        break;

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
