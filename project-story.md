## Inspiration
Voting is a necessary part of democracy and in the United States, the voting-age population turnout has been
historically lower and lags behind many other peer countries. We hope to encourage civic engagement by educating users
and making it easier to access information about upcoming elections.

## What it does
Our application aims to increase voter turnout by providing election information via the Google Civics API in a
convenient manner. With our application, a user can input a residential address and they will be presented with
information on any upcoming U.S. elections. Additionally, the user can view any information about local representatives
based on the address/location they enter.

## How we built it
This application was developed using React, Typescript, Vite, and Material UI. We queried the Google Civic Information
API to present the user with the appropriate election data. Axios is used to query multiple different API's from the
Google Cloud Suite from which the reposes are memoized in order to limit overuse of Google Civics API and hitting our
rate limit. We practiced a trunk based development methodology collaborate on this project and utilized git
branches and github issues to work together and minimize merge conflicts. The main branch was the single source of
truth and we checked out one off branches on a per issue basis which were then merged back into the main branch after
the completion of the issue.

## Challenges we ran into
Our first major challenge was learning TypeScript quickly so that we could start working on the actual implementation
of the application. The majority of our team had minimal prior experience with TypeScript and had to independently
learn the basics. The other challenges we faced were related to designing and brainstorming the appropriate user
experience and layout of the application. For example, we had to identify the appropriate data to display to the user
when we queried the Google Civics API. The Google Civics API holds various pieces of information about elections and
representatives but not all of it would be useful to the user. Through internal discussions and creating wireframes of
the Civic Info page, we identified the appropriate data to display.

## Accomplishments that we're proud of
We were able to get up to speed on a number of new topics in a short amount of time in order to create our application.
The majority of the team had limited experience with web applications prior to this so we are proud of the fact that we
quickly learned the basics of TypeScript and React. We’re also proud that all the pages in the application are
completely responsive. The implementation of a responsive design ensures an optimal user experience since the
application can be viewed on any screen size.

## What we learned
We learned the fundamentals of TypeScript and React, best practices in trunk based development using Git/Github,
utilizing Vite and Google Firebase, how to leverage the Material UI library, applying a responsive design, and
creating wireframes on Figma.

## What's next for Civic Central
In the future, we want to add other features to improve the user experience. We would like to add user accounts and a
search history for each account that would allow users to see their previously queried data. Another feature would be
the addition of a map to the Civic Info page that shows the address of the election. 