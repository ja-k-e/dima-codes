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

