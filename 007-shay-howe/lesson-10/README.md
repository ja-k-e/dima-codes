# Shay Howe - Lesson 10 

## Building Forms 
----------------
_Forms are, in a nutshell, ways to collect information from a user and post them to a database on a server and process requests. This can be a small amount of information such as a user name and password, or a large amount of text such as a comment box, etc._

_Forms use something called controls or fields in order to do their job. The different controls are specific to the information being inputed by the user._


######Initializing a Form

To add a form to a page a `<form>` element is used in order to wrap all of the controls that will be used in the form - much like a `<div>` element wraps various elements. 

		<form action="/login" method="post">
  			...
		</form>

A handful of different attributes can be applied to the `<form>` element, the most common of which are `action` and `method`. The `action` attribute contains the URL to which information included within the form will be sent for processing by the server. The `method` attribute is the HTTP method browsers should use to submit the form data. Both of these `<form>` attributes pertain to submitting and processing data.

####Textfields and Textareas

When it comes to gathering text input from users, there are a few different elements available for obtaining data within forms. Specifically, text fields and textareas are used for collecting text- or string-based data. This data may include passages of text content, passwords, telephone numbers, and other information.



######Textfields

One of the primary elements used to collect text is the `<input>` element. It is self contained, like an `<img>` element and uses attributes and their values to function.

- The `<input>` element uses the `type` attribute to define what type of information is to be captured within the control (field).

- Along with setting a `type` attribute, it is best practice to give an `<input>` element a name attribute as well. The `name` attribute value is used as the name of the control and is submitted along with the input data to the server.

		<input type="text" name="username">
		
	<input type="text" name="username" value="I'm the code above ^^^"> 


######Textarea

Another element that’s used to capture text-based data is the `<textarea>` element. The `<textarea>` element differs from the `<input>` element in that it can accept larger passages of text spanning multiple lines. The `<textarea>` element also has start and end tags that can wrap plain text. Because the `<textarea>` element only accepts one type of value, the `type` attribute doesn’t apply here, but the `name` attribute is still used.

		<textarea name="comment">Add your comment here</textarea>

***This is what the code above spits out***

<textarea name="comment">Add your comment here</textarea> 

####Multiple Choice Inputs and Menus

Apart from text-based input controls, HTML also allows users to select data using multiple choice and drop-down lists.


######Radio Buttons

Radio buttons are an easy way to allow users to make a quick choice from a small list of options. Radio buttons permit users to select one option only, as opposed to multiple options.

With text-based inputs, the value of an input is determined by what a user types in; with radio buttons a user is making a multiple choice selection. Thus, we have to define the input value. Using the `value` attribute, we can set a specific value for each `<input>` element.

To preselect a radio button for the user we can also add a Boolean attribute of `checked`.

		<input type="radio" name="day" value="Friday" checked> Friday
		<input type="radio" name="day" value="Saturday"> Saturday
		<input type="radio" name="day" value="Sunday"> Sunday
		
***This is what the code above spits out***

<input type="radio" name="day" value="Friday" checked> Friday
<input type="radio" name="day" value="Saturday"> Saturday
<input type="radio" name="day" value="Sunday"> Sunday 


######Check Boxes

Check boxes are very similar to radio buttons. They use the same attributes and patterns, with the exception of checkbox as their `type` attribute value. The difference between the two is that check boxes allow users to select multiple values and tie them all to one control name, while radio buttons limit users to one value.

		<input type="checkbox" name="day" value="Friday" checked> Friday
		<input type="checkbox" name="day" value="Saturday"> Saturday
		<input type="checkbox" name="day" value="Sunday"> Sunday
		
***This is what the code above spits out -- click around***

<input type="checkbox" name="day" value="Friday" checked> Friday
<input type="checkbox" name="day" value="Saturday"> Saturday
<input type="checkbox" name="day" value="Sunday"> Sunday

######Drop-Down Lists

To create a drop-down list we need to use the `<select>` and `<option>` elements. The `<select>` element wraps all of the menu options, and each menu option is marked up using the `<option>` element.

- The `name` attribute resides on the `<select>` element, and the `value` attribute resides on the `<option>` elements that are nested within the `<select>` element. The `value` attribute on each `<option>` element then corresponds to the name attribute on the `<select>` element.

- Each `<option>` element wraps the text (which is visible to users) of an individual option within the list.

- Much like the `checked` Boolean attribute for radio buttons and check boxes, drop-down menus can use the `selected` Boolean attribute to preselect an option for users.

		<select name="day">
		  <option value="Friday" selected>Friday</option>
		  <option value="Saturday">Saturday</option>
		  <option value="Sunday">Sunday</option>
		</select>

***This is what the code above spits out -- click around***

<select name="day">
  <option value="Friday" selected>Friday</option>
  <option value="Saturday">Saturday</option>
  <option value="Sunday">Sunday</option>
</select>


######Multiple Selections

The Boolean attribute `multiple`, when added to the `<select>` element for a standard drop-down list, allows a user to choose more than one option from the list at a time. Additionally, using the `selected` Boolean attribute on more than one `<option>` element within the menu will preselect multiple options.

		<select name="day" multiple>
		  <option value="Friday" selected>Friday</option>
		  <option value="Saturday">Saturday</option>
		  <option value="Sunday">Sunday</option>
		</select>

***This is what the code above spits out -- click around (hold shift form multiple selections)***

<select name="day" multiple>
  <option value="Friday" selected>Friday</option>
  <option value="Saturday">Saturday</option>
  <option value="Sunday">Sunday</option>
</select>

####Form Buttons 


After a user inputs the requested information, buttons allow the user to put that information into action. Most commonly, a submit input or submit button is used to process the data.

######Submit Input

Users click the submit button to process data after filling out a form. The submit button is created using the `<input>` element with a `type` attribute value of `submit`. The value attribute is used to specify the text that appears within the button.

		<input type="submit" name="submit" value="Send">

***This is what the code above spits out***

<input type="submit" name="submit" value="Send">

######Submit Button

Using the `submit` value on the `type` property in an `<input>` element can be limiting because it is self-contained.

To gain more control over this type of input we can use the `<button>` element, which has opening and closing tags. This way we can wrap other elements inside the `<button>` element, like text. 

- The `<button>` element has a default attribute and value of `type="submit"` so entering it into the `<button>` element is not necessary. 

- The `value` attribute is replaced by what the `<button>` element is wrapping, so it too, does not need to be used when using the `<button>` element

- We do, however, need to add the `name` attribute to the `<button>` element in order to assign a name to our data being submitted to a server. 

		<button name="submit">
		  <strong>Send Us</strong> a Message		  		  
		</button>


***This is what the code above spits out***

<button name="submit">
  <strong>Send Us</strong> a Message
</button>


####Other Inputs

######Hidden Inputs 

To create a `hidden` input, you use the `hidden` value for the `type` attribute. Additionally, include the appropriate `name` and `value` attribute values.
 
 	<input type="hidden" name="tracking-code" value="abc-123">
 	
######File Input
		<input type="file" name="file">
		
***This is what the code above spits out***	

<input type="file" name="file">
 
####Organizing Form Elements

######Label

Label's are elements that serve form controls like headings. They are clear to the user and/or any assistive technology which form control they are tied to. 

Labels may include a `for` attribute. The value of the `for` attribute should be the same as the value of the `id` attribute on the form control the label corresponds to. Matching up the `for` and `id` attribute values ties the two elements together, allowing users to click on the `<label>` element to bring focus to the proper form control.

		<label for="username">Username</label>
		<input type="text" name="username" id="username">

***This is what the code above spits out***	
		
<label for="username">Username</label>
<input type="text" name="username" id="username">

We can also wrap `<inputs>` or form controls in `<label>` elements and do away with the `for` and `id` attributes. 

		<label>
		  <input type="radio" name="day" value="Friday" checked> Friday
		</label>
		<label>
		  <input type="radio" name="day" value="Saturday"> Saturday
		</label>
		<label>
		  <input type="radio" name="day" value="Sunday"> Sunday
		</label>

***This is what the code above spits out***	

<label>
  <input type="radio" name="day" value="Friday" checked> Friday
</label>
<label>
  <input type="radio" name="day" value="Saturday"> Saturday
</label>
<label>
  <input type="radio" name="day" value="Sunday"> Sunday
</label>		
<br>

######Fieldset

Fieldsets group form controls and labels into organized sections. Much like a `<section>` or other structural element, the `<fieldset>` is a block-level element that wraps related elements, specifically within a `<form>` element, for better organization. Fieldsets, by default, also include a border outline, which can be modified using CSS.


		<fieldset>
		  <label>
		    Username
		    <input type="text" name="username">
		  </label>
		  <label>
		    Password
		    <input type="text" name="password">
		  </label>
		</fieldset>

***This is what the code above spits out***	

<fieldset>
 <label>
   Username
   <input type="text" name="username">
 </label>
 <label>
   Password
   <input type="text" name="password">
 </label>
</fieldset>

######Legend

A legend provides a caption, or heading, for the `<fieldset>` element. The `<legend>` element wraps text describing the form controls that fall within the fieldset. The markup should include the `<legend>` element directly after the opening `<fieldset>` tag. On the page, the legend will appear within the top left part of the fieldset border.

		<fieldset>
		  <legend>Login</legend>
		  <label>
		    Username
		    <input type="text" name="username">
		  </label>
		  <label>
		    Password
		    <input type="text" name="password">
		  </label>
		</fieldset>

***This is what the code above spits out***	

<fieldset>
  <legend>Login</legend>
  <label>
    Username
    <input type="text" name="username">
  </label>
  <label>
    Password
    <input type="text" name="password">
  </label>
</fieldset>
		
####Form and Input Attributes

######Disabled

The `disabled` Boolean attribute turns off an element or control so that it is not available for interaction or input. Elements that are disabled will not send any value to the server for form processing.

￼Applying the `disabled` attribute to a `<fieldset>` element will disable all of the form controls within the fieldset. If the `type` attribute has a `hidden` value, the hidden Boolean attribute is ignored.
		
		<label>
		  Username
		  <input type="text" name="username" disabled>
		</label>
***This is what the code above spits out - won't do shit when clicked***	

<label>
  Username
  <input type="text" name="username" disabled>
</label>


######Placeholder

The placeholder attribute provides a hint or tip within the form control of an `<input>` or `<textarea>` element that disappears once the control is clicked.		
			
			<label>
			  Email Address
			  <input type="email" name="email-address" placeholder="name@domain.com">
			</label>
		

***This is what the code above spits out***

<label>
  Email Address
  <input type="email" name="email-address" placeholder="name@domain.com">
</label>

***The main difference between the `placeholder` and `value` attributes is that the `value` attribute text stays in place when a control has focus unless a user manually deletes it.***


######Required

The `required` Boolean attribute enforces that an element or form control must contain a value upon being submitted to the server.

		<label>
		  Email Address
		  <input type="email" name="email-address" required>
		</label>

***This is what the code above spits out***

<label>
  Email Address
  <input type="email" name="email-address" required>
</label>
<input type="submit" name="submit" value="Send">


