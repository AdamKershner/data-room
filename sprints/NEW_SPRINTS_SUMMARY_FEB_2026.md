# New Sprints Summary - February 2026 Feedback Round

## Overview

Based on the comparison between `Oasis Feedback Phase 2 - Sheet1(3).csv` and `Oasis Feedback Phase 2 - Sheet1(4).csv`, **37 new feedback items** were identified and organized into sprints.

**Total Feedback Items:** 37 new entries
**Date Range:** January 26, 2026 - February 9, 2026

---

## Sprint 17: Window Management
**Priority:** HIGH | **Story Points:** TBD | **Effort:** TBD | **Severity:** 8-10/10

### Overview
Fix AI Assistant window management issues including minimize/maximize functionality, window resizing, viewport positioning, and input area visibility in minimized state.

### Key Issues:

1. **there's no way to minimize the assistant window back to the original size, the size in which it open...** (Bug Report)
   - Submission ID: XxakaYd
   - Submitted: 2026-01-26 17:15:12
   - Impact: Made my work slower, Made the browser harder to use, Felt confusing or unintuitive
   - Importance: 10/10
   - User Quote: "there's no way to minimize the assistant window back to the original size, the size in which it opens for the first time. either it minimizes to the tiny rectangle window or maximizes to the full width size. there's no option to resize the window horizontally or vertically too. 

In the minimized version, the input area should always be visible, as a user I shouldn't need to maximize and then enter text"

2. **this minimized version of the assistant doesn't help much, need to improve this design since there's...** (Performance Issue)
   - Submission ID: xXq1KPk
   - Submitted: 2026-01-26 17:26:51
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-01-26-at-12.24.39-PM.png?id=49dOdY&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5ZE9kWSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTQ0ODQxM30.S-GQoF_g646tFHrYxwCRe2msJbXCXCjllMrKmbyS6iU&signature=c58883757656892ecbf4e8b437129bb0dcad607ad10f9c2c4cb061b9df5f772a
   - Impact: Made the browser harder to use
   - Importance: 10/10
   - User Quote: "this minimized version of the assistant doesn't help much, need to improve this design since there's no way to add input, the input area is hidden behind the top bar, the menu options are not visible either. improve the elevation hierarchy of all the elements. "

3. **when you maximize the ai assistant and if it is snapped to right corner, the assistant window extend...** (Bug Report)
   - Submission ID: D48PgkR
   - Submitted: 2026-01-26 17:29:25
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-01-26-at-12.28.57-PM.png?id=7a5EQ9&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdhNUVROSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTQ0ODU2N30.YUq1NYfRbj36JIqNqH6Idab0uDV16x2VSbuijS7QUf8&signature=a418b5af626b3800a5e7b050521883445d124a44117bf3d83d52fcc29fe52910
   - Impact: Made my work slower, Made the browser harder to use, Felt confusing or unintuitive
   - Importance: 10/10
   - User Quote: "when you maximize the ai assistant and if it is snapped to right corner, the assistant window extends outside the viewport, as a user I have to take an extra step to move it back in the view port. "

4. **whenever i minimize the window and then try to maximize it to use the agent, it is not the same size...** (Usability / User Experience (UX) concern)
   - Submission ID: MeWeyJE
   - Submitted: 2026-01-28 21:08:34
   - Impact: Made the browser harder to use
   - Importance: 8/10
   - User Quote: "whenever i minimize the window and then try to maximize it to use the agent, it is not the same size that it starts off in and that makes it much harder to use since it ends up taking up a lot of the space on the screen and i cant adjust it either."

5. **When I try to minimize the chat agent, it works correctly** (Usability / User Experience (UX) concern)
   - Submission ID: NpzlZz0
   - Submitted: 2026-02-05 16:32:42
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-05-at-11.23.27.png?id=kkll6d&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImtrbGw2ZCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDMwOTE2NX0.tIZPMh7eqKjqjzVvGNVF4reslpMYCbc7FXPmIq2hDiM&signature=2498f28f1ef36255d073603b737f65140f857aed4e4794d7281c25d69ef59fb7
   - Impact: Made the browser harder to use
   - Importance: 8/10
   - User Quote: "When I try to minimize the chat agent, it works correctly. However, when I try to undo the minimization, it does not work.

Steps to reproduce:

1. Click on the chat agent (before signing in).
2. Click the menu button and select Minimize chat -> this works as expected.
3. Click the menu button again to undo the minimization.
"

6. **The minimized version should have the input area visible at all times** (Usability / User Experience (UX) concern)
   - Submission ID: XxjNy8P
   - Submitted: 2026-02-09 15:06:27
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-09-at-10.05.19-AM.png?id=9oQPGE&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlvUVBHRSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY0OTU5MH0.QwoZsnglSuDFfQowKVj0xzwk2HcEVs4rZ7MM46AMM6o&signature=13f98f9dc98bf4ffca0a95d104fe52c8896a72818248690a0dbb7d10149b256b
   - Impact: Made the browser harder to use, Made my work slower, Felt confusing or unintuitive
   - Importance: 10/10
   - User Quote: "The minimized version should have the input area visible at all times. Currently, I only see the header. "

### Primary Files:
- TBD (to be determined after codebase review)

---

## Sprint 18: Voice Dictation
**Priority:** HIGH | **Story Points:** TBD | **Effort:** TBD | **Severity:** 8-10/10

### Overview
Improve voice dictation UX including waveform animation feedback, stop button responsiveness, UI simplification, and real-time visual feedback during recording.

### Key Issues:

1. **in the voice dictation mode, following are some ux improvements I suggest:

there are too many butto...** (Usability / User Experience (UX) concern)
   - Submission ID: zx9RN0M
   - Submitted: 2026-01-26 17:53:48
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-01-26-at-12.36.58-PM.png?id=WKdZPa&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IldLZFpQYSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTQ1MDAzMX0.MmJ655PtdUjtZLKkPS6JmB9NNhGods6tK_1BUhpHkM4&signature=f6be6ccd290fc6d7addcde317fd67e27cde4b512f98bf90b769249dba64b98c8
   - Impact: Made my work slower, Felt confusing or unintuitive
   - Importance: 10/10
   - User Quote: "in the voice dictation mode, following are some ux improvements I suggest:

there are too many buttons causing confusion. the correct and wrong icon buttons can be removed. 

the close button does not work, instead it could be removed and simply the mic icon can be changed to pause button and instead of the correct icon, simply hitting the stop button should display the text. 

when I click on the mic icon to start dictating, it takes a while to display the sound bars which makes me think it's taking longer for it to load, instead it should load instantly so i can start dictating immediately. "

2. **The formatting of the AI response includes unnecessary asterisks and looks weird** (Bug Report)
   - Submission ID: J9P4bBJ
   - Submitted: 2026-01-27 16:22:56
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-01-27-at-10.22.27-AM.png?id=pJ606Z&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBKNjA2WiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTUzMDk3OH0.3TfpN5mSBtPo7baHHqaKeLDxE8cj4XOJEXkIUXJVUTo&signature=8bd38329b4acd0f86ed2df96af309a8139811d15b44241500ff05f8f8f4a5e0b
   - Impact: Felt confusing or unintuitive
   - Importance: 10/10
   - User Quote: "The formatting of the AI response includes unnecessary asterisks and looks weird.

User: "explain how to make coffee with a french press
AI response: "Okay, here's how to make coffee using a French press:

**What you'll need:**

*   French press
*   Coffee beans (coarsely ground)
*   Hot water (just off the boil, around 200°F or 93°C)
*   Kettle
*   Spoon or stirring utensil
*   Timer (optional, but helpful)
*   Scale (optional, for precise measurements)

**Instructions:**

1.  **Heat Water:** Heat water in your kettle to just below boiling (around 200°F or 93°C). If you don't have a temperature-controlled kettle, bring it to a boil and then let it sit for about a minute.

2.  **Grind Coffee:** Grind your coffee beans to a coarse grind. It should resemble coarse sea salt. A burr grinder is recommended for a consistent grind.

3.  **Preheat French Press (Optional):** Preheat the French press by rinsing it with hot water. This helps maintain the water temperature during brewing. Discard the water.

4.  **Add Coffee Grounds:** Add the ground coffee to the French press. A general guideline is a 1:15 coffee-to-water ratio (e.g., 1 gram of coffee for every 15 grams of water). A common starting point is about 2 tablespoons of coffee per 6 ounces of water. Adjust to your taste.

5.  **Bloom the Coffee:** Pour a small amount of the hot water over the grounds, just enough to saturate them (about twice the amount of coffee). Let it sit for about 30 seconds. This is called the "bloom," and it allows the coffee to degas, releasing trapped carbon dioxide.

6.  **Pour Remaining Water:** Slowly pour the remaining hot water over the grounds, filling the French press to the desired level.

7.  **Stir Gently:** Gently stir the coffee and water mixture to ensure all the grounds are saturated.

8.  **Place Lid and Plunger:** Place the lid on the French press with the plunger in the raised (up) position. Do *not* press the plunger down yet.

9.  **Brew:** Let the coffee brew for 4 minutes.

10. **Press the Plunger:** Slowly and gently press the plunger down. Avoid pressing too quickly or forcing it, as this can result in sediment in your coffee. Press until the plunger reaches the bottom.

11. **Serve Immediately:** Pour the coffee immediately into your cup or a serving carafe. Leaving the coffee in the French press after pressing will result in over-extraction and a bitter taste.

12. **Clean:** Clean the French press thoroughly after use.

**Tips for Better French Press Coffee:**

*   **Use Freshly Roasted Beans:** Freshly roasted beans will provide the best flavor.
*   **Use Filtered Water:** Filtered water will improve the taste of your coffee.
*   **Experiment with Grind Size:** Adjust the grind size to find what works best for your taste. If the coffee tastes bitter, try a coarser grind. If it tastes weak, try a finer grind.
*   **Adjust Brewing Time:** Adjust the brewing time to your preference.
*   **Clean Your French Press Regularly:** A clean French press will ensure the best flavor.

Enjoy your coffee!"

User: "what is photosynthesis"

AI response: "Photosynthesis is the process by which plants, algae, and some bacteria convert light energy into chemical energy in the form of glucose (sugar). This process uses water and carbon dioxide, and releases oxygen as a byproduct.

Here's a breakdown of the key components:

*   **Light Energy:** Photosynthesis requires light, typically from the sun. This light energy is absorbed by pigments, most notably chlorophyll.
*   **Chlorophyll:** This is the green pigment found in plants and algae that absorbs light energy. It's located in organelles called chloroplasts within plant cells.
*   **Carbon Dioxide (CO2):** Plants take in carbon dioxide from the atmosphere through small pores on their leaves called stomata.
*   **Water (H2O):** Plants absorb water from the soil through their roots.
*   **Glucose (C6H12O6):** This is a sugar molecule that serves as the primary source of energy for the plant. It's created during photosynthesis.
*   **Oxygen (O2):** Oxygen is released as a byproduct of photosynthesis. This is the oxygen that we breathe!

**The overall equation for photosynthesis is:**

6CO2 + 6H2O + Light Energy → C6H12O6 + 6O2

**In simpler terms:**

Carbon dioxide + Water + Light Energy → Glucose + Oxygen

**The process of photosynthesis can be divided into two main stages:**

1.  **Light-Dependent Reactions (Light Reactions):** These reactions occur in the thylakoid membranes within the chloroplasts. Light energy is absorbed by chlorophyll and used to split water molecules into hydrogen ions, electrons, and oxygen. The energy from light is also used to create ATP (adenosine triphosphate) and NADPH, which are energy-carrying molecules. Oxygen is released as a byproduct.

2.  **Light-Independent Reactions (Calvin Cycle or Dark Reactions):** These reactions occur in the stroma, the fluid-filled space within the chloroplasts. The ATP and NADPH produced in the light-dependent reactions are used to convert carbon dioxide into glucose. This process doesn't directly require light, but it relies on the products of the light-dependent reactions.

**Why is Photosynthesis Important?**

*   **Primary Energy Source:** Photosynthesis is the foundation of most food chains on Earth. Plants produce their own food through photosynthesis, and animals eat plants (or other animals that eat plants) to obtain energy.
*   **Oxygen Production:** Photosynthesis is responsible for producing the oxygen in our atmosphere, which is essential for the survival of most living organisms.
*   **Carbon Dioxide Removal:** Photosynthesis removes carbon dioxide from the atmosphere, helping to regulate the Earth's climate. Carbon dioxide is a greenhouse gas, and excessive amounts can contribute to global warming.

In summary, photosynthesis is a vital process that sustains life on Earth by converting light energy into chemical energy, producing oxygen, and removing carbon dioxide from the atmosphere."

"

3. **Waveform should be input-reactive, not a looped animation** (Performance Issue)
   - Submission ID: 0Q4Ayqy
   - Submitted: 2026-02-09 15:11:35
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-09-at-10.06.50-AM.png?id=rkPRaR&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJrUFJhUiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY0OTg5N30.kkKDIXz9mMn-uBNJoe-D5hR5XDj5TFKseZLYwcea8IA&signature=ec12a193895ad566644f6bda67ea618791bd752a03628f0f16712359f5d9f32d
   - Impact: Felt confusing or unintuitive
   - Importance: 8/10
   - User Quote: "Waveform should be input-reactive, not a looped animation. Animate on detected speech + amplitude; idle on silence.

Right now the waveform animation is basically “always on,” so it reads as decorative and doesn’t communicate state. The intent is: only animate when we’re actually detecting speech, so users get real-time feedback that recording is working.

"

4. **For voice dictation, when the stop button is clicked, recording doesn’t stop immediately** (Bug Report)
   - Submission ID: KYXR45A
   - Submitted: 2026-02-09 15:20:55
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-09-at-10.15.54-AM.png?id=8RxV9A&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhSeFY5QSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MDQ1N30.9EU3xaeiM-NSPlgYDU4ebdnJMcPM2fIH0tFam2gxUHQ&signature=a8f78d59b119e8fc19ddc6379ff9dac9ca5382927c78abd041902bac63f093c7
   - Impact: Made my work slower, Felt confusing or unintuitive
   - Importance: 10/10
   - User Quote: "For voice dictation, when the stop button is clicked, recording doesn’t stop immediately. There’s a noticeable lag, which makes it unclear whether dictation has actually ended. Recording should stop instantly, or at least reflect an immediate state change, so users can quickly switch between dictating, reviewing, and playback without confusion."

5. **The refresh icon next to voice dictation is currently labeled as ‘clear chat history,’ which is unex...** (Bug Report)
   - Submission ID: J9yB5MX
   - Submitted: 2026-02-09 16:00:23
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-09-at-10.54.14-AM.png?id=Yxa760&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ill4YTc2MCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MjgyNX0.g6O5Sub6W3OW2B_IGkbfOXovqh4FkulWO-Of3AatWXQ&signature=c008eecf286f2fa522e7cf9e4ab4f04eacd604301f0bfc0a1b930e2e1841fc66
   - Impact: Made my work slower, Made the browser harder to use, Felt confusing or unintuitive
   - Importance: 10/10
   - User Quote: "The refresh icon next to voice dictation is currently labeled as ‘clear chat history,’ which is unexpected. That icon originally signaled restarting voice dictation, not wiping conversation history. It should only appear when voice dictation is active and clearly reflect that function.

Separately, instead of clearing chat history from there, we should provide a ‘New Chat’ option for starting fresh conversations and let users access past chats through chat history. Clearing chat history is a higher-impact action and would be better placed in Settings for now."

### Primary Files:
- TBD (to be determined after codebase review)

---

## Sprint 19: Feedback Modal
**Priority:** MEDIUM-HIGH | **Story Points:** TBD | **Effort:** TBD | **Severity:** 7-10/10

### Overview
Implement in-app feedback functionality and align feedback modal design with design system specifications.

### Key Issues:

1. **as a user i should be able to add feedback within the assistant** (Feature Request)
   - Submission ID: KYEZEqK
   - Submitted: 2026-01-26 17:17:38
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-01-26-at-12.16.49-PM.png?id=49dOxO&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5ZE94TyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTQ0Nzg2MH0.GAtQ4LKl0aaRjdYdWY3-e3vdmwwCSPPF1lz-zCMFtB0&signature=2be3c4cd72469112ae5a2b2bd5609234c346ded7c89847fbfb478880e7515c07
   - Impact: Made my work slower, Felt confusing or unintuitive
   - Importance: 10/10
   - User Quote: "as a user i should be able to add feedback within the assistant. navigating me to a separate tab to log in feedback is time consuming, especially if I'm logging feedback multiple times."

2. **When users click the upvote or downvote icons, the feedback modal isn’t immediately visible and requ...** (Bug Report)
   - Submission ID: D4LWR7l
   - Submitted: 2026-02-09 15:29:23
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-09-at-10.26.38-AM.png?id=YxabXN&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ill4YWJYTiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MDk2NX0.nY7XVTjj0lUQQlt5kh-tU_z-Tjnh5wz2DRQyPJn-TMI&signature=0becef6ab3931381bcdcd32f6b3e98c1e13de1ec34bc4dfd30853999539a972e
   - Impact: Made my work slower, Made the browser harder to use
   - Importance: 10/10
   - User Quote: "When users click the upvote or downvote icons, the feedback modal isn’t immediately visible and requires manual scrolling. This adds friction. The modal should automatically come into view, either by auto-scrolling or repositioning it in the viewport so users can continue the feedback flow without extra effort."

3. **Feedback modal isn’t aligned with the design specs** (Usability / User Experience (UX) concern)
   - Submission ID: Me0G0N0
   - Submitted: 2026-02-09 15:49:58
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-09-at-10.43.19-AM.png?id=2DP98j&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJEUDk4aiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MjE5OX0.Rj9YZnuASKmAbETndDnEaMU-nvSEfwZawsXp5FcvLZo&signature=3eb0c6fbc1e1974fc6ada27d186cbd38e10521c6f1fc2df0d6e47d0ab155a75f
   - Impact: Felt confusing or unintuitive
   - Importance: 9/10
   - User Quote: "Feedback modal isn’t aligned with the design specs. Here are the fixes needed:

Input field background: The input area is dark while the modal is light. This feels visually inconsistent. Align the input background with the modal design.

Checkbox states: Current checkbox styling doesn’t follow the design system. The unchecked state lacks a visible border, so it’s easy to miss. Needs clearer borders and stronger state differentiation.

CTA button: Button color isn’t using the primary brand color. Update the color and change the label to just “Submit.”

Chip close icon: The close icon inside selected chips is too small and thin. Make it more prominent for visibility and usability.

Modal shadow: Remove the shadow behind the feedback modal since it isn’t part of the design spec and adds visual noise.

If anything is unclear, please connect with the Pournami (designer) for alignment!"

### Primary Files:
- TBD (to be determined after codebase review)

---

## Sprint 20: Split View
**Priority:** HIGH | **Story Points:** TBD | **Effort:** TBD | **Severity:** 10/10

### Overview
Fix split view command execution to properly use Firefox native splitview feature and correctly identify existing tabs.

### Key Issues:

1. **when i gave the command to open tabs in split view, it gave me this error** (Bug Report)
   - Submission ID: EkRrl5B
   - Submitted: 2026-01-26 17:59:22
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-01-26-at-12.55.30-PM.png?id=lYZgLv&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImxZWmdMdiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTQ1MDM2NX0.DRxq4agnRPOeX39Q3C95fCfkYXl5TV4g1Rj4V4lyuf4&signature=a12f07c0d22c34ea9d3f4a822c47abdc2a7ce1433916a14c6af861acaa2ac2a7
   - Impact: Made my work slower, Made the browser harder to use, Felt confusing or unintuitive
   - Importance: 10/10
   - User Quote: "when i gave the command to open tabs in split view, it gave me this error. another instance where I gave the same command, it opened the 3 new tabs, each in separate window, and then arranged the windows instead of tabs in splitview. also the ai assistant chat went away. as a user, i'm curious in which window will it display, if I'll lose my chat history in it.  it's counter intuitive to expect users to again find where the assistant window went after the split view action. 

lastly, the split view should make use of firefox split tabs feature. "

2. **“When I prompted ‘open both the feedback tabs in split view,’ the system executed the split action b...** (Bug Report)
   - Submission ID: PdoPooB
   - Submitted: 2026-02-09 15:53:11
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-09-at-10.51.11-AM.png?id=jkP8pa&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImprUDhwYSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MjM5M30.W7CQH7WwvJex5Hoq-U_tGsPDLxB1A7_z9GT-En0Ki1c&signature=4e41952c0ae4963afaade319b14d16f0a27cd6547480f767391ea1356934c955
   - Impact: Made my work slower, Made the browser harder to use, Felt confusing or unintuitive
   - Importance: 10/10
   - User Quote: "“When I prompted ‘open both the feedback tabs in split view,’ the system executed the split action but missed the actual intent. Instead of splitting the two existing feedback tabs, it opened a new tab and included that in the split. The expectation is to detect and use the already open relevant tabs rather than creating a new one."

### Primary Files:
- TBD (to be determined after codebase review)

---

## Sprint 21: Tab Group Operations
**Priority:** HIGH | **Story Points:** TBD | **Effort:** TBD | **Severity:** 7-10/10

### Overview
Fix tab group renaming, tab identification within groups, and context-based tab grouping functionality.

### Key Issues:

1. **Did not close all tabs but the current one when asked to do so** (Performance Issue)
   - Submission ID: 446ylgO
   - Submitted: 2026-01-26 17:05:49
   - Impact: It was a minor inconvenience
   - Importance: 8/10
   - User Quote: "Did not close all tabs but the current one when asked to do so.

Removed URL from hub "research" and ungrouped any matching tabs.

[Tool Output for close_all_tabs_except_hub]: Closed all tabs except for those in hub "research""

2. **User: "can we rename "Videos" to "Images"" (referring to a tab group)

AI assistant: I encountered a...** (Bug Report)
   - Submission ID: dWMypgz
   - Submitted: 2026-01-27 16:10:11
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-01-27-at-10.09.37-AM.png?id=JeZkjr&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkplWmtqciIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTUzMDIxMn0.iRN9dWgFxjIHNn4wiKKn_4LdEJajVk8nNAd6wcTJF3w&signature=5aa846dbfd442d840e0723ca90ceaf051c38cc85a977f28aa847958f5c3241bd
   - Impact: Made my work slower
   - Importance: 7/10
   - User Quote: "User: "can we rename "Videos" to "Images"" (referring to a tab group)

AI assistant: I encountered an error when trying to rename the "Videos" tab group to "Images". I was unable to complete your request."

3. **while creating a shopping "hub" , agent failed to group all sites that were related to shopping ** (Bug Report)
   - Submission ID: 68gJ6Ge
   - Submitted: 2026-01-28 18:31:42
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-01-28-133011.png?id=bYM606&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJZTTYwNiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTYyNTEwM30.xiZU1Jso48MCLQyHxirqR82jXdVNWwbm2NUyRjriOIA&signature=71f715b1e7851d98158c410124d15ff6b64472e6c0f6ef1cb81581a05386a599
   - Impact: Made my work slower, Felt confusing or unintuitive
   - Importance: 7/10
   - User Quote: "while creating a shopping "hub" , agent failed to group all sites that were related to shopping . Zara is a commercial shopping website and so is hnm but the hub did not group all shopping websites."
   - Suggestions: i think how the agent is scraping data needs to be considered because this could further make creation of accurate hubs confusing

### Primary Files:
- TBD (to be determined after codebase review)

---

## Sprint 22: Tab Closing
**Priority:** MEDIUM-HIGH | **Story Points:** TBD | **Effort:** TBD | **Severity:** 8/10

### Overview
Fix tab closing commands to properly execute and handle edge cases like closing multiple tabs or tabs in hubs.

### Key Issues:

1. **When I asked to close the tab, it closed and then reopened the same tab** (Bug Report)
   - Submission ID: ODRXaqY
   - Submitted: 2026-02-05 17:17:40
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-05-at-12.15.00.png?id=z1jypE&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InoxanlwRSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDMxMTg2Mn0.aY9_jH5Zupv5WN2bja3NDqHmts5h3mcekh2GXQI63Nw&signature=de66241b0014d2a762c14f41fc1f49ce288f8c024d17fe7df68ad4572d146017
   - Impact: Felt confusing or unintuitive
   - Importance: 8/10
   - User Quote: "When I asked to close the tab, it closed and then reopened the same tab.

Prompt: “Close ESPN tab”

UI on screen:
Thinking…
Opening tab
Closing tab

Chat message shown:
“I’ve opened ESPN and then closed the ESPN tab for you.”"

2. **When I try to close multiple tabs, the command does not execute correctly** (Performance Issue)
   - Submission ID: ODRXd5Y
   - Submitted: 2026-02-05 18:35:50
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-05-at-13.26.20.png?id=L69bWp&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikw2OWJXcCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDMxNjU1Mn0.v8PynULkcEUfH_PgIr_GgSu8LxXDq40bsSNXCmgvXXM&signature=e9456979c324a1ee666390cc12748d5acb112b122b4b8484e183fe886d74ee9b
   - Impact: Made the browser harder to use
   - Importance: 8/10
   - User Quote: "When I try to close multiple tabs, the command does not execute correctly.

Steps to reproduce:

1. Prompt: “List all the open tabs.”
2. Prompt: “Can you close 3 tabs of Oasis Feedback and 1 tab of any other tab?”

Actual result:
The system responds:
“Okay, I have closed one ‘Oasis Feedback’ tab. I will continue closing the other tabs you requested.”

However, the remaining tabs are not closed."

### Primary Files:
- TBD (to be determined after codebase review)

---

## Sprint 23: Search & Commands
**Priority:** MEDIUM-HIGH | **Story Points:** TBD | **Effort:** TBD | **Severity:** 8-10/10

### Overview
Fix web search functionality and improve command interpretation to reduce confusion and incorrect prompt results.

### Key Issues:

1. **(windows version) this issue is recurring even when i try to start a new topic to research** (Performance Issue)
   - Submission ID: 5BJZkrb
   - Submitted: 2026-01-29 18:25:01
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-01-29-132313.png?id=49lxyb&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5bHh5YiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTcxMTEwNH0.MIZM2MZUIg7Cjw9uNc0bwgriXDNMP6qRri4ghgg0bC4&signature=b9d0d2c03f299130e1af2dba013f2fbf2dbef96242fb441b688f31e83e7fd709
   - Impact: Felt confusing or unintuitive
   - Importance: 9/10
   - User Quote: "(windows version) this issue is recurring even when i try to start a new topic to research."

2. **confusion in the ai with prompts - causing it to bring up unrelated prompt results  ( windows versio...** (Bug Report)
   - Submission ID: jaKMqd6
   - Submitted: 2026-02-06 19:47:07
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-06-144606.png?id=PGDale&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlBHRGFsZSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDQwNzIzMH0.olHlrL5jdmJajNHt48-6SQdbIwhzAidlE7WPSzxPv-w&signature=86bef991733ca24ccf20a24b3d057642a49c5339f0c7457f9414326de52a61d3
   - Impact: Made my work slower, Felt confusing or unintuitive
   - Importance: 8/10
   - User Quote: "confusion in the ai with prompts - causing it to bring up unrelated prompt results  ( windows version)"

3. **After the output, users often need to decide their next step** (Feature Request)
   - Submission ID: RGOr9Kj
   - Submitted: 2026-02-09 15:36:55
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-09-at-10.35.15-AM.png?id=1pV02l&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFwVjAybCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MTQxN30.xSunGkPnT0ccahYDUBXKfjn9d6lzjuMBw_QDhth9-xI&signature=b30885241aa86f14d064eca11caf554beb4217880a24028bab8da5c791da19bd
   - Impact: Made my work slower, Made the browser harder to use, Felt confusing or unintuitive
   - Importance: 10/10
   - User Quote: "After the output, users often need to decide their next step. In this case, ‘search the web’ was the obvious next action. Instead of expecting users to type it again, we could surface a contextual CTA badge like ‘Search the web’ to reduce friction and speed up browsing. Also, based on the prompt context, it likely could have inferred intent and proactively surfaced relevant links which it didn't."

4. **The AI assistant seems to run into issues when initiating web search** (Bug Report)
   - Submission ID: eqboX4J
   - Submitted: 2026-02-09 15:40:49
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-09-at-10.40.15-AM.png?id=AjvRRo&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFqdlJSbyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MTY1MX0.6jS7YxZn3_-dqVf1zWAnZlWEnuMCMje51wWffoThuQg&signature=98948e5c5dd4b5882f33ea7369e4c55dad1575909f8b27dc4b4d6d5d49321213
   - Impact: Made the browser harder to use, Made my work slower, Felt confusing or unintuitive
   - Importance: 10/10
   - User Quote: "The AI assistant seems to run into issues when initiating web search. It states that it will perform a search but doesn’t actually return any results or follow-up output. This creates a broken experience. Either the search should execute reliably, or we should show clear fallback messaging or status feedback instead of leaving users hanging."

### Primary Files:
- TBD (to be determined after codebase review)

---

## Sprint 24: UI Polish
**Priority:** MEDIUM | **Story Points:** TBD | **Effort:** TBD | **Severity:** 7-9/10

### Overview
Polish UI elements including text formatting, contrast, logo assets, and design system alignment.

### Key Issues:

1. **Let’s replace the current sloth mascot placeholder with the finalized logo asset** (Bug Report)
   - Submission ID: VLrxB1J
   - Submitted: 2026-02-09 15:13:56
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-09-at-10.12.16-AM.png?id=5pxorN&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVweG9yTiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MDAzOH0.-CPuIQWaZMIfK53OJh9HwY4HKV92Vt30CLz2mzeF4K8&signature=96034ad84e62b6f887400a33d0f1f25c1bb73316dac15c2cfca13c6e8bca4b67
   - Impact: It was a minor inconvenience
   - Importance: 7/10
   - User Quote: "Let’s replace the current sloth mascot placeholder with the finalized logo asset. The existing one reads temporary and hurts brand credibility, especially in demos."

2. **Text selection contrast is too low right now, which hurts readability** (Usability / User Experience (UX) concern)
   - Submission ID: aQWlJBv
   - Submitted: 2026-02-09 15:25:31
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-09-at-10.21.50-AM.png?id=L6pjJj&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikw2cGpKaiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MDczM30.gAzZtPqLxFRA69bCApnMD98_UZdeBAgknEC_62M-Tw0&signature=5ef36d2325d23f80b7309916b6de55cb95d8b973ca7d6f5d41c943aa3c122b8b
   - Impact: Made the browser harder to use, Felt confusing or unintuitive
   - Importance: 9/10
   - User Quote: "Text selection contrast is too low right now, which hurts readability. Let’s increase contrast so selected text remains clearly readable and accessible."

### Primary Files:
- TBD (to be determined after codebase review)

---

## Sprint 25: UI Bugs
**Priority:** MEDIUM | **Story Points:** TBD | **Effort:** TBD | **Severity:** 7-10/10

### Overview
Fix UI bugs including non-functional buttons, icon labeling issues, and interaction problems.

### Key Issues:

1. **The profile button next to the extensions button does not work when i try to click on it** (Bug Report)
   - Submission ID: PdojLRQ
   - Submitted: 2026-02-04 22:10:25
   - Impact: It was a minor inconvenience
   - Importance: 9/10
   - User Quote: "The profile button next to the extensions button does not work when i try to click on it. I expect it to open a new tab which allows me to enter my details."

### Primary Files:
- TBD (to be determined after codebase review)

---

## Sprint 26: Summarization
**Priority:** MEDIUM | **Story Points:** TBD | **Effort:** TBD | **Severity:** 8/10

### Overview
Fix webpage summarization functionality to work correctly for all page types.

### Key Issues:

1. **I requested the agent to summarize the page - however in all cases (1** (Bug Report)
   - Submission ID: obq6YYP
   - Submitted: 2026-01-28 18:22:55
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-01-28-132018.png?id=JerWMo&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkplcldNbyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTYyNDU3N30.UZF3Nmv7NfV4BlobtQFMgmokJ61gdWR3C6jGuTIVVOg&signature=240659d5379e9dd7249e4081072366bba35ccc27274e8b5def04d5a0da885c70
   - Impact: Made my work slower, Felt confusing or unintuitive
   - Importance: 6/10
   - User Quote: "I requested the agent to summarize the page - however in all cases (1. incomplete scrolling through the tab/page opened & 2. complete scrolling of the tab/page opened) , however no matter ho many times i repeat the process of scrolling this is what is happening. Agent refuses to register that the page has been scrolled or "gone through". tried this for multiple subjects of research."

### Primary Files:
- TBD (to be determined after codebase review)

---

## Sprint 27: Other
**Priority:** MEDIUM | **Story Points:** TBD | **Effort:** TBD | **Severity:** 7-10/10

### Overview
Miscellaneous feedback items requiring review.

### Key Issues:

1. **While i am typing my command text the text box seems to not have boundaries on the right side so it ...** (Usability / User Experience (UX) concern)
   - Submission ID: obq6jeO
   - Submitted: 2026-01-28 18:37:12
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-01-28-133516.png?id=zGALK1&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InpHQUxLMSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTYyNTQzM30.heMfy4ngK6Lt8UFNoa6FxPaECV_Pz95oiF3sHr61B9Q&signature=decdf50c66736599b30063666c9b65c453e360c43ee3f5d404daea8e2eaefac9
   - Impact: It was a minor inconvenience
   - Importance: 8/10
   - User Quote: "While i am typing my command text the text box seems to not have boundaries on the right side so it looks like it is going off the window"

2. **when i gave the instructions to open different pages ( unrelated to the previously opened hub) they ...** (Bug Report)
   - Submission ID: LZe1eEl
   - Submitted: 2026-01-28 18:45:30
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-01-28-134342.png?id=VbaDyy&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlZiYUR5eSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTYyNTkzMX0.vGoY1l_7QgccIRaNrFhUIKN_-n6w58WjPk61oD19xQU&signature=910f14665b0f63006524989492234baa2ec8f317126ec2c146b3c47a7d67ab5a
   - Impact: It was a minor inconvenience, Made the browser harder to use
   - Importance: 7/10
   - User Quote: "when i gave the instructions to open different pages ( unrelated to the previously opened hub) they got added to the hub unrelated to them."
   - Suggestions: i wonder if there is a way to analyze open tabs and see if there are related sites/tabs that need to be added to a preexisting hub and if not, then that hub should be closed down/archived.

3. **my prompt was requesting the agent to " tell me what the tv show the office is all about" , when i r...** (Bug Report)
   - Submission ID: KY9YakM
   - Submitted: 2026-01-28 20:40:56
   - Impact: Felt confusing or unintuitive
   - Importance: 8/10
   - User Quote: "my prompt was requesting the agent to " tell me what the tv show the office is all about" , when i received the response it provided this :
Found 2 matches:
1. explain the idea behind the tv show "the office" - Google Search ()
   "Title: explain the idea behind the tv show "the office" - Google Search
URL: https://www.google.com/..."

2. weather and climates of different places in the world - Google Search ()
   "Title: weather and climates of different places in the world - Google Search
URL: https://www.google...". 

when i asked why it gave me the second match it explained itself where the flaw in the logic occurs: You asked me to tell you what the TV show "The Office" is all about. I searched my history and found two matches that included the words "the office":

1.  **explain the idea behind the tv show "the office" - Google Search:** This is a search I performed earlier in our conversation, directly related to your question.
2.  **weather and climates of different places in the world - Google Search:** This match likely occurred because the search results page for weather and climates might contain the words "office" somewhere on the page (perhaps in an advertisement, a related search, or a news article snippet). Since I'm just matching keywords in the titles and URLs, it's not a perfect system and can sometimes produce irrelevant results."
   - Suggestions: I think this issue is necessary to highlight the importance of the agent being able to generate a context based off of the information it has scraped in from the matches.

4. **"Don't show this message again" pop up, click seems disabled** (Bug Report)
   - Submission ID: VLKpWQJ
   - Submitted: 2026-01-29 1:49:04
   - Impact: Felt confusing or unintuitive
   - Importance: 2/10
   - User Quote: ""Don't show this message again" pop up, click seems disabled."
   - Suggestions: Either the check in is disabled or the click functionality isnt introduced.

5. **( windows user) ** (Bug Report)
   - Submission ID: A7E8AzB
   - Submitted: 2026-01-30 18:31:30
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-01-30-133030.png?id=zG5Vqk&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InpHNVZxayIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTc5Nzg5NH0.EiAYdf_guknVa5HK9l2zZtnsT27CPFiq4pgLwT46SS8&signature=1688bbec9bc869c48ceba1952921b822c347e8d76e5182e687ee193061b664b9
   - Impact: Made the browser harder to use, Made my work slower
   - Importance: 10/10
   - User Quote: "( windows user) "

6. **When I tried to open YouTube and the login page, the system interpreted them as two separate command...** (Bug Report)
   - Submission ID: dW7a7Zq
   - Submitted: 2026-02-05 16:42:44
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-05-at-11.36.24.png?id=Ooaao7&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik9vYWFvNyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDMwOTc2Nn0.dTLo99I-yulMj6iWVETPtEkY8iSK3NwPSov-xGCWHC0&signature=4b72a040db2db7e54c25b064c5e305b23627e43fc9c93977bea890b6c0f9de30
   - Impact: Made the browser harder to use
   - Importance: 8/10
   - User Quote: "When I tried to open YouTube and the login page, the system interpreted them as two separate commands. After that, when I tried to open a new link, it executed the previous login command again instead of the new one.

Steps to reproduce:

Prompt: “Open YouTube and the login page.”

Prompt: “Open ESPN” (or any other site).

Actual behavior: The system opens the YouTube login page again.

Expected behavior:
The system should open the newly requested link (e.g., ESPN) and not repeat the previous command."

7. **When I open ESPN, the tab opens successfully, but the chat shows an “Internal Server Error” message ...** (Bug Report)
   - Submission ID: GxM9W62
   - Submitted: 2026-02-05 16:45:28
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-05-at-11.43.18.png?id=YxPPLJ&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ill4UFBMSiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDMwOTkzMH0.bMKBqSF6CA-AYxebqn9PAN1uefAVeedhrm8ybVuJomE&signature=57f50f9b678cce99e4dce8f408045730599219847fe6db8e9d5d521ad5cf47d5
   - Impact: Felt confusing or unintuitive
   - Importance: 8/10
   - User Quote: "When I open ESPN, the tab opens successfully, but the chat shows an “Internal Server Error” message even though the action completes."

8. **When I expand the chat sidebar from the compact toggle view (top-right corner) to the full vertical ...** (Bug Report)
   - Submission ID: rjXODON
   - Submitted: 2026-02-05 17:10:50
   - Screenshot: https://storage.tally.so/private/Screenshot-2026-02-05-at-11.46.14.png?id=ENK5Wo&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVOSzVXbyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDMxMTQ1Mn0.zYE8viG2gMtAhRn3CZkpH8An-OfYsJf1JcmgTDT3XpI&signature=cda80279e2ac4b2913d1b143e9616c894fce29e2d09b5cc94f3734171b50c938
   - Impact: Made my work slower
   - Importance: 9/10
   - User Quote: "When I expand the chat sidebar from the compact toggle view (top-right corner) to the full vertical sidebar on the left, some of my previous chats are missing.

Steps to reproduce:

1. Open the chat using the small toggle in the bottom-right corner.
2. Verify that previous chats are visible.
3. Expand the chat into the full vertical sidebar on the left.
4. Then there will not be any chats visible."

### Primary Files:
- TBD (to be determined after codebase review)

---

## Summary Statistics

| Sprint | Priority | Story Points | Issues Count | Critical Issues |
|--------|----------|--------------|--------------|-----------------|
| Sprint 17 | HIGH | TBD | 6 | 4 |
| Sprint 18 | HIGH | TBD | 5 | 4 |
| Sprint 19 | MEDIUM-HIGH | TBD | 3 | 3 |
| Sprint 20 | HIGH | TBD | 2 | 2 |
| Sprint 21 | HIGH | TBD | 3 | 0 |
| Sprint 22 | MEDIUM-HIGH | TBD | 2 | 0 |
| Sprint 23 | MEDIUM-HIGH | TBD | 4 | 3 |
| Sprint 24 | MEDIUM | TBD | 2 | 1 |
| Sprint 25 | MEDIUM | TBD | 1 | 1 |
| Sprint 26 | MEDIUM | TBD | 1 | 0 |
| Sprint 27 | MEDIUM | TBD | 8 | 2 |
| **Total** | - | **TBD** | **37** | **TBD** |

---

## Notes

- Story points and complexity to be determined after codebase cross-reference
- Primary files to be identified based on codebase structure
- UI-related issues marked for design team consultation
- All feedback entries include full user quotes and screenshot links where available