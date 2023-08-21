# Project Title: Civic Central

## Overview

### Project summary

In the United States, the voting-age population turnout has been historically lower and lags behind many other peer countries. We believe our project can help increase civic engagement by educating users. Our application aims to encourage users to participate in democracy by making it easier to access election information. When a user inputs their residential address, we query the Google Civics API to comprehensive information about on any upcoming U.S. elections. We also offer the user the ability to see information about their representatives on several different levels of government.

Include the link to your Devpost project page here: [Devpost](https://...)

### Authors (by last name alphabetical order)

- **Derek Chen** - @drkchn – derche [at] seas[dot]upenn[dot]edu – [GitHub](https://github.com/drkchn)
- **Connor Fech** - @cfech – cfech [at] seas[dot]upenn[dot]edu – [GitHub](https://github.com/cfech)
- **Gunjan Jhaveri** - @? – gjhaveri [at] seas[dot]upenn[dot]edu – [GitHub](https://github.com/gjhaveri98)
- **Prinsa Patel** - @prinsa – prinsa [at] seas[dot]upenn[dot]edu – [GitHub](https://github.com/prinsaa)

## Usage

This section walks a prospective user through the process of installing and running the project on their local machine. The more detailed and the more accurate, the better. User-friendly instructions will entice prospective users (including judges) to engage more deeply with your project, which could improve your hackathon score.

### Prerequisites

- Node.js (version 18.16.0)
- Google Civic Information API key
  What prerequisites must be installed in order to run your project, and how do you install them?

```
Provide code samples in this fenced code block.
```

### Installation

1. Clone the repository to your intended directory

```
git clone https://github.com/drkchn/mosa-upenn-SoC-2023.git
```

2. Run the command `npm install` to install all dependencies

3. Run the command `npm run start` to locally launch the project

4. Check out our codebase!

Give a step-by-step rundown of how to **install** your project.

State step 1.

```
Provide code samples in this fenced code block.
```

State step 2.

```
Provide code samples in this fenced code block.
```

Etc.

### Getting the Google Civic Information API key

- [API Documentation](https://developers.google.com/civic-information)

1. Navigate to [Google Cloud console](https://console.cloud.google.com/)
2. Go to Navigation menu --> APIs & Services --> Credentials
3. Click Create Credentials --> API Key
4. Go to Navigation menu --> APIs & Services --> Enabled APIs & Services --> Click on Enable APIs and Services button
5. Search for Civic Information API and click Enable

#### Restrict your API key to prevent unauthorized access

1. Go to APIs & Services --> Credentials
2. Under API restrictions, click on Restrict key
3. Search for Google Civic Information API and check the box
4. Click Save button

#### Working with ENVs in React with Vite

- [Vite ENV docs](https://vitejs.dev/guide/env-and-mode.html)

1. create a `.env` file in the root directory
2. Add the following line
3. Never expose or `git push` your API key!

```
VITE_CIVICS_API_KEY=[Your API key goes here]
```

- ENV must be prepended with VITE, or it will not be picked up.

3. Use it in the application

### Deployment & Features

Give a step-by-step rundown of how to **use** your project. Including screenshots in this section can be highly effective for highlighting specific features of your project.

#### Using the Homepage Search Bar

1. Navigate to the search bar on the homepage.
2. Enter a U.S. residential address, then click on the `FIND MY ELECTIONS INFO!` button.
3. You will be redirected to a new page.
4. Check out any upcoming elections in your area, or view your representatives in government!
5. You can click on the Election name button or Officials' name button for more information.

#### Navigating the Why Vote? Page

1. Navigate to the Why Vote? page.
2. Each of the buttons is hyperlinked to reputable sources where you can learn more about the importance of voting.
3. You can see historical voting data from 1990-2022, based on sex and race at the bottom of the page.

#### Changing the Website Theme

1. Click on the icon with the symbol of a sun.
2. You can toggle between a light theme and a dark theme.
3. The purple light theme represents the shared bipartisan goal of educating voters and encouraging voters to participate in democracy!

#### Reviewing the Request History

1. Click on the icon with the symbol of a magnifying glass and upwards line graph.
2. You can review all prior API requests and see if an API call was successful (200 OK) or unsuccessful (400 Bad Request).
3. You can click on `CLEAR` button to clear your request history.

State step 1.

```
Provide code samples in this fenced code block.
```

State step 2.

```
Provide code samples in this fenced code block.
```

Etc.

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
- [Vite.js](https://vitejs.dev/) - Creating unit tests?
- [Material UI](https://mui.com/) - Pre-build components, for consistent UI/UX, and responsive design
- [Git/GitHub](https://github.com/) - Version control system, trunk based development

### Acknowledgments

Use anyone else's code? Inspired by a particular project? List / link here.

- Item 1
- Item 2
- Item 3

### License

If desired, add a section for your license. Reference sites like https://choosealicense.com can help you choose which license meets your needs.

_For example:_

> This package is licensed under the GNU General Public License v3.0 (<a href="https://choosealicense.com/licenses/gpl-3.0/" target="_blank">GPL-3</a>).
