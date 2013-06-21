SVG-Gruntenstein
================

A combination of the genius of others to make lean SVGs and their fallback equivalents.

## Why 'Gruntenstein'?
The word 'Gruntenstein' has been used as this project is merely standing on the shoulders of giants. Nothing is original, it's merely the assembly of a number of amazing constituent parts into a seperate and hopefully useful thing. The name is therefore a nod (using someone elses head) to the fictional 'Frankenstein' of Mary Shelleys gothic novel.

## What does it do?
You've made SVG assets and you need data URIs, PNG versions or both. Feck me, you're in luck...

The premise of 'SVG Gruntenstein' is to make a tiny utility on your system that can take any number of SVG graphics, optimise them (using [SVGO](https://github.com/svg/svgo) via [grunt-svgmin](https://github.com/sindresorhus/grunt-svgmin)) and then create CSS based data URIs of them, PNG fallback graphics, CSS based data URIs of those and a fallback CSS stylesheet for the PNGs using the incredible [grunticon](https://github.com/filamentgroup/grunticon).
As an added bit of utility it uses the Grunt team's [contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) to enable old SVGs and their output to be easily removed.

## Dependencies
'SVG Gruntenstein' uses [Grunt.js](http://gruntjs.com) and [Node](http://nodejs.org) along with the aforementioned tools.

### Warning
- This is a command line based tool. Both for install and usage. But you're on Github so we'll assume that's OK.
- I've installed this on OS X systems at present. No idea (yet) if it will work on Windows/Linux.

## How to install
- Download [Nodejs](http://nodejs.org) and install it (clicky clicky GUI install).
- If you don't already have Grunt installed you will need it. Open Terminal and run `npm install -g grunt-cli`.
- Move to where you want SVG Gruntenstein to live and run `git clone https://github.com/benfrain/SVG-Gruntenstein.git`. You can call the folder what you want. It may make more sense to call it 'SVGoptimiser' for example.
- Now move to the folder you have cloned this repo to and run 'npm install`. This should then auto install all the needed grunt plugin goodness.

## Usage instructions

1. Place any SVGs into the 'svgs' folder within this project.
2. Open this folder (e.g. 'SVGoptimiser') in the Terminal
3. If you already have a 'pngs' folder in the root run this command `grunt clean`. That will remove any prior PNG images
4. Now run `grunt` - after a short space of time, you should see a message `Done, without errors`. Your assets are now created.

## What 'SVG Gruntenstein' actually produces
After running this you will have a number of assets created:

- Your original SVGs (optimised) - they can be found in the 'svgs' folder
- Automagically generated PNGs of each SVG - they can be found in 'output/png/'
- A CSS file containing all PNG images as data URIs (You can find the file here: 'output/icons.data.png.css') 
- A CSS file containing all SVG images as data URIs (You can find the file here: 'output/icons.data.svg.css')
- A fallback style sheet referencing the generated PNG (in case you have to support browsers that don't like data URIs). You can find that at 'icons.fallback.css' 
- A preview HTML file showing what you created
