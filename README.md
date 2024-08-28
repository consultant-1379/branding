# Asset Library

## Why the Asset Library?
The Asset Library makes it easy for web developers to view and use Ericsson Branding UI assets which ensure consistency
and reuse of branded assets.

## What is the Asset Library?
The Asset Library contains re-usable UI HTML5 assets that are approved by Ericsson Branding. All the assets are
available in a downloadable CSS file and are viewable in a showcase library.

**For Docs, pre-packed downloads and everything else see**:
[Asset Library Docs](https://arm1s11-eiffel004.eiffel.gic.ericsson.se:8443/nexus/content/sites/tor/branding/latest/index.html).

**Note**: If you require a new asset that is not included in the library then contributions through the CDS Portal are
welcome and encouraged. Additionally, if you have feedback on the asset(s) please contact the library guardians via the
CDS Portal.

## Who is this for?
The Asset Library is targeted at web developers with HTML5/CSS3 skills.

## Supported Browsers
The Asset Library is compliant with the following web browsers:

* Mozilla Firefox 17 Extended Support Release (ESR)
* Google Chrome (latest)

## Working with Source Code

* Execute `npm install` which will install all of the tools used by this repo
* Execute `cdt2 serve` if working with examples
* To run the showcase in development environment, use the following

    cd showcase
    cdt2 package install
    cdt2 package link ../
    cdt2 serve