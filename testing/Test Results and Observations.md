<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# change that to a yellow triangle warning sign

Here’s the script updated to use a yellow warning triangle for observations.

***

Legend for symbols

- ✅ = Behavior matched user expectation and completed successfully.
- ⚠️ = Tester observation, unexpected behavior, or UX issue worth reviewing (non-blocking but needs attention).[^1][^2]

***

**User:** Here it is. Create a tab group called "Work" with tabs 1, 2, and 3.

**System:** Error: TypeError: NetworkError when attempting to fetch resource.

⚠️ The first command to create the "Work" tab group failed with a network error, but the cause was unclear to the user, and all subsequent commands executed without any network errors.[^3][^4]

***

**User:** Create a tab group called "Sports."

**AI Assistant:** I have created a tab group called "Sports" for you, and it currently contains 1 tab.

✅ Worked according to expectation.

***

**User:** Create a tab group called "Dynasty."

**AI Assistant:** I have created a tab group called "Dynasty" for you, and it currently contains 1 tab.

✅ Worked according to expectation.

***

**User:** List tab groups.

**AI Assistant:** Here are your tab groups:

- Sports (1 tab)
- Dynasty (1 tab)

✅ Worked according to expectation.

***

**User:** Rename tab group "Sports" to "Work."

**AI Assistant:** I have renamed the "Sports" tab group to "Work" for you.

✅ Worked according to expectation.

***

**User:** Add tab 2 to Dynasty.

**AI Assistant:** I have added a tab titled "Crowdsourced Dynasty Resources - KeepTradeCut" to the "Dynasty" tab group.

✅ Worked according to expectation.

***

**User:** Remove tab 3 from Dynasty.

**AI Assistant:** I have removed the tab titled "ESPN - Serving Sports Fans. Anytime. Anywhere." from the "Dynasty" tab group.

✅ Worked according to expectation.

***

**User:** Delete the "Work" tab group.

**AI Assistant:** I need confirmation before I can delete the "Work" tab group, which contains 1 tab. Deleting the group will ungroup the tab.

✅ Text response worked according to expectation (confirmation phrasing and behavior), though a visual confirmation modal was expected.

**User:** Go ahead.

**AI Assistant:** I have deleted the "Work" tab group for you.

✅ Worked according to expectation.

***

**User:** Create a tab group called "Test" with tabs 1 and 2.

**AI Assistant:** I have created a tab group called "Test" for you, and it currently contains 2 tabs.

✅ Worked according to expectation.

***

**User:** Create a tab group called "Skittles" with tabs 1, 2, 3, and 4.

**AI Assistant:** I have created a tab group called "Skittles" for you, and it currently contains 4 tabs.

✅ Worked according to expectation in terms of creation, but had side effect of deleting existing tab groups without confirmation.

⚠️ Creating the new "Skittles" tab group with tabs 1, 2, 3, and 4 (which were already in existing tab groups) caused those existing tab groups to be deleted, and there was no delete-tab-group confirmation modal shown to the user.[^5][^6]

***

**User:** List all tab groups.

**AI Assistant:** Here is the list of your tab groups:

- Skittles (4 tabs)

✅ Worked according to expectation given the prior side effect (only Skittles remained).

***

**User:** What about tab groups that aren't currently open?

**AI Assistant:** Thinking...
It looks like you currently have one tab group:

- Skittles (4 tabs)

✅ Worked according to expectation.

***

**Tester’s UX notes for developer:**
⚠️ When the "Work" tab group was deleted, the assistant text correctly asked for confirmation and explained that deleting the group would ungroup the tab, but the user expected a small confirmation popup/modal with a button to click. A subtle confirmation control (like Cursor’s “Confirm” button) for destructive or potentially confusing actions would better align behavior with expectations.[^7][^5]
<span style="display:none">[^10][^11][^12][^13][^14][^15][^16][^17][^18][^19][^20][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://carbondesignsystem.com/patterns/status-indicator-pattern/

[^2]: https://developer.dynatrace.com/design/status-and-health/

[^3]: https://trackjs.com/javascript-errors/networkerror-when-attempting-to-fetch-resource/

[^4]: https://stackoverflow.com/questions/42719041/how-to-resolve-typeerror-networkerror-when-attempting-to-fetch-resource

[^5]: https://www.nngroup.com/articles/confirmation-dialog/

[^6]: https://bethaitman.com/posts/ui-writing/confirmation/

[^7]: https://www.eleken.co/blog-posts/modal-ux

[^8]: https://www.ssa.gov/accessibility/andi/help/alerts.html

[^9]: https://www.flaticon.com/free-icons/warning

[^10]: https://www.reddit.com/r/technicalwriting/comments/mdu27o/warning_vs_caution_symbols/

[^11]: https://htmlstream.com/front/documentation/legend-indicator.html

[^12]: https://www.adoc-studio.app/blog/warning-labels-in-asciidoc

[^13]: https://agdlab.eu/en/product/navigation-status-triangle/

[^14]: https://support.cognex.com/docs/dmst_617/web/EN/SetupTool_Manual/Content/Topics/BoilerPlate/Symbols.htm?TocPath=_____2

[^15]: https://www.safetydecals.com/blogs/news/warning-sign

[^16]: https://v10.carbondesignsystem.com/patterns/status-indicator-pattern/

[^17]: https://en.wikipedia.org/wiki/Template:Warning_sign

[^18]: https://doc.arcgis.com/en/insights/2023.3/share/add-a-legend.htm

[^19]: https://www.shutterstock.com/search/triangle-warning-icon

[^20]: https://safetyculture.com/topics/safety-symbols

