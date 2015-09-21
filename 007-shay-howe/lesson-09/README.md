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


###Adding Audio 

- As with the `<img>` element, the `<audio>` element accepts a source URL specified by the `src` attribute. 

- Unlike the `<img>` element, though, the `<audio>` element requires both opening and closing tags.

######Audio Attributes

- Several other attributes may accompany the src attribute on the `<audio>` element: `autoplay`, `controls`, `loop`, and `preload`.

- The `autoplay`, `controls`, and `loop` attributes are all Boolean attributes. As Boolean attributes, they don’t require a stated value. Instead, when each is present on the `<audio>` element its value will be set to true, and the `<audio>` element will behave accordingly.

- By default, the `<audio>` element isn’t displayed on a page. If the autoplay Boolean attribute is present on the `<audio>` element, nothing will appear on the page, but the audio file will automatically play upon loading.

		<audio src="jazz.ogg" autoplay></audio>
		
- To display the `<audio>` element on a page, the controls Boolean attribute is necessary. When it’s applied to the `<audio>` element, the `controls` Boolean attribute will display a browser’s default audio controls, including play and pause, seek, and volume controls.

		<audio src="jazz.ogg" controls></audio>
		
- The `loop` Boolean attribute will cause an audio file to repeat continually.

- The `preload` attribute for the `<audio>` element helps identify what, if any, information about the audio file should be loaded before the clip is played. It accepts three values: `none`, `auto`, and `metadata`. 

	- The `none` value won’t preload any information about an audio file 
	
	- The `auto` value will preload all information about an audio file 
	
	- The `metadata` value sits in between the `none` and `auto` values. It will preload any available metadata information about an audio file, such as the clip’s length, but not all information.
	- When the `preload` attribute isn’t present on the `<audio>` element, all information about an audio file is loaded - as if the value was set to `auto`
	
	
######Audio Fallbacks and Multiple Sources 

At the moment, different browsers support different audio file formats, the three most popular of which are `ogg`, `mp3`, and `wav`. For the best browser support we’ll need to use a handful of audio fallbacks, which will be included inside an `<audio>` element’s opening and closing tags. 

To do this, we need to remove the `src` attribute from the `<audio>` element, and instead, nest in a `<source>` element into the `<audio>` element. Consequently,  the `<source>` element will host the `src` attribute and it's destination value for the audio file. 

We’ll use the `type` attribute to quickly help the browser identify which audio types are available. When a browser recognizes an audio file format it will load that file and ignore all the others.

		<audio controls>
		  <source src="jazz.ogg" type="audio/ogg">
		  <source src="jazz.mp3" type="audio/mpeg">
		  <source src="jazz.wav" type="audio/wav">
		</audio>
		
######Adding Video

We use the `<video>` element in place of the `<audio>` element. All of the same attributes (`src`, `autoplay`, `controls`, `loop`, and `preload`) and fallbacks apply here, too.

With the `<audio>` element, if the `controls` Boolean attribute isn’t specified the audio clip isn’t displayed. With videos, if the `controls` Boolean attribute is not specified the video will display. However, it is fairly difficult to view unless the `autoplay` Boolean attribute is also applied. In general, it's best to include the controls Boolean attribute unless there is a good reason not to allow users to start, stop, or replay the video.

######Poster Attribute

One additional attribute available for the `<video>` element is the `poster` attribute. The `poster` attribute allows us to specify an image, in the form of a URL, to be shown before a video is played.

		<video src="earth.ogv" controls poster="earth-video-screenshot.jpg"></video>
		
######Video Fallbacks 

The same markup format, with multiple `<source>` elements for each file type and a plain text fallback, also applies within the `<video>` element.

			<video controls>
			  <source src="earth.ogv" type="video/ogg">
			  <source src="earth.mp4" type="video/mp4">
			</video>

#####Adding Inline Frames

Adding another HTML page to a current page can be done with the help of an inline frame element - `<iframe>`.

The `<iframe>` element accepts the URL of another HTML page within the `src` attribute value; this causes the content from the embedded HTML page to be displayed on the current page. The value of the `src` attribute may be a URL relative to the page the `<iframe>` element appears on or an absolute URL for an entirely external page.
	
	
	<iframe src="https://www.google.com/maps/embed?..."></iframe>
	
	
The `<iframe>` element has a few default styles, including an inset border and a width and height. These styles can be adjusted using the `frameborder`, `width`, and `height` HTML attributes or by using the `border`, `width`, and `height` CSS properties.

######Seamless Inline Frames 

Pages referenced within the `src` attribute of an `<iframe>` element play by their own rules, as they do not inherit any styles or behaviors from the page they are referenced on. Any styles applied to a page that includes an `<iframe>` element will not be inherited by the page referenced within the `<iframe>` element. Additionally, links within the page referenced within the `<iframe>` element will open inside that frame, leaving the page that contains the `<iframe>` element unchanged.

The `seamless` Boolean attribute will allow us to inherit any styles or behaviors from the page they are referenced on. When present on the `<iframe>` element, the `seamless` Boolean attribute allows styles from the page that includes an `<iframe>` element to be inherited by the page referenced within the `<iframe>` element. Additionally, the `seamless` Boolean attribute allows links clicked on a page referenced within an `<iframe>` element to be opened within the same window as the original page that includes the `<iframe>` element.

		<iframe src="contact.html" seamless></iframe>