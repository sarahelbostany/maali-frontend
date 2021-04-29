# maali

## overview:
- Maali is expense tracking app to track all your daily expsenses to help you make better finanical decisions.


## Wireframe:
- see screenshots

## User stories:
- When I go to the App, I see a login and signup button
- When I click on the login button, I can enter email and password to sign-in.
- When I click on the signup buttton, I am prompted to enter my name, email and password.
- When I am logged in, a dashboard will appear to enter what my monthly expenses I would like to input.
- Below will be empty fields to input type of category your purchase is, what the purchase was and how much did you spend.
- When you save a field on the top will show "Total amount spent"  and another field that will have "Amount left to spend"
- When you delete a purchase or edit, it will reflect on the top fields.


## Routes Inventory:
### User
| Method | Path                   | Description                  |
|--------|------------------------|-----------------------------|
| GET    | /users/:id             | Get user profile info       |
 POST   | /users/login          | Log-in page                      |
| POST   | /users                 | Sign-up page                 |
| DELETE    | /users/:id             |  Delete user       |


### Expense
| Method | Path                   | Purpose                         |
|--------|------------------------|---------------------------------|
| POST   | /brands/:id/save       | User can save expense input           |
| PUT    | /users/:id/edit        | User can edit expense input      |
| DELETE | /brands/:id/delete     | User can delete expense input    |



## Database ERD:
- see screenhots


## Frontend components tree:

## MVP checklist:
- Login, signup and logout?
- See dashboard with all input?
- Add, edit, delete and save any input added?


## Stretch goals
- Create a chart that breaks down all your purchases into categories to see what you spend the most on.
