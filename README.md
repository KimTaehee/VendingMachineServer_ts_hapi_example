# VendingMachineServer_ts_hapi_example
Example for my first Typescript + Hapi server

## Features
- Add a Menu: `POST /menu/add`  
```
{ 
  name: string,
  price: number
}
```
- Buy a Menu: `GET /menu/buy?name=[menuname]`
- Show results: `GET /getResult`
