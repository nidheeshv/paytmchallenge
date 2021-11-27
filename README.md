# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

# 60-90 min Front End Web Coding Challenge

Create a web app to enter receipts into an expense report.

The vast majority of web development we do is in React, so a React solution is preferred. That being said, use what you know if you're not comfortable doing it in React.

Use any code editor, tools, 3rd party libraries and online resources you like.

## Requirements:

1. The expense report can have **up to 5 receipts**.

2. Each receipt should have a **description**, **amount** and **currency**.

- Any receipt can be entered in any of the supported currencies.

3. Each receipt should show its **amount in CAD $**

- Get exchange rates from https://api.exchangeratesapi.io/latest?base=CAD

4. There should be a **total for the entire expense report, in CAD $**, which should be displayed at the bottom of all receipts.

5. It should **prevent you from submitting a report totalling over $1,000 CAD**

   - If the total amount of all receipts exceeds $1,000 CAD it should disable the submit button and display a message stating that the expense report limit has been exceeded.

6. There should be a button to **submit the expense report**, which will log the receipt data to the browser's dev tool console.

## Time management

You'll have 60-90 minutes to complete as much as you can (the exact time limit might depend on peoples' schedules and other factors). If you have less time then don't worry about it -- this will be taken into account when we evaluate your solution.

_Time-saving tip_: It's OK for the page to represent a single expense report with no options to reset it or create another one. You also don't need to keep or show any previously submitted reports.

_Time-saving tip #2_: Don't waste time with webpack, build scripts, etc. Starters like Create React App are more than adequate for this.

## Extra credit

If you have extra time, you can **optionally** try to complete one or more of the following:

- Add some tests
  - If you’re using the provided laptop, Jest is pre-installed and pre-configured as part of Create React App.
- Make it look nice
- Cache the exchange rates for 10 seconds at a time
- Add a user preference for base currency so that it can be something other than CAD $

## Evaluation criteria

- Don't over-engineer just us to show us that you know Framework X or Y.
  - It matters more that you get it done, and that the solution is sensible given the simple requirements and the time constraints
- Your code should be organized, and it should be something you're relatively proud to have done in the limited time available
  - Quality matters more than the sheer number of requirements you implemented

---

## About the provided interview laptop and VSCode

You can use your own laptop instead of the provided one.

The password to unlock the provided interview laptop is either "paytm220" or "interview". The starting point created using create-react-app is under ~/code/react-challenge .

If you will be using the VSCode editor on the provided laptop but you’re not so familiar with it, here’s some tips:

- Command + SHIFT + P brings up a list of commands that you can search
- Command+ or Command- will grow or shrink text size
- OPTION + SHIFT + F will format all the code in the current file or the current selection
- These menu commands might be useful: View -> Problems, View -> Output (select which kind of output in dropdown), and View -> Terminal
- You can make VSCode act more like Vim or Sublime Text by going to Code -> Preferences -> Key Maps
- Feel free to install other editors/tools if you like
