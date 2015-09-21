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

####Email Address Links

We can make links that open a default mail client on a user's computer with a pre-populated email address to which the email is supposed to be sent. 

We can also add some other automated features to the email address link:

- Autofill the ***subject*** field with a desired title
- Autofill the ***body*** field with a desired message

The syntax of an email link I just described should look something like this: 

`<a href="mailto:example@email.com?subject=Saying%20Hello&body=I%20hope%you%20are%20doing%20well">Email Me!</a>`

***Breaking it down***

- Like any other link that we've created so far, the mail link begins with an `<a>...</a>` (anchor) tag with the attribute `href`.

- The first value of the `href` attribute is the value `mailto:example@email.com`. This is the destination of where the email will be sent.

- In order to add other parameters (pre-populating the subject field and body with a predefined message in this case) we need to start with `?`directly after the email address we provided. The `?` binds all of the parameters we want to attribute to the email address link. 

- After the `?`we add our parameters. `subject=` is the subject line parameter. The value of our `subject=` parameter (the message we want to put into the subject field) needs to have `%20` where there would be any white space between words or characters. 

- If we want to add other parameters to our link, like filling out a short message in the body of the email, we need to use the `&` in order to bind the parameters to each other. 

- As with white spaces, which need to be encoded with `%20`, line breaks need to be encoded with `%A0`.

- <a href="https://yoast.com/guide-mailto-links">More `mailto:`options here.</a>




