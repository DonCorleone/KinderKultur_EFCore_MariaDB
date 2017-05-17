# Welcome to Kinderkultur .Net Core Web API with EF Core and Angular Client

## Web API : ASP.Net Core WebApi with Enity Framework Core 
This API implements 

__GET methods:__  
_GET /api/Person_  
_GET /api/Person/{id}_  

__POST methods:__   
_POST /api/Person_

    {  
        "name" : "aName",  
        "vorname" : "aPrename",  
        "eMail" : "aMail@adress.com"  
    }  

http://localhost:5000/api/Person/  

__inspired by:__

https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-vsc  
https://docs.microsoft.com/en-us/ef/core/get-started/netcore/new-db-sqlite
https://channel9.msdn.com/Events/Build/2017/B8094  
https://docs.microsoft.com/en-us/aspnet/core/publishing/  

[EF Core Modelling](https://docs.microsoft.com/en-us/ef/core/modeling/)  
[EF Core CLI](https://docs.microsoft.com/en-us/ef/core/miscellaneous/cli/dotnet)  

    dotnet ef migrations add InitialCreate  
    dotnet ef database update  

## DB: Maria DB

https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql/blob/master/README.md#getting-started  
https://mariadb.com/kb/en/mariadb/starting-and-stopping-mariadb-automatically/  

## Client : Angular with WebPack and Bootstrap
generated with yeoman

    npm install -g yo generator-aspnetcore-spa 
    yo aspnetcore-spa 
_http://blog.stevensanderson.com/2016/05/02/angular2-react-knockout-apps-on-aspnet-core/_
    
## Solution : Visual Studio Code

_https://jonhilton.net/2016/12/01/fast-track-your-angular-2-and-net-core-web-app-development/_

local development:  
    _cd /Users/dev/Documents/angular/angularWebApi_

    dotnet restore  
    dotnet build  
    dotnet run  
