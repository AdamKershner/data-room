# 09 — Risks and Mitigations

[← Back to index](./README.md) · Prev: [08 — Team operating model](./08-team-operating-model.md)

## Executive summary

Curio's scale path faces **platform**, **trust**, **competitive**, and **concentration** risks. This playbook names each risk, likelihood/impact framing, and mitigations the team can execute.

---

## Risk register

| ID | Risk | Likelihood | Impact | Owner |
|----|------|------------|--------|-------|
| R1 | Stripe dependency / account issues | Medium | High | [FILL IN] |
| R2 | Infrastructure outage (Heroku, Firebase) | Low | High | [FILL IN] |
| R3 | Adult content / moderation failure | Medium | High | [FILL IN] |
| R4 | Creator fraud or chargebacks | Medium | Medium | [FILL IN] |
| R5 | Competitor copies marketplace | High | Medium | [FILL IN] |
| R6 | GMV concentration in few creators | [FILL IN] | High | [FILL IN] |
| R7 | Low Free → Growth conversion | [FILL IN] | Medium | [FILL IN] |
| R8 | SEO / discovery underperforms | Medium | High | [FILL IN] |

---

## R1 — Platform and payments (Stripe)

**Risk:** Stripe Connect policy changes, account suspensions, or payout delays harm creator trust.

**Mitigations:**

- Monitor Stripe dashboard and Connect compliance weekly
- Document creator onboarding requirements clearly in-product
- Maintain reserve policy for disputes [FILL IN]
- Long term: evaluate backup PSP only if volume justifies complexity

---

## R2 — Infrastructure (Heroku, Firebase)

**Risk:** Frontend or API downtime during peak traffic loses purchases.

**Product fact:** Production frontend on Heroku (kahana-alpha); backend on Firebase Functions.

**Mitigations:**

- Uptime monitoring and alerting [FILL IN: tool]
- Status page or incident comms template [FILL IN]
- Post-incident review within 48 hours
- Load test before major marketing pushes

---

## R3 — Trust and safety (content moderation)

**Risk:** Adult or policy-violating content damages brand, app store policies, or payment processor standing.

**Product fact:** Adult content flags, age gates, and Explore adult filters are shipped.

**Mitigations:**

- Clear creator terms on prohibited content
- Reporting flow [FILL IN: shipped or roadmap]
- Manual review queue for flagged hubs [FILL IN]
- Regular audit of top Explore listings
- See [07 — Product roadmap](./07-product-roadmap.md) H1 trust items

---

## R4 — Creator fraud and buyer disputes

**Risk:** Misleading hub descriptions, non-delivery, or chargebacks erode buyer trust.

**Mitigations:**

- Hub preview and description standards
- Refund policy published [FILL IN: link to terms]
- Track chargeback rate by creator; suspend repeat offenders
- Buyer support SLA [FILL IN]

---

## R5 — Competitive risk

**Risk:** Gumroad, Stan, Kajabi, or platforms add discovery/marketplace features.

**Mitigations:**

- Double down on **Explore + hub depth** (harder to copy than checkout)
- Creator relationships and earnings (switching cost)
- Ship faster on conversion and trust (reviews, analytics)
- See [01 — Vision](./01-vision-and-positioning.md) differentiation

---

## R6 — Concentration risk

**Risk:** Top N creators represent majority of GMV; one departure tanks revenue.

**Mitigations:**

- Track Gini coefficient or top-10 GMV % monthly
- Creator success program for mid-tier growers
- Category diversification ([03 — Market](./03-market-and-customers.md))
- Target: no single creator > [FILL IN]% of GMV

**Current top-10 GMV share:** [FILL IN]

---

## R7 — Unit economics risk

**Risk:** CAC exceeds LTV if paid acquisition scales before conversion improves.

**Mitigations:**

- Cap paid spend until LTV:CAC > 3:1 ([06 — Unit economics](./06-unit-economics.md))
- Prioritize organic and creator-led channels
- Improve conversion before traffic buys

---

## R8 — Regulatory and legal

**Risk:** Tax, privacy (GDPR/CCPA), or digital goods regulations vary by market.

**Mitigations:**

- Kahana Group Inc. legal entity; terms on curio.store [FILL IN: links]
- Stripe Tax or manual process [FILL IN]
- Legal review before international expansion

---

## Incident response (template)

When a severity-1 incident occurs:

1. **Assign incident lead** — [FILL IN: rotation]
2. **Communicate** — Internal channel + status update if user-facing
3. **Mitigate** — Rollback, disable feature, or manual workaround
4. **Resolve** — Root cause fix deployed
5. **Post-mortem** — Blameless doc within 5 business days

---

## Related docs

- [02 — Product today](./02-product-today.md)
- [06 — Unit economics](./06-unit-economics.md)
- [08 — Team operating model](./08-team-operating-model.md)
