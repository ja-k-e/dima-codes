# Shay Howe - Lesson 5 <br> Positioning Content


####Positioning With Floats:

- Essentially, the `float` property allows us to take an element, remove it from the normal flow of a page, and position it to the left or right of its parent element.

- The `float` property accepts a few values; the two most popular values are `left` and `right`, which allow elements to be floated to the left or right of their parent element.


- The `float` property relies on an element having a `display` value of `block`, and may alter an element’s default display value if it is not already displayed as a block-level element.

Code Examples:

	HTML:
	
		<header>...</header>
		<section>...</section>
		<aside>...</aside>
		<footer>...</footer>
		
	CSS:
	
		section {
		  float: left;
		}
		
		aside {
		  float: right;
		}
			 


######Pitfalls of Floats:

- One of those pitfalls is that occasionally the proper styles will not render on an element that it is sitting next to or is a parent element of a floated element. When an element is floated, it is taken out of the normal flow of the page, and, as a result, the styles of elements around that floated element can be negatively impacted.

	- Often `margin` and `padding` property values aren’t interpreted correctly, causing them to blend into the floated element; other properties can be affected, too.

	-	Another pitfall is that sometimes unwanted content begins to wrap around a floated element. Removing an element from the flow of the document allows all the elements around the floated element to wrap and consume any available space around the floated element, which is often undesired.
	
######Workarounds for Pitfalls of Floats

Clearing Floats:

- To prevent content from wrapping around floated elements, we need to clear, or contain, those floats and return the page to its normal flow.

- Clearing floats is accomplished using the `clear` property, which accepts a few different values: the most commonly used values being `left`, `right`, and `both`.

		div {
		  clear: left;
		}
		
		div {
		  clear: right;
		}
		
		div {
		  clear: both;
		}
	
- It is important that this clear be applied to an element appearing after the floated elements, not before, to return the page to its normal flow.


Containing Floats:

- The outcomes of containing floats versus those of clearing them are nearly the same; however, containing floats does help to ensure that all of our styles will be rendered properly.

- To contain floats, the floated elements must reside within a parent element. The parent element will act as a container, leaving the flow of the document completely normal outside of it. The CSS for that parent element, represented by the group class below, is shown here:

		.group:before,
		.group:after {
		  content: "";
		  display: table;
		}
		.group:after {
		  clear: both;
		}
		.group {
		  clear: both;
		  *zoom: 1;
		}
		
	What the CSS is doing is clearing any floated elements within the element with the class of `group` and returning the flow of the document back to normal.

	More specifically, the `:before` and `:after` pseudo-elements are dynamically generated elements above and below the element with the class of `group`. Those elements do not include any content and are displayed as `table`-level elements, much like block-level elements. The dynamically generated element after the element with the class of `group` is clearing the floats within the element with the class of `group`, much like the `clear` from before. And lastly, the element with the class of `group` itself also clears any floats that may appear above it, in case a left or right float may exist.
	
Code Example: 

	HTML:
	
		<header>...</header>
		
		<div class="group">
		
		  <section>...</section>
		  <aside>...</aside>
		  
		</div>
		
		<footer>...</footer>
		
		
	CSS:
	
	   	/* This is the CSS that is containing our floats */
	   
		.group:before,
		.group:after {
		  content: "";
		  display: table;
		}
		
		.group:after {
		  clear: both;
		}
		
		.group {
		  clear: both;
		  *zoom: 1;
		}
		
		/* This is the CSS that is floating our HTML content.
		 * There is also some grid styling: margins and width.
		 */

		section {
		  float: left;
		  margin: 0 1.5%;
		  width: 63%;
		}
		
		aside {
		  float: right;
		  margin: 0 1.5%;
		  width: 30%;
		}		
		
	
 The technique shown here for containing elements is know as a “clearfix” and can often be found in other websites with the class name of `clearfix` or `cf`.
 For the purpose of learning, the class name `group` was chosen for this example, because it contains a group of floating elements.   
 
 
####Positioning With Inline-Block:

In addition to using floats, another way we can position content is by using the `display` property in conjunction with the `inline-block` value.

The `inline-block` value for the `display` property will display elements within a line while allowing them to accept all box model properties, including `height`, `width`, `padding`, `border`, and `margin`. Using inline-block elements allows us to take full advantage of the box model without having to worry about clearing any floats.

The following is a three column example of HTML: 
		
		<header>...</header>

		<section>Column 1</section>
	
		<section>Column 2</section>

		<section>Column 3</section>

		<footer>...</footer>

Instead of floating the three `<section>` elements, we’ll change their display values to `inline-block`.

		section {
		  display: inline-block;
		  margin: 0 1.5%;
		  width: 30%;
		}
		
***Because inline-block elements are displayed on the same line as one another, they include a single space between them. When the size of each single space is added to the width and horizontal margin values of all the elements in the row, the total width becomes too great, pushing the last `<section>` element to a new row. In order to display all of the `<section>` elements on the same row, the white space between each `<section>` element must be removed.***

######Removing Spaces Between Inline-Block Elements

Solution 1: 

Put each new `<section>` element’s opening tag on the same line as the previous `<section>` element’s closing tag. Rather than using a new line for each element, we’ll end and begin elements on the same line. Our HTML could look like this:

		<header>...</header>
		<section>
		  ...
		</section><section>
		  ...
		</section><section>
		  ...
		</section>
		<footer>...</footer>
		
		
Solution 2: 

Another way to remove the white space between inline-block elements is to open an HTML comment directly after an inline-block element’s closing tag. Then, close the HTML comment immediately before the next inline-block element’s opening tag. Doing this allows inline-block elements to begin and end on separate lines of HTML and “comments out” any potential spaces between the elements. The resulting code would look like this:

		<header>...</header>
		<section>
		  ...
		</section><!--
		--><section>
		  ...
		</section><!--
		--><section>
		  ...
		 </section>
		 <footer>...</footer>
		 
		 
		 
####Uniquely Positioning Elements:

- The `position` property identifies how an element is positioned on a page and whether or not it will appear within the normal flow of a document. This is used in conjunction with the box offset properties—`top`, `right`, `bottom`, and `left`—which identify exactly where an element will be positioned by moving elements in a number of different directions.

- By default every element has a `position` value of `static`, which means that it exists in the normal flow of a document and it doesn’t accept any box offset properties. The static value is most commonly overwritten with a `relative` or `absolute` value.

######Relative Positioning 

The `relative` value for the `position` property allows elements to appear within the normal flow a page, leaving space for an element as intended while not allowing other elements to flow around it; however, it also allows an element’s `display` position to be modified with the box offset properties.

Code Example: 

	HTML: 
		
		<div>...</div>
		<div class="offset">...</div>
		<div>...</div>
		
	CSS: 
		
		div {
		  height: 100px; 
		  width: 100px;
		}
		
		.offset {
		  left: 20px; /* This is a box offset property with the value of 20px */
		  position: relative;
		  top: 20px; /* This is a box offset property with the value of 20px */
		}

######Absolute Positioning 

The `absolute` value for the `position` property is different from the `relative` value in that an element with a `position` value of `absolute` will not appear within the normal flow of a document, and the original space and position of the absolutely positioned element will not be preserved.

Additionally, absolutely positioned elements are moved in relation to their closest relatively positioned parent element. Should a relatively positioned parent element not exist, the absolutely positioned element will be positioned in relation to the `<body>` element.

Code Example: 

	HTML: 
	
		<section>
		  <div class="offset">...</div>
		</section>

	CSS:
	
		section {
		  position: relative;
		}
		
		div {
		  position: absolute;
		  right: 20px;
		  top: 20px;
		}
		
In this example the `<section>` element is relatively positioned but doesn’t include any box offset properties. Consequently its position doesn’t change. The `<div>` element with a class of offset includes a position value of `absolute`. Because the `<section>` element is the closest relatively positioned parent element to the `<div>` element, the `<div>` element will be positioned in relation to the `<section>` element.

***With relatively positioned elements, the box offset properties identify in which direction an element would be moved in relation to itself. With absolutely positioned elements, the box offset properties identify in which direction an element will be moved in relation to its closest relatively positioned parent element.***

As a result of the `right` and `top` box offset properties, the `<div>` element will appear `20` pixels from the right and `20` pixels from the `top` of the `<section>`.

Because the `<div>` element is absolutely positioned, it does not sit within the normal flow of the page and will overlap any surrounding elements. Additionally, the original position of the `<div>` is not preserved, and other elements are able to occupy that space.