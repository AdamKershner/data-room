/** Channel + format keys for marketing narrative checklist tasks */

export const CHANNELS = {
  LinkedIn: 'LinkedIn',
  X: 'X',
  Instagram: 'Instagram',
  TikTok: 'TikTok',
  YouTube: 'YouTube',
  ProductHunt: 'Product Hunt',
  Blog: 'Blog',
  Email: 'Email',
  SalesDeck: 'Sales deck',
  Internal: 'Internal',
  Multi: 'Multi-channel',
}

export const FORMATS = {
  writing: 'Writing',
  thread: 'Thread',
  image: 'Image',
  infographic: 'Infographic',
  carousel: 'Carousel',
  gif: 'GIF',
  videoOnCamera: 'Video · on-camera',
  videoAnimation: 'Video · animation',
  videoMixed: 'Video · mixed',
  pdf: 'PDF',
  poll: 'Poll',
  internalDoc: 'Internal doc',
}

export function channelLabel(key) {
  if (!key) return ''
  return CHANNELS[key] ?? key
}

export function formatLabel(key) {
  if (!key) return ''
  return FORMATS[key] ?? key
}

export function channelDisplayList(channel, channels) {
  if (channel === 'Multi' && channels?.length) {
    return channels.map((c) => channelLabel(c)).join(' · ')
  }
  return channelLabel(channel)
}
