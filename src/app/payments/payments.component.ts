import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent {

  colDefs: ColDef[] = [
    {
      field: 'SubscriptionPack',
      checkboxSelection: true,
      filter: true,
      floatingFilter: true,
    },
    {
      field: 'CustomerName',
      checkboxSelection: true,
      filter: true,
     
      floatingFilter: true,
      getQuickFilterText: (params) => {
        return params.value.name;
      },
    },
    { field: 'PhoneNumber',
      filter: true,
      floatingFilter: true,
     },
    { field: 'PackEndDate' },
    { field: 'RemainAlbums' },
    { field: 'PaymentDate' },

  ];

  rowData = [
    { SubscriptionPack: 'Basic', CustomerName: 'sravanthi vijay	', PhoneNumber:7093064813, PackEndDate: "22-10-2020"	,RemainAlbums:4,PaymentDate:"21-9-20 " },
    { SubscriptionPack: 'Basic', CustomerName: 'Vijay kumar Jakkula', PhoneNumber:9963879607, PackEndDate: "20-10-2020"	,RemainAlbums:0,PaymentDate:"20-9-20 " },
    {SubscriptionPack: 'Basic', CustomerName: 'Ravitejavale', PhoneNumber:7386921619, PackEndDate: "3-10-2020"	,RemainAlbums:1,PaymentDate:"3-9-20 "  },
    {SubscriptionPack: 'Basic', CustomerName: 'ShaikAzeem	', PhoneNumber:8328168695, PackEndDate: "2-10-2020"	,RemainAlbums:0,PaymentDate:"2-9-20 "},
    {SubscriptionPack: 'Basic', CustomerName: 'saikiran reddyannadi', PhoneNumber:9704432570, PackEndDate: "20-10-2020"	,RemainAlbums:0,PaymentDate:"20-9-20 "},
    {SubscriptionPack: 'Basic', CustomerName: 'ShahRajesh', PhoneNumber:9849973355, PackEndDate: "21-10-2020"	,RemainAlbums:0,PaymentDate:"21-9-20 "},
    {SubscriptionPack: 'Basic', CustomerName: 'SudhakarPandipati', PhoneNumber:7674933314, PackEndDate: "20-10-2020"	,RemainAlbums:1,PaymentDate:"20-9-20 "},
    {SubscriptionPack: 'Basic', CustomerName: 'sravani reddyjunnuthula', PhoneNumber:9963879607	, PackEndDate: "21-10-2020"	,RemainAlbums:0,PaymentDate:"21-9-20 "}
  ];


 }
