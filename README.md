# carica
A minimalist [HUGO](https://gohugo.io) theme for blogging. Online demo is available at https://habibrosyad.github.io.

## Features
- Reponsive design
- Disqus for comment system (by not setting your Disqus's shortname this feature is disabled)
- Share buttons (Twitter, LinkedIn, and Facebook)
- Links to your social media
- Sticky table of contents for large view port (e.g. desktop viewing)
- Support [Twitter Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards)

## Notes Before Using
To use this theme you need to uderstand how to use HUGO first. You can easily follow the guides on https://gohugo.io/getting-started/quick-start/. For the basic configurations, you can refer to https://gohugo.io/getting-started/configuration/.

## Installation
To use this theme, simply clone this repository into your HUGO site's `theme` directory:

```bash
$ cd themes
$ git clone https://github.com/habibrosyad/carica
```

## Theme Configurations
Below listed the theme's custom configurations that you can tune up to your specific requirements. Set them up in your site's `config.(toml|yaml|json)`

Option | Description
------ | -----------
`customCSS` | A list of paths/URLs to the custom stylesheets in addition to the theme's default, e.g., `["/css/animation.css","/css/syntax.css"]`
`customJS` | A list of paths/URLs to the custom scripts in addition to the theme's default (similar with the `customCSS`), however you can also edit the `theme.js` and put your customisations at the end of the file
`description` | Custom desctription of the site
`error404Icon` | Custom icon for the 404 error page, this option is Markdown ready
`error404Text` | Custom text for the 404 error page, this option is Markdown ready
`footerText` | Custom text for the footer, this option is Markdown ready
`includeModernizr` | Whether to include [Modernizr](https://modernizr.com/) in the site or not
`includeJQuery` | Whether to include [JQuery](https://jquery.com/) in the site or not
`jumbotronPrimaryText` | Custom primary jumbotron text for the homepage, this option is Markdown ready
`jumbotronSecondaryText` | Custom secondary jumbotron text for the homepage, this option is Markdown ready
`menu` | Carica cannot populate website's menu automatically, so you need to specify it explecitly in the site configuration, please follow the guide on https://gohugo.io/content-management/menus/#add-non-content-entries-to-a-menu to setup the menu
`paginationPreviousText` | Custom pagination text for the link to the list of newer contents, this option is Markdown ready
`paginationNextText` | Custom pagination text for the link to the list of older contents, this option is Markdown ready
`recentPosts` | Number of recent posts to display in the homepage
`recentPostsTitle` | The title of recent posts section in the homepage
`recentPostMoreLink` | Path/URL to your configured site's post page
`recentPostsMoreText` | Custom text for the link to the site's post page
`social` | A key value setting for the links to your social media in the footer, an example configuration is provided at the end of this section
`taggedWithText` | Custom title text for the tags section below each post
`tocText` | Custom title text for the TOC section of each post
`twitterSiteAccount` | The `@username` for the website used in the Twitter card footer
`twitterIndividualAccount` | The `@username` for the the content creator / author

To configure the `social` option, you can set in your configuration as follows (just an example):

```toml
[social]
	github = "https://github.com/username"
	facebook = "https://facebook.com/username"
	twitter = "https://twitter.com/username"
```

The `social` option uses [Font Awesome](https://fontawesome.com/icons) to provide the icons for the links. Thus, as long as your social media is available on Font Awesome, it can be displayed on your site. You just need to provide the name of the social media based on its name as specified in Font Awesome and the full URL to it.

## Acknowledgement
The CSS used in this theme are based on [HTML5 Boilerplate](https://html5boilerplate.com/) and a small portions of the style are also taken from [Bootstrap](https://getbootstrap.com) (e.g., button, reboots).
