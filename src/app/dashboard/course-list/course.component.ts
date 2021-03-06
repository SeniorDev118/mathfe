import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ag-course',
  templateUrl: './course.component.html',
  styles: [`
    img {
      -webkit-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
      box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
      margin-bottom:20px;
    }

    img:hover {
      filter: gray; /* IE6-9 */
      -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
    }
    a:hover {
      cursor:pointer;
    }
  `]
})
export class CourseComponent implements OnInit {
  beURL = environment.apiURL + '/';
  @Input() course: Course;

  constructor() { }

  ngOnInit() {
  }

}
