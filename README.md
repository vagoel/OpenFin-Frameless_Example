## Note - To start debugging using VScode refer to the launch configuration.Run the openfin application (npm start) and then start the debugger from VScode

# OpenFin-Frameless_Example

This project explains how to create an OpenFin Frameless Window with a custom title-bar. OpenFin allows you to remove the standard O/S from from a window, however this also reoves the standard window controls normally expected by an end user. This project includes a custom title bar that returns the controls to the user.

## Installing and running the project

Installing:

     npm install

Running

    npm start

## Removing the Frame from a window

The standard frame can be removed from an applications main window using the Application Configuration file (See: https://developers.openfin.co/docs/application-configuration) by setting `"frame" : false`, in this example the applicatiopn configuration can be found in /public/config/app.json

The frame can be removed from child windows by using the frame parameter in the Window Options object (https://developer.openfin.co/docs/javascript/stable/Window.html#~options) passed into the Window create method (https://developer.openfin.co/docs/javascript/stable/tutorial-Window.create.html) (This project does not current have an example of this)

## Creating the Title frame

This project uses CSS to create the tile bar, and defines a Drag Region using the `-webkit-app-region: drag;` parameter and control buttons using the OpenFin API.

## Adding a draggable region

The Draggable region in the demo is defined in public/app/css/main.css in the #titleBar, the area is defined as draggable by adding `-webkit-app-region: drag;` to the element

## Adding a minimize button

The Minimize example in this project is found in /public/scripts/main.js, it utilizes the OpenFin API Window.minimize() method (https://developer.openfin.co/docs/javascript/stable/tutorial-Window.minimize.html)

## Adding a restore button

The Minimize example in this project is found in /public/scripts/main.js, it utilizes the OpenFin API Window.restore() method (https://developer.openfin.co/docs/javascript/stable/tutorial-Window.restore.html)

## Adding a Maximise button

The Minimize example in this project is found in /public/scripts/main.js, it utilizes the OpenFin API Window.maximize() method (https://developer.openfin.co/docs/javascript/stable/tutorial-Window.maximize.html)

## Adding a Close button

The Minimize example in this project is found in /public/scripts/main.js, it utilizes the OpenFin API Window.close() method (https://developer.openfin.co/docs/javascript/stable/tutorial-Window.close.html)
