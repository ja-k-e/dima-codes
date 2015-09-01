# Shay Howe - Lesson 4


- #####How different elements are displayed:

	All elements have a default display value. They are either block elements, inline-block elements, or inline elements. We can change them by selecting the elements in CSS and use the `display` property with the following values:  
	
	- ***block:*** This value will make the element a block level element
			
				p {
					display: block;
				}
			
	
	- ***inline-block:*** This value will make the element an inline-block level element
		
				p {
				 display: inline-block;
				}
		
		
	- ***inline:*** This value will make the element an inline level element 
		
				p {
				 display: inline;
				}
				
				
	- ***none:*** This value will make the element completely disappear from the page as if it wasn't there at all
	
				p {
					display: none;
				}

	
- #####What the box model is and why it’s important
	- According to the Box Model concept, ***every element on a page*** is a rectangular box and may have _width, height, borders, padding,_ and _margins_
	- Each part of the Box Model corresponds to a CSS property: _width, height, border, padding,_ and _margin_
	<br><br>

- ##### How to change the size, including the height and width, of elements

	- Width: 
		
			div {
				width: 500px;
			}

	- Height:
	
			div {
				height: 30px;	
			}

- #####How to add margin, padding, and borders to elements

	- Margin: 
	
			div {
				margin: 30px;
			}

	- Padding: 
	
			div {
				padding: 10px;
			}
			
	- Borders: The border property requires three values: width, style, and color.
	
			div {
				border: 1px solid black; 
			}

- #####Calculating the total size of an element:

	- According to the box model, the total width of an element can be calculated using the following formula:<br>
	_margin-right + border-right + padding-right + width + padding-left + border-left + margin-left_
	<br><br>
	- In comparison, according to the box model, the total height of an element can be calculated using the following formula:
	<br>
	_margin-top + border-top + padding-top + height + padding-bottom + border-bottom + margin-bottom_
	<br><br>
	
	**By default the Box Model is additive. If we set the width of an element to 300px, yet we have a margin of 20px, a border of 5px, and padding of 10px, our total element width comes out to 370px.**

- #####How to change the box sizing of elements and the effects this has on the box model

	- The `content-box` value is the default value, leaving the box model as an additive design. If we don’t use the `box-sizing` property, this will be the default value for all elements. The size of an element begins with the `width` and `height` properties, and then any `padding`, `border`, or `margin` property values are added on from there.
	
			div {
				box-sizing: content-box;
			}

	- The `padding-box` value alters the box model by including any padding property values within the `width` and `height` of an element. When using the `padding-box` value, if an element has a `width` of 400 pixels and a `padding` of 20 pixels around every side, the actual `width` will remain 400 pixels. As any `padding` values increase, the content size within an element shrinks proportionately.

		If we add a `border` or `margin`, those values will be added to the `width` or `height` properties to calculate the full box size. For example, if we add a `border` of 10 pixels and a `padding` of 20 pixels around every side of the element with a `width` of 400 pixels, the actual full `width` will become 420 pixels.
		
			div {
				box-sizing: padding-box;
			}
		
	- Lastly, the `border-box` value alters the box model so that any `border` or `padding` property values are included within the `width` and `height` of an element. When using the `border-box` value, if an element has a `width` of 400 pixels, a `padding` of 20 pixels around every side, and a `border` of 10 pixels around every side, the actual `width` will remain 400 pixels.

		If we add a `margin`, those values will need to be added to calculate the full box size. No matter which `box-sizing` property value is used, any `margin` values will need to be added to calculate the full size of the element.
		
			div {
				box-sizing: border-box;
			}
		
	

- #####The Universal Selector

	In the first step of this exercise we were introduced to the universal selector. In CSS the asterisk, *, is the universal selector, which selects every element. Rather than listing every single element imaginable, we can use the asterisk as a catch-all to select all elements for us.

