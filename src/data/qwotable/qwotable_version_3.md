---
layout: ../../layouts/MarkdownPostLayout.astro

title: 'Qwotable 3.0: App changes'
pubDate: 2024-09-17
description: "Qwotable 3.0 introduces some changes, that are discussed here."
image:
  url: '/assets/blog-covers/qwotableBanner.png'
  alt: 'The banner for the Qwotable app, showing a blue rounded box with quotation marks and the text Qwotable next to it'
author: 'Lijucay'
tags: ["app", "qwotable"]
---
> <strong>Important notes</strong>: Qwotable 3.0 introduced some changes to the database. This should not affect your data, but I can’t guarantee.</div>

I regularly track my progress in Android app development. My first published app on GitHub was *Quotes M3*, designed to mimic the style of Material 3 before Google released updates to their Material Library. I experimented with some early APIs and took some creative liberties (*cough* themed icons *cough*).

Since then, my development skills have grown significantly. I’ve faced challenges, learned from them, and refactored my code more times than I can count.

The journey of *Qwotable* began on November 8th, 2022, when I decided to create an app that included not just quotes but also wisdom. The name *Qwotable* was suggested by another developer, Tenseventy7, creator of the Fresh ROM — a big thanks for that! 🤗

With *Qwotable 2.0*, I overhauled the codebase, transitioning from XML views to Jetpack Compose.

In *Qwotable 3.0*, I completely eliminated the remaining XML architecture remainings (like unnecessary activities, that could have been screens all along), introduced new UI updates, and added new features.

This post highlights the user-facing changes. I’ll discuss the internal code changes in a future post.

### **Changes from Qwotable 2.1**

#### Random Quote Card

The *Random Quote Card* received a redesign with rounder corners and now uses the tertiary container color scheme. The refresh button was simplified into a single icon.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726590811411/3502ca04-2518-403e-bc64-a6bd679df97c.jpeg?width=400)

For third-party API quotes, there’s an additional button that directs users to the API’s GitHub repository. For quotes from James Clear, this button leads to the linked website returned by the API. The API name is now displayed in a separate text element.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726591063392/dd8891b5-23ff-467b-8d00-bab45a53a96a.jpeg?width=400)

Local Qwotables can now be included in the Random Quote feature through the settings. You can choose to show quotes from *Qwotable*’s service and/or from your own added Qwotables.

The card also shows the author’s name, if available, and the quote is now rendered in bold.

Local Qwotables can now be added to the Random Quote feature within the settings. You can select whether you want to have the quotes included, that Qwotable uses from their own service, or your own Qwotables, that you added to the app.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726591078447/643d874e-2954-435f-94ca-011113e5e00e.jpeg?width=400)

The card also shows the author of the quote, if any are available, and the quote uses a bold font.

#### Qwotable Card

Like the Random Quote Card, the *Qwotable Card* was refreshed with rounder corners and now uses the primary container color scheme for a more vibrant look.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726591456133/62c27dab-a984-4d1c-9bd1-ca560edcebe3.jpeg?width=400)

In earlier versions (2.0 and 2.1), unknown authors and sources were replaced with “unknown”. In version 3.0, these fields are hidden entirely when empty.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726591467157/2faafb38-86df-487d-b18c-796a1ea02c14.jpeg?width=400)

#### **Bottom navigation bar**

The bottom navigation bar saw a minor update: labels now only appear for selected items, and the icons change to reflect their selection status.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726591647396/085c3c3f-9723-42ab-b8f0-2a95ade0b2ff.jpeg?width=400)

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726591665687/b5cc7370-9b16-4f41-bbdf-364334efec65.jpeg?width=400)

#### **Dialogs**

All dialogs were updated to bottom sheets, and the option dialogs received a slight redesign.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726591783426/7bc0605f-3183-4a59-a19a-dce3c1e7e443.jpeg?width=400)

### **New Features and Settings**

* Option to change the app’s theme

* Customization for what gets shared when you hit the share button (Quote only, Quote + Author, Quote + Source, or all three)

* Option to show or hide favorites on app launch

* Option to hide the Random Quote Card

* Option to include local and/or user-added Qwotables in the Random Quote Card


Additionally, you can now export your custom Qwotables to a file with the <span class="inline-code">.qwote</span> extension, saved in your phone’s Downloads folder. This file can be imported back into *Qwotable*. Please ensure that only valid *Qwotable* files are imported, as non-supported formats may crash the app.

You can download the latest version on GitHub.