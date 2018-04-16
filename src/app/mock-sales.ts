import { Sale } from './sale';

export const SALES: Sale[] = [
    {
        lat: 41.2851,
        lng: -96.00455,
        name: "St. Vincent DePaul",
        startDt: new Date("2018-04-13"),
        endDt: new Date("2018-04-15"),
        qty: 5000,
        descr: "8am to 8pm.  Over 5000 Books. Paperbacks and Hardcover."
    }
    ,
    {
        lat: 41.26291,
        lng: -96.05777,
        name: "Swanson Library",
        startDt: new Date("2018-04-23"),
        endDt: new Date("2018-04-27"),
        qty: 15000,
        descr: "8am to 6pm.  Over 15,000 Books. Library Sale."
    }
    ,
    {
        lat: 41.2614,
        lng: -96.0264,
        name: "Omaha Public Schools Book Sale",
        startDt: new Date("2018-05-07"),
        endDt: new Date("2018-05-18"),
        qty: 8000,
        descr: "Noon to 6pm. 8,000 Books. Elementary school library sale. Many chapter books for young readers."
    }
    ,
    {
        lat: 41.20348,
        lng: -96.13268,
        name: "Millard Schools Book Sale",
        startDt: new Date("2018-06-11"),
        endDt: new Date("2018-06-15"),
        qty: 3000,
        descr: "8am to Noon. 3,000 Books. Middle school library sale. Primarily young adult fiction, some text books."
    }
];