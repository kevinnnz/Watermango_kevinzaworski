## How to run

The front-end and the back-end are split into two seperate folders.
watermango_client & Watermango_kevin_zaworski.

To run the client open up terminal navigate to the client folder. Run the following commands. 
```
npm install

npm run start

```

To run the back-end open the .sln file in visual studio.
Open appsettings.json and replace the 'PlantContext' connection string with the connection string for the database in the folder App_Data. 

Save and run the project from Visual Studio. 

The server should launch on port 44367 if it does not, open launchSettings.json and change "sslPort" to 44367. 
Your web browser will pop up and display nothing. Navigate to /api/Plants to make sure everything is working.
