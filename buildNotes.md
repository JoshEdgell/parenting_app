mongod --dbpath /Users/joshedgell/db/data

# June 10, 2020

### Completed

Added the login component, but can't figure out how to get the login submit to actually work.  I think it's because I am opening the app up separately from the url.  I think it might have something to do with "path."

### Next on the List

Figure out how to get the login to actually work with the app structure.

# June 9, 2020

### Completed

Added user creation and login routes - a user can log in and the password can be verified.  I need to look into session again to see how it might benefit this project.

### Next on the List

Tear out all of the boilerplate stuff from the react app.  After that, I want to work on user login/logout in the app.

# July 10, 2020

### Completed

Got the error prompts for user login to work in the component and put the login function up into app (can I have the app call functions from another file?).

### Next on the List

I need to finsih user login.

I got hung up on trying to hit the login route in the app.  The utils/API tried to hit localhost:3000, but the api was running on port 3001.  Need to get the production environment right so I can run one app for everything.