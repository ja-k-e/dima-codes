# Shay Howe - Lesson 3

######_There was no building in this lesson. The only file that will be included here is this one._

###Topics Covered: 


- How style sheets cascade from the top to the bottom of a file

- What specificity is and how we can calculate it
 
- Specificity weight: 
	- 1-0-0 (***id***) most weight 
	- 0-1-0 (***class***) medium weight
	- 0-0-1 (***type***) least weight 
	- The higher the specificity weight of a selector, the more superiority the selector is given when a styling conflict occurs
	
	- The specificity weight of the the following example is 0-0-1
			
		HTML 
		
			<div>
				<h1>....</h1>
				<p>....</p>
				<p>....</p>
			</div>	
			
		CSS
		
			h1 {
				color: blue;
			}
			
	- The specificity weight of the the following example is 0-0-2
	
		HTML
		
			<div>
				<h1>....</h1>
				<p>....</p>
				<p>....</p>
			</div>
			
		CSS
			
			div p {
				color: blue;
			}
			
	- The specificity weight of the following example is 0-1-1, which is more specific than the 0-0-2 weight of the example above
	
		HTML
		
			<div>
				<h1>....</h1>
				<p>....</p>
				<p class="blue">....<p>
			</div>
			
		CSS
			
			div .blue {
				color: blue;
			}
			
			
	- The specificity weight of the following example will be 1-0-1, which is more specific than all of the above examples
	
		HTML
		
			<div>
				<h1>....</h1>
				<p>....</p>
				<p id="blue">....<p>
			</div>
			
	
		CSS
			
			div #blue {
				color: blue;
			}
<br>
	
-  How to combine selectors to target specific elements or groups of elements

		
		type-selector .class-selector #id-selector {
			background: yellow;
		}
		
- Key selectors further to the right, the rest - to the left are called pre-qualifiers 
			
		.pre-qualifier p.key-selector {
			color: red;
		} 

- Space between selectors 	
	- In this example all of the `<p>` elements will be green besides the `<p>` element that has the class name "red" - which will be red. The `<h1>` will NOT be red, even though it has the same class name as the red `<p>`. This is because there is no space between the paragraph type selector and the "red" class selector in our CSS. It is specific to `<p>`'s with the class name "red". 
	
	HTML
			
			<div class="container">
				<h1 class="red">content</h1>
				<p>content</p>
				<p>content</p>
				<p class="red">this content will be red</red>
			</div>	
			
	CSS
			
			.container p {
				color: green;
			}
		
			.container p.red {
				color: red;
			} 	
			
	- In this example any element with the class name "red" will be selected and colored red. All other `<p>` elements will be the color green. 
	
	HTML
			
			<div class="container"
				<h1 class="red"This content will be RED</h1>
				<p>content</p>
				<p>content</p>
				<p class="red">This content will also be RED</p>
			</div>
			
	CSS
			
			.container p {
				color: green;
			}
			
		 	.container .red	{
		 		color: red;
		 	}		
		
-  How to use multiple classes on a single element to layer on different styles for more modular code / low specificity weight

	HTML
			
			<a class="btn btn-success">....</a>
			<a class="btn btn-danger">....</a>
			
	CSS
	
			.btn {
				font-size: 15px;
			}
			
			.btn-success {
				background-color: green;
			}
			
			.btn-danger {
				background-color: red;
			}


- The different color values available to use within CSS, including keyword, hexadecimal, RGB, and HSL values

- The different length values available to use within CSS, including pixels, percentages, and em units


