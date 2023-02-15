# django_react_file_upload
Quick and dirty implementation of drf endpoint to import excel/csv data from an react app.

# How to use this repo

## Create and activate venv

`python -m venv ./venv`

`source venv/bin/activate`

## Install python requirements
`pip install -r requirements.txt`

## Install node dependencies
`cd frontend && npm install`

## Migrate database
Execute 
`python manage.py migrate` in backend folder

## Create superuser account for django admin
Execute `python manage.py createsuperuser` in backend folder and follow instructions


## Start django development server
Execute `python manage.py runserver` in backend folder

## Start frontend development server
Execute `npm start` in frontend folder

## Use it
You can reach frontend via brownser on localhost:3000 and the django admin panel on localhost:8000/admin to inspect uploaded data.
In folder `backend/excel_import/tests` you can find example csv/excel file. The file must have two columns named column_a and column_b:

| column_a   | column_b         |
|------------|------------------|
| some chars | some other chars |
| and so     | on               |
