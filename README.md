Dwarf
============

Starter template for sites in asp environments. Contains the basics for starting a basic microsite. 

Inspired by Rails in folder organization. 

Left simple enough where a graphic designer with no coding experience would be able to make modifications. 

Instructions
============
- 1. Copy the contents from the `site` folder
- 2. Make modifications to the homepage `index.aspx` 
- 3. Add, remove, modify the template by modifiying the includes. The footer, header, sidebar, etc are in the `_includes` folder and named `footer.html`, `header.html`, etc.  
- 4. Add, remove, modify the pages that your project requires from the `pages` folder. By default the project comes with `about/index.aspx`, `contact-us/index.aspx`,`products/index.aspx`, 


Project Structure - Main - Description
============

#### README.md
This file that you are currently reading contains the general information about the project. 

#### documentation
Contains project notes, tutorials, and other related information. 

#### templates
Contains code samples

#### site
This is the file that you will be using for your project. 

Project Structure - Main - Map
============
|- README.md<br>
|- documentation<br>
|- site [see below]<br>
|- templates<br>
.gitignore


Site - Structure - Description
============

#### assets 
Holds images, css, and javascript that is used globally. 

#### pages
Add pages all pages here. 
Has a folder `layouts` which contains footer, header, and sidebar. Add resusable elements here.  

Project Structure - Main - Map
============
|- site/<br>
|  |- assets/<br>
|     |- css/<br>
|        - .css<br>
|        - .css<br>
|        - app.css<br>
|     |- fonts/<br>
|     |- img/<br>
|        |- content/<br>
|        |- template/<br>
|     |- js/<br>
|        |- foundation/<br>
|           - foundation.abide.js<br>
|           - foundation.alerts.js<br>
|           - foundation.clearing.js<br>
|           - foundation.cookie.js<br>
|           - foundation.dropdown.js<br>
|           - foundation.forms.js<br>
|           - foundation.interchange.js<br>
|           - foundation.joyride.js<br>
|           - foundation.js<br>
|           - foundation.magellan.js<br>
|           - foundation.orbit.js<br>
|           - foundation.palceholder.js<br>
|           - foundation.reveal.js<br>
|           - foundation.section.js<br>
|           - foundation.tooltips.js<br>
|           - foundation.topbar.js<br>
|        |- vendor/<br>
|           - custom.modernizr.js<br>
|           - jquery.js<br>
|           - zepto.js<br>
|        - app.js<br>
|        - foundation.min.js<br>
|        - google-analytics.js<br>
|  |- pages/<br>
|     |- _layouts/<br>
|        - <br>
|     |- about/<br>
|        - index.aspx<br>
|     |- contact-us/<br>
|        - index.aspx<br>
|     |- products/<br>
|        - index.aspx<br>
|- index.aspx<br>
|- robots.txt<br>
|- .gitignore<br>
|- .htaccess<br>



Components
============
- [Foundation](https://github.com/zurb/foundation)
- [AngularJS](https://github.com/angular)




