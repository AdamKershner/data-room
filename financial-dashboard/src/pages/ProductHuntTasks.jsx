import React, { useState } from 'react'
import './Page.css'
import './ProductHuntTasks.css'

const TEMPLATE_MESSAGES = {
  favor: "Hey hope you're doing well, could I ask you a quick favor?",
  overview: "We've been building a new browser called Oasis and we're launching it on Product Hunt in a few weeks. Our goal is #1—the top spot on the feed. That's a big deal because it drives visibility, reach, and opportunities. News, investors, and customers all take notice. We need at least 350 upvotes on launch day, so we're reaching out now to line up support in advance. It takes less than 5 minutes to help, and it would mean a lot for us and for my career. If you're in, just say Yes and I'll send you the instructions.",
  instructions: "Amazing, thank you! Here's all you need to do:\n\n1. Create a free Product Hunt account: https://www.producthunt.com/\n2. After creating your account, text me the link to your account/profile.\n3. On the day of the launch, I'll send you a reminder to log in, check out the launch page, upvote, and comment.\n\nThat's it. Thank you again for backing us.",
  // Variation: Short
  shortFavor: "Hey! Quick favor?",
  shortOverview: "We're launching Oasis (our new browser) on Product Hunt soon. Going for #1—need 350 upvotes on launch day. Takes <5 min to help and would mean a lot. Say Yes and I'll send instructions.",
  shortInstructions: "Thanks! Here's what to do:\n\n1. Create a free Product Hunt account: https://www.producthunt.com/\n2. Text me your profile link\n3. On launch day I'll remind you to upvote and comment\n\nThat's it!",
  // Variation: Email
  emailFavor: "Hope you're doing well. Could I ask you a quick favor?",
  emailOverview: "We've been building a new browser called Oasis and we're launching it on Product Hunt in a few weeks. Our goal is #1—the top spot on the feed, which drives visibility, reach, and opportunities. We need at least 350 upvotes on launch day, so we're reaching out in advance to line up support. It takes less than 5 minutes to help, and it would mean a lot for us and for my career. If you're open to it, just reply Yes and I'll send the instructions.",
  emailInstructions: "Thank you! Here's what you need to do:\n\n1. Create a free Product Hunt account: https://www.producthunt.com/\n2. After creating your account, send me the link to your profile.\n3. On launch day, I'll send you a reminder to log in, check out the launch page, upvote, and comment.\n\nThat's it. Thanks again for your support.",
  // Variation: Group (combined ask)
  groupAsk: "Hey everyone—quick favor? We're launching Oasis (our new browser) on Product Hunt soon. Going for #1—need 350 upvotes on launch day. If you're willing to help (takes <5 min), reply here and I'll send instructions. Would mean a lot!",
  groupInstructions: "Thanks! Here's what to do:\n\n1. Create a free Product Hunt account: https://www.producthunt.com/\n2. Send me your profile link\n3. On launch day I'll remind you to upvote and comment\n\nThat's it. Thank you!"
}

function ProductHuntTasks() {
  const [copiedId, setCopiedId] = useState(null)

  const handleCopy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="page" id="producthunt-tasks">
      <div className="page-header">
        <h1>ProductHunt Tasks</h1>
        <p className="page-subtitle">
          Recruit 10 friends, family members, and former colleagues to support us in our future Product Hunt launch. Send text messages, emails, or ask in person if people are willing to help and support our Product Hunt launch.
        </p>
      </div>

      <section className="page-section producthunt-success-section">
        <h2>Success Criteria</h2>
        <div className="producthunt-success-content">
          <p><strong>This task is done when</strong> you have read this page and signed off on your commitment to get 10 supporters to agree, set up Product Hunt accounts, and add them to the <a href="https://docs.google.com/spreadsheets/d/1gSMDizFLvRliMZgYNyQND4lipZ3Dde6FPn2EWDRZolM/edit?pli=1&gid=0#gid=0" target="_blank" rel="noopener noreferrer" className="producthunt-link">Google Sheet</a>.</p>
          <p>If you have any questions or can&apos;t commit, DM Adam Kershner on Slack.</p>
        </div>
      </section>

      <div className="producthunt-example-callout">
        <h3>Template</h3>
        <p className="producthunt-copy-hint">Click &quot;Copy&quot; on any message to paste into your texts. Feel free to adapt and tailor the messages—this is just a starting point.</p>
        <div className="producthunt-chat">
          <div className="producthunt-chat-row producthunt-chat-you-row">
            <div className="producthunt-chat-bubble producthunt-chat-you">
              <div className="producthunt-chat-bubble-header">
                <span className="producthunt-chat-label">You</span>
                <button
                  type="button"
                  className="producthunt-copy-btn"
                  onClick={() => handleCopy(TEMPLATE_MESSAGES.favor, 'favor')}
                  aria-label="Copy message"
                >
                  {copiedId === 'favor' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p>Hey hope you&apos;re doing well, could I ask you a quick favor?</p>
            </div>
          </div>
          <div className="producthunt-chat-row producthunt-chat-them-row">
            <div className="producthunt-chat-bubble producthunt-chat-them">
              <span className="producthunt-chat-label">Them</span>
              <p>Sure!</p>
            </div>
          </div>
          <div className="producthunt-chat-row producthunt-chat-you-row">
            <div className="producthunt-chat-bubble producthunt-chat-you">
              <div className="producthunt-chat-bubble-header">
                <span className="producthunt-chat-label">You</span>
                <button
                  type="button"
                  className="producthunt-copy-btn"
                  onClick={() => handleCopy(TEMPLATE_MESSAGES.overview, 'overview')}
                  aria-label="Copy message"
                >
                  {copiedId === 'overview' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p>We&apos;ve been building a new browser called Oasis and we&apos;re launching it on Product Hunt in a few weeks. Our goal is #1—the top spot on the feed. That&apos;s a big deal because it drives visibility, reach, and opportunities. News, investors, and customers all take notice. We need at least 350 upvotes on launch day, so we&apos;re reaching out now to line up support in advance. It takes less than 5 minutes to help, and it would mean a lot for us and for my career. If you&apos;re in, just say Yes and I&apos;ll send you the instructions.</p>
            </div>
          </div>
          <div className="producthunt-chat-row producthunt-chat-them-row">
            <div className="producthunt-chat-bubble producthunt-chat-them">
              <span className="producthunt-chat-label">Them</span>
              <p>Yes</p>
            </div>
          </div>
          <div className="producthunt-chat-row producthunt-chat-you-row">
            <div className="producthunt-chat-bubble producthunt-chat-you">
              <div className="producthunt-chat-bubble-header">
                <span className="producthunt-chat-label">You</span>
                <button
                  type="button"
                  className="producthunt-copy-btn"
                  onClick={() => handleCopy(TEMPLATE_MESSAGES.instructions, 'instructions')}
                  aria-label="Copy message"
                >
                  {copiedId === 'instructions' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p>Amazing, thank you! Here&apos;s all you need to do:</p>
              <ol>
                <li>Create a free Product Hunt account: <a href="https://www.producthunt.com/" target="_blank" rel="noopener noreferrer" className="producthunt-link">https://www.producthunt.com/</a></li>
                <li>After creating your account, text me the link to your account/profile.</li>
                <li>On the day of the launch, I&apos;ll send you a reminder to log in, check out the launch page, upvote, and comment.</li>
              </ol>
              <p>That&apos;s it. Thank you again for backing us.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="producthunt-accounts-callout">
        <h3>Product Hunt Accounts Tracker</h3>
        <p>As the people you recruit agree to support and send over their Product Hunt profiles, it&apos;s your responsibility to add them to this sheet. This is where we gather all the accounts of our confirmed supporters—it helps us coordinate for launch day.</p>
        <a
          href="https://docs.google.com/spreadsheets/d/1gSMDizFLvRliMZgYNyQND4lipZ3Dde6FPn2EWDRZolM/edit?pli=1&gid=0#gid=0"
          target="_blank"
          rel="noopener noreferrer"
          className="producthunt-accounts-button"
        >
          Open Product Hunt Accounts (Google Sheet)
        </a>
      </div>

      <section className="page-section producthunt-form-section">
        <h2>Sign Off</h2>
        <p className="producthunt-form-intro">Confirm you&apos;ve read the instructions and agree to the commitment:</p>
        <div className="producthunt-form-wrapper">
          <iframe
            src="https://tally.so/embed/9q1991"
            width="100%"
            height="700"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Product Hunt Confirmation"
            className="producthunt-form-embed"
          />
        </div>
      </section>

      <section className="page-section producthunt-variations-section">
        <h2>Template Variations</h2>
        <p className="producthunt-intro">
          Different versions for different contexts. Each follows the same flow: favor ask → overview → instructions.
        </p>

        <div className="producthunt-variation">
          <h3 className="producthunt-variation-title">Short (quick texts)</h3>
          <div className="producthunt-chat">
            <div className="producthunt-chat-row producthunt-chat-you-row">
              <div className="producthunt-chat-bubble producthunt-chat-you">
                <div className="producthunt-chat-bubble-header">
                  <span className="producthunt-chat-label">You</span>
                  <button type="button" className="producthunt-copy-btn" onClick={() => handleCopy(TEMPLATE_MESSAGES.shortFavor, 'shortFavor')} aria-label="Copy">{copiedId === 'shortFavor' ? 'Copied!' : 'Copy'}</button>
                </div>
                <p>Hey! Quick favor?</p>
              </div>
            </div>
            <div className="producthunt-chat-row producthunt-chat-them-row">
              <div className="producthunt-chat-bubble producthunt-chat-them">
                <span className="producthunt-chat-label">Them</span>
                <p>Sure!</p>
              </div>
            </div>
            <div className="producthunt-chat-row producthunt-chat-you-row">
              <div className="producthunt-chat-bubble producthunt-chat-you">
                <div className="producthunt-chat-bubble-header">
                  <span className="producthunt-chat-label">You</span>
                  <button type="button" className="producthunt-copy-btn" onClick={() => handleCopy(TEMPLATE_MESSAGES.shortOverview, 'shortOverview')} aria-label="Copy">{copiedId === 'shortOverview' ? 'Copied!' : 'Copy'}</button>
                </div>
                <p>We&apos;re launching Oasis (our new browser) on Product Hunt soon. Going for #1—need 350 upvotes on launch day. Takes &lt;5 min to help and would mean a lot. Say Yes and I&apos;ll send instructions.</p>
              </div>
            </div>
            <div className="producthunt-chat-row producthunt-chat-them-row">
              <div className="producthunt-chat-bubble producthunt-chat-them">
                <span className="producthunt-chat-label">Them</span>
                <p>Yeah I&apos;m in</p>
              </div>
            </div>
            <div className="producthunt-chat-row producthunt-chat-you-row">
              <div className="producthunt-chat-bubble producthunt-chat-you">
                <div className="producthunt-chat-bubble-header">
                  <span className="producthunt-chat-label">You</span>
                  <button type="button" className="producthunt-copy-btn" onClick={() => handleCopy(TEMPLATE_MESSAGES.shortInstructions, 'shortInstructions')} aria-label="Copy">{copiedId === 'shortInstructions' ? 'Copied!' : 'Copy'}</button>
                </div>
                <p>Thanks! Here&apos;s what to do:</p>
                <ol>
                  <li>Create a free Product Hunt account: <a href="https://www.producthunt.com/" target="_blank" rel="noopener noreferrer" className="producthunt-link">https://www.producthunt.com/</a></li>
                  <li>Text me your profile link</li>
                  <li>On launch day I&apos;ll remind you to upvote and comment</li>
                </ol>
                <p>That&apos;s it!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="producthunt-variation">
          <h3 className="producthunt-variation-title">Email (professional contacts)</h3>
          <div className="producthunt-chat">
            <div className="producthunt-chat-row producthunt-chat-you-row">
              <div className="producthunt-chat-bubble producthunt-chat-you">
                <div className="producthunt-chat-bubble-header">
                  <span className="producthunt-chat-label">You</span>
                  <button type="button" className="producthunt-copy-btn" onClick={() => handleCopy(TEMPLATE_MESSAGES.emailFavor, 'emailFavor')} aria-label="Copy">{copiedId === 'emailFavor' ? 'Copied!' : 'Copy'}</button>
                </div>
                <p>Hope you&apos;re doing well. Could I ask you a quick favor?</p>
              </div>
            </div>
            <div className="producthunt-chat-row producthunt-chat-them-row">
              <div className="producthunt-chat-bubble producthunt-chat-them">
                <span className="producthunt-chat-label">Them</span>
                <p>Of course, happy to help.</p>
              </div>
            </div>
            <div className="producthunt-chat-row producthunt-chat-you-row">
              <div className="producthunt-chat-bubble producthunt-chat-you">
                <div className="producthunt-chat-bubble-header">
                  <span className="producthunt-chat-label">You</span>
                  <button type="button" className="producthunt-copy-btn" onClick={() => handleCopy(TEMPLATE_MESSAGES.emailOverview, 'emailOverview')} aria-label="Copy">{copiedId === 'emailOverview' ? 'Copied!' : 'Copy'}</button>
                </div>
                <p>We&apos;ve been building a new browser called Oasis and we&apos;re launching it on Product Hunt in a few weeks. Our goal is #1—the top spot on the feed, which drives visibility, reach, and opportunities. We need at least 350 upvotes on launch day, so we&apos;re reaching out in advance to line up support. It takes less than 5 minutes to help, and it would mean a lot for us and for my career. If you&apos;re open to it, just reply Yes and I&apos;ll send the instructions.</p>
              </div>
            </div>
            <div className="producthunt-chat-row producthunt-chat-them-row">
              <div className="producthunt-chat-bubble producthunt-chat-them">
                <span className="producthunt-chat-label">Them</span>
                <p>Yes, I&apos;d be glad to support. Send me the details.</p>
              </div>
            </div>
            <div className="producthunt-chat-row producthunt-chat-you-row">
              <div className="producthunt-chat-bubble producthunt-chat-you">
                <div className="producthunt-chat-bubble-header">
                  <span className="producthunt-chat-label">You</span>
                  <button type="button" className="producthunt-copy-btn" onClick={() => handleCopy(TEMPLATE_MESSAGES.emailInstructions, 'emailInstructions')} aria-label="Copy">{copiedId === 'emailInstructions' ? 'Copied!' : 'Copy'}</button>
                </div>
                <p>Thank you! Here&apos;s what you need to do:</p>
                <ol>
                  <li>Create a free Product Hunt account: <a href="https://www.producthunt.com/" target="_blank" rel="noopener noreferrer" className="producthunt-link">https://www.producthunt.com/</a></li>
                  <li>After creating your account, send me the link to your profile.</li>
                  <li>On launch day, I&apos;ll send you a reminder to log in, check out the launch page, upvote, and comment.</li>
                </ol>
                <p>That&apos;s it. Thanks again for your support.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="producthunt-variation">
          <h3 className="producthunt-variation-title">Group message (WhatsApp / Slack / Discord)</h3>
          <div className="producthunt-chat">
            <div className="producthunt-chat-row producthunt-chat-you-row">
              <div className="producthunt-chat-bubble producthunt-chat-you">
                <div className="producthunt-chat-bubble-header">
                  <span className="producthunt-chat-label">You</span>
                  <button type="button" className="producthunt-copy-btn" onClick={() => handleCopy(TEMPLATE_MESSAGES.groupAsk, 'groupAsk')} aria-label="Copy">{copiedId === 'groupAsk' ? 'Copied!' : 'Copy'}</button>
                </div>
                <p>Hey everyone—quick favor? We&apos;re launching Oasis (our new browser) on Product Hunt soon. Going for #1—need 350 upvotes on launch day. If you&apos;re willing to help (takes &lt;5 min), reply here and I&apos;ll send instructions. Would mean a lot!</p>
              </div>
            </div>
            <div className="producthunt-chat-row producthunt-chat-them-row">
              <div className="producthunt-chat-bubble producthunt-chat-them">
                <span className="producthunt-chat-label">Them</span>
                <p>I&apos;m in 👍</p>
              </div>
            </div>
            <div className="producthunt-chat-row producthunt-chat-you-row">
              <div className="producthunt-chat-bubble producthunt-chat-you">
                <div className="producthunt-chat-bubble-header">
                  <span className="producthunt-chat-label">You</span>
                  <button type="button" className="producthunt-copy-btn" onClick={() => handleCopy(TEMPLATE_MESSAGES.groupInstructions, 'groupInstructions')} aria-label="Copy">{copiedId === 'groupInstructions' ? 'Copied!' : 'Copy'}</button>
                </div>
                <p>Thanks! Here&apos;s what to do:</p>
                <ol>
                  <li>Create a free Product Hunt account: <a href="https://www.producthunt.com/" target="_blank" rel="noopener noreferrer" className="producthunt-link">https://www.producthunt.com/</a></li>
                  <li>Send me your profile link</li>
                  <li>On launch day I&apos;ll remind you to upvote and comment</li>
                </ol>
                <p>That&apos;s it. Thank you!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductHuntTasks
