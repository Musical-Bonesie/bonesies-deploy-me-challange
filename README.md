# What is this application!?

- A mini challenge I created to help students practice deploying a front-end application via Netlify[https://www.netlify.com/].
- This app is currently designed for 1280px w screen.

## Getting started:

- In terminal, navigate into the folder you'd like to house this project in.
- git clone this project.
- **npm start** your freshly cloned project to make sure it's working how it should.
- Make any changes you'd like (you can also do this after it's deployed as well)!
- Create a GitHub repo for this project.
- Create a Netlify account.

## Get Ready to Deploy!

### two ways to clone this project to deploy:

- Clone this GitHub repo.
- Create your own GitHub repo for this project.
- git remote set-url origin <new git repo you created> add, commit, push.

### OR

- fork the this repo
- _then continue to the next steps._

### Next Steps

- Feel free to make it your own! Add or change something.
- Create a GitHub repo for bonesies-deploy-me-challange project. Call it whatever you like!
- Once everything looks good and you’re ready to deploy it run: **npm run build**
- After running npm run build, you should see a lovely build folder appear in your project.

## Next Steps:

- Once you’ve set up your account with Netlify. Click on > _New site from Git_
- Chose GitHub and follow the instructions to connect GitHub to Netlify
- Next pick the GitHub repo you’d like to deploy.

### Site Settings:

- Owner:
- **Branch to deploy:** main

### For Build Settings:

- **Base directory:** not set
- _side note_ about Build directory: This is referring to the directory your project is in. So if it’s in a folder called > client it would be “client”. The Default setting is the root of the repository. So in this case, you don’t have to set it.
- **Build command:** npm run build
- **Publish directory:** build
- Hit Deploy (it may take a moment).
- Share your link to show off your deployed app!
