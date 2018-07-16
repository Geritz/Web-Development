# Web-Development
Template for a webcomic website. Work in progress.

This page is live at https://geritz.github.io/Web-Development/RotschyCodeTest/index.html

The requirements called for scrollbars for the job description and employee selection fields. Those have been impelmented as overflow:auto fields and will automatically appear when the amount of data is beyond what fits on the average webpage.

Missing nicknames in the JSON data are being replaced with a ternary operator check that confirms whether the nickname has been set. If it has not been set, then it substitutes the first name of the employee's full name.

The sidebar list is populated with the contents of a JSON object passed into the fillListNames function. This function also creates an onclick listener with a callback function that populates the main content page with the data kept in the data-* field.

clicking on a name in the sidebar first clears a selection class from all elements in the sidebar, and then adds a selection class to that element and changes its background color, before calling the function that fills the employee details section. In this manner you can select and highlight an element and only one element at a time, as all the elements are cleared.

The color scheme is monocolor based on rgb(140,157,131), which was in the requirements. I avoided hard white as it can be difficult on the eyes to look at.