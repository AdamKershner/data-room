import React from 'react'
import {
  FOUNDER_PERSONAL_BRAND_PAGE,
  FOUNDER_PERSONAL_BRAND_SECTIONS,
  PROVEN_MODEL_CONTENT,
  ADAM_HEADSHOT,
  JOHN_SUMMIT_CORPORATE_IMAGE,
  ADAM_YOUTUBE_THUMBNAIL_EXAMPLE,
  JOHN_SUMMIT_REFERENCE_VIDEO_EMBED_URL,
  JOHN_SUMMIT_REFERENCE_VIDEO_WATCH_URL,
} from './founderPersonalBrandSections'
import './Page.css'
import './FounderPersonalBrand.css'

function ProvenModelSection() {
  const {
    story,
    storyHeading,
    theoreticalHeadline,
    johnSummitProfileHeading,
    johnSummitProfile,
    parallelsIntro,
    blueprint,
    youtubeThumbnailHeading,
    parallels,
    videoCaption,
  } = PROVEN_MODEL_CONTENT

  return (
    <div className="content-block founder-proven-block">
      <div className="founder-proven-columns">
        <div className="founder-proven-text">
          <h3 className="founder-proven-story-heading">{storyHeading}</h3>
          {story.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="founder-proven-story-voice">
              {paragraph}
            </p>
          ))}
          <aside className="founder-proven-headline-callout" aria-label="Theoretical press headline">
            <p className="founder-proven-headline-outlet">{theoreticalHeadline.outlet}</p>
            <p className="founder-proven-headline-title">{theoreticalHeadline.headline}</p>
            <p className="founder-proven-headline-tagline">{theoreticalHeadline.tagline}</p>
            <p className="founder-proven-headline-note">{theoreticalHeadline.note}</p>
          </aside>
          <h3 className="founder-proven-summit-profile-heading">{johnSummitProfileHeading}</h3>
          {johnSummitProfile.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="founder-proven-summit-profile">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="founder-proven-portraits">
          <figure className="founder-proven-headshot-wrap">
            <img
              src={ADAM_HEADSHOT.src}
              alt={ADAM_HEADSHOT.alt}
              className="founder-proven-headshot"
            />
            <figcaption className="founder-proven-headshot-caption">Adam Kershner</figcaption>
          </figure>
          <figure className="founder-proven-headshot-wrap founder-proven-summit-wrap">
            <img
              src={JOHN_SUMMIT_CORPORATE_IMAGE.src}
              alt={JOHN_SUMMIT_CORPORATE_IMAGE.alt}
              className="founder-proven-headshot"
            />
            <figcaption className="founder-proven-headshot-caption">
              {JOHN_SUMMIT_CORPORATE_IMAGE.caption}
            </figcaption>
          </figure>
        </div>
      </div>

      <p className="founder-proven-parallels-intro">{parallelsIntro}</p>

      <div className="founder-proven-comparison-wrap">
        <table className="founder-proven-comparison">
          <thead>
            <tr>
              <th scope="col">Parallel</th>
              <th scope="col">John Summit</th>
              <th scope="col">Adam Kershner</th>
            </tr>
          </thead>
          <tbody>
            {parallels.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>{row.johnSummit}</td>
                <td>{row.adam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="founder-proven-blueprint">
        {blueprint.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <div className="founder-proven-media-columns">
        <figure className="founder-proven-thumbnail-wrap">
          <h3 className="founder-proven-media-column-heading">{youtubeThumbnailHeading}</h3>
          <img
            src={ADAM_YOUTUBE_THUMBNAIL_EXAMPLE.src}
            alt={ADAM_YOUTUBE_THUMBNAIL_EXAMPLE.alt}
            className="founder-proven-thumbnail-img"
            loading="lazy"
          />
          <figcaption className="founder-proven-thumbnail-caption">
            {ADAM_YOUTUBE_THUMBNAIL_EXAMPLE.caption}
          </figcaption>
        </figure>

        <div className="founder-proven-video-column">
          <p className="founder-proven-video-intro">{videoCaption}</p>
          <div className="founder-proven-video-wrapper">
            <iframe
              src={JOHN_SUMMIT_REFERENCE_VIDEO_EMBED_URL}
              title="John Summit reference video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="founder-proven-video"
            />
          </div>
          <p className="founder-proven-video-caption">
            <a
              href={JOHN_SUMMIT_REFERENCE_VIDEO_WATCH_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

function FounderPersonalBrand() {
  return (
    <div className="page" id="founder-personal-brand">
      <div className="page-header">
        <h1>{FOUNDER_PERSONAL_BRAND_PAGE.title}</h1>
        <p className="page-subtitle">{FOUNDER_PERSONAL_BRAND_PAGE.subtitle}</p>
      </div>

      <nav className="content-block" aria-label="On this page">
        <p>
          <strong>On this page:</strong>{' '}
          {FOUNDER_PERSONAL_BRAND_SECTIONS.map((section, index) => (
            <React.Fragment key={section.id}>
              {index > 0 && ' · '}
              <a href={`#${section.id}`}>{section.title}</a>
            </React.Fragment>
          ))}
        </p>
      </nav>

      {FOUNDER_PERSONAL_BRAND_SECTIONS.map((section) => (
        <section key={section.id} className="page-section" id={section.id}>
          <h2>{section.title}</h2>
          {section.id === 'proven-model' ? (
            <ProvenModelSection />
          ) : (
            <div className="content-block">
              <p>{section.placeholder}</p>
            </div>
          )}
        </section>
      ))}
    </div>
  )
}

export default FounderPersonalBrand
