import {Component, Input, EventEmitter, Output, OnChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-phones-edit',
  templateUrl: './phones-edit.component.html',
  styleUrls: ['./phones-edit.component.css']
})
export class PhonesEditComponent {
  @Input() student: Student;
  @Input() userName: string;
  @Input() phone1: string;
  @Input() phone2: string;
  @Output() Changed = new EventEmitter<string>();
  change1(phone1: string) {
    this.Changed.emit(phone1);
  }
  change2(phone2: string) {
    this.Changed.emit(phone2);
  }
    constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location,
  ) { }

    goBack(): void {
    this.location.back();
  }

  getPhone(phone1, phone2): void {
    this.phone1 = phone1;
    this.phone2 = phone2;
  }
}
