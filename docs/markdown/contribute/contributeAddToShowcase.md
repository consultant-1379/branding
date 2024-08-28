<head>
    <title>How to Contribute - Add to the Showcase</title>
</head>
# Add a new Asset to the Showcase

## Showcase Library asset metadata

The Showcase Library code is located on the `showcase` folder.
The page is build dynamically taking the resources from distinct folders inside `showcase/resources`.

Use the command `script/build` to build the Asset library and `script/serve-showcase` to be able to see the results directly in your browser.
Bear in mind that you need to re-run both commands every time you change Assets.
Changes in the Showcase Library itself will be taking place immediately after page refresh.

### Resources folder structure

Each asset is clustered with its corresponding sand-box example.

    assetCategoryA/
        asset1CategA.html
        asset2CategA.html
        asset3CategA.html
        asset4CategA.html
        metadata.json  /* list of local files */

### List of local files

This example is describing the `navigation/metadata.json` used for the Navigation assets.

    {
        "title": "Navigation",
        "assetId": "navigation",
        "status": "none",
        "items": [
            {
                "file": "breadcrumbs/breadcrumb.html",
                "anchorName": "breadcrumb",
                "anchorTitle": "Breadcrumb",
                "status": "baselined"
            },
            {
                "file": "breadcrumbs/breadcrumbWithNavigation.html",
                "anchorName": "breadcrumbWithNav",
                "status": "baselined"
            },
            {
                "file": "pagination.html",
                "anchorName": "pagination",
                "anchorTitle": "Pagination",
                "status": "beta"
            }
        ]
    }

*   **title:**
            Title of the group section in the page, used as well in the side menu for the accordion header.
*   **assetId:**
            The name should be unique as it is used to reference the asset from the side menu.
*   **status:**
            Stability tag, values are "baselined"; "beta" or "none" for hidden.
            Beta must be the default value for a new contribution.
*   **items:**
    *   _file:_
                    Location of the asset from the metadata.json file.
    *   _anchorName:_
                    The name should be unique as it is used to reference the asset from the side menu.
    *   _anchorTitle:_
                    Text displayed to link the anchor in the side menu sub entry.
    *   _status:_
                    Stability tag for the specific asset, values are "baselined"; "beta" or "none" for hidden.
                    Beta must be the default value for a new contribution.

## Add your Asset to the Showcase Library

In order to display the asset inside the library, you need to reference the folder containing the metadata.
Open `showcase/resources/metadata.json`

    {
        "baseUrl": "resources/asset-library/",
        "listItem": [
            "typography/",
            "navigation/",
            ...
            "icons/",
            "commonStyles/",
            "layout/",
            "demos/"
        ]
    }