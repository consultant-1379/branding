<head>
    <title>Input Validation</title>
</head>
# Input Validation Documentation

## Introduction

The input validation asset is based on the HTML5 validation feature.

There are 4 different scenarios:

1.  (default) The input does not show any message unless the input is wrong
2.  The input shows info message unless the input is wrong then display error
3.  The input shows ok or error only
4.  The input shows info first then ok or error (requires JavaScript)

An information or error feedback should provide a meaningful message.

    <input type="text" class="ebInput" placeholder="lowercase" pattern="[a-z]+" value="aaa"/>
    <span class="ebInput-status">
        <span class="ebInput-statusInfo">Lowercase</span>       // Shows info message
        <span class="ebInput-statusOk">OK</span>                // Shows icon and OK message
        <span class="ebInput-statusError">Not Lowercase</span>  // Shows icon and Error message
    </span>

Ok message and error message are optionals

### Available Modifiers

<table>
    <tr>
        <th>Input modifiers</th>
    </tr>
    <tr>
        <td>
            <ul>
                <li>
                    <strong>ebInput_borderColor / ebInput_borderColor_red:</strong>
                    <p>Forces a certain color (default / red) to be applied on the input border.</p>
                </li>
                <li>
                    <strong>ebInput_validation_focusLost:</strong>
                    <p>The validation feedback is given when the input looses the focus.</p>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <th>ebInput-status modifiers</th>
    </tr>
    <tr>
        <td>
            <ul>
                <li>
                    <strong>ebInput-status_hide:</strong>
                    <p>Hides the validation feedback.</p>
                </li>
                <li>
                    <strong>ebInput-status_info:</strong>
                    <p>Forces information message to show.</p>
                </li>
                <li>
                    <strong>ebInput-status_ok:</strong>
                    <p>Forces ok message to show.</p>
                </li>
                <li>
                    <strong>ebInput-status_error:</strong>
                    <p>Forces error message to show.</p>
                </li>
            </ul>
        </td>
    </tr>
</table>

## Validation mechanisms

The input validation is based on the CSS pseudo-class :valid and :invalid.

### Input "type"

There is no technical restrictions on the use of the HTML5 input type features [1].
            However, it is important to remember that web browsers may not support every type or it could have a
            different implementation.
            Cross browser compatibility is directly impacted as well as UI consistency.

To ensure UI consistency, only the type:
            **text, password, email and url**
            should be used.
            The Asset Library offers cross browser alternative solutions for most of the other input types.

If you need to validate emails or urls, it is recommend to write your own regex patterns in the pattern
            attribute, as the browser provided types "url" and "email" are too generic.

### Input "pattern"

The HTML5 input "pattern" [2] offers a validation based on RegEx.
            It needs to be used along with the input type "text" or "password".

### Input "required"

The attribute "required" [2] specifies that the input must be filled to be valid.
            You can combine it with a pattern validation

## Default behavior

The defined default behavior shows only error feedback.

![Default validation img](../images/examples/inputValidation/defaultValidation.png)


    <input type="text" class="ebInput" placeholder="lowercase" pattern="[a-z]+" value="aaa"/>
    <span class="ebInput-status">
        <span class="ebInput-statusError">Not Lowercase</span>
    </span>

![Default validation basic img](../images/examples/inputValidation/defaultValidationBasic.png)


    <input type="text" class="ebInput" placeholder="lowercase" pattern="[a-z]+" value="aaa"/>
    <span class="ebInput-status">
        <span class="ebInput-statusError"></span>
    </span>

"ok" and "info" status are not used, "error" status message is optional, if not provided, only the icon will
            show.

## Info and Error message

The validation feedback gives information or error message

![Info error validation img](../images/examples/inputValidation/infoErrValidation.png)

    <input type="text" class="ebInput" placeholder="lowercase" pattern="[a-z]+"/>
    <span class="ebInput-status">
        <span class="ebInput-statusInfo">Lowercase</span>
        <span class="ebInput-statusError">Not Lowercase</span>
    </span>

## Ok and Error message

The validation feedback gives ok or error message

![Ok error validation img](../images/examples/inputValidation/okErrValidation.png)


    <input type="text" class="ebInput" placeholder="lowercase" pattern="[a-z]+" value="aaa"/>
    <span class="ebInput-status">
        <span class="ebInput-statusOk">OK</span>
        <span class="ebInput-statusError">Not Lowercase</span>
    </span>

## Info then Ok and Error message

The information is first displayed until the user interacts with the input,
            then validation feedback gives ok or error message.

![Info ok error validation img](../images/examples/inputValidation/infookErrValidation.png)


    <input type="text" class="ebInput" placeholder="lowercase" pattern="[a-z]+"/>
    <span class="ebInput-status ebInput-status_info">       // ebInput-status_info to be removed
        <span class="ebInput-statusInfo">Lowercase</span>   // To be removed
        <span class="ebInput-statusOk">OK</span>
        <span class="ebInput-statusError">Not Lowercase</span>
    </span>
    
Then, after the user first interaction:


    <input type="text" class="ebInput" placeholder="lowercase" pattern="[a-z]+" value="aaa"/>
    <span class="ebInput-status">
        <span class="ebInput-statusOk">OK</span>
        <span class="ebInput-statusError">Not Lowercase</span>
    </span>

The modifier
            **ebInput-status_info** and the element **ebInput-statusInfo**
            are removed using JavaScript when the user first interacts with the input.

## References

1.  [W3c HTML5 input type features](http://dev.w3.org/html5/markup/input.html)
2.  [W3c HTML5 input pattern features](http://dev.w3.org/html5/markup/input.text.html)
        