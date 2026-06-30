# Translate Omeka S

We need the community's help translating English text in Omeka S into new languages. We want users to have a variety of choices. You don't need to know how to write code to help translate Omeka S. You just need to be fluent in English and another language.

## Getting started

### Sign up on Transifex.com
Omeka S uses [Transifex.com](https://www.transifex.com){target=_blank} to manage translations. To start helping to translate Omeka into other languages, you will first need to [sign up for an account](https://www.transifex.com/signup/){target=_blank}. Transifex.net offers several plans. Since Omeka is an open-source project, you can use the Free plan.

### Join or start a language team
Once you have registered for an account, visit the [Omeka S project page](https://explore.transifex.com/omeka/omeka-s/){target=_blank}. Click on the "join this project" button.

Here, you can choose among all the languages that are in progress. To start work on a translation into a new language which isn't listed, request that language first. Click "cancel" and scroll down to the bottom of the page. Then, click the "request language" link and select the language that you want to work on.

If someone has already created a team for the language you want to work on, click the name of the language. On the next screen, click the "Join this Team" button. It will be up to the coordinator to approve your request to be a member of the team.

Once a coordinator has approved you, you can go to the Omeka S dashboard and click on the "Translate" button to begin.

To check your translation or anything else you need to make an mo file from your po file, do it with msgfmt from the [GNU gettext package](http://www.gnu.org/software/gettext/){target=_blank}.

For Transifex-specific issues, please see their [documentation](http://docs.transifex.com/){target=_blank}.

## Translation guidelines 
You can translate most of the strings needing translation in Omeka directly. But, there are a few special cases you should treat with care.

### Placeholders
Some strings contain text that looks like `%s` or `%1$s`. These odd-looking bits of text are called **placeholders**. Placeholders allow Omeka to insert some changing piece of information into a translated string. For example, the number of items in an Omeka site.

If a source string contains placeholders, you must include them in your translation. You can move the placeholders around within the string. You can even change the order of numbered placeholders in the string. All the placeholders from the source string must appear in the translation.

### HTML and URLs
A few strings contain embedded HTML code or URLs. You can translate and change the plain English text in these strings, but you should preserve any HTML tags or URLs.
