# AgriLinks Intern Assignment

> ## Problem Statement:

You are required to build an express JS API web-service which captures user contributed reports and returns an aggregate report in response.

Each report consists of a market-commodity combination for which prices in the Mandi(Market) are provided in a certain unit (along with their conversion factor to base unit - Kg).
You need to combine the reports per market-commodity by calculating the average of the report prices.

> The algorithm to generate the aggregate report is as below:
1. Look for an existing report with marketID-cmdtyID in the DB [1].
2. Convert the prices into base price based on the base unit [2]
3. Calculate the mean of prices.
4. Save the aggregated report with price per Kg.
5. Return the reportID of the generated report.


<br>

## Clone the project

```bash
git clone https://github.com/POOL4T7/shop.git
cd shop
```

<br>

## Install dependencies for server

```bash
# Install dependencies
npm i

# for more info look at package.json on root folder
```

<br>

## Before starting the server make a .env file on root folder and add your constant value

- NODE_ENV
- PORT
- MONGO_URL

<br>

## Run the server

```bash
# make sure you are on root directory of project
npm start
# Server runs on http://localhost:PORT

```


<br><br><br>

> # API Documentation:-

**Create Report**

- **URL** : /report

- **Method**: POST
- **Required Fields** :
  ```json
  {
    "userID": "user-2",
    "marketID": "market-1",
    "marketName": "Vashi Navi Mumbai",
    "cmdtyID": "cmdty-1",
    "cmdtyName": "Potato",
    "priceUnit": "Quintal",
    "convFctr": 100,
    "price": 1600

  }
  ```
- **response sample**
  ```json
    {
        "status": "success",
        "reportID": "626842903981b161271dde66"
    }
  ```

**Get Report**

- **URL**: /report?id=626842903981b161271dde66
- **Method**: GET
- **response sample**
  ```json
    {
        "_id": "626842903981b161271dde66",
        "userID": [
            "user-2",
            "user-1"
        ],
        "marketID": "market-1",
        "marketName": "Vashi Navi Mumbai",
        "cmdtyID": "cmdty-1",
        "cmdtyName": "Potato",
        "priceUnit": "kg",
        "price": 12.5,
        "createdAt": "2022-04-26T19:05:52.304Z",
        "updatedAt": "2022-04-26T19:07:40.152Z",
        "__v": 0
    }
  ```

  # Agrolinks-Intern
# Agrolinks-Intern
# Agrolinks-Intern
