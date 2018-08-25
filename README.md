# Restaurant Reviews Static Site Conversion

This is the fifth project for my Front-End Nanodegree through [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001), for which I was awarded a merit scholarship by [Grow with Google](https://grow.google/).

## Project Overview Instructions from Udacity

"For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users."

The [starter code](https://github.com/udacity/mws-restaurant-stage-1) is on Udacity's GitHub. I didn't fork this project because I wanted my commits to count on my contributions graph, and I won't be merging my changes back in to the starter files.

## Instructions to download and run

Clone the repo down to your computer and run `npm install` in the project folder to install the project dependencies.

To build the production site, run `npm run build`. Then cd into the newly created `dist` folder and either start a simple Python server with `python -m SimpleHTTPServer 8000` or use a service like [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en). In Python earlier than v3 you may need to use port 8069.

To launch the dev server, run `npm run serve`. BUT:

**Note about the Service Worker**
The service worker does not work properly on the dev server so testing there will not work for the restaurant details pages. The dev server is launched through BrowserSync via Gulp, and BrowserSync proxies request URLs, so they end up not matching the cache names. The home page of the app works fine offline but the details pages aren't directed properly.

### Dependencies and resources

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/).

This project uses Gulp 4.0 as a build tool and several plugins to transpile and minify the code for production. It does **not** use Gulp-CLI globally, so Gulp commands must be run through `npx` (npm >= 5.2.0) unless Gulp is installed globally on your machine.

I found this [Webstoemp article](https://www.webstoemp.com/blog/switching-to-gulp4/) and this linked [Joe Zimmerman page](https://www.joezimjs.com/javascript/complete-guide-upgrading-gulp-4/) to be invaluable as I struggled through the Gulp 4.0 docs. Most of the resources for Gulp 4.0 are from 2-3 years ago. I am baffled as to why this version has been in development for so long and why NPM recommended that I upgrade to this version when the support is not great. But I did it, so I figured it out, and ultimately that was a good learning experience, although frustrating.

I used [WebAIM's recommended styling](https://webaim.org/techniques/css/invisiblecontent/) to visually hide content that will be read by screen readers.
