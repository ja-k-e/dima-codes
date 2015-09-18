#Shay Howe - Lesson 8

##Creating Lists 

######Unordered Lists

Unordered lists are a list of items that do not require any specific order.

- Unordered lists are a block level element marked up as `<ul>`
- Each item inside the unordered list goes inside an `<li>` element
- `<li>`'s have a default preceding dot called a ***list item marker***

		<ul>
		  <li>Orange</li>
		  <li>Green</li>
		  <li>Blue</li>
		</ul>

		Browser result: 
		
		• Orange
		• Green
		• Blue 
			
		


######Ordered Lists

Ordered lists work just like unordered lists with one significant difference. 
Because the order of an ordered list matters, instead of a dot, each list item marker has a numerical value - starting with 1 for the first `<li>` and continuing down in order: 2, 3, 4, etc..

- Ordered lists are also block level elements like `<ul>`'s but their element tag is `<ol>`
- Each item in an ordered list is still marked up with the `<li>` tag

		<ol>
		  <li>Head north</li>
		  <li>Turn right</li>
	  	  <li>Turn left</li>
		</ol>

		Browser result:
					
		 1. Head north
		 2. Turn right
		 3. Turn left
		 
		
- Because there is an order to ordered lists, we can logically alter their order if the need arrises.

	- We can use the `start` attribute on the `<ol>` element, and we can identify exactly which number an ordered list should begin counting from.

			<ol start="30">
			  <li>Head north</li>
			  <li>Turn right</li>
			  <li>Turn left</li>
			</ol>
			
			Browser result: 
			
			30. Head north
			31. Turn right
			32. Turn Left
		
	- The `reversed` attribute, when used on the `<ol>` element, allows a list to appear in reverse order.

			<ol reversed>
			  <li>Head north</li>
			  <li>Turn right</li>
			  <li>Turn left</li>
			</ol>
			
			Browser result: 
			
			3. Head north
		 	2. Turn right
			1. Turn left
			
	- The `value` attribute may be used on an individual `<li>` element within an ordered list to change its value within the list. The number of any list item appearing below a list item with a `value` attribute will be recalculated accordingly.
	
		
			<ol>
			  <li>Head north</li>
			  <li value="9">Turn right</li>
			  <li>Turn left</li>
			</ol>
			
			Browser result:
					
			 1. Head north
			 9. Turn right
			 10. Turn left

######Description Lists

Description lists are used to outline multiple terms and their descriptions.

To create a description list element we need to use the description list block-level element, `<dl>`. Instead of using a `<li>` element to mark up list items, the description list requires two block-level elements: the description term element, `<dt>`, and the description element, `<dd>`.

		<dl>
		  <dt>study</dt>
		  <dd>The devotion of time and attention to acquiring knowledge on an academic subject, especially by means of books</dd>
		  <dt>design</dt>
		  <dd>A plan or drawing produced to show the look and function or workings of a building, garment, or other object before it is built or made</dd>
		  <dd>Purpose, planning, or intention that exists or is thought to exist behind an action, fact, or material object</dd>
		  <dt>business</dt>
		  <dt>work</dt>
		  <dd>A person's regular occupation, profession, or trade</dd>
		</dl>
		
		
######Nesting Lists

Every list may be placed within another list; they can be nested continually. But the potential to nest lists indefinitely doesn’t provide free rein to do so. Lists should still be reserved specifically for where they hold the most semantic value.

 - Speaking specifically about unordered and ordered lists, the only element that may reside directly within the `<ul>` and `<ol>` elements is the `<li>` element.
 
 - Once inside the `<li>` element, the standard set of elements may be added, including any `<ul>` or `<ol>` elements.
 
 
		<ol>
		  <li>Walk the dog</li>
		  <li>Fold laundry</li>
		  <li>
		    Go to the grocery and buy:
		    <ul>
		      <li>Milk</li>
		      <li>Bread</li>
		      <li>Cheese</li>
		    </ul>
		  </li>
		  <li>Mow the lawn</li>
		  <li>Make dinner</li>
		</ol>
		
		
		Browser result: 
		
		1. Walk the dog
		2. Fold laundry
		3. Go to the grocery and buy:
			• Milk
			• Bread
			• Cheese
		4. Mow the lawn
		5. Make dinner

