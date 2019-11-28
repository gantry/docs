---
title: Using CMS Content in Particles
taxonomy:
    category: docs
    tag: [gantry5]
---

! New feature in Gantry 5.2.14.

Particles are great at displaying custom content in specific areas of your site, but did you know you can also display content directly from the content management system (CMS)? This is possible, and here's how.

!! This is an advanced process, and we only recommend giving it a try if you are an experienced developer with a working knowledge of how data is handled within the CMS. This is something that end users and site managers will likely never have to deal with as they will have access to the pre-created form fields in the administrator.

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

You will need to use **Gantry Content Finders** to load the information directly from Joomla. After this you can render that data on the front end.

# Common functions to all finders

### Creating a new finder

```twig
{% set options = {published: true, id: [14, 3]} %}
{% set finder = joomla.finder('category', options) %}
```

### `.parse(options)` parse options array to rules

Does the same as the second parameter when creating the finder.

```twig
{% set options = {published: true, id: [14, 3]} %}
{% do finder.parse(options) %}
```

### `.find()` Find items using pagination

Default pagination limit, depends on the object type.

```twig
{% set results = finder.find() %}
```

### `.count()` Count total number of items

This function returns a count of items, ignoring the set pagination limit.

```twig
Total count of items: {{ finder.count() }}
```

# Operations

### `.start(limitstart = 0)` Pagination start

Defines first item to be shown. Defaults to 0.

```twig
{% do finder.start(10) %}
```

### `.limit(limit = 10)` Pagination limit

Defines maximum number of items. Defaults to 10.

```twig
{% do finder.limit(3) %}
```

### `.order(by, direction = 'ASC', alias = 'a')` Pagination order

Specifies order of items.

```twig
{% do finder.order('id', 'DESC') %}
```

### `.where(field, operation, value)` Custom where clause

Operation is one of: `>`, `>=`, `<`, `<=`, `=`, `BETWEEN`, `NOT BETWEEN`, `IN` and `NOT IN`.

```twig
{% do finder.where('id', '<', 5) %}
{% do finder.where('id', 'BETWEEN', [1,5]) %}
{% do finder.where('id', 'NOT IN', [1,2,3,4,5]) %}
```

# Category Finder

### Creating a new category finder

```twig
{% set options = {published: true, id: [[14,15], 3]} %}
{% set finder = joomla.finder('category', options) %}
```

### `.id(ids, include = true)`

* `ids` Either array of ids or single id
* `include` Set *True* if you want to include listed categories, *false* if you want to exclude them

```twig
{% do finder.id([1,2,3]) %}
```

### `.language(language = true)`

* `language` True if to use user default, otherwise use language tag

```twig
{% do finder.language('en-GB') %}
```

**NOTE:** You need to include language filter or user will see articles from all languages.

# Content Finder

### Creating a new content finder

```twig
{% set options = {featured: true, id: [[1,2,3]]} %}
{% set finder = joomla.finder('content', options) %}
```

### `.id(ids, include = true)`

* `ids` Either array of ids or single id
* `include` Set *True* if you want to include listed articles, *false* if you want to exclude them

```twig
{% do finder.id([1,2,3]) %}
```

### `.featured(include = true)`

* `include` Set *True* if you want to include featured articles, *false* if you want to exclude them

```twig
{% do finder.featured() %}
```

### `.author(ids, include = true)`

* `ids` Either array of ids or single id
* `include` Set *True* if you want to include by author, *false* if you want to exclude by it

```twig
{% do finder.author(64) %}
```

### `.language(language = true)`

* `language` True if to use user default, otherwise use language tag

```twig
{% do finder.language('en-GB') %}
```

**NOTE:** You need to include language filter or user will see articles from all languages.

### `.category(ids, include = true)`

* `ids` Either array of ids or single id -- accepts also collection of categories found by finder
* `include` Set *True* if you want to include listed categories, *false* if you want to exclude them

```twig
{% do finder.category([1,2,3]) %}
```

### `.tags(tags, matchAll = false)`

* `tags` Object that can contain tag `ids` as well as tag `titles`
    * `ids` Either array of tag ids or single id
    * `titles`Either array of tag titles or a single title
* `matchAll` Set *True* if you want to match an article against all specified tags, *false* if you want to match an article against any passed tag

```twig
{% do finder.tags({ids: [1,2,3]}) %}
{% do finder.tags({titles: ['tag1','tag2','tag3']}) %}
```

**NOTE:** You can specify both `ids` as well as `titles` when using this routine. Please be aware that the `matchAll` parameter set to `true` will match all tags specified by id or title separately but not collectively.  

# Category Object

Category Object in an category instance with all the fields from the database. You can access the available fields, but there are also some functions to help you.

**NOTE:** All JSON encoded fields in the database can be used as arrays.
**NOTE:** Use `|raw` filter for html fields.

## Extra fields

### `.route` Route to category

Contains route to the category.

```twig
<a href="{{ category.route }}">{{ category.title }}</a>
```

## Operations

### `.parent()` Get parent category object

Get parent category or null.

```twig
{% set parent = category.parent() %}
```

### `.parents()` Get all parent category objects

Get list of parent categories.

```twig
{% set parents = category.parents() %}
```

### `.compile(string)` Compile category into a string

Compile category by using given string. Template `context` has variable named `category` which you can use.

```twig
{{ category.compile('<a href="{{ category.route }}">{{ category.title }}</a>') }}
```

### `.render(template)` Render category

Render category by using given template file. Template `context` has variable named `category` which you can use.

```twig
{{ category.render('joomla/category-link.html.twig') }}
```

joomla/category-link.html.twig:
```twig
<a href="{{ category.route }}">{{ category.title }}</a>
```

# Content Object

Content Object in an article instance with all the fields from the database. You can access the available fields, but there are also some functions to help you.

**NOTE:** All JSON encoded fields in the database can be used as arrays.
**NOTE:** Use `|raw` filter for html fields.

## Extra fields

### `.text` Introtext + fulltext

Contains both introtext and fulltext.

```twig
{{ article.text|raw }}
```

### `.readmore` Is there fulltext?

Returns true if there is more to read than what exists in `introtext`.

```twig
{{ article.readmore ? 'Read More...' }}
```

### `.route` Route to article

Contains route to the article.

```twig
<a href="{{ article.route }}">{{ article.title }}</a>
```

## Operations

### `.author()` Get author object

Get JUser object from the author of the article.

```twig
{% set author = article.author() %}
```

### `.category()` Get category object

Get category object.

```twig
{% set category = article.category() %}
```

### `.categories()` Get all category objects

Get list of category objects starting from root category.

```twig
{% set categories = article.categories() %}
```

### `.compile(string)` Compile article into a string

Compile article by using given string. Template `context` has variable named `article` which you can use.

```twig
{{ article.compile('<a href="{{ article.route }}">{{ article.title }}</a>') }}
```


### `.render(template)` Render article

Render article by using given template file. Template `context` has variable named `article` which you can use.

```twig
{{ article.render('joomla/article-link.html.twig') }}
```

joomla/article-link.html.twig:
```twig
<a href="{{ article.route) }}">{{ article.title }}</a>
```

## Accessing current article

You are also able to fetch the current article and display for example its title in your own particle like this:

```twig
{% set request = gantry.request.request %}
{% if request['option'] == 'com_content' and request['view'] == 'article' and request['id'] %}

    {% set article = joomla.finder('content').id([request['id']]).language().find()|first %}
    <h1>{{ article.title }}</h1>

{% endif %}
```

In this case title is only displayed on single article view.

[/ui-tab]
[ui-tab title="WordPress"]

In WordPress, this is all handled by a plugin that we've included with Gantry 5 called [Timber](http://upstatement.com/timber/). Timber is a great way to connect WordPress' content with your theme. Just about everything you would need to know to use CMS-based content in your particles is available in [Timber's extensive documentation](http://timber.github.io/timber/#getting-started).

For a quick example, here is the code used to utilize Timber's `get_posts` function.

```twig
{# Query Posts #}
    {% set query_parameters = {
        'cat': '-1',
        'posts_per_page': limit.total|default('4'),
        'offset': limit.start|default('0'),
        'orderby': sort.orderby,
        'order': sort.ordering,
        'ignore_sticky_posts': sticky_posts
    } %}

    {% set posts = wordpress.call('Timber::get_posts', query_parameters) %}
```

In this snipped, the results of `get_posts` are assigned to the `posts` Twig variable.

[/ui-tab]
[ui-tab title="Grav"]

Grav has a well-suited environment for Gantry 5. Because they were designed by the same team, you will find that using CMS content in your particles is natural and straightforward. You can find a lot more information in [Grav's extensive documentation](https://learn.getgrav.org/themes/theme-basics).

[/ui-tab]
[/ui-tabs]

