# Translate Omeka S

We need the community's help translating English text in Omeka S into new languages, so users can have a variety of choices. You don't need to know how to write code to help translate Omeka S, you just need to be fluent in English and another language.

## Getting started

### Sign up on Transifex.com
Omeka S uses [Transifex.com](https://www.transifex.com) to manage translations. To start helping to translate Omeka into other languages, you will first need to [sign up for an account](https://www.transifex.com/signup/). Transifex.net offers several plans, but since Omeka is an open-source project, you can use the Free plan.

### Join or start a language team
Once you have registered for an account, visit the [Omeka S project page](https://www.transifex.com/omeka/omeka-s/) and click on the "Help Translate Omeka S" or "Join Team" button.

Here, you can choose among all the languages that are already being worked on. If you want to start work on a translation into a new language which isn't listed, you need to request that language first. Click "cancel" and scroll down to the bottom of the page and click the "request language" link, and select the language that you want to work on.

On the other hand, if someone has already created a team for the language you want to work on, click the name of the language, and on the next screen click the "Join this Team" button. It will be up to the coordinator to approve your request to be a member of the team.

Once a coordinator has approved you to the team, you can go to the Omeka S dashboard and click on the "Translate" button to begin translating.

If you want to check your translation or anything else you need to make an mo file from your po file, you can do it with msgfmt from the [GNU gettext package](http://www.gnu.org/software/gettext/).

For Transifex-specific issues, please see their [documentation](http://docs.transifex.com/).

## Translation guidelines 

Most of the strings to be translated in Omeka are straightforward and can be translated directly. However, there are a few special cases that need to be treated with care.

### Placeholders
Some strings contain text that looks like `%s` or `%1$s`. These odd-looking bits of text are called **placeholders**. Placeholders are used to allow Omeka to insert some changing piece of information, like the number of items in an Omeka site, into a translated string.

If a source string contains placeholders, you must include them in your translation. You can move the placeholders around within the string, and even change the order of numbered placeholders in the string, but all the placeholders from the source string must appear in the translation.

### HTML and URLs
A few strings contain embedded HTML code or URLs. You can translate and change the plain English text in these strings, but you should preserve any HTML tags or URLs.
