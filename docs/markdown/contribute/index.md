<head>
    <title>How to Contribute - Overview</title>
</head>
# How to Contribute

## Introduction

### Prerequisites

You should be familiar with the techniques and concepts described in the
            [Getting Started page](../gettingStarted.html)

### Review Process

The code sent for contribution will be reviewed by the UX and Code Guardians.
The resulting feedback will be sent ASAP. Then, if the UX
Software Brand Consistency Board (SWBCB).

### Resources

A list of Cheat Sheets about Gerrit is available on the
[Asset Library Confluence page](https://confluence-oss.lmera.ericsson.se/display/AL/Cheat+Sheet)

## Steps

This process is to be followed if you wish to create a new asset or a new widget (or update existing one)
to the SDK. The following steps will guide you through the process.
**Useful links**
[CDS Portal](http://pdu-oss-tools.lmera.ericsson.se/cds/)

1.  **Report an Issues or propose a New features**

    Follow the [How to report an Issues or propose a New features](../report/index.html)

2.  **Define and submit the UX to review**

    This step can be skipped if no UX is impacted by your changes.

    Define the UX (design and behaviour) of the new asset / widget following the [UI Design guidelines](../../../uidesign/latest/index.html).
    No code is needed is this step, just a UX description document along with illustration.

    Contact the UX Guardian(s) directly **by email** to submit a design.
    The list of UX Guardians is available on [UI Design Confluence](http://confluence-oss.lmera.ericsson.se/display/UI/Guardians).
    The Guardian(s) will reply ASAP and will determine if the UX needs approval by
    the SWBCT. The Brand Consistency Team has a meeting periodically to review UX. In the case you wish
    to attend this meeting, you should discuss with the UX Guardian.  
    The UX of the asset / widget must get approved in order to be able to complete the steps.

3.  **Modify / Write the code**

    If you don't have the code already, the instructions to download the repository are on [Asset Library -> Gerrit](http://confluence-oss.lmera.ericsson.se/display/AL/Gerrit).
    The CSS code for each asset is placed in `root/src/css`.
    As you write the code, please follow the [CSS guidelines](/../../uisdk/latest/guidelines/css.html).
    The asset should be also be included in the showcase following these [guidelines](contributeAddToShowcase.html).  
    The build.json file should be modified to have new css file if you are creating new asset or widget.
    Otherwise styles will not appear in dev/prod version in the assets.css.

4.  **Submit the contribution**

    The instructions to submit a contribution are detailed on the Asset Library Confluence page at [Asset Library -> Gerrit](http://confluence-oss.lmera.ericsson.se/display/AL/Gerrit).