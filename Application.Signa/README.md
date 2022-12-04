Executar container sqlserver

docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=sqlserver@2022" -p 1450:1433 --name sqlserver -d mcr.microsoft.com/mssql/server:2019-latest