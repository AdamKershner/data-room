import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ADS,
  AUDIENCES,
  CAMPAIGNS,
  IMAGES,
  LAUNCH_AUDIENCE,
  MOOD_BOARD_PAGE,
  ONE_LINER,
  POSITIONING,
  PRODUCT_DEFINITION,
  RELATED_LINKS,
  VIDEOS,
  WORKSPACE_LINKS,
  WRITINGS,
} from '../data/moodBoardContent'
import {
  CHANNELS,
  NARRATIVE_BEATS,
  POST_DRAFTS,
} from '../data/moodBoardChannelArchive'
import './Page.css'
import './MoodBoard.css'

function ChannelArchive() {
  const [channelId, setChannelId] = useState('linkedin')
  const channel = CHANNELS.find((c) => c.id === channelId) || CHANNELS[0]
  const drafts = useMemo(
    () => POST_DRAFTS.filter((p) => p.channel === channelId),
    [channelId]
  )

  return (
    <section className="page-section" id="channel-archive">
      <h2>Channel archive</h2>
      <p className="mb-lede">
        Drafts and examples by outlet. LinkedIn is the first filled channel: five narrative beats,
        company page vs Adam’s personal page. These show what a good post is supposed to do. Official
        Kahana posts still go through{' '}
        <Link to="/sops/official-social-media">SOP 8</Link>. Adam’s personal posts follow founder brand,
        not the company login.
      </p>
      <div className="mb-channel-tabs" role="tablist" aria-label="Social channels">
        {CHANNELS.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={c.id === channelId}
            className={c.id === channelId ? 'mb-channel-tab is-active' : 'mb-channel-tab'}
            onClick={() => setChannelId(c.id)}
          >
            {c.title}
          </button>
        ))}
      </div>
      <p className="mb-lede">{channel.blurb}</p>

      {drafts.length === 0 ? (
        <p className="mb-empty">No drafts for {channel.title} yet. Add them in moodBoardChannelArchive.js.</p>
      ) : (
        NARRATIVE_BEATS.map((beat) => {
          const pair = drafts.filter((p) => p.beat === beat.id)
          if (pair.length === 0) return null
          return (
            <article className="mb-beat" key={beat.id} id={`beat-${beat.id}`}>
              <span className="mb-kicker">
                Post {beat.number} · {beat.title}
              </span>
              <h3>{beat.job}</h3>
              <p className="mb-card-note">{beat.whyGood}</p>
              <div className="mb-split mb-post-pair">
                {pair.map((post) => (
                  <div className="mb-post" key={post.id}>
                    <div className="mb-post-meta">
                      <strong>{post.voiceLabel}</strong>
                      <span>{post.status}</span>
                    </div>
                    <pre className="mb-post-body">{post.body}</pre>
                    {post.hashtags?.length ? (
                      <p className="mb-card-note">#{post.hashtags.join(' #')}</p>
                    ) : null}
                    {post.research?.length
                      ? post.research.map((r) => (
                          <p className="mb-card-note" key={r.label}>
                            <strong>Research — {r.label}:</strong> {r.note}
                          </p>
                        ))
                      : null}
                  </div>
                ))}
              </div>
            </article>
          )
        })
      )}
    </section>
  )
}

function MoodBoard() {
  return (
    <div className="page" id="mood-board">
      <div className="page-header">
        <h1>{MOOD_BOARD_PAGE.title}</h1>
        <p className="page-subtitle">{MOOD_BOARD_PAGE.subtitle}</p>
      </div>

      <section className="page-section">
        <blockquote className="mb-one-liner">&ldquo;{ONE_LINER}&rdquo;</blockquote>
        <p className="mb-lede">{PRODUCT_DEFINITION}</p>
        <p className="mb-lede">
          Use this page as the brainstorming ground. Official posts still go through{' '}
          <Link to="/sops/marketing-mood-board">SOP 31</Link>, then brand and the channel SOP. LinkedIn
          examples live in the{' '}
          <a href="#channel-archive">channel archive</a>.
        </p>
      </section>

      <section className="page-section" id="positioning">
        <h2>Positioning</h2>
        <span className="mb-kicker">Category Kahana should own</span>
        <p className="mb-lede">{POSITIONING.category}</p>
        <div className="mb-split">
          <div className="mb-split-card">
            <h3>The modern internet optimizes for</h3>
            <ul>
              {POSITIONING.internetOptimizes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mb-split-card">
            <h3>Kahana optimizes for</h3>
            <ul>
              {POSITIONING.kahanaOptimizes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mb-lede">{POSITIONING.contrast}</p>
        <div className="mb-ph-pack">
          <p>
            <strong>Product Hunt headline:</strong> {POSITIONING.phHeadline}
          </p>
          <p>
            <strong>Short description:</strong> {POSITIONING.phShort}
          </p>
          <p>
            <strong>Subheadline:</strong> {POSITIONING.phSubheadline}
          </p>
          <p>
            <strong>CTA:</strong> {POSITIONING.phCta}
          </p>
        </div>
      </section>

      <section className="page-section" id="audience">
        <h2>Audience</h2>
        <p className="mb-lede">{LAUNCH_AUDIENCE.body}</p>
        <p className="mb-lede">
          <em>{LAUNCH_AUDIENCE.line}</em>
        </p>
        <ul className="mb-tools">
          {LAUNCH_AUDIENCE.currentTools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <div className="mb-grid" style={{ marginTop: 20 }}>
          {AUDIENCES.map((aud) => (
            <article className="mb-card" key={aud.id}>
              <span className="mb-kicker">{aud.kicker}</span>
              <h3>{aud.title}</h3>
              <p>{aud.promise}</p>
              <ul>
                {aud.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="mb-card-note">Best audience — {aud.bestAudience}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section" id="campaigns">
        <h2>Campaigns</h2>
        <div className="mb-grid">
          {CAMPAIGNS.map((campaign) => (
            <article className="mb-card" key={campaign.id} id={campaign.id}>
              <h3>{campaign.title}</h3>
              {campaign.note ? <p className="mb-card-note">{campaign.note}</p> : null}
              <ul>
                {campaign.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <ChannelArchive />

      <section className="page-section" id="writings">
        <h2>Writings</h2>
        <div className="mb-grid">
          {WRITINGS.map((item) => (
            <article className="mb-card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section" id="images">
        <h2>Images</h2>
        <div className="mb-scans">
          {IMAGES.map((img) => (
            <figure className="mb-scan" key={img.id}>
              <img src={img.src} alt={img.alt} />
              <figcaption>{img.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="page-section" id="videos">
        <h2>Videos</h2>
        {VIDEOS.length === 0 ? (
          <p className="mb-empty">No clips on the board yet. Add a title and URL in moodBoardContent.js.</p>
        ) : (
          <div className="mb-grid">
            {VIDEOS.map((item) => (
              <article className="mb-card" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="page-section" id="ads">
        <h2>Ads</h2>
        {ADS.length === 0 ? (
          <p className="mb-empty">No ad notes yet. Add a lane, hook, and destination in moodBoardContent.js.</p>
        ) : (
          <div className="mb-grid">
            {ADS.map((item) => (
              <article className="mb-card" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="page-section" id="workspace">
        <h2>Workspace</h2>
        <p className="mb-lede">
          Collaborative boards live off this page. Paste the URL next to Canva, Figma, or Google Doc in the data file when it exists.
        </p>
        <ul className="mb-workspace">
          {WORKSPACE_LINKS.map((slot) => (
            <li key={slot.id}>
              <strong>{slot.label}</strong>
              {slot.href ? (
                <a href={slot.href} target="_blank" rel="noreferrer">
                  {slot.href}
                </a>
              ) : (
                <span>No link yet</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="page-section" id="related">
        <h2>Related</h2>
        <ul className="mb-related">
          {RELATED_LINKS.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.title}</Link>
              <span> — {link.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default MoodBoard
