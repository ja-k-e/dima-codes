#3. Basic Website: CSS

We are going to start styling our HTML page from lesson 002 with CSS.

##CSS
For an introduction to CSS, see the [w3schools intro to css](http://www.w3schools.com/css/css_intro.asp).

CSS has three main components. Selectors, properties, and values:

```css
selector {
  property: value;
}
```

**Selectors** state what you are going to begin styling with the following content surrounded by curly brackets (`{}`). 

**Properties** are names of the styles you are making. 

**Values** are the value you provide for the style. 

For example: `p { color: red; }` says that all **selected** paragraphs (`p`) have a **value** of `red` for the **property** `color`, or in English: "make all the paragraphs red text".

####Bonus Lingo

The combination of `property: value;` is called a **declaration**. 

A series of declarations inside of the brackets is called a **declaration block**.

##Lesson
- Duplicate the `me-and-code.html` file from lesson 002 into the lesson 003 folder.
- Add the following code on a new line before `</head>` in the new `me-and-code.html` file:

```html
<style>
  body {
    font-family: Helvetica; /* makes the whole document use Helvetica */
  }

  header, footer {
    text-align: center; /* makes the header and footer sections center-aligned */
  }

  main {
    width: 400px; /* makes the main section have a fixed width of 400px */ 
    margin-left: auto; /* auto-aligns the main section box to the right of the page */
    margin-right: auto; /* auto-aligns the main section box to the left of the page */
    /* auto margin left and right ends up centering the block on the page */
  }

  footer {
    color: red; /* makes all text in the footer red */
  }
</style>
```

- Save `me-and-code.html`
- Refresh the browser and see what you've done
- Find 5 CSS properties on the [w3schools CSSRef](http://www.w3schools.com/cssref/) and add them to any selectors in the `style` element that you just added in the `head`
- Save the file and refresh the browser to see what you've done
- Commit the change with Git
- Sync your local Git repository with GitHub
