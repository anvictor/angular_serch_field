import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Student } from '../student';
import { StudentService } from '../student.service';
import {PhonesEditComponent} from '../phones-edit/phones-edit.component';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input() student: Student;
    constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location,
  ) {}
  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.studentService.updateStudent(this.student)
      .subscribe(() => this.goBack());
  }

  editPhones(phone1, phone2): void {
    this.studentService.updateStudent(this.student)
      .subscribe(() => PhonesEditComponent.prototype.getPhone(phone1, phone2));
    console.log(phone1, phone2);
  }

}