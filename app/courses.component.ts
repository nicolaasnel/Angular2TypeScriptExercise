import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
import {FavComponent} from './favourite.component';

@Component({
	selector: 'courses',
	template: `
		<h2>Courses</h2>
		{{ title }}
        <input type="text" autoGrow />
		<ul>
			<li *ngFor="#course of courses">
				{{ course }} <fav></fav>
			</li>
		</ul>
		`,
		providers: [CourseService],
    directives: [AutoGrowDirective, FavComponent]
})

export class CoursesComponent {
	title = "The title of the page";
	courses;
	
	constructor(courseService: CourseService) {
		this.courses = courseService.getCourses();
	}
}
