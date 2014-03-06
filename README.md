Dwarf
============

Dwarf is a microframework for rapid prototyping in [asp](http://en.wikipedia.org/wiki/Active_Server_Pages) environments. Contains the packages for starting a responsive web app.


Instructions
============
- 1. Copy the contents from the `site` folder
- 2. Make modifications to the homepage `index.aspx` 
- 3. Add, remove, modify the template by modifiying the includes. The footer, header, sidebar, etc are in the `_includes` folder and named `footer.html`, `header.html`, etc.


Project - Description of Contents
============

#### README.md
This file that you are currently reading contains the general information about the project. 

#### documentation
Contains project notes, tutorials, and other related information. 

#### site
This is the file that you will be using for your project. 


Site - Description of Contents
============

#### assets 
Holds images, css, and javascript that is used globally. 


#### mailers
Add files necessary for forms here. Captcha, form validation, etc. 

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
   |   |   |- base.css 
   |   |   |- font-awesome-ie7.min.css 
   |   |   |- font-awesome.min.css 
   |   |   |- layout.css 
   |   |   |- normalize.css
   |   |   |- skeleton.css   
   |   |   |- style.css
   |   |   |- test.css
   |   |
   |   |- fonts/
   |   |   |
   |   |   |- fontawesome/
   |   |
   |   |- img/
   |   |   |
   |   |   |- content/
   |   |   |- template/
   |   |   
   |   |- js/
   |       |
   |       |- app.js
   |       |- custom.modernizr.js
   |       |- google-analytics.js
   |       |- jquery.min.js
   |       |- mustache.js
   |       |- swipe.js      
   |
   |- mailers/
   | 
   |- pages/
   |   |
   |   |- _includes/
   |   |   |
   |   |   |- head-default.html
   |   |   |- js-default.html
   |   |   
   |   |- _layouts/
   |   |   |
   |   |   |- header.html
   |   |   |- footer.html
   |   | 
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

- [Font Awesome](https://github.com/FortAwesome/Font-Awesome/)
- [jQuery](https://github.com/jquery/jquery)
- [Mustache](https://github.com/janl/mustache.js/)
- [Swipe](https://github.com/bradbirdsall/Swipe)
- [Skeleton](https://github.com/dhg/skeleton)


License
============
The project has an MIT Open Source license. But links to the components are provided for their license information. Attribution has been maintained in the respective files. 

**MIT Open Source License**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.