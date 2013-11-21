Dwarf
============

Starter template for sites in asp environments. Contains the basics for starting a basic microsite. 

Inspired by Rails in folder organization. 

Left simple enough where a graphic designer with no coding experience would be able to make modifications. 

Instructions
============
- 1. Copy the contents from the `site` folder
- 2. Make modifications to the homepage `index.aspx` 
- 3. Add, remove, modify the template by modifiying the includes. The footer, header, sidebar, etc are in the `_includes` folder and named `footer.html`, `header.html`, etc. Remove the `footer-example.html` from your project when in production. 
- 4. Add, remove, modify the pages that your project requires from the `pages` folder. By default the project comes with `about/index.aspx`, `contact-us/index.aspx`,`products/index.aspx`, 
- 5. Use the default `foundation.min.css` or modify Foundation per your needs and then minify it for production. 


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
```
|- README.md
|- documentation
|- site [see below]
|- templates
.gitignore
```

Site - Structure - Description
============

#### assets 
Holds images, css, and javascript that is used globally. 

#### pages
Add pages all pages here. 
Has a folder `layouts` which contains footer, header, and sidebar. Add resusable elements here.  

Project Structure - Main - Map
============
```
|- site/
|   |
|   |- assets/
|   |   |
|   |   |- css/
|   |   |   |
|   |   |   |- app.css
|   |   |   |- foundation.css 
|   |   |   |- foundation.min.css 
|   |   |   |- normalize.css
|   |   |   |- test.css
|   |   |
|   |   |- fonts/
|   |   |
|   |   |- img/
|   |   |   |
|   |   |   |- content/
|   |   |   |- template/
|   |   |   
|   |   |- js/
|   |   |   |
|   |   |   |- foundation/
|   |   |   |   |
|   |   |   |   |- foundation.abide.js
|   |   |   |   |- foundation.alerts.js
|   |   |   |   |- foundation.clearing.js
|   |   |   |   |- foundation.cookie.js
|   |   |   |   |- foundation.dropdown.js
|   |   |   |   |- foundation.forms.js
|   |   |   |   |- foundation.interchange.js
|   |   |   |   |- foundation.joyride.js
|   |   |   |   |- foundation.js
|   |   |   |   |- foundation.magellan.js
|   |   |   |   |- foundation.orbit.js
|   |   |   |   |- foundation.palceholder.js
|   |   |   |   |- foundation.reveal.js
|   |   |   |   |- foundation.section.js
|   |   |   |   |- foundation.tooltips.js
|   |   |   |   |- foundation.topbar.js
|   |   |   |
|   |   |   |- vendor/
|   |   |   |   |
|   |   |   |   |- angular-1.2.1.min.js
|   |   |   |   |- custom.modernizr.js
|   |   |   |   |- jquery.js
|   |   |   |   |- zepto.js
|   |   |   |
|   |   |   |- test/
|   |   |       |
|   |   |       |- test-angular.js
|   |   |
|   |   |- angular-test.js
|   |   |- foundation.min.js
|   |   |- google-analytics.js
|   |
|   |- pages/
|       |
|       |- _includes/
|       |   |
|       |   |- foundation-angular.html
|       |   |- foundations-declarations.html
|       |   
|       |- _layouts/
|       |   |
|       |   |- test/
|       |   |   |
|       |   |   |- aside-default.html
|       |   |
|       |   |- header.html
|       |   |- aside.html
|       |   |- footer.html
|       |   |- head-styles.html
|       | 
|       |- about/
|       |   |
|       |   |- index.aspx
|       | 
|       |- contact-us/
|       |   |
|       |   |- index.aspx
|       |
|       |- products/
|           |
|           |- index.aspx
|
|- index.aspx
|- humans.txt
|- robots.txt
|- web.config
|- .gitignore
```


Components
============
- [Foundation](https://github.com/zurb/foundation)
- [AngularJS](https://github.com/angular)