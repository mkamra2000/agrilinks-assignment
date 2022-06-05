# Agrilinks Assignment

I created APIs according to description that is:-
* POST /reports
* GET /reports?reportID=yourReportID
* GET /test

## Ways to run project:-
* [Run Hosted Project](#run-hosted-project)
* [Run Locally](#run-locally)

# Run Hosted Project

I hosted this project on heroku. Simply Go to
[Agrilinks Assignment](https://agrilinks-assignment.herokuapp.com/test).

Here you can test project


# Run Locally

Clone the project

```bash
  git clone https://github.com/mkamra2000/agrilinks-assignment.git
```

Go to the project directory

```bash
  cd agrilinks-assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URI`


## Run on Localhost

Open Browser and Go to [localhost:3000/test](http://localhost:3000/test).

Here you can test APIs.

If you get Response like Internal Server Error or other error message then please check DATABASE_URI environment variable is properly configure or not.


## Examples

### POST Request
![Post Data](https://user-images.githubusercontent.com/73895535/172033256-59ea229e-3253-4d56-9914-f594281e5e32.png)

### POST Request Response
![POST Request Response](https://user-images.githubusercontent.com/73895535/172033287-86f0991a-1f5e-44c7-a9fb-a1b828ef4cd9.png)

### Sample Report Id
d848c209-f0bf-49b4-8bae-5ca64f638028

### GET Request
Put this reportID in GET Report input
![GET Request Response](https://user-images.githubusercontent.com/73895535/172033333-f578ff89-8fbe-4850-9533-e99509796dd8.png)

Or Simply Go to if you run project locally:-

[localhost:3000/reports?reportID=d848c209-f0bf-49b4-8bae-5ca64f638028](http://localhost:3000/reports?reportID=d848c209-f0bf-49b4-8bae-5ca64f638028).
