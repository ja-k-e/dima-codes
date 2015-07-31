#6. Box Model

Welcome to the box model brain fudge! Don't worry, it'll make more sense the more you do it.

##Lesson
- Open up `box-model.html` in your browser and then in Sublime.
- Look at the code for `box-model.html`. Study each section. While doing so, pay attention to the classnames. Think about how you could select things without accidentally selecting others.
- Open up `box-model.css`, it is already included in the `head` of `box-model.html`.
- For each `div` or `span` inside of a section, apply the styles described inside of the tag for the element. For example:

```html
  <div class="box">20px of padding, display inline-block</div>
```

Would be asking for the following style:

```css
  .box { padding: 20px; display: inline-block; }
```

- As you do this, make sure your selectors are only selecting the elements you are trying to select!
- After you finish each section, refresh your browser and see the effect. Things might look a bit weird at times. Make note of anything that seems odd in the `Notes` section at the bottom of this README.
- Once you have completed each section, look at `box-model-cheat.css`. See if there are any differences. If there are and you don't understand why, make note of them in the `Notes` section at the bottom of this README.
- Open `box-model-cheat.html` in another Chrome tab and see if there are any visual differences between it and your `box-model.html`. If there are differences, try and figure out why by comparing the two stylesheets.
- Sync the codebase with GitHub and call it a night!


##Things to know
There are some base styles applied to some of the elements at the bottom of `box-model.css`. Feel free to ignore them. There is a border around each section to help you see margins, a background color for each `.box` to show their padded size, and some margins on each `h1` to give each section some breathing room. The `main` tag has some styles applied to it to center the content and give it a width.

##Notes
*write any notes below*

####Dima's Takeaways:

- Understanding the difference between `inline` and `block` display values has been crucial to visualizing `html` structure.

	- HTML blocks can be viewed as four-sided objects - quadrilaterals. Quadrilateral objects are polygons - which, by definition create a closed circuit _body_ contained within its borders (sides). 
	- The CSS box model is a game of shaping boxes, fitting boxes within boxes, stacking boxes on top of one another, or lining boxes next to each other. _Syntactically, we call the boxes blocks._
	- Since blocks can be thought of as quadrilateral objects, their simple, yet powerful, criteria for construction can be manipulated for the purpose of arranging our blocks the way we want: 
		- **Margins**: Negative white space around the border of the block. It does not respond to any styling manipulation besides its size. (_Sticking to the box stacking example: margins are the empty space between our boxes._)
		- **Borders**: The sides around the block. (_What the box looks like from the outside. Is it a thick box, a thin box, a red box, a transparent box, is it a rectangle, does it have rounded edges, etc.?_)
		- **Padding**: The space between the inside of the block borders and the content within the block. (_When packing boxes we put foam or bubblewrap or newspaper or whatever around the stuff in the box until it touches the edges of the box._)
		- **Content**: The stuff inside the block. (_Boxes can look however they want and have all the fancy packaging and padding they want, but what's most important about a box is what's inside._)
	- Inline `html` elements are not quadrilateral by nature.
		- They do not have four sides.
		- They act like a literal _line_ - horizontal by default.
		- They take up as much width as needed - depending on their content. 

	
- I noticed that `html` class attributes can contain more than - one value, or class name (CSS selector) - e.g. `class="box box1"`. 

----------------------------------------------------------------
#why? 

- I'm still uncertain of why the padded divs, when set to `display: inline` are floating their padding of 20px over the border they are supposed to be contained in. The border adjustment seems to only be responsive to the `font-size` and ignores the padding. _I.e. if I change the `font-size` to be bigger or smaller, the border expands or contracts with the adjustment, however if the padding of the `div` is adjusted the border remains to stay the same._
