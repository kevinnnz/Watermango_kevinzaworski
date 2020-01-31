## How to run

The front-end and the back-end are split into two seperate folders.
watermango_client & Watermango_kevin_zaworski.

To run the client open up terminal and run 
```
npm install

npm run start

```

To run the back-end open .sln in visual studio.
Open appsettings.json and rrplace the 'PlantContext' connection string with the connection string for the database in the folder App_Data. 

Save and run the project from Visual Studio. 

The server should launch on port 44367 if it does not, open launchSettings.json and change "sslPort" to 44367. 