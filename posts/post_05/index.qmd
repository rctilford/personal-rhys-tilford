---
title: Google Analytics Integration
author: Rhys Tilford
description: Read about how I set up Google Analytics for Quarto
date: 11/15/2023
categories: [Data Analysis, Programming, Tutorial]
image: Data_Pages.jpg
---

### Introduction

Operating a website is a fascinating endeavor that opens new options for sharing information with people anywhere. With the knowledge that the site is available to anyone with a web browser, it's only natural to wonder what kinds of people are viewing the site. In this tutorial I will show you how to connect a quarto website to Google Analytics 4.

### Setting Up Google Analytics

##### Account Setup

The first time a person opens [Google Analytics](https://analytics.google.com/analytics) it will ask them to log in with their Google account. Once the user has done that, they will be greeted by a demo data report. Now they need to create a Google Analytics account. *This is an account for Google Analytics which is nested within their Google Account.* Here are the steps to set up that account:

 - On the lower left side of the home page there should be a settings cog. When it is clicked, it reveals a popout menu showing the names of the options on the left side. Click the cog again to enter the *Admin* menu.
 - Now there should be a pill-shaped *create* button in the upper left side of the admin menu. Click this button and select *Account* from the drop down menu.
 - Now there should be a text box where the user can put their account name. Do this.
 - Finally, the user is asked to decide what data-sharing permissions to grant Google. Once the preffered settings are chosen, click the next button and procede to Property Setup.

##### Property Setup

:::{.callout-note}
The following webpage taught me how to set up the property.
[How to Set Up a Google Analytics 4 Property](https://www.clickinsight.ca/blog/how-to-set-up-a-google-analytics-4-property)
:::

 - Now the user should be asked to name their property.
 - Next, the user must configure the timezone and currency.
 - Then the user needs to select their industry category and size. *If the user's website is not a business this form can be completed randomly (I won't tell Google if you won't)*
 - Now the user is asked how they will use Google Analytics. This affects the types of default data reports that show up automatically.
 - Click *create* and then accept the Google Analytics terms of service.
 - Now click *add a data stream* and procede to the next section.

### Setting up Quarto YAML to Link a Data Stream

Follow these steps to set up tracking in Google Analytics.

 - Now the user can select *Web* to indicate that they are linking a webpage.
 - Next the User can enter their webpage's URL.
 - Then click *create stream*.
 - Now procede to  the next step.

This step is likely the most straightforward of the whole process. In the `_quarto.yml` file, one merely needs to add their Google Analytics tracking ID (`UA-XXXXXXXX`) Google Tag measurement ID (`G-xxxxxxx`) as shown below.

```{.code}
website:
  google-analytics: "UA-XXXXXXXX"
```
After this change is deployed, It may take some time for Google Analytics to link with the site. I didn't notice any changes for about a half hour.