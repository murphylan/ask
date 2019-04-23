import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-calendar',
  templateUrl: './todo-calendar.component.html',
  styleUrls: ['./todo-calendar.component.scss']
})
export class TodoCalendarComponent implements OnInit {

  @ViewChild('infoModal') public infoModal: ModalDirective;
  profileForm = new FormGroup({
    todotask: new FormControl(''),
  });
  calendarArg;
  todotasktitle: string = 'Welcome word';
  onSubmit() {
    // console.warn(this.profileForm.value);
    // console.log(this.calendarArg);
    this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
      title: this.profileForm.value.todotask,
      start: this.calendarArg.date,
      allDay: this.calendarArg.allDay
    })
    this.infoModal.hide();
    this.profileForm.reset();
  }

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2019-01-01'); // call a method on the Calendar object
  }

  handleDateClick(arg) {
    this.infoModal.show();
    this.calendarArg = arg;
    // if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
    //   this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
    //     title: 'New Event',
    //     start: arg.date,
    //     allDay: arg.allDay
    //   })
    // }
  }

  handEventClick(arg){
    console.warn(arg.event.title);
    this.todotasktitle = arg.event.title;
    arg.el.style.borderColor = 'red';
  }

}
