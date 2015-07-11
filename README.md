customJSS
=========

DISCLAIMER: This script is provided as-is... enjoy. As you might be able to tell by the code I am not a JS pro in any sense.

Customizes the JAMF JSS web front-end with goal of improving interface appearance and usability.

Meant for use with Tampermonkey and Chrome. 

Last tested with Chrome 43.0.2357.132 and JSS 9.72.

## Features

- Requires NO direct modifications to your JSS instance
- Tweaked aesthetics for a more modern, flat design.
- Streamlined navigation and workflow
  - Reconfigured navigation bar
  - Expandable/shrinkable sidebar
  - All settings page option (not split up into system, global, computer, etc)
- Fairly easy to reconfigure code & styling to your CSS


#### Planned
- Ability to create scripts, computer/mobile smart/static groups, upload packages, network segment, and more directly from policy creation screen.
- Completely redone navigation bar

## Requirements

- JAMF Software Server 9.x (Last tested on 9.72)
- Tampermonkey extension & Google Chrome
-- Greasemonkey and Firefox work, but I've seen additional bugs. Have not examined closely this far.

## Installation

To use the script, install the Tampermonkey extension for Google Chrome and paste the JS file in as a script. There's a better way to do it, haven't checked that out yet. Sorry.

If it doesn't work, check to make sure your JSS URL is in scope! By default it applies the changes to *://jss.

Check line 6 the JS: // @include      *://jss.*

Tampermonkey: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en

Known issues:

- See the issues section
- You tell me!
