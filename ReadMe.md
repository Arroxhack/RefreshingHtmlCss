1 - HTML for Beginners

Is just a markup language not a programming language
You can make it dinamic using JS

index.html -> root file

<p></p>
<h1></h1>
<h6></h6>
<br/>
<br>
<Strong></Strong> // makes a part of the text bold by default, you can change this to change the font the way you like
<em></em> // by default italic, in css you can change to whatever you want
<a href=""></a> // link, href -> the location, it can be local or external. Ex: about.html or http://google.com
<a href="" target="_blank"></a> -> atribute to open in a new tab

lorem tab
lorem10 tab


Inline elements: 
-Do not start on a new line
-Take only the necessary width

Block elements:
-Start on a new line
-Take full width available

Block Level: <div>, <h1> - <h6>, <p>, <form>, <ul>
Inline Level: <span>, <img>, <a>, <label>, <input>


All html tags have attributes that provide more info about a certain element.
They are formated as key/value pairs and placed within the start tag. Values goes between "".

id="someID"

HTML SEMANTIC TAGS
<header></header> <!-- Logo, social media links -->
<footer></footer> <!-- copyright, privacy policy -->
<aside></aside> <!-- sidebar content -->
<main></main>
<article></article> <!-- article from blog -->
<nav></nav> <!-- navbar -->
<section></section> <!-- homepage, main area of the page -->
<details></details>


2 - Css for Beginners 

Cascading Stylesheets

it is not a programming language, its a styling language used for website layout and design and can be extended with Sass/Less

3 ways of adding CSS

-INLINE CSS: Directly in the html element (NO!)
-INTERNAL CSS: Using <style></style> tags within a single document
-EXTERNAL CSS: Linking an external .css file (BEST METHOD BY FAR!!!)

Building a website using Tailwind.

- CSS selectors:

    a     { background-color : yellow ; }
    |     |         |        |    |   | | 
selector  |      property    |  value | |
        declaration start    |        | declaration end  
                             |      declaration separator 
                    property/value separator

Colors in CSS. We can use:

-Color Names
-HTML5 Color names
-Hexadecimal
-RGB

body{
    color: red;
    background-color: coral; <!-- html5 Color -->
}

h1{
    color: #00ff00;
}

p{
    color: rgb(0, 0, 255);
}

An RGBA color value is specified with: rgba(red, green, blue, alpha). The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).


Web Safe Fonts (fonts that come with html, if you want others you have to import them)

We use ids for unique this, for example a unique navbar.
Classes you may use them more than once.
As a general rule use classes, for example bootstrap just use classes.

<!-- # to call ids -->
<!-- . to call classes -->

Use porcentage with containers


BOX MODEL (OPEN PREVIEW TO SEE)
![alt text](/cssCheatSheet/box%20model.png)


                                     Margin
                                     Border(borde visible)
                                     Padding
Margin Border(borde visible) Padding Content


!!!! Positioning in CSS:

-Static (default position)
-Relative (the element is positioned relative to its normal position (we can add top, left right bottom))
-Absolute (whatever position we want inside of a relative element)
-Fixed (fixed position to the browser window, no matter how much we scroll it stays there)
-Initial (sets the property to its default value)
-Inherit (will inherit whatever the property of his parent element )