# `document-structure-tree`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Run `yarn start` to run the app in development mode.
<!-- TODO: Or visit the deployed site.-->

## Styling (CSS in JS)
typed camelCase css objects using JSX-Pragma `/** @jsx jsx */`

(additionally a `jsx;` statement workaround: [emotion-js/emotion#1112](https://github.com/emotion-js/emotion/issues/1112))

see https://emotion.sh/docs/object-styles

## Project Folder Structure
At the moment:
- generic folders (`components`, `screens`, `services`)
To be replaced with:
- feature folders (`Tree`, `Settings`, ...)
  e.g. (avoided for too much nesting):
  - https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1
  - https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346
