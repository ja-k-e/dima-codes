#Shay Howe - Lesson 7
###Setting Backgrounds and Gradients 


######How to add background colors and images to elements:

- Adding a background color can be done with one of two CSS properties

		- div {
			background-color: red;
		  }
		  	
		- div {
			background: red;
		  }		 
	
	The `background-color` property refers directly to the background color of an element while the `background` property can take color and image values. 
	
- Adding a background image to an element can be done with one of two CSS properties

		- div {
			background: url("image.png");
		  }
	
		- div {
			background-image: url("image.png");
		  }
		  
	- As with the `background-color` property, `background-image` is the more semantically specific property for setting a background image - though the `background` property will work here too. 
	
	- It's important to note that when we set a background image to an element we need to specify the image's file directory, or location; like we would when adding an `href` attribute to an anchor (`<a>`) element. This is done with the `background` or `background-image` property value function `url()`. The file path goes inside of the parentheses. 
	
######Background Repeat 

- Adding a background image may produce a generally undesirable result. This is due to the the default settings of the `background-image` property being set to repeating the image until the element is filled up. The image will repeat from the top left corner and move across the element horizontally and then vertically - once it reaches the end of the width of the element. There is a way to control this default setting however, and it is done as follows: 


		div {
		  background-image: url("alert.png");
		  background-repeat: no-repeat; /* This is the ticket right here*/
		}
		
- The `background-repeat` propter takes on four different values: `repeat`, `repeat-x`, `repeat-y`, and `no-repeat`. 

	- `repeat` is the default setting and will repeat the image both horizontally and vertically
	- `repeat-x` will repeat the image horizontally (on the x-axis)
	- `repeat-y` will repeat the image vertically (on the y-axis)
	- `no-repeat` will do exactly what it sounds like: not repeat the image
	

######Background Position 

The default position for a background image is at the top left corner of an element, but we can change this with the `background-position` property. 


- The `background-position` property requires two different values to know where  to place an image

	- The first value is the horizontal (x-axis) offset 
	- The second value is the vertical (y-axis) offset 
	- If only one value is stated, it is interpreted as the horizontal offset value and the vertical offset value is automatically set to 50%
	<br><br>
	
- To set a `background-position` value, we can use the `top`, `right`, `bottom`, and `left` keywords, pixels, percentages, or any length measurement. Keywords and percentages work very similarly. The keyword value `left top` is identical to the percentage value `0 0`, which will keep an image positioned at the left top corner of the element. The keyword value `right bottom` is identical to the percentage value `100% 100%`, which will position an image in the right bottom corner of the element.

######Shorthand Background Image Values

The `background-color`, `background-image`, `background-position`, and `background-repeat` properties may be rolled up into a shorthand value for the background property alone. The order of these properties as a shorthand background property value may vary, however it commonly falls as `background-color`, `background-image`, `background-position`, and then `background-repeat`.

		Example: 
		
		div {
			background: #b2b2b2 url("img.png") 50% 50% no-repeat; 
		}

 
######Linear Gradient Background 

Setting a linear gradient to a background can be done by giving a `linear-gradient()` function as a value to either the `background` or `background-image` properties. The `linear-gradient()` function takes two color values: the beginning color and the end color. The browser will handle the transition between the two colors. 

It is also good practice to set a single `background` color as a default before defining a gradient as a fall back in case some older browsers can't handle a gradient background. 


		div {
			background: #648880;
			background: linear-gradient(#648880, #293f50);
		}
		
######Changing the Direction of a Linear Gradient 

As a default setting, linear gradients move from the top of an element to its bottom. We can change these directions, however, by inserting a keyword value just before the color values in the `linear-gradient()` function as so: 

		div {
			background: #648880;
			background: linear-gradient(to right, #648880, #293f50);
		}
		
		div {
			background: #648880;
			background: linear-gradient(to right bottom, #648880, #293f50);
		}

		etc.. 
		

######Radial Gradient Background 

- Instead of moving from the top of an element to the bottom (as a default), or from one side to the other, the `radial-gradient()` function moves out from the center of an element, creating a radius, outward toward the edges.

		div {
			background: #648880;
			background: radial-gradient(#648880, #293f50);
		} 

- One of the primary differences between radial gradients and linear gradients is that radial gradients can be quite complex, with values for location, size, radius, and so forth.

***Due to the complexity of radial gradients there are some CSS3 Gradient Background Generators that have popped up on the web, which can be a great resource. It just takes a bit of research to find the right one for the job.***


######Gradient Color Stops

- Gradient backgrounds require that we set a minimum of two different color values to for their respective functions (`linear-gradient()` or `radial-gradient()`), but that does not mean we're limited to ONLY two colors. This is where gradient color stops come in. We can enter in as many color values as we want into either of the gradient functions, separated by commas, and the browser will render their transitions evenly. 

		div {
			background: #f6f1d3;
			background: linear-gradient(to right bottom #f6f1d3, #648880, #293f50)
		}

- By default, the browser will position every color stop an equal distance from the next and will transition between them accordingly. If more control over how colors are positioned is desired, a location along the gradient may be identified for each color stop. The location should be declared as a length value and should fall after the color value.

		div {
		  background: #648880;
		  background: linear-gradient(to right, #f6f1d3, #648880 85%, #293f50);
		}


***Unless specified otherwise, the first color stop will be positioned at `0%`, and the last color stop will be positioned at `100%`.***


######Background Clip & Background Origin

- The `background-clip` property specifies the surface area a background image will cover 

- The `background-origin` property specifies where the `background-position` should originate. 

		div {
		  background: url("img.jpg") 0 0 no-repeat;
		  /* The image will cover the surface of the element up to and over the padding  vv */
		  background-clip: padding-box; 
		  /* The positioning of the image via the background-position property will originate from the border of the element */
		  background-origin: border-box; 
		}