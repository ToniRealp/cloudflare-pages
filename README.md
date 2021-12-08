# Workers front end (pages)
This is a web app developed with nextJS for the cloudflare general assignment.

### Functionalities
This web app tries to emulate a social media like experience. First we can see all posts published in a nice home page.
The app also allows us to publish our own posts. At the moment all the posts are published under the same user, due to
missing the user authentication, which will be targeted in the systems assignment.
Then together with all this the app also comes with a nice voting system for some added interaction.
So in summary we can perform all CRUD operations on the posts plus the voting system.

### Features
- NextJS
- Tailwind
- SWR
- Ky

### NextJS
NextJS provides our application with some nice features, amongst them I would like to highlight two.
First it provides our react application with static rendering allowing for better SEO and performance (which in this case is not really noticeable
but this is a showcase for an assignment so better show off 😂).
Second it allows us to cache the props provided by the back end again improving performance a little.

### Tailwind
To make the application look nice, I used tailwind which is becoming one of the standard for web desing. Tailiwind works really well with react
because it provides with a way of encapsulating all the component logic in the same file wihtout the need to break our heads figuring out how to make
the styles. It also comes with a lot per default features that make our application look nicer out of the box.


### useSWR
useSWR is a data fetching library that provides us with react hooks that allow us to do really nice data fetching optimization to provide our app
with a better feel overall. As a side note it is also developed by the same people as nextJS.
Basically useSWR allows us to manage and change the frontend data without the need to validate it against the server at first, so it gives the
application the feel that everything is working instantly while performing all the fetching asynchronously.
Of course when the web is refreshed all the data is refetched form the server through the getServerSideProps nextJS function.

### ky
ky is basically just a nice looking http request library.
