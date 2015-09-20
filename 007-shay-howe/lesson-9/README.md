# Shay Howe - Lesson 9 

##Adding Media


######Adding Images 

- To add images to a page, we use the `<img>` inline element. The `<img>` element is a self-containing, or empty, element, which means that it doesn’t wrap any other content and it exists as a single tag. For the `<img>` element to work, a src attribute and value must be included to specify the source of the image. The src attribute value is a URL, typically relative to the server where a website is hosted.

- In conjunction with the `src` attribute, the `alt` (alternative text) attribute, which describes the contents of an image, should be applied. The `alt` attribute value is picked up by search engines and assistive technologies to help convey the purpose of an image. The `alt` text will be displayed in place of the image if for some reason the image is not available.

		<img src="dog.jpg" alt="A black, brown, and white dog wearing a kerchief">
		
		
######Sizing Images

- We can resize the images on a page either directly in the `<img>` markup by adding `width` and/or `height` attributes to it or with CSS. 

- We can add both, `width` and `height` to an image for resizing, but usually it's better to enter only one or the other, because the image might get stretched out of proportion to its original shape. When we change the `height` on an image, the `width` proportionally adjusts to the `height` and all of the aspect ratios. The same concept works when we change the `width` - `height` will adjust proportionally. 

		img {
		  height: 200px;
		  width: 200px;
		}
		
###### Positioning Images 

We can use a number of different approaches to position images on a web page. By default images are positioned as inline-level elements; however, their positions may be changed using CSS, specifically the `float`, `display`, and box model `properties`, including `padding`, `border`, and `margin`.

###### Inline Positioning of Images 

- The `<img>` element is by default an inline-level element. 

- Adding an image without any styles to a page will position that image within the same line as the content that surrounds it - as any inline level element.  

###### Block Positioning Images 

Adding the `display` property to an image and setting its value to `block` forces the image to be a block-level element. This makes the image appear on its own line, allowing the surrounding content to be positioned above and below the image. 

		img {
		  display: block;
		}

######Positioning Images Flush Left or Right

When displaying an image as `inline`, `block` or `inline-block` isn't ideal for one reason or another, we can use the `float` property with its appropriate values `left` and `right`. This will move the image to the left or right side of its containing element. 