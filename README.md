customJSS
=========

DISCLAIMER: This script is provided as-is... enjoy. As you might be able to tell by the code I am not a JS pro in any sense.

Customizes the JAMF JSS web front-end with goal of improving interface appearance and usability.

Meant for use with Tampermonkey and Chrome. 

Last tested with Chrome 43.0.2357.132 and JSS 9.72.

## Installation

To use, install Tampermonkey and paste the JS file in as a script. There's a better way to do it, haven't checked that out yet. Sorry.

If it doesn't work, check to make sure your JSS URL is in scope! By default it applies the changes to *://jss.

Check line Line 6 of the JS: // @include      *://jss.*

Tamppermonkey: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en

Known bugs:

- Expandable/shrinkable sidebar is sliver-thin when minimized
- User gear/preferences menu appears underneath top bar
- Initial JSS dashboard messages are too far up
- You tell me!
