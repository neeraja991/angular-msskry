import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  people1: any[] = [
    {
      name: "Douglas  Pace",
      age: 35
    },
    {
      name: "Mcleod  Mueller",
      age: 32
    },
    {
      name: "Day  Meyers",
      age: 21
    },
    {
      name: "Aguirre  Ellis",
      age: 34
    },
    {
      name: "Cook  Tyson",
      age: 32
    }
  ];

  people: any[] = [
    {
      name: "Douglas  Pace",
      age: 35,
      country: "MARS"
    },
    {
      name: "Mcleod  Mueller",
      age: 32,
      country: "USA"
    },
    {
      name: "Day  Meyers",
      age: 21,
      country: "HK"
    },
    {
      name: "Aguirre  Ellis",
      age: 34,
      country: "UK"
    },
    {
      name: "Cook  Tyson",
      age: 32,
      country: "USA"
    }
  ];

  peopleByCountry: any[] = [
    {
      country: "UK",
      people: [
        {
          name: "Douglas  Pace"
        },
        {
          name: "Mcleod  Mueller"
        }
      ]
    },
    {
      country: "US",
      people: [
        {
          name: "Day  Meyers"
        },
        {
          name: "Aguirre  Ellis"
        },
        {
          name: "Cook  Tyson"
        }
      ]
    }
  ];
}
