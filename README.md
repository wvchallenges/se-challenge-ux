# Wave UI/UX Engineering Challenge

Applicants for the UI/UX Engineer role at Wave must complete the following challenge, and submit a solution prior to the on-site technical interview.

The purpose of this exercise is to create something that we can work on together during the on-site. We do this so that you get a chance to collaborate with Wavers during the interview in a situation where you know something better than us (it's your code, after all!).  

We also want to give you a feel of what you could expect to work on in this role.
You will be required to work extensively with React in this role, so we would like to evaluate your skills using React with this exercise.

There isn't a hard deadline for this exercise; take as long as you need to complete it. However, in terms of total time spent actively working on the challenge, we ask that you not spend more than a few hours, as we value your time and are happy to leave things open to discussion in the on-site interview.

Feel free to email dev.careers@waveapps.com if you have any questions.

## Scenario
Imagine that the design team at Wave has recognized two places that use a similar UI component to provide **insights** to our users. We want to formalize this by implementing a reusable component in our design library. (Think of this component as a Lego block that can be used in multiple places.)


You have been provided with this [Figma file](https://www.figma.com/file/AALOx1yqhdDfTbBsVyT1Hb/?node-id=0%3A1) outlining the design details of this component. (You will be able to view the file without an account, but will need to be logged into a free Figma account to view the CSS properties in the Inspect tab in Figma). If you are not familiar with using Figma start on [this page](https://www.figma.com/file/AALOx1yqhdDfTbBsVyT1Hb/UI%2FUX-Engineer-Take-Home-Exercise?node-id=10%3A702) where we have included some basic tips on using the tool.

## Project requirements


1. Implement the Insights component as a React component, using Typescript or Javascript. (The project is set up to support either, but there are bonus points for using Typescript.)

![insights component preview](./assets/insights-component-preview.png "insights component preview")

2.  Implement styling for the Insights component using SCSS or vanilla CSS. (The project is set up to support either.)  
    a) The Figma designs use [Lato](https://fonts.google.com/share?selection.family=Lato:wght@400;700) as the font (Regular and Bold). This font is available through Google fonts.  
    b) Do not use Styled Components as our current ecosystem does not support this and we want to evaluate you based on what you’ll actually be working with in this role.

3. Use Typescript or PropTypes to define appropriate datatypes for your component.
4. Implement the component to work **on at least one** of the following sizes as defined in the Figma file:  
    a) Wide screen sizes  
    b) Medium screen sizes  
    c) Narrow screen sizes
5. Update the [App.tsx](./src/App.tsx) file to render/use your insights component.
6. Optional: Write test(s) for your component.
We know you might be pressed for time, so we won’t consider the absence of tests as a negative. (The project is set up to use Enzyme or React Testing Library)

## How to run this project

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Documentation

Please answer the following questions by committing your answers to this `README.md`

1. How did you test/verify that your implementation was correct?
2. Would you make any further changes to your solution before shipping/releasing?
3. What compromises, if any, did you have to make as a result of the time constraints of this challenge?
4. What assumptions, if any, did you have to make to complete this exercise?

## Submission instructions
1. Clone the repository. (please don't push your code submission as a public branch of this repo)
2. Complete your project as described above within your local repository.
3. Ensure everything you want to commit is committed.
4. Create a git bundle: `git bundle create your_name.bundle --all`
5. Email the bundle file to dev.careers@waveapps.com and CC the recruiter you have been in contact with.

## Evaluation
1. Did you follow the instructions for submission?
2. Does your submission implement the insights component?
2. Did you complete the steps outlined in the [Documentation](#documentation) section above?
3. Does your solution use appropriate data types?
4. Can your component be easily used on multiple pages?





