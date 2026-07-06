# 06 — Unit Economics

[← Back to index](./README.md) · Prev: [05 — Growth strategy](./05-growth-strategy.md) · Next: [07 — Product roadmap](./07-product-roadmap.md)

## Executive summary

Kahana's unit economics blend **SaaS margins** (Growth ~$9.99/mo, ~$300/mo MRR today) with **marketplace economics** (5% GMV, spiky when creators monetize). **6,500+ registered users** provide network-effect foundation.

---

## Current traction

| Metric | Value |
|--------|-------|
| Registered users | 6,500+ |
| Growth MRR | ~$300/month (~30 subscribers at $9.99/mo) |
| Take rate | 5% on hub sales |
| GMV revenue | Spikes when creators charge for hub access |

---

## Creator value model

### Revenue per creator (annual)

```
Creator value to Curio =
  (Growth ARPU × subscription probability)
  + (Annual GMV × take rate × activity probability)
  + (Enterprise allocation × enterprise probability)
```

| Input | Symbol | Value |
|-------|--------|-------|
| Growth monthly price | | $9.99 |
| Growth annual price | | $99.99 |
| Take rate | | 5% |
| Avg annual GMV per monetized creator | | [FILL IN] |
| % creators on Growth | | [FILL IN] |
| % creators monetized | | [FILL IN] |

**Example (illustrative only—replace with real data):**

| Creator type | SaaS/yr | GMV share/yr | Total to Curio |
|--------------|---------|--------------|----------------|
| Free, no sales | $0 | $0 | $0 |
| Free, $2k GMV | $0 | $100 | $100 |
| Growth, $5k GMV | $100 | $250 | $350 |
| Growth, $20k GMV | $100 | $1,000 | $1,100 |

---

## Customer acquisition cost (CAC)

| Channel | Monthly spend | New creators | CAC |
|---------|---------------|--------------|-----|
| Organic | $0 | [FILL IN] | $0 |
| Partnerships | [FILL IN] | [FILL IN] | [FILL IN] |
| Paid | [FILL IN] | [FILL IN] | [FILL IN] |
| **Blended** | [FILL IN] | [FILL IN] | [FILL IN] |

**Payback period target:** [FILL IN: e.g., < 6 months on blended creator LTV]

---

## Contribution margin assumptions

| Cost item | Assumption | Notes |
|-----------|------------|-------|
| Stripe processing | ~2.9% + $0.30/txn | Passed to creator; not Curio COGS on GMV |
| Platform take | 5% of GMV | Curio revenue |
| Hosting (Heroku, Firebase, storage) | [FILL IN $/mo] | Scales with usage |
| Support | [FILL IN] | Growth live chat; Enterprise white-glove |
| Payment ops | [FILL IN] | Chargebacks, disputes |

### SaaS gross margin (Growth)

| Item | % of revenue |
|------|--------------|
| Gross margin target | [FILL IN: e.g., 80%+] |
| Infra per subscriber | [FILL IN] |

---

## LTV : CAC ratio

| Segment | LTV (12 mo) | CAC | LTV:CAC | Target |
|---------|-------------|-----|---------|--------|
| Monetized creator | [FILL IN] | [FILL IN] | [FILL IN] | > 3:1 |
| Growth subscriber | [FILL IN] | [FILL IN] | [FILL IN] | > 3:1 |
| Enterprise | [FILL IN] | [FILL IN] | [FILL IN] | > 5:1 |

---

## Scenario planning (36 months)

### Conservative

| Metric | Y1 | Y2 | Y3 |
|--------|----|----|-----|
| MRR | [FILL IN] | [FILL IN] | [FILL IN] |
| Annual GMV | [FILL IN] | [FILL IN] | [FILL IN] |
| Monetized hubs | [FILL IN] | [FILL IN] | [FILL IN] |
| Headcount | [FILL IN] | [FILL IN] | [FILL IN] |

### Base

| Metric | Y1 | Y2 | Y3 |
|--------|----|----|-----|
| MRR | [FILL IN] | [FILL IN] | [FILL IN] |
| Annual GMV | [FILL IN] | [FILL IN] | [FILL IN] |
| Monetized hubs | [FILL IN] | [FILL IN] | [FILL IN] |
| Headcount | [FILL IN] | [FILL IN] | [FILL IN] |

### Aggressive

| Metric | Y1 | Y2 | Y3 |
|--------|----|----|-----|
| MRR | [FILL IN] | [FILL IN] | [FILL IN] |
| Annual GMV | [FILL IN] | [FILL IN] | [FILL IN] |
| Monetized hubs | [FILL IN] | [FILL IN] | [FILL IN] |
| Headcount | [FILL IN] | [FILL IN] | [FILL IN] |

---

## Breakeven and scale triggers

| Milestone | Definition | Status |
|-----------|------------|--------|
| **GMV breakeven** | Take-rate revenue covers variable infra | [FILL IN] |
| **MRR breakeven** | SaaS covers fixed team burn | [FILL IN] |
| **Combined profitability** | Net revenue > total opex | [FILL IN] |
| **Scale trigger** | Hire growth / creator success | [FILL IN: e.g., $X MRR or $Y GMV/mo] |

**Monthly burn:** [FILL IN]

**Runway:** [FILL IN]

---

## Sensitivity analysis (questions)

1. If take rate drops from 5% → 3%, how much GMV is needed to match revenue? [FILL IN]
2. If Growth price increases 20%, what is churn impact? [FILL IN]
3. If top 5 creators leave, what % GMV is at risk? [FILL IN]

---

## Related docs

- [04 — Revenue model](./04-revenue-model.md)
- [05 — Growth strategy](./05-growth-strategy.md)
- [Monthly metrics template](./templates/monthly-metrics-review.md)
