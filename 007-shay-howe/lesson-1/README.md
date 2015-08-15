# Shay Howe - Lesson 1

***Building Your First Web Page***

Lesson 1 went over the basics that we've already covered in our previous lessons. Some of those things were: 

- #####Basic `html` structure 

			<html>
  				<head>
  					<title></title>
  				</head>
  				<body>
  				</body>
  			</html>
  			
 - #####Elements 
 	
 	- `<div>`
 	- `<h1>` through `<h6>`
 	- `<span>`
 	- `<a>`
 	- `<p>`,
 	-  etc.
 	
 (After going over this part of the lesson, the core idea of what an element _is_ became a little more clear to me. 
 <br>
 At first I was just looking at `<tags>` as something that simply wrapped the contents of what was inside of them so that we could later manipulate the contents - _according to the semantics of the tag_. My emphasis of thought was on manipulating the contents, not the space the contents are placed _into_. Turns out that's backwards. 
 <br>
Elements are _designators of space_. When we style and manipulate `html` we are designating an elements' space as a field of spacial characteristics. Anything that is _placed inside_ of that space is therefore manipulated by, and becomes _part of_ that space. 
<br>
Visually, content is the result its environment.)

- #####Tags 
	 - `<div> ... </div>`
	 - `<body> ... </body>`
	 - `<h1> ... </h1>`
	 - `<spa> ... </span>`
	 - `<p> ... </p>`
	 - ect. 

(Tags _are part_ of elements.)

###New Stuff

- #####CSS Resets:
<br>
I hadn't seen or heard of css resets before. I didn't realize that different web browsers defaulted to their own version of css, which could conflict with our css. 
<br>
In order to avoid any overriding of our css code, we put in a css reset - a few declaration blocks from a trusted css reset source pasted in at the top of our css file - prior to styling our page so that no matter what browser our page is opened in the result will be consistent with our code.

- #####Character Sets or the `charset` attribute:
<br>
I'm still not exactly sure why there are different character sets. It wasn't explained in the lesson. I was just instructed to write it into the meta data inside of the `<head>` element. 
<br>
I'm guessing that the reason we would use a character set is the same reason we would use a css reset - in order to have cross-browser compatibility and protect our code from inconsistency.

##Lesson Project 
<br>

The project for this lesson was to build a simple web page using the material covered above. 
<br>

-	There is an html file with simple content about a fictitious web conference. 

- The html file is attached to a separate css file.

- The css file only contains a copied and pasted rest. 	