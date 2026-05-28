# Accessibility Statement

The Omeka team is committed to making Omeka S accessible. We are working to make the core code accessible. We will continue to make accessibility for persons with disabilities a priority. Omeka strives to adhere to [W3C web design standards](http://www.w3.org/standards/){target=_blank}. We also strive to be compliant with [Section 508](http://www.section508.gov/){target=_blank} of the Americans with Disabilities Act.

For more information, please review the following reports:

- Omeka S version 4.x, December 2025.
	- [Accessibility Conformance Report, using VPAT 2.5 Revised International Standards (PDF)](files/OmekaS4x_ACR.pdf){target=_blank}
	- [Accessibility Conformance Report, using VPAT 2.5 Revised International Standards (DOCX)](files/OmekaS4x_ACR.docx){target=_blank} 
- Omeka S version 3.x [Accessibility Conformance Report, using VPAT 2.4 Revised International Standards (PDF)](files/OmekaS3x_ACR.pdf){target=_blank}, October 2020.
- Omeka S version 2.x [Accessibility Conformance Report, using VPAT 2.0 (PDF)](files/VPAT_OmekaS2-0-1.pdf){target=_blank}, August 2019.
- Omeka S version 1.x [Accessibility Conformance Report, using VPAT 2.0 (PDF)](files/VPAT2.0-OmekaS1-1.pdf){target=_blank}, April 2018.

## Roadmap
The Omeka Team is currently working on:

-   Keyboard-navigable alternatives to drag and drop interfaces
-   Screen reader-friendly and keyboard-navigable tooltips
-   Screen reader-friendly status announcements for interactions
-   Improved focus order through admin interface
-   Improved relationship roles and attributes across the admin interface

Please review the [current list of issues](https://github.com/omeka/omeka-s/issues?q=is%3Aissue%20state%3Aopen%20label%3Aa11y){target=_blank} in the core software's GitHub repository.

## Features

The following statements apply to Omeka S version 1.0.1 and higher:

### Front end (Public view)

Omeka S themes from the Omeka Team include the following features to improve accessibility:

-   [ARIA](http://www.w3.org/WAI/intro/aria){target=_blank} (Accessible Rich Internet Applications) landmarks for tabbing through page content without a mouse or with a screen reader.

-   Semantic HTML5 markup.

The core code for Omeka S conforms to the above standards. Customized installations or ones using non-RRCHNM modules and themes may lack some or all of these options. While we encourage developers to consider accessibility, we cannot guarantee that their code is accessible.

### Back end (Administrative view)

The administrative dashboard of Omeka S has the following features:

-   ARIA landmarks for screen readers on the Admin Dashboard. These designate the header, navigation, main content, and footers.
-   Semantic HTML5 markup.

## Accessibility Issues

If you encounter an issue with the Omeka S core software or Omeka Team developed addons, please report your findings. You do this through a [Forum post](https://forum.omeka.org/c/omeka-s/accessibility/36){target=_blank} or by making an issue in the appropriate GitHub repository.
