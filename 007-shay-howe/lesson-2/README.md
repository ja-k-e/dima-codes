#Shay Howe - Lesson 2

In Shay Howe's lesson number the primary focus was on `html` semantics, along with a few new things. 

###html semantics: 

So far in my `html` adventure I've run into two types of elements: Inline and Block elements. 

_Inline elements function exactly like they sound. They sit in a line of `html` text by default and do not require a new line._ 

_Block elements, by default, start on a new line and take up the full width of the page, or, the full width of the element they are nested in._ 

The different names of elements - especially in HTML5 - even though many of them will have the same functionality, serve a semantic purpose for writing html structure. 
A `<header>`, `<section>`, or `<article>` elements are block elements, but they have different names in order to semantically separate our structure so that our code is more legible and organized. For example: An `<article>` element should function exactly like it sounds, an article. Articles are put into sections of documents - like a newspaper article, but can function on their own as self-contained pieces of information; meaning that we can cut out newspaper articles and still not lose any information of what the article is about. So on and so forth the html semantics go: `<nav>`'s are designated for navigation menus, `<aside>`'s for side-bars, etc. etc..


##New Stuff

####On page links!
We can make links on our page that bring us to designated parts of the same page. So if we scroll down on a page and then we want to go back to the top of the page, instead of making the user scroll endlessly to the top we can create a shortcut like so: 
						
					  <body id="top">
					  ...
					  <a href="#top">Back to top</a>
					  ...
					  </body>

