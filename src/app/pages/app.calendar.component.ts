import { Component, OnInit } from '@angular/core';
import { EventService } from '../demo/service/eventservice';
import { AppBreadcrumbService } from '../app.breadcrumb.service';
// @fullcalendar plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { SharedModule } from '../shared.module';

@Component({
    templateUrl: './app.calendar.component.html',
    styles: [`
        @media screen and (max-width: 960px) {
            :host ::ng-deep .fc-header-toolbar {
                display: flex;
                flex-wrap: wrap;
            }
        }

        :host ::ng-deep {
            .fc.fc-theme-standard .fc-highlight {
                color: #ffffff;
                background: var(--fc-highlight-color, rgba(63, 81, 181, 0.12));
            }
        }
    `],
    imports: [SharedModule],
    standalone: true
})
export class AppCalendarComponent implements OnInit {

    events: any[] = [];

    options: any;

    header: any;

    eventDialog: boolean = false;

    changedEvent: any = {
        title: '',
        start: null,
        end: null,
        allday: false
    };

    clickedEvent: any = null;

    constructor(private eventService: EventService, private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Pages' },
            { label: 'Calendar', routerLink: ['/pages/calendar'] }
        ]);
    }

    ngOnInit() {
        // Initialize changedEvent first
        this.changedEvent = {
            title: '',
            start: null,
            end: null,
            allday: false
        };

        this.eventService.getEvents().then(events => {
            this.events = events;
            this.options = { ...this.options, ...{ events: events } };
        });

        this.options = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            initialDate: '2021-02-01',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            editable: true,
            selectable: true,
            selectMirror: true,
            dayMaxEvents: true,
            eventClick: (e: any) => {
                this.eventDialog = true;
                this.clickedEvent = e.event;

                this.changedEvent = {
                    title: this.clickedEvent?.title || '',
                    start: this.clickedEvent?.start || null,
                    end: this.clickedEvent?.end || null,
                    allday: this.clickedEvent?.allDay || false
                };
            }
        };
    }

    save() {
        if (this.clickedEvent && this.changedEvent) {
            this.eventDialog = false;

            this.clickedEvent.setProp('title', this.changedEvent.title);
            this.clickedEvent.setStart(this.changedEvent.start);
            this.clickedEvent.setEnd(this.changedEvent.end);
            this.clickedEvent.setAllDay(this.changedEvent.allday);

            this.changedEvent = { title: '', start: null, end: null, allday: false };
        }
    }

    reset() {
        if (this.clickedEvent) {
            this.changedEvent = {
                title: this.clickedEvent?.title || '',
                start: this.clickedEvent?.start || null,
                end: this.clickedEvent?.end || null,
                allday: this.clickedEvent?.allDay || false
            };
        }
    }
}
