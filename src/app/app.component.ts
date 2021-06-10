import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  productData =[{
    heading: "Free",
    title: "$0",
    subtitle: "/month",
    item1: "Single User",
    item2: "5GB Storage",
    item3: "Unlimited Public Projects ",
    item4: "Community Access",
    item5: "Unlimited Private Projects",
    item6: "Dedicated Phone Support",
    item7: "Free Subdomain",
    item8: "Monthly Status Reports",

  },
  {
    heading: "PLUS",
    title: "$9",
    subtitle: "/month",
    item1: "5 User",
    item2: "50GB Storage",
    item3: "Unlimited Public Projects ",
    item4: "Community Access",
    item5: "Unlimited Private Projects",
    item6: "Dedicated Phone Support",
    item7: "Free Subdomain",
    item8: "Monthly Status Reports",

  },
  {
    heading: "Pro",
    title: "$49",
    subtitle: "/month",
    item1: "Unlimited User",
    item2: "150GB Storage",
    item3: "Unlimited Public Projects ",
    item4: "Community Access",
    item5: "Unlimited Private Projects",
    item6: "Dedicated Phone Support",
    item7: "UnlimitedFree Subdomain",
    item8: "Monthly Status Reports",

  }];
  constructor(){
    this.productData.forEach((product) =>{

    })
  }
}
