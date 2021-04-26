import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  //templateUrl: './tickets.component.html',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tickets_urgent: any[] = [
    {
      "name": "Tohle je název ticketu",
      "number": "000001",
      "priority": "Urgentní (1)",
      "category": "Helios",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ea fugit expedita neque necessitatibus nisi praesentium laborum id officiis ipsum aliquid, uu...",
      "date": "23.3.2021",
      "creator": "Daniel Dořičák",
    },
    {
      "name": "Tohle je další ticketu",
      "number": "000004",
      "priority": "Urgentní (1)",
      "category": "Helios",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ea fugit expedita neque necessitatibus nisi praesentium laborum id officiis ipsum aliquid, uu...",
      "date": "8.3.2021",
      "creator": "Daniel Dořičák",
    },
  ];

  tickets_other: any[] = [
    {
      "name": "Tohle je název jiného ticketu než urgentního",
      "number": "000003",
      "priority": "Střední (1)",
      "category": "Helios",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ea fugit expedita neque necessitatibus nisi praesentium laborum id officiis ipsum aliquid, uu...",
      "date": "6.3.2021",
      "creator": "Daniel Dořičák",
    }
  ];

}
