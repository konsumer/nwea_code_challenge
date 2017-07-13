# Coding exercise for David Konsumer's NWEA application.

You can see it running [here](http://konsumer.js.org/nwea_code_challenge).

## usage

You can install dependencies with `npm install`.

* `npm start` : Run complete hot-reloading development server
* `npm test` : Lint & watch unit & functional-component tests with [jest](https://facebook.github.io/jest) & [enzyme](http://airbnb.io/enzyme/) (Test-driven development)
* `npm run build` :  Produce a fully optimized build of project, ready for deployment to any static webserver in `webroot/`
* `npm run deploy`: Build & deploy site [here](http://konsumer.js.org/nwea_code_challenge)
* `npm run storybook` : Run hot-reloading storybook server, complete with component info (Styleguide-driven development)
* `npm run storybook-build` : Build static version of storybook to use as documentation site

## features

* Complete build, deploy, and development tools
* Best practices for code organization and repo management
* Optimized web-build
* TDD & SDD
* Consistant code-style & linting ([standard](https://github.com/feross/standard), ES2017)
* Functional [storybook](https://github.com/storybooks/storybook) site for component documentation and development.

## missing

I didn't have a great deal of time (about 4 hours) to work on it. I consider it a rough prototype, which I woud further componentize and build out, given more time. Here are some things I would improve:

* More complete component & unit testing
* Networking: it'd be neat if it ran over socket.io for networked multiplayer.
* Improved styling: The card style could be greatly improved, and some CSS animations would make everything really slick.
* I used `create-react-app` to quickly get up-and-running. Currently, they don't have good dependency-tracking for new versions of stuff (especially for webpack & eslint related things) which causes a few warnings, and uses old mismatched version of a few things. With more time, I would configure webpack 3.x.x directly, and manually setup jest testing, standardjs linting, etc. This would also allow me to take advantage of new webpack stuff like better tree-shaking and improved AST-level minification. I am pretty confident that `create-react-app` will come back in sync with the latest stuff, at some point, but I didn't have time to fix the issues I found.
* I could improve the storybook config with some plugins. Currently, it only uses knobs.
* There are some [nice utilities](https://github.com/markerikson/redux-ecosystem-links/blob/master/action-reducer-generators.md) for automatically building a reducer from actions. I think this would improve maintainability, but I didn't have time to evaluate this approach, and just assembled my reducer, manually.
* Components could (and should) be further broken-down. It was faster to initially not split them out.

## original asignment

Consider the following requirements when completing the below code sample:

* The game should be configurable to be played by 2 or more players.
* The game should be executable to demo the implementation
* Best practices should be followed
* Unit tests should be implemented to prove the functionality of the code
* Best Practices (OO Design, TDD, Code Maintenance, etc)
* Documentation
* Unit Tests
* Executable demo
* Provide all source files for review

http://en.wikipedia.org/wiki/War_(card_game)

Feel free to make up your own rules for edge cases.

Create the game of war in Java or Javascript for 2 or more players.
