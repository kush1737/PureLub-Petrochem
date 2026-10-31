# PureLub Petrochem – static demo site (Next.js)

## Run
    npm install
    npm run dev          # http://localhost:3000
    npm run build        # static site in ./out (deploy anywhere)
    npm run preview      # build + create single-file preview.html

## Edit content
All text, products, contact details: `lib/site.js` (items marked "placeholder" must be replaced).
Scroll animation (GSAP ScrollTrigger) and form logic: `lib/client.js`.
Layout: `app/page.js`. Styles: `app/globals.css`.

## Images
`public/img/*.jpg` are the eight photos split from the client's two collages (upscaled; caption bars removed; leadership image cropped to drop a mis-spelled sign). They look AI-generated: replace with real plant and team photos before launch, keeping the same file names.

## Hero background
Set in `lib/site.js` -> `hero.img.src` (file name in `public/img/`, without `.jpg`). Currently `exterior`; `fluid` (golden oil pour) also works well.

## Image quality
Low-resolution source photos were enhanced with an EDSR super-resolution model (OpenCV) and saved at 2000 px wide. Supply larger originals and drop them into `public/img/` (same names) for the sharpest result.

## Notes
- Scroll story (GSAP ScrollTrigger, all scrubbed and reversible): hero photo parallax, word-by-word statement, pinned formula-to-dispatch image wipes, and a vertical-to-horizontal capabilities track (desktop). Reduced-motion users get a normal stacked layout.
- The enquiry form is a DEMO: it validates but sends nothing. Connect it to an email service/API in `lib/client.js` (marked DEMO).
- All copy is draft text for the demo. No real certifications, figures or addresses are included.
