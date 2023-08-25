# Project Title: Civic Central
![Homepage](public/Civics-Central-Demo-gif.gif)

## Overview

### Project summary

In the United States, the voting-age population turnout has been historically lower and lags behind many other peer countries. We believe our project can help increase civic engagement by educating users. Our application aims to encourage users to participate in democracy by making it easier to access election information.

When a user inputs their residential address, we query the Google Civics API and present comprehensive information about on any upcoming U.S. elections. We also offer the user the ability to see information about representatives across all levels of government based on the users input.

Check out our Devpost here! [Devpost Civic Central](https://devpost.com/software/civic-central)

### Authors (by last name alphabetical order)

- **Derek Chen** - @drkchn – derche [at] seas[dot]upenn[dot]edu – [GitHub](https://github.com/drkchn)
- **Connor Fech** - @cfech – cfech [at] seas[dot]upenn[dot]edu – [GitHub](https://github.com/cfech)
- **Gunjan Jhaveri** - @gjhaveri98 – gjhaveri [at] seas[dot]upenn[dot]edu – [GitHub](https://github.com/gjhaveri98)
- **Prinsa Patel** - @prinsaa – prinsa [at] seas[dot]upenn[dot]edu – [GitHub](https://github.com/prinsaa)

## Usage

### Prerequisites

- [Node Version Manager](https://github.com/nvm-sh/nvm) Install to manage multiple Node.js versions (Optional)
- Node.js (version 18.16.0)
- Google Cloud Account
- Google Civic Information API key

### Installation

1. Clone the repository to your intended directory

```
git clone https://github.com/drkchn/mosa-upenn-SoC-2023.git
```

2. Run the command `npm install` to install all dependencies

3. create a file in the root directory called `.env`
    - Add the following environment variable: `VITE_CIVICS_API_KEY=[Your Key Here]`

4. Run the command `npm run start` to locally launch the project

5. Check out our codebase!

### Getting the Google Civic Information API key

- [API Documentation](https://developers.google.com/civic-information)

1. Navigate to [Google Cloud console](https://console.cloud.google.com/)
2. Go to Navigation menu --> APIs & Services --> Credentials
3. Click Create Credentials --> API Key
4. Go to Navigation menu --> APIs & Services --> Enabled APIs & Services --> Click on Enable APIs and Services button
5. Search for Civic Information API and click Enable

#### Restrict your API key to prevent unauthorized access (Optional)

1. Go to APIs & Services --> Credentials
2. Under API restrictions, click on Restrict key
3. Search for Google Civic Information API and check the box
4. Click Save button

#### Working with ENVs in React with Vite

- [Vite ENV docs](https://vitejs.dev/guide/env-and-mode.html)

1. create a `.env` file in the root directory
2. Add the following line

```
VITE_CIVICS_API_KEY=[Your API key goes here]
```
3. Never expose or `git push` your API key!

   - Environment variables must be prepended with VITE, or it will not be picked up during the application build.

4. Use it in the application

## Deployment & Features

### Using the Homepage Search Bar
![Address Search Bar](https://github.com/drkchn/mosa-upenn-SoC-2023/assets/57195399/2b24504b-71fc-4926-9ab9-fb17e9e53244)

1. Navigate to the search bar on the homepage.
2. Enter a U.S. residential address, then click on the `FIND MY ELECTIONS INFO!` button.
3. You will be redirected to a new page.
4. Check out any upcoming elections in your area, or view your representatives in government!
5. You can click on the Election name button or Officials' name button for more information.

### Navigating the Why Vote? Page
![Why Vote](https://github.com/drkchn/mosa-upenn-SoC-2023/assets/57195399/51ea3273-b9f2-4aea-8490-be124fb177c0)
![Voter Data](https://github.com/drkchn/mosa-upenn-SoC-2023/assets/57195399/d904d56d-3201-4183-8e20-ca7137e8810c)

1. Navigate to the Why Vote? page.
2. Each of the buttons is hyperlinked to reputable sources where you can learn more about the importance of voting.
3. You can see historical voting data from 1990-2022, based on sex and race at the bottom of the page.

### Changing the Website Theme
![Dark Theme](https://github.com/drkchn/mosa-upenn-SoC-2023/assets/57195399/be29120f-ecbf-491b-ae9d-62981a50a498)

1. Click on the icon with the symbol of a sun.
2. You can toggle between a light theme and a dark theme.
3. The purple light theme represents the shared bipartisan goal of educating voters and encouraging voters to participate in democracy!

### Reviewing the Request History
![Request history](https://github.com/drkchn/mosa-upenn-SoC-2023/assets/57195399/2d48ab50-64b4-4b8c-9ed7-e98677c1a0b8)

1. Click on the icon with the symbol of a magnifying glass and upwards line graph.
2. You can review all prior API requests and see if an API call was successful (200 OK) or unsuccessful (400 Bad Request).
3. You can click on `CLEAR` button to clear your request history.

### Learn More:
![About Us](https://github.com/drkchn/mosa-upenn-SoC-2023/assets/57195399/375aaa27-af8b-48e3-a44b-5322f0c7c9f8)

1. Click on the About page to learn more about the developers
2. Click on the Learn More button to see a detailed technical explanation of the application
3. You can also click on any of the technologies to learn more about them individually

### Responsive Design
![Responsive design 1](https://github.com/drkchn/mosa-upenn-SoC-2023/assets/57195399/5290dbaa-041b-4755-82b7-9e77bdfa709f) 
![Responsive design 2](https://github.com/drkchn/mosa-upenn-SoC-2023/assets/57195399/0f4b0ab9-b6df-413c-b51f-e0bd9aa29117)

1. All pages in the app are completely responsive
2. The app can be viewed on any screen size without compromising the user experience

### See Our Code:
1. Click on the `<>` icon
2. The GitHub repo will open in a new page

## Additional information

#### Application Design

Civics Central is developed using React, Typescript and Vite. Typescript is utilized to enforce strict static typing. Axios is used to query multiple different API's from the Google Cloud Suite from which the reposes are memoized in order to limit overuse of Google Civics API and hitting our rate limit. Our application using React Router to handle rendering different pages as well as React Context and State to share data between components. Material UI component library is leveraged for pre-built components, implementing custom application themes and applying principals of responsive design.

#### Local Development Environment

Our local development configuration is focused on enforcing frontend development best practices. We utilized prettier and eslint to enforce code format standards as well as build and push scripts that run linters and tests and the Vite build tool to package code for production. Our application also has React Testing Library and Jest for unit testing and code coverage reports. Environment variables are used to pass various run time arguments to the application, such as API keys.

#### Team Collaboration

Our team practiced a trunk based development methodology to effectively and efficiently collaborate on on this project. We utilized git branches and github issues in order to collaborate together and mitigate potential merge conflicts. In a trunk based development model the main branch acts as the single source of truth and one off branches are checked out on a per issue basis then merged back into the main branch after the issue is complete.

### Tools used

Which frameworks, libraries, or other tools did you use to create your project?

- [React.js](https://react.dev/) - Web framework
- [TypeScript](https://www.typescriptlang.org/) - Programming language to enforce static typing
- [Node.js](https://nodejs.org/en) - JavaScript runtime environment
- [Google Cloud](https://cloud.google.com/gcp) - Google Civic Information API, monitor API usage, and prevent API overuse
- [Google Firebase](https://firebase.google.com/) - To host the application
- [Vite.js](https://vitejs.dev/) - As a local development and build tool
- [Material UI](https://mui.com/) - Pre-build components, for consistent UI/UX, and responsive design
- [Git/GitHub](https://github.com/) - Version control system, trunk based development
- [Prettier](https://prettier.io/) - Enforce code formatting
- [EsLint](https://eslint.org/) - Enforce Javascript best practices


## Future Features

In the future we would like to add user accounts and a search history for each account. This would allow the user to see all of their previously queried data without having to search again. We would also like to integrate a map into the Civic Info page that shows the address/location fo the election. 0
