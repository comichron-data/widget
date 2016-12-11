# comichron-data/widget

Widget for showing a comic's issue-by-issue sales graph.

## Quickstart

### 1. Include the script

Paste this snippet on the page once.

```html
<script async src="https://comichron-data.github.io/widget/script.js"></script>
```

### 2. Find the id of the comic to show

TBD - something involving https://comichron-data.github.io/graphs

### 3. Make a container div where you want the widget

Paste this snippet where you want to show the widget.

```html
<div data-comichron-comic-id="(comic id)"></div>
```

Replace `(comic id)` with the comic id you found in step 2.

### Multiple widgets on a page

Repeat steps 2 and 3 for each widget you want to show on the page.

## Config Settings

Config settings are attributes on the container element (container element is from step 3 of Quickstart).

Purpose | Attribute | Allowed values | Required? | Default
--------|-----------|----------------|-----------|--------
What comic to show | `data-comichron-comic-id` | Comic ids from [here](https://comichron-data.github.io/graphs) | yes |
Selects widget's theme | `data-comichron-theme` | dark, light | no | dark
