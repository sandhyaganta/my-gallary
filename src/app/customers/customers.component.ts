import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {


  colDefs: ColDef[] = [
    { field: "CustomerName" },
    { field: "PhoneNumber" },
    { field: "EmailId" },
    { field: "Status" },
    { field: "Date" }
  ];

  rowData = [
    { CustomerName:'SravanKumar', PhoneNumber:8978232184, EmailId:"sravan@gmail.com", Status: "CompleteProfile",Date:"5-7-24"},
    { CustomerName: "akhi g", PhoneNumber:6304444758, EmailId:"akhi@gmail.com", Status: "CompleteProfile",Date:"25-06-24" },
    { CustomerName: "Srikanth hjae", PhoneNumber:9505294218, EmailId:"manohar.vita@gmail.com", Status: "CompleteProfile",Date:"19-06-24" },
    { CustomerName: "AmaanAli", PhoneNumber:9039845444, EmailId:"sayedamaanali444@gmail.com", Status: "CompleteProfile",Date:"01-06-24" },
    { CustomerName: "ManoharGantasala	", PhoneNumber:9347279432, EmailId:"manohar.vita@gmail.com", Status: "CompleteProfile",Date:"29-05-24" },
    { CustomerName: "Saiberelli", PhoneNumber:	6302333317, EmailId:"vijay.f2h@gmail.com", Status: "CompleteProfile",Date:"27-05-24" },
    { CustomerName: "PradeepVodnala", PhoneNumber:9908937221, EmailId:"pradeepprabha1998@gmail.com", Status: "CompleteProfile",Date:"01-03-24" },
    { CustomerName: "vijayjakkula", PhoneNumber:8464865361, EmailId:"VijayKumar@mqil.com", Status: "CompleteProfile",Date:"01-03-24" },
    { CustomerName: "AdigoppulaAbhinay", PhoneNumber:9642907850, EmailId:"abhinay0703@gmail.com", Status: "CompleteProfile",Date:"30-01-24" },
    { CustomerName: "RakeshPasunooti", PhoneNumber:	8977279607, EmailId:"rakeshpasunooti@gmail.com", Status: "CompleteProfile",Date:"28-07-23" },
  ];

}
