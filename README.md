NextPress

by Vladimir Jankovic

NextPress is a powerful blog and news content management system written in Next.js 14 (with app router) powered with Typescript and MUI 5. It uses WordPress API V2 for content delivery, Vercel for hosting and automatic deployment and Git and GitHub for version control and as repository container. NextPress blog CMS is free to use (under GPL-3.0 license) and feature:

- Mobile first & fluid design, adapts to all devices and screen sizes
- Beautiful modern design
- Full SEO optimization
- Dark and light theme hot-switching
- Searchable content
- Lighting fast pagination
- Complete support for categories and tags
- Support for many different text types in posts
- Lot of configurable options

## Check it out live!

You can check it out live at https://doctypeadventures.vercel.app/

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Vercel build settings for Next.js app

Just add env variables (read further) and you are good to go!

## Netlify build settings for Next.js app

Out of the box builds of Next.js app on Netlify will fail because of the build settings.

You can go to General settings -> Build & Deploy -> Continuous deployment -> Build settings and change variables to:

```bash
Runtime: Next.js
Base directory: /
Package directory: Not set
Build command: next build
Publish directory: .next
Functions directory: netlify/functions
Deploy log visibility: Logs are public
Build status: Active
```

Also, you need to add env variables (read further).

## Prevent Node version error

If your build is failing due to the Node version error (error containing text: `The engine “node” is incompatible with this module. Expected version “>=....`), just update your Netlify environment variables with:

NODE_VERSION = 20.9.0

## Prevent 404 error on serverless hosting

If you are on serverless hosting, you must add \_redirects file in public folder with content:

/\* /index.html 200

to prevent 404 error

## Environment variables

There is two environment variables:

`.env.local`

`DOMAIN=http://localhost:3000/` (for development, or domain on host server)
`WORDPRESS_DOMAIN=https://your_worpdress_domain.com`

Please note: in Next.js 14 it is not enough to put this value in .env.local. You need to update next.config.mjs with:

`env: {
    DOMAIN: process.env.DOMAIN,
    WORDPRESS_DOMAIN: process.env.WORDPRESS_DOMAIN,
},`

## Dealing with the CORS

Sometimes (depending on your server) the WordPress REST API fetch will result in `CORS` error when you're trying to reach it from `localhost:3000`.

THERE ARE SEVERAL METHODS THAT YOU SHOULD NOT MIX:

1. Add `.htaccess` file inside your WordPress folder, and add insert this code into it:

```bash
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "https://yourdomain.com"
    Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type, Authorization"
    # Header set Access-Control-Allow-Credentials "true"
</IfModule>
```

2. You can control your CORS setting for a WordPress installation in the `functions.php` file located in your selected theme folder.

So, go to `_your_wordpress_root_/wp-content/themes/_chosen-theme_` and in the `functions.php` add this part of the code:

```bash
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');
```

Of, course, if you do not want to allow everybody to reach your WordPress API, replace '\*' with your NextPress application domain.

Please note: sometimes for this change to take effect immediately, you should clear or disable LiteSpeed Cache or any other cache you use in your WordPress.

3. Also, for development purposes, you can overcome this issue by running the Chrome browser without security (It is most secure if you do it from the sandbox, even if you only go to `localhost:3000`):

- Press `Windows key` + `R`
- Type: `chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security`

## WordPress API V2

This app gets it's blog content from [WordPress API](https://developer.wordpress.org/rest-api/) which means that you must host WordPress installation somewhere. The free plan on WordPress.com website will NOT do the trick because of (in the time of writing) the obsolete api version used.

## WordPress API V2 caveats

Sometimes, although installed properly and working, reaching the WordPress API on adress `https://yourwpdomain/wp-json/wp/v2` will result in 404 error. Here is what you can do:

- You can insert `index.php` into WordPress REST API endpoint and it will fix 404 error: `https://vl4di11ir.pw/doctypeadventures/index.php/wp-json/wp/v2`.
- Or you can just go to WordPress SETTINGS, click on PERMALINKS, then choose 'Plain' (and click on save changes), then return to your real permalink choice (mine was 'Day and name'), click on save changes, and error 404 will disappear and your WordPress REST API endpoint will work as it is, without `index.php` insertion.

## Blocking WordPress from displaying your posts, and use it just as an API server

If you do not want for WordPress to display your posts (and use it just as an API server), you can create your 'empty' theme.

Go to `wp-content/themes` folder and create two files:

`index.php`

With following content:

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>Nothing to See Here</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        .message {
            text-align: center;
            background: #fff;
            padding: 20px;
            border: 1px solid #ddd;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <div class="message">
        <h1>Nothing to See Here</h1>
        <p>Move along, there's nothing interesting on this page.</p>
    </div>
</body>
</html>
```

`style.css`

With following content:

```bash
/*

Theme Name: Vladimir's Nothin' Here Theme

Theme URI: https://doctypeadventures.vercel.app/

Author: Vladimir Jankovic

Author URI: https://doctypeadventures.vercel.app/

Description: A custom theme to prevent any frontend rendering.

Version: 1.0

License: GNU General Public License v2 or later

License URI: http://www.gnu.org/licenses/gpl-2.0.html

Tags: hidden, no-frontend

*/
```

Also you can put thumbnail JPEG or PNG image named `screenshot.png` inside your theme's folder. The recommended size for the theme thumbnail image is 1200x900 pixels.

## Disallow robots on WordPress site

Maybe it will be also good idea to disallow robots crawling onto your WordPress site which is only API. You can:

- Add `robots.txt` file in the root folder of your WordPress installation with this content:

```bash
User-agent: *
Disallow: /
```

- You can put meta tag (already present in `index.php` example file above) into your `index.php` file:

`<meta name="robots" content="noindex, nofollow">`

## Backing up the WordPress database manually

- First you need to go to PHP MyAdmin, run it, click on the WordPress database, and click on EXPORT. Choose SQL format. It should result in creating the `some-name.sql` file.
- Copy whole WordPress installation folder from your server (preferably in a ZIP file). What you need the most is the folder: `wp-content\uploads`.

## Restoring the WordPress database

- On your server create new blank database table with username and password.
- Enter your new database, click IMPORT. Choose your backup stored in the `some-name.sql` file.
- Install new clean version of WordPress, pointing it (during the installation with credentials) to the new database where you restored your backup.
- Finish installation process, start the WordPress. All posts should be there except images.
- Copy your backed up `wp-content\uploads` folder to you WordPress installation `wp-content\uploads` folder.
- Now the pictures also should be here and restoration of previous WordPress installation is complete.

## Copyright Information

GPL-3.0 license

Copyright (c) 2024 Vladimir Jankovic
