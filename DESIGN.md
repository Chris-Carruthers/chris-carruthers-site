---
name: Chris Carruthers
description: An executive record filed as lettered exhibits, finished in the materials of a restored racing car.
colors:
  racing-green: "#2a3b26"
  racing-green-raised: "#374b31"
  on-green: "#eee8d9"
  on-green-dim: "#c2c8b0"
  butterscotch: "#e3ab60"
  butterscotch-bright: "#efc17f"
  cognac: "#8e4a20"
  saddle-leather: "#3a2215"
  on-leather: "#f3e6d2"
  on-leather-dim: "#d6bd9f"
  dial-black: "#111311"
  dial-ink: "#e9e6df"
  dial-orange: "#f08c3e"
  needle-orange: "#ff5f1f"
  brushed-aluminium: "#c6c9c6"
  paper: "#f2efe8"
  ink: "#1c1b18"
  ink-soft: "#554e44"
  rule: "#cdc5b6"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 4.6rem)"
    fontWeight: 620
    lineHeight: 0.98
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 108"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 620
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 104"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  exhibit:
    fontFamily: "Barlow Semi Condensed, Archivo, sans-serif"
    fontSize: "clamp(3.5rem, 8vw, 6.5rem)"
    fontWeight: 600
    lineHeight: 0.8
  label:
    fontFamily: "Barlow Semi Condensed, Archivo, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    letterSpacing: "0.14em"
  source:
    fontFamily: "Barlow Semi Condensed, Archivo, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  hairline: "2px"
  plate: "4px"
  standard: "6px"
  instrument: "18px"
spacing:
  space-1: "0.5rem"
  space-2: "1rem"
  space-3: "1.5rem"
  space-4: "2.5rem"
  space-5: "4rem"
  space-6: "clamp(4.5rem, 9vw, 8rem)"
  gutter: "clamp(16px, 4vw, 56px)"
components:
  button-primary:
    backgroundColor: "{colors.butterscotch}"
    textColor: "{colors.saddle-leather}"
    rounded: "{rounded.standard}"
    padding: "0.8rem 1.35rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.butterscotch-bright}"
  button-quiet:
    textColor: "{colors.on-green}"
    rounded: "{rounded.standard}"
    padding: "0.8rem 1.35rem"
    height: "48px"
  button-quiet-hover:
    textColor: "{colors.butterscotch-bright}"
  nav-link:
    textColor: "{colors.on-green-dim}"
    padding: "0.25rem 0"
  nav-link-hover:
    textColor: "{colors.on-green}"
  exhibit-letter:
    textColor: "{colors.cognac}"
    typography: "{typography.exhibit}"
  exhibit-letter-on-dark:
    textColor: "{colors.butterscotch}"
    typography: "{typography.exhibit}"
  source-line:
    textColor: "{colors.ink-soft}"
    typography: "{typography.source}"
  instrument-cluster:
    backgroundColor: "{colors.dial-black}"
    textColor: "{colors.dial-ink}"
    rounded: "{rounded.instrument}"
    padding: "clamp(1.5rem, 4vw, 3rem)"
  schematic-shell:
    backgroundColor: "{colors.butterscotch}"
    textColor: "{colors.saddle-leather}"
    rounded: "{rounded.plate}"
    padding: "0.9rem 1rem"
---

# Design System: Chris Carruthers

## Overview

**Creative North Star: "The Exhibit File, Bound in a Restored Car"**

An executive record read the way an annual report's exhibits are read: each chapter is a lettered exhibit (A to E) hung in a wide margin gutter, claims sit in ruled ledgers and tables, and every chapter closes on a source line naming where the evidence came from. That filing discipline lives inside the frame an executive-site visitor expects: portrait, headline, chapters, contact.

The finish is the cabin of a Singer-reimagined 911, rendered as materials only. Deep warm racing-green paint drenches the hero, the platform chapter and the close. Cognac basketweave leather with butterscotch contrast stitching carries the teams chapter. Butterscotch, the colour of the striped gear knob, is the ink of evidence on dark grounds. Black instrument dials with orange numerals and an orange needle hold the outcome measures. Brushed aluminium appears as hairlines, dial bezels and the needle hub. Light editorial paper carries the reading-heavy exhibits between the dark panels.

There is no car imagery, no silhouette, no marque, no badge: the materials are the whole reference. Density is that of a well-set report: generous chapter spacing, tight hairline-ruled rows inside.

**Key Characteristics:**
- Surfaces alternate as whole chapters: paint, paper, paint, paper, leather, paper, paint.
- Lettered exhibits in a margin gutter; never a label stacked above a heading.
- Hairline rules do the structural work; boxes are rare.
- Butterscotch marks the evidence (figures, ledger labels, primary action) on dark.
- One instrument cluster carries before-and-after targets as live dials.
- Every chapter ends with a source line.

## Colors

A restrained, fully saturated material palette: one painted green, one leather family, one butterscotch accent, one instrument black with its orange, and warm paper.

### Primary
- **Warm Deep Racing Green** (racing-green): the paint. Full-bleed ground of the hero, header, platform chapter and close. User-confirmed as this warm deep green, not a further olive push.
- **Raised Paint** (racing-green-raised): the one lift on paint, used for the product plates in the platform schematic.

### Secondary
- **Gear-Knob Butterscotch** (butterscotch): the evidence ink on dark grounds. Hero figures, ledger labels, exhibit letters on paint and leather, the filled primary button, the schematic's shell bar, spine top-rules, the leather stitching, the focus ring and text selection.
- **Bright Butterscotch** (butterscotch-bright): hover state for butterscotch elements only.

### Tertiary
- **Cognac** (cognac): the accent on paper. Exhibit letters, years, figures in bold, and text links on light grounds; also the caret and scrollbar thumb.
- **Saddle Leather** (saddle-leather): the leather ground under the basketweave tile, the footer, the spine tiles, and the text colour on butterscotch fills.
- **Instrument Black** (dial-black) with **Dial Ink** (dial-ink): the cluster panel and its text.
- **Dial Orange** (dial-orange): dial ticks, numerals, the log line's date and the target figure under each dial.
- **Needle Orange** (needle-orange): the needle alone.
- **Brushed Aluminium** (brushed-aluminium): bezels, the needle hub, schematic wires, and translucent hairlines on paint.

### Neutral
- **Report Paper** (paper): the light chapter ground and page background.
- **Ink** (ink): body text on paper and the heavy top rule of tables and the record.
- **Soft Ink** (ink-soft): secondary text, captions, sub-heads and source lines on paper.
- **Hairline** (rule): row and section rules on paper. On dark grounds rules are the ground's own text colour at 0.18 to 0.35 alpha.
- **On Green / On Green Dim** and **On Leather / On Leather Dim**: primary and secondary text on each dark material.

### Named Rules
**The Knob Rule.** Butterscotch is reserved for evidence and the primary action on dark grounds; on paper the same job passes to cognac. Butterscotch text never sits on paper.

**The Needle Rule.** Needle orange marks the needle and nothing else; dial orange is for scales and dated readouts inside the instrument panel only.

**The Materials-Only Rule.** The car is present as paint, leather, stitching, knob, dials and aluminium. No car photographs, silhouettes, marques or badges, on any surface.

## Typography

**Display Font:** Archivo, expanded via its width axis (with Helvetica Neue, Arial)
**Body Font:** Archivo at normal width
**Label/Mono Font:** Barlow Semi Condensed (500, 600), the gauge face

**Character:** A wide grotesk set slightly expanded reads as engineered and confident without shouting; the condensed gauge face supplies the instrument-panel voice for numerals, labels and sources.

### Hierarchy
- **Display** (620, clamp 2.6 to 4.6rem, 0.98, width 112%): the hero headline and, at width 112% and weight 600, the closing call. Max 16ch.
- **Headline** (600, clamp 2 to 3.6rem, 1.02, width 108%): chapter titles beside the exhibit letter. Max 20ch.
- **Title** (620, 1.5rem, 1.15, width 104%): product and section titles within a chapter.
- **Pull quote** (480, clamp 1.5 to 2.4rem, 1.3, width 106%): the platform thesis and endorsements, hung with butterscotch curly quotes.
- **Body** (400, 1.0625rem, 1.6): running text, held to 54 to 62ch; open-source and wide rows to 75ch.
- **Exhibit** (gauge face 600, clamp 3.5 to 6.5rem, 0.8): the lettered exhibit marker in the margin gutter.
- **Label** (gauge face 600, 0.9 to 0.95rem, 0.12 to 0.14em, uppercase): ledger row labels, table column heads, figure captions, the schematic shell.
- **Source** (gauge face, 0.85rem, 0.02em): the closing source line and the platform log line.

### Named Rules
**The Gauge Face Rule.** Numerals that carry evidence (figures, years, dial scales, dates) are set in the gauge face with tabular figures. Archivo carries words, Barlow carries measures.

**The Gutter Not Kicker Rule.** Chapter identity is the exhibit letter in the left gutter, set beside the headline. Nothing small and tracked sits above a heading.

## Layout

A centred 1240px column with a fluid gutter (clamp 16 to 56px). Chapters are full-bleed bands with generous vertical padding (space-6) and change material as a whole; no card sits on a contrasting band.

Each chapter opens with a two-column head: a fixed exhibit gutter (clamp 3.5 to 7.5rem) holding the letter, then the headline and a sub-line. Inside, work rows use a 5:7 split that flips order between rows; the hero uses 7:4 (copy, then portrait plate); the teams chapter 7:5. Rows are separated by hairline top rules, not containers. Ledgers use a 9.5rem label column; the record uses a four-column ruled list (years, role, organisation, note).

Spacing steps (space-1 to space-6) run 0.5, 1, 1.5, 2.5, 4rem and a fluid section step. Every chapter ends with the source line at space-4 above it.

Responsive: at 1000px the record collapses to two columns and the spine row to three. At 860px all splits become one column, the nav scrolls horizontally under the name, the portrait shrinks to an 84px square above the headline, dials stack to a 300px column, and the timeline becomes a two-column grid per row. At 520px the exhibit letter moves above the headline row, ledger labels stack over their text, and buttons go full width.

## Elevation & Depth

Mostly flat: depth comes from the materials themselves (the woven leather tile, the dial's radial face) and from tonal change between chapters. Shadows are soft, long and low, used only on things that are objects in the world: photographs, screenshots and the instrument panel.

### Shadow Vocabulary
- **Plate drop on paper** (`box-shadow: 0 24px 48px -30px rgba(28, 27, 24, 0.45)`): product screenshots on paper.
- **Plate drop on paint** (`box-shadow: 0 28px 56px -30px rgba(0, 0, 0, 0.6)`): screenshots and the portrait on green.
- **Instrument panel** (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 40px 80px -40px rgba(0, 0, 0, 0.7)`): the cluster, with a faint top-light on its edge.

### Named Rules
**The Object Shadow Rule.** Only physical objects cast shadows: photographs, screenshots, the dial panel. Text blocks, rows and labels never do, and no shadow is hard-edged or offset.

## Shapes

Softly squared. Screenshots, buttons and the portrait use a 6px corner; schematic plates 4px; the instrument panel alone is rounder at 18px, like a binnacle. Dials are true circles with a brushed-aluminium gradient bezel. Rows and tables are open, defined by hairlines rather than boxes. The leather chapter carries a dashed butterscotch stitch line inset 12px from its top and bottom edges, like a seat panel. The portrait is matted with a 1px aluminium outline offset 6px.

## Components

### Buttons
Solid and tactile, like a good switch.
- **Shape:** gently squared (6px), minimum 48px tall.
- **Primary:** butterscotch fill with saddle-leather text, weight 620, optional 18px inline SVG brand mark.
- **Hover / Focus:** fill brightens to bright butterscotch over 0.2s; focus is a 3px butterscotch outline offset 3px.
- **Quiet:** transparent with a 1px on-green border at 0.55 alpha; hover turns border butterscotch and text bright butterscotch.

### Navigation
A sticky racing-green bar: the name left in expanded uppercase Archivo (0.08em tracking), chapter links right in on-green-dim at 0.9rem. Hover brightens the text and draws a butterscotch underline rule. On mobile the links wrap to a horizontally scrolling row.

### Ledger
A definition list ruled top and bottom in translucent on-green hairlines. Each row: a butterscotch uppercase gauge-face label in a 9.5rem column, then the claim led by a butterscotch gauge-face figure.

### Exhibit Chapter Head
The lettered exhibit (A to E) in the gauge face, cognac on paper and butterscotch on paint or leather, aria-hidden, standing in the left gutter beside the headline and its sub-line.

### Source Line
A gauge-face line under a hairline rule that closes every chapter: "Sources: ...". Soft ink on paper; the material's dim text colour on paint and leather.

### Ruled Table and Record
Tables and the career record are open: a 1px ink top rule, hairline row rules, gauge-face uppercase column heads, cognac gauge-face years in the first column.

### Instrument Dial (signature)
Black panel, three dials. Each dial: brushed-aluminium bezel, near-black face, orange ticks and numerals (gauge face, stroked dark for legibility), a butterscotch "today" mark outside the scale, an aluminium hub, and the orange needle that sweeps from today's value to the target over 1.8s on the expo-out easing when scrolled into view. With reduced motion the needle rests at the target. A dated log line in the gauge face closes the panel.

### Platform Schematic
Three ruled tiers: raised-paint product plates, an aluminium wire, a butterscotch shell bar, another wire, then saddle-leather spine tiles topped with a 3px butterscotch rule. Draws on in steps (fade and 8px rise, staggered) only when it starts below the fold; content is visible without script.

### Leather Panel
Saddle-leather ground under three layers: procedural hide grain (240px tile), a 0.55 dark wash for legibility, and the authored basketweave strap tile (28px). Contrast stitching runs as 2px dashed butterscotch at 0.55 alpha, inset 12px from the top and bottom edges.

## Do's and Don'ts

### Do:
- **Do** close every chapter with a gauge-face source line under a hairline rule.
- **Do** mark chapters with the lettered exhibit in the left gutter, cognac on paper and butterscotch on dark.
- **Do** switch material by whole chapter: racing green, report paper, or basketweave leather with butterscotch stitching.
- **Do** set evidence figures, years and dial scales in Barlow Semi Condensed with tabular numerals.
- **Do** use butterscotch for evidence and the primary action on dark grounds, cognac for the same role on paper.
- **Do** keep dials and the schematic fully legible with script off and with reduced motion on.

### Don't:
- **Don't** use car imagery, silhouettes, marques or badges; the reference is materials only.
- **Don't** put an eyebrow or kicker (small tracked text) above a heading; identity lives in the exhibit gutter.
- **Don't** use unicode glyphs as icons; icons are inline SVG.
- **Don't** push the paint toward olive; the green is the warm deep racing green.
- **Don't** set butterscotch text on paper, or use needle orange outside the needle.
- **Don't** box rows into cards; rows are hairline-ruled.
- **Don't** cast shadows from text, rows or labels, and never a hard offset shadow.
