#Shay Howe - Lesson 6
##Working with Typography 


#####Typeface vs. Font:

- A _typeface_ is what we see. It is the artistic impression of how text looks, feels, and reads.

- A _font_ is a file that contains a typeface. Using a font on a computer allows the computer to access the typeface.


#####Changing Font Properties:

A lot of this is review from previous learnings, but I'll bullet point the material covered in this lesson, regarding changing font properties. 

- Most of these properties are prefaced with `font-*` or `text-*`

######Font Family

- Font names consisting of two or more words need to be wrapped in quotation marks. Additionally, the last font should be a keyword value, which will use the system default font for the specified type, most commonly either `sans-serif` or `serif`
		
		body {
		  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		}

######Font Size 

- The font-size property provides the ability to set the size of text using common length values, including pixels, em units, percentages, points, or font-size keywords.


			body {
			  font-size: 14px;
			}
			
######Font Style 

- To change text to italics, or to prevent text from being italicized, we’ll use the `font-style` property. The `font-style` property accepts four keyword values: `normal`, `italic`, `oblique`, and `inherit`.

		.special {
		  font-style: italic;
		}
		
######Font Variant 

It doesn’t happen often, but occasionally text will need to be set in small capitals, also known as small caps. For this specific case we’ll use the `font-variant` property. The `font-variant` property accepts three values: `normal`, `small-caps`, and `inherit`. 

		.firm {
		  font-variant: small-caps;
		}
		
######Font Weight 

- Occasionally, we’ll want to style text as bold or to change the specific weight of a typeface. For these cases we’ll use the `font-weight` property. The `font-weight` property accepts either keyword or numeric values.

	Keyword values include `normal`, `bold`, `bolder`, `lighter`, and `inherit`. ***Of these keyword values, it is recommended to primarily use `normal` and `bold` to change text from normal to bold and vice versa. Rather than using the keyword values `bolder` or `lighter`, it’s better to use a numeric value for more specific control.***
	
		.daring {
		  font-weight: bold;
		}
		
- The numeric values `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, and `900`	 pertain specifically to typefaces that have multiple weights. The order of these weights starts with the thinnest weight, `100`, and scales up to the thickest weight, `900`. For reference, the keyword value of normal maps to `400` and the keyword bold maps to `700`; thus, any numeric value below `400` will be fairly thin, and any value above `700` will be fairly thick.

	Changing the `font-weight` to `600` for any element with the class of daring now renders that text as semibold—not quite as thick as the `bold` keyword value from before:
	
		.daring {
		  font-weight: 600;
		}
		
######Line Height 

- Line height, the distance between two lines of text (often referred to as leading) is declared using the `line-height` property. The `line-height` property accepts all general length values.

- The best practice for legibility is to set the `line-height` to around one and a half times our `font-size` property value. This could be quickly accomplished by setting the `line-height` to `150%`, or just `1.5`. However, if we’re working with a baseline grid, having a little more control over our `line-height` using pixels may be preferable.
	
			body {
			  line-height: 22px;
			}
			
			
######Shorhand Font Properties 

- All of the font-based properties listed earlier may be combined and rolled into one font property and shorthand value. The font property can accept multiple font-based property values. The order of these property values should be as follows, from left to right: `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height`, and `font-family`.

		html {
		  font: italic small-caps bold 14px/22px "Helvetica Neue", Helvetica, Arial, sans-serif;
		}


######Text Align 

- The `text-align` property has five values: `left`, `right`, `center`, `justify`, and `inherit`.


		p {
		  text-align: center;
		}

- The `text-align` property should not be confused with the `float` property. The `text-align` values `left` and `right` will align text within an element to the left or right, whereas the `float` values left and right will move the entire element. Sometimes the `text-align` property will give us the desired outcome, and other times we may need to use the float property.		

######Text Decoration

- It accepts the keyword values of `none`, `underline`, `overline`, `line-through`, and `inherit`.

		.note {
		  text-decoration: underline;
		}
		
- _Multiple `text-decoration` values may be applied to an element at once by space-separating each keyword within the value._


######Text Indent 

- The `text-indent` property indents the first line of text within an element. 

- It uses all of the length values that have been covered so far: pixels, points, percentages, etc..

- Positive `text-indent` values indent the first line of text inward, while negative `text-indent` values indent the first line of text outward. 


		p {
		  text-indent: 20px;
		}
		
		
######Text Tranform 

- While the `font-variant` property looks for an alternate variant of a typeface, the `text-transform` property will change the text inline without the need for an alternate typeface. The `text-transform` property accepts five values: `none`, `capitalize`, `uppercase`, `lowercase`, and `inherit`.

- The `capitalize` value will capitalize the first letter of each word, the `uppercase` value will capitalize every letter, and the `lowercase` value will make every letter lowercase. Using `none` will return any of these inherited values back to the original text style.

		p {
		  text-transform: uppercase;
		}
		
######Word and Letter Spacing 

- It's the way it sounds. These properties and their values adjust the space between words and letters respectively. 

-  A positive length value will push words or letters farther apart from one another, while a negative length value will pull them closer together. 

		p {
		  letter-spacing: -.5em;
		}
		
		
		p {
		  word-spacing: .25em;
		}