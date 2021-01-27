# WaveCut Website

This site uses [NextJS](https://nextjs.org), a react based framework. For more information on how to use it please visit their website.

Below are some notes on how to use the framework, based on their [basics tutorial](https://nextjs.org/learn/).

## Next JS Concepts

### Requirements
Install NodeJS and ensure that git is installed. 

### Setting up

Everything is set up like gatsby. To start a boiler plate use:

```
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/navigate-between-pages-starter"

```

where `nextjs-blog` is the name of the repository you want to create. This comes with a git repository already, so if you want to push this to github you need to use the "push existing repository" commands shown below:

```
git remote add origin <repository url>
git push -u origin master
```

### Pages

Pages in the page directory have the same endpoint as the file name

Pages are associated with a route based on their file name. For example, in development:

`pages/index.js` is associated with the `/` route.
`pages/posts/first-post.js` is associated with the `/posts/first-post` route.

