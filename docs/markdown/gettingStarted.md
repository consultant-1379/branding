<head>
    <title>Getting Started</title>
</head>
# Getting Started

[Go to the Asset Library Showcase](showcase/library/index.html)

## Prerequisites

You should have a basic understanding of the HTML language as well as CSS language.
The Asset Library can be used separately from the other components of the UI SDK, however,
if you are using other components of the Client SDK, you should read the [CSS Code Style](/../../uisdk/latest/guidelines/css.html).

## Installation

The Asset library is distributed as a [CDT2](../../cdt2/latest) package. To install it, make sure **cdt2** is available, and type in your terminal:

    cdt2 package install assets

Alternatively, get the package from [UISDK Releases page](http://presentation-layer.lmera.ericsson.se/releases/#assets).

### Folder Structure

    assets/
        css/
            systemBar.css
            assets.css
        resources/
            /* list of folders which contain assets resources */


The Asset Library has to be used with all resources included.

## How to use the Asset Library

### Referencing the files from the HTML

You need to reference the CSS files from the HTML file which will use the Assets Library.

    <link href="PATH_TO/assets/css/assets.css" rel="stylesheet" type="text/css"/>
    <link href="PATH_TO/assets/css/systemBar.css" rel="stylesheet" type="text/css"/>


If you're using the container, you don't need to do anything as it already includes link to the assets.