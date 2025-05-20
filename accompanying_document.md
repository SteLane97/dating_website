Web Development - Connecting Hearts Website Documentation

This documentation outlines the design choices and features I implemented in the 'Connecting Hearts' dating website project. I aimed to create a user-friendly interface that meets the business requirements of the case study while also covering all of the assignemnt tasks given.

STRUCTURE
I layed out the HTML using semantic HTML elements including header, nav, main, section, aside, and footer to help with accessibility as specified in the requirements. I included breadcrumbs on each page to improve navigation, but ran into difficulty making the parent elements a clickable link to a separate page without breaking the SlickNav functionality for the submenus. So insttead, I put parent categories in italics to visually distinguish them while maintaining the navigation structure. This way, users won't think the parent elements are clickable either, as they aren't underlined.

Another thinng to mention is we were taught it's usually better to avoid excessive div elements. For the most part I kept to this, however I felt they made some of the more complicated pages easier to manage, such as on the events page. This helped me maintain better control over the layout while keeping the code readable.

RESPONSIVENESS
I implemented a fluid layout with a maximum width of 1024px that occupies 95% of the browser window as required. The website used media queries at 900px, 767px, and 479px breakpoints, with changes to font sizes and spacings, as well as making a more vertical layout the more the screen size decreases.

As mentioned, I implemented a Slicknav menu for smaller screen sizes. I also tried to make sure images scale proportionally using max-width , min-width and other selectors. This worked for the placeholder images but could maybe clean that up next time.

JAVASCRIPT
I included Javascript for form validation, specifically to ensure the password and Confirm password fields matched on the registration page before allowing the submit button to woork.

EXPERIMENTING WITH DESIGN
I tried to keep eveything somewhat consistent over the whole website, although had to use slightly different techniques for some pages. For example, on the membership plans page, I created a comparison table and used classes a lot more than the other pages. I was experimeting to see how successfully I could edit the styles of each individual element. In this table I also used some symbols (a tick and a cross), which is something I realised was possible during another practice prooject. I also founnd you could change the colour of these symbols to make it more visually appealing.

Similarly on the testimonials page, I styled the blockquote features boxes in a bit more depth. The box designs are something I used when I breifly experimented with Figma a while ago - as weell as things such as boorder-radius for rounded corners.

I used the classes feature-box and plan-box as based on when I have done other side projects, they are the type of names I use as I believe they make sense semanttically.

One other thing to mention is that due to the requirements of the colour of the links in the aside menu - I felt the only available background colour to use was very light, almost white, as other colours would clash with at least one of the link colour requirements. 

REQUIREMENTS
I have covered all requirements, and tried to balance my website bwtween functionality and visual appeal, however there are always areas for improvement. If I were to continue this project, I would: better utilise spacing on somoe pages. As you scroll down a space is left below the aside menu, making the pages sometimes seem a bit lonog and making aboove-the-fold content slightly less effective; implement a bit more Javascript, as opposed to just using HTML data validation; make the smaller-screened views look a bit more clean. I also tried to implement a favicon (it was of a logo I designed initially, before realising we had to use one of the provided images), however I couldn't get it to show up on my browser unfortunately.

CONCLUSION
This Connecting Hearts website meets the assignment requirements specified and tried to include all relevant business information, while keeping a consistentand responsive design. Although here are areas for improvement/refinement, I believe this project demonstrates my understanding of the modern web design we have been taught and also my ability to convert them from ideas to appearing on screen.