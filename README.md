# Mentorship Diary Application 

Our project brief was to build an app that would enhance the School of Code mentoring experience and the solution that the team of 4 people I was part of, managed to come up with in less than a week, was this tool that allows [School of Code](https://www.schoolofcode.co.uk/) bootcampers to track and document their mentor/mentee relantionship.This is basically an online diary of the [School of Code](https://www.schoolofcode.co.uk/) bootcamper mentorship journey.

The application consist of a **Home** page:

![mentorship-diary-home](https://user-images.githubusercontent.com/70764326/106596359-cad7eb00-654c-11eb-934f-35e732037fdf.png)

**Weekly Form** where mentee can go through a predefine set of questions together with their mentor.The questions are set with placeholder text to help guide the discussion. 

![mentorship-diary-weekly-form](https://user-images.githubusercontent.com/70764326/106596972-a9c3ca00-654d-11eb-91ce-7102d9c0c75f.png)

The data can be viewed on the **Achievement History** page by selecting the prefered week to review.

![mentorship-diary-achievement-history](https://user-images.githubusercontent.com/70764326/106597157-edb6cf00-654d-11eb-9ddc-61c80685a7ec.png)

We also added in a **Contact** page with School of Code contacts.

![mentorship-diary-contact](https://user-images.githubusercontent.com/70764326/106598206-5488b800-654f-11eb-8448-6a128e75d20d.png)

The **Authentication** was done using [Firebase](https://firebase.google.com/) .

![mentorship-diary-authentication](https://user-images.githubusercontent.com/70764326/106597795-d0cecb80-654e-11eb-9002-1daae449b413.png)


If you want to see the frontend code of this application head to this [repository](https://github.com/vmilitaru/Mentorship-Diary-client.git).

## Live Project

Here is the [deployed version](https://mentorship-diary.netlify.app/).

## Stack

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Heroku](https://www.heroku.com/)

## Getting started

1. Clone the repo: `https://github.com/vmilitaru/Mentorship-Diary-server.git`

2. Download the required npm modules: `npm i`

## Configuring a Database on Heroku

Setting up a database on Heroku :

3. Go to [heroku](https://signup.heroku.com/login) and sign up for a free account.

4. Create a new app, give it a name and select the region.

5. Navigate to the resources tab of your new app.

6. In the Add-ons search bar, type postgres and select Heroku Postgres.

7. Select the `Hobby Dev - Free` plan and click `Submit Order Form`.

8. Click the link to `Heroku Postgres`, this will open a new tab and under the _Settings_ tab you will be able to view your credentials.

### Set up environment variables

To connect the server with your Heroku database you'll need to locate your credentials in the settings tab and set the appropriate environment variables.

9. Copy the content of `.env.example` into a new file called `.env.local` at the root of this project, then add the missing environment variables:

    - `PGHOST`, `PGUSER`, `PGDATABASE`, `PGPASSWORD` and `PGPORT` - Can be found in the _Heroku Dashboard>Your App>Overview>Heroku Postgres>Settings_ under _View Credentials_


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the server in the development mode.

### `npm createTable`

This script is creating the table in your new set up Heroku data base.

# Deploy on Heroku

You can deploy this server to the cloud with [Heroku](https://www.heroku.com/) ([Documentation](https://devcenter.heroku.com/categories/reference#deployment)).

### Deploy Your Local Project 

One way of deploying your local project to Heroku is with GitHub.

- Push your code  to GitHub and make sure you granted access to your **Heroku** account as well to your Github account.You can check that in _Account Settings_ under _Applications_ tab in _Third-party Services_ section. 

- Then navigate back to your project and under the _Deploy_ tab select as the _Deployment method_: _Github_. 

- Select the GitHub account where your repository is and search the repo you want to connect with, then click _Connect_. 

- Make sure to enable the _Automatic deploys_ section if you want to re-deploy your code for every change you push up to GitHub.

- Select the relevant branch you want to deploy and click _Deploy Branch_.

- In the _Activity_ tab you can check the deployment progress and when the app goes live.

**Important**:  We still need to connect the server with the database and the way to do that is to specify our **Environment Variables** in the deployed application. 

- Go to _Settings_ tab and in the _Config Vars_ section under the _Reveal Config Vars_ menu you will be able to insert all your local **Environment Variables**.

- When you are using a Heroku Postgres database you are given a `DATABASE_URL` that now you can use to connect your express server to. This URL is a replacement of the current PG credentials that you have on your local environment variables file. 

- Depending on the frameworks or programming languages that you use you need to configure the  db accordingly 👉 [Documentation](https://devcenter.heroku.com/articles/heroku-postgresql)

- After you updated the code accordingly save the code and push it up to GitHub. If you enabled _Automatic deploys_ the app will be automatically re-deployed.

- If you go to _Settings_ tab under _Domains_ section you will be able to find the live url of your app. 


## Contributors ✨

<table>
  <tr>
    <td align="center"><a href="https://github.com/FreshtaEbrahim"><img src="https://avatars.githubusercontent.com/u/56118343?s=400&u=7db01c710b8ba0ea0f75efbea2f5113a396a839b&v=4" width="100px;" alt=""/><br /><sub><b>Freshta Ebrahim</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/vmilitaru"><img src="https://avatars0.githubusercontent.com/u/70764326?s=120&v=4" width="100px;" alt=""/><br /><sub><b>Valentina Militaru</b></sub></a><br /></td>
   <td align="center"><a href="https://github.com/cod3rcarl"><img src="https://avatars.githubusercontent.com/u/70280561?s=400&u=423202e286eba513af63e4225e44d6fea8b6475a&v=4" width="100px;" alt=""/><br /><sub><b>Carl McIntosh</b></sub></a><br /></td>
   <td align="center"><a href="https://github.com/Jonowens84"><img src="https://ca.slack-edge.com/T6L933W4X-U01A0GAG4LE-7362c19b41f6-512" width="100px;" alt=""/><br /><sub><b>Jon Owens</b></sub></a><br /></td>
  </tr>
</table>

