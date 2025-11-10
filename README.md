# Module 5 SBA The Document Object Model
## SBA Overview
The purpose of this project is to test my ability to manipulate the DOM, handle user events, implement form validation, and utilize localStorage for data persistence. Users should be able to:

- Create New Posts
- Read/View Displayed Posts
- Update/Edit Posts
- Delete Posts
- See previous (undeleted) post from previous session on reload.
------------------------------------------------
## Table of contents

- [Overview](#overview)
  - [GitHub](#github)
  - [How To Use](#how-to-use)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [Version Log](#version-log)
  - [Useful resources](#useful-resources)
- [Author](#author)

### GitHub Link
https://github.com/ANIO-Official/your-blog-journaling-app 
### How To Use
 1. Clone the repository or Download the ZIP file and extract the files.
 2. Drag and Drop the HTML file into your browser of choice.
 3. Journal, Update, and Delete your entries!

    - Add Journal Entries by filling out the New Post Area.
    - Update Entries using the Edit Button. (Feel free to cancel using Cancel Button)
    - Delete Entries using the Delete Button

*The Title and Content accepts all characters, numbers, and symbols! Feel free to express yourself as you like.*

![Your Blog, A Journaling & Notes App](/assets/images/your-blog-alpha-preview.png)

## My process
Quick brief about process. Here are my steps/general steps:
 1. Set up Semantic HTML for web app structure

  - Added header & main. Excluded footer as it is not a part of the design.
  - Added div structure
  - Added labels, inputs, buttons, textarea, and appliccable font tags (h1,h2,h3,p).
  - [Figma Reference](https://www.figma.com/proto/f4PTU81cUA3gcMWfpaNwhu/Personal-Blog-Journal-Feed?node-id=4-2&p=f&t=8o70harUowwFZ7oy-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

 2. Create responsive layout using Bootstrap Grid and CSS

  - Applied Bootstrap Grid using row col and row-col utility classes
  - Added general padding and margins using Bootstrap
  - Adjusted specified padding, margins and sizing of elements in CSS.

 3. Added DOM variables and validity conditional checks

  - Cached DOM elements into variables.
  - Checked for patternMismatch, valueMissing, and tooShort validity. Returned applicable message via span when true.

 4. Added functions to dynamically Create Blog Post upon submission

  - Created an object called item for each blog list item's data. Holding id, title, content, and time of date's creation (timestamp). Pushes this item to the feedData array that holds all the blogs' data.
  - Function to call to JSON.parse feedData
  - Function to create and append document fragment for batch Updates
  - Added Event Listener to form (createBlogForm) to check all input's validity states before creating new FormData, rendering the feed, and storing the values into local storage. Followed by an alert & clearing the form using reset() method.

 5. Added ability to Load stored blogs on document load.

  - Added Event Listener to document to check local storage, parse the feedData array, then create a fragment using the parsed data. 

 6. Added ability Edit & Delete blogs.

  - Used Event Delegation by adding Event Listener to the feedBatch (unordered list 'ul') element. Checking for click of event targets.
  - Added conditionals to find event targets containing a specified classList.
  - Used querySelector on event targets to locate elements and text coontent.
  - Updated applciable Inputs values, checked input validity states, and deleted data & displays. 
  - Used querySelector to look for specific elements and get textContent to compare values with array item titles to return the correct array item for finding and removing.

 7. Added ability to save Username & Update Log Date
    
  - Updated document Event Listent to additionally reflect the last log date (the current date and time of opening the app) and saved username in local storage.

 8. Styling Tweaks

  - Color palette adjustments and custom colors using CSS Custom properties variables
  - Margin and padding adjustments
  - Border and border raduis adjustments
  - Media Queries tweaks to ensure the site is readable and as usable as possible for mobile and desktop.

 Overall:

 *Testing and Bug Fixing throughout all steps using console.log*

### Built with
- JavaScript
- Semantic HTML
- CSS
- BootStrap/Other CSS Libraries
- Figma

### Version Log

11.09.2025 Reflection: Improvements, Challenges, Solutions, Known Issues.
----------------------------------------------------------------------------

I like how this project turned out but I would like to go back one day and improve some app capabilities.

 1. Allow changing of Profile picture and banner color or with an image file.
 2. Add a toggle for dark mode.
 3. Update styling for filter button.
 5. Improved Accessibility Features.

I struggled a bit with understanding the filter method. But I took some time to practice and edit the examples in the browser TryIt windows of documentation until I could understand it. 

Overall, this development process felt a lot smoother. I think it helped a lot that labs 1 and 2 of this module were very easy for me to translate into the SBA. This time around as well, I made 3 Figma projects ahead of time to wireframe my designs. It took a lot of guesswork out of the way. I was able to breakdown my wireframes into what HTML elements I needed, allowing me to focus on the JS more than anything. 

My largest assets this project were my:

 1. Figma Wireframes
 2. MDN Documentation & W3Schools TryIt Editor for practice
 3. Pixel to VW conventor for easier resizable measurements.

Known Issues:

There is just one, there is a specific range of breakpoints between ~767px-1550px width where the header will suddenly have extra white space. I adjusted margins, padding, and width but could not remedy this. Sizes larger than 2100px width will  begin to have broken profile picture placement.

### Useful resources

- [MDN <template>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/template) - I wanted to read more about templating to understand how to dynamically change the content per entry. As I read this document, I saw a wonderful example under 'Generating Table Rows'. It showed that I could use querySelector on parent elements! This has opened new doors for me. :'D

- [MDN array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) - I used this to help me locate the specific blog by title to delete from the array which would then be updated in local storage.

- [MDN Date()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) - Needed a reminder on how to set the date to appear more user friendly and not like a bunch og numbers haha. Used for showing last log date (now) / time of login.

- [PX to VW Converter](https://cssunitconverter.vercel.app/px-to-vw) I made a basic wireframe in Figma but wanted to use a more reponsive sizing unit. This site helped me convert the mobile and base sizes easily. Highly recommend it. :>

- [W3Schools Create a Modal](https://www.w3schools.com/howto/howto_css_modals.asp) - To help create the edit modal, I referenced this documentation and tested my code idea in their Tryit Editor first.

- [MDN blur()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur) - I wanted to autosave on unfocus and found this document about blur() which perfectly met my needs of how I wanted to save usernames.

- [MDN filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - I really wanted to have a functional filtering bar. I took some time to reread and test code to better understand this array method. I finally got it working as expected and I'm excited that it did!

## Author

- LinkedIn - [Amanda Ogletree](https://www.linkedin.com/in/amanda-ogletree-a61b60168)