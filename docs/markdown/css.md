<head>
    <title>CSS Code Style</title>
</head>
# CSS Code Style

## Prefixes

Prefixes in the CSS naming strategy are used to separate different types of resources.
It helps to ensure that resources with the same names but representing different types of resources won't
conflict. The following group prefixes have been defined:

*   Brand Assets - **&quot;b&quot;**
*   Apps - **&quot;a&quot;**
*   Libraries - **&quot;l&quot;**

Each group starts with `e` letter, which indicates that the resource has been created internally
in Ericsson.
Next, the group prefix is appended e.g. for apps prefix with `ea`.

Each resource has a name. This name is added in &quot;CamelCase&quot; after the prefix.
For example, the `Log Viewer` app will have the prefix: `eaLogViewer`.

Full prefix name contains **&quot;e&quot; + group letter + name**.

## Child Elements

### for assets:

Resources often have child elements within them. For example, a List widget with the prefix:
`ebComponentList` has list items. The list items will have the following prefix:
`ebComponentList-item`. If the list item has an icon, there may be an element in the HTML to
represent it: `ebComponentList-itemIcon`.       
Note that the child element starts with a lower-case letter after the hyphen.

Alternative styles may also be specified. A compact version of the List widget may be specified with the
following CSS: `ebComponentList-compact`.



## Modifiers

Modifiers are used to describe the state of a resource. A button for example may have a disabled state, and
may change the color of the background to accommodate the state change.

The convention for modifiers is:**_key_value**. The value part is optional. In the buttonexample,
the key may be &quot;opacity&quot;, and the value may be &quot;80&quot;.
    .ebComponentList {
        /* styles here */
    }

    .ebComponentList-item {
        /* styles here */
    }

    .ebComponentList-itemIcon {
        /* styles here */
    }

    .ebComponentList-compact {
        /* styles here */
    }

    .ebComponent-List_expanded {
        /* styles here */
    }

    .ebComponent-List_order_desc {
        /* styles here */
    }

## LESS Example

Below is an example of the naming convention being used with LESS CSS.

    .ebComponentList {
        /* styles here */

        &-item {    /* Element:  ebComponentList-item */
            /* styles here */

            &_expanded {    /* Modifier: ebComponentList-item_expanded */
                /* styles here */
            }

            &Icon {    /* Element: ebComponentList-itemIcon */
                /* styles here */
            }
        }

        &_order_desc {    /* Modifier: ebComponentList_order_desc */
            /* styles here */
        }

        &-compact {    /* Element: ebComponentList-compact */
            /* styles here */
        }
    }