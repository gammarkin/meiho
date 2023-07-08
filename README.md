# Email-Prompt-Server

Email-Prompt-Server is a dynamic email content generator and sender, designed to facilitate customized email communication. It takes user input from the frontend, generates email content based on the provided information, and then sends it as an HTML email.

Leveraging the power of the MJML framework, this project allows for the creation of responsive email templates that are highly customizable and compatible across various email clients. Once the content is created and transformed into MJML, it is further converted to HTML and sent via email.

This project uses Node.js for server-side operations, Nodemailer for email sending, and MJML for responsive email template creation. The combination of these tools results in a powerful, flexible, and user-friendly service for dynamic email generation and dispatch.

Whether you're sending personalized promotional emails, transactional emails, or any other types of communication, Email-Prompt-Server provides an efficient and effective solution.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Secure Google App Password Setup](#secure-google-app-password-setup)

## Installation

You will need Docker and Docker Compose installed to run this project. If you do not have them installed, you can find the installation guides here:

- Docker: [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)
- Docker Compose: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

Once you have Docker and Docker Compose installed, you can set up and run the project using the following steps:

```bash
docker-compose up -d
docker exec -it node bash
npm install
npm run dev
```

## Secure Google App Password Setup

To set up Google Secure App Password click [here](https://support.google.com/accounts/answer/185833?visit_id=638218787216072383-4129595565&p=InvalidSecondFactor&rd=1)

## Testing

IMPORTANT:

__THE FOLLOWING COMMANDS ARE TO BE ALL EXECUTED IN THE ROOT OF THE PROJECT FOLDER.__

(to be removed) Currently, the tests are only in the create-backend-tests branch. So you will need to move to said branch of git. Execute the following command:

```
git checkout create-backend-tests
```

Next, to make sure you have all the up-to-date tests, execute:

```
git pull origin master
```

Now, install all the dependecies of the project with the command:

```
npm install
```

Finally, run the tests with the following command:
```
npm run test:mocha
```
