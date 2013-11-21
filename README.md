Dwarf
============

Microframework for sites in asp environments. Contains the basics for starting a microsite. Allows you to develop asp projects without being in a Microsoft environment.

AngularJS was added for additional functionality. But it is recomended to use [Server-side includes](http://msdn.microsoft.com/en-us/library/ms524876%28v=vs.90%29.aspx) and standard [HTML Links](http://www.w3schools.com/html/html_links.asp) to ensure backwards compatability and functioning in browsers that have JavaScript disabled. 


Instructions
============
- 1. Copy the contents from the `site` folder
- 2. Make modifications to the homepage `index.aspx` 
- 3. Add, remove, modify the template by modifiying the includes. The footer, header, sidebar, etc are in the `_includes` folder and named `footer.html`, `header.html`, etc. Remove the `footer-example.html` from your project when in production. 
- 4. Add, remove, modify the pages that your project requires from the `pages` folder. By default the project comes with `about/index.aspx`, `contact-us/index.aspx`,`products/index.aspx`, 
- 5. Use the default `foundation.min.css` or modify Foundation per your needs and then minify it for production. 


Project - Description of Contents
============

#### README.md
This file that you are currently reading contains the general information about the project. 

#### documentation
Contains project notes, tutorials, and other related information. 

#### templates
Contains code samples that you may implement in your projects. They are based on the [Foundation grid](http://foundation.zurb.com/docs/components/grid.html).

#### site
This is the file that you will be using for your project. 


Site - Description of Contents
============

#### assets 
Holds images, css, and javascript that is used globally. 

#### pages
Add pages all pages here. 
Has a folder `layouts` which contains footer, header, and sidebar. Add resusable elements here.  

#### index.aspx
Home page with sample code.

#### humans.txt
This is where you can mention contributors for attribution. You can also include your contact information so that future maintainers can ask questions. 

#### robots.txt
Where you set instructions to web robots about where not to scan. 

#### .gitignore
If you are using Git for [version control](http://git-scm.com/book/en/Getting-Started-About-Version-Control) this is where you declare files that you do not want tracked. 

#### _test
This will allow you to experiment with new content or pages. Also can hold your place filler content as you build the site. The robots.txt is set to block robots from scanning content in here. This folder is set to be untracked by git. 

#### _working
This will allow you to experiment locally, and also work on files on the server. Especially useful if you need to store files on the server while working on something. The robots.txt is set to block robots from scanning content in here. This folder is also set to be untracked by git. 


Project Structure - Main - Map
============
```
|- site/
   |
   |- assets/
   |   |
   |   |- css/
   |   |   |
   |   |   |- app.css
   |   |   |- foundation.css 
   |   |   |- foundation.min.css 
   |   |   |- normalize.css
   |   |   |- test.css
   |   |
   |   |- fonts/
   |   |
   |   |- img/
   |   |   |
   |   |   |- content/
   |   |   |- template/
   |   |   
   |   |- js/
   |   |   |
   |   |   |- foundation/
   |   |   |   |
   |   |   |   |- foundation.abide.js
   |   |   |   |- foundation.accordian.js
   |   |   |   |- foundation.alert.js
   |   |   |   |- foundation.clearing.js
   |   |   |   |- foundation.dropdown.js
   |   |   |   |- foundation.interchange.js
   |   |   |   |- foundation.joyride.js
   |   |   |   |- foundation.js
   |   |   |   |- foundation.magellan.js
   |   |   |   |- foundation.offcanvas.js
   |   |   |   |- foundation.orbit.js
   |   |   |   |- foundation.reveal.js
   |   |   |   |- foundation.tab.js
   |   |   |   |- foundation.tooltip.js
   |   |   |   |- foundation.topbar.js
   |   |   |
   |   |   |- vendor/
   |   |   |   |
   |   |   |   |- angular-1.2.1.min.js
   |   |   |   |- custom.modernizr.js
   |   |   |   |- fastclick.js
   |   |   |   |- jquery.autocomplete.js
   |   |   |   |- jquery.cookie.js
   |   |   |   |- jquery.js
   |   |   |   |- placeholder.js
   |   |   |
   |   |   |- test/
   |   |       |
   |   |       |- test-angular.js
   |   |
   |   |- angular-test.js
   |   |- foundation.min.js
   |   |- google-analytics.js
   |   |- modernizr.js
   |
   |- pages/
   |   |
   |   |- _includes/
   |   |   |
   |   |   |- foundation-angular.html
   |   |   |- foundations-declarations.html
   |   |   
   |   |- _layouts/
   |   |   |
   |   |   |- test/
   |   |   |   |
   |   |   |   |- aside-default.html
   |   |   |
   |   |   |- header.html
   |   |   |- aside.html
   |   |   |- footer.html
   |   |   |- head-styles.html
   |   | 
   |   |- about/
   |   |   |
   |   |   |- index.aspx
   |   | 
   |   |- contact-us/
   |   |   |
   |   |   |- index.aspx
   |   |
   |   |- products/
   |       |
   |       |- index.aspx
   |
   |- _test/
   |
   |- _working/
   |
   |- index.aspx
   |- humans.txt
   |- robots.txt
   |- Web.config
   |- .gitignore
```


Components
============
- [Foundation 5](https://github.com/zurb/foundation)
- [AngularJS](https://github.com/angular)