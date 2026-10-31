import { site } from "../lib/site";
import Motion from "../components/Motion";

const img = (src) => `/img/${src}.jpg`;

export default function Home() {
  return (
    <>
      <a className="skip" href="#products">Skip to products</a>
      <header className="nav">
        <div className="wrap bar">
          <a className="logo" href="#top">{site.brand[0]} <span>{site.brand[1]}</span></a>
          <nav aria-label="Primary">
            <a href="#story">How it’s made</a>
            <a href="#products">Products</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#quality">Quality</a>
          </nav>
          <a className="btn sm" href="#contact">Get a quote</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-bg">
            <img src={img(site.hero.img.src)} alt={site.hero.img.alt} width="2000" height={site.hero.img.h} fetchPriority="high" />
          </div>
          <div className="hero-shade" />
          <div className="wrap hero-in">
            <h1>{site.hero.lines.map((l) => <span className="ln" key={l}><span>{l}</span></span>)}</h1>
            <div className="hero-copy">
              <p>{site.hero.text}</p>
              <div className="cta">
                <a className="btn" href="#contact">Get a quote</a>
                <a className="btn ghost" href="#story">See how it’s made</a>
              </div>
            </div>
          </div>
          <a className="cue" href="#statement" aria-label="Scroll down"><span /></a>
        </section>

        <section className="statement" id="statement">
          <div className="wrap">
            <p>{site.statement.split(" ").map((w, i) => <span className="w" key={i}>{w} </span>)}</p>
          </div>
        </section>


        <section className="band" aria-label={site.band.title}>
          <div className="px"><img src={img(site.band.src)} alt={site.band.alt} width="1376" height="768" loading="lazy" /></div>
          <div className="band-shade" />
          <div className="wrap band-in">
            <h2>{site.band.title}</h2>
            <p>{site.band.text}</p>
          </div>
        </section>

        <section className="story" id="story">
          <div className="wrap story-head"><h2>{site.storyTitle}</h2></div>
          <div className="stages">
            {site.stages.map((s) => (
              <article className="stage" key={s.k}>
                <img src={img(s.src)} alt={s.alt} width="2000" height={s.h} loading="lazy" />
                <div className="sc">
                  <p className="kick">{s.k}</p>
                  <h3>{s.t}</h3>
                  <p>{s.p}</p>
                </div>
              </article>
            ))}
            <ol className="rail" aria-hidden="true">
              {site.stages.map((s) => <li key={s.k}><i />{s.k}</li>)}
            </ol>
          </div>
        </section>


        <section className="plant" id="plant">
          <div className="wrap split">
            <div>
              <h2>{site.plant.title}</h2>
              <p className="lead">{site.plant.text}</p>
              <ul className="ticks">{site.plant.li.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="px frame"><img src={img(site.plant.src)} alt={site.plant.alt} width="1376" height="768" loading="lazy" /></div>
          </div>
        </section>

        <section className="products" id="products">
          <div className="wrap">
            <h2>Products</h2>
            <ul className="plist">
              {site.products.map(([n, d]) => (
                <li key={n}>
                  <h3>{n}</h3>
                  <p>{d}</p>
                  <a href="#contact" aria-label={`Enquire about ${n}`}>Enquire</a>
                </li>
              ))}
            </ul>
            <ul className="packs" aria-label="Pack types">
              <li className="pk">Supplied in</li>
              {site.packs.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </section>


        <section className="feature" id="def">
          <div className="wrap split rev">
            <div className="px frame"><img src={img(site.def.src)} alt={site.def.alt} width="1376" height="768" loading="lazy" /></div>
            <div>
              <p className="kick">Featured product</p>
              <h2>{site.def.title}</h2>
              <p className="lead">{site.def.text}</p>
              <dl className="spec">{site.def.spec.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
              <a className="btn" href="#contact">Enquire about BlueDEF</a>
            </div>
          </div>
        </section>

        <section className="fleet" id="fleet">
          <div className="px"><img src={img(site.fleet.src)} alt={site.fleet.alt} width="1376" height="768" loading="lazy" /></div>
          <div className="fleet-shade" />
          <div className="wrap fleet-in">
            <div>
              <p className="kick">Fleet services</p>
              <h2>{site.fleet.title}</h2>
              <p className="lead">{site.fleet.text}</p>
              <ul className="ticks">{site.fleet.li.map((x) => <li key={x}>{x}</li>)}</ul>
              <a className="btn" href="#contact">Talk to our fleet team</a>
            </div>
          </div>
        </section>

        <section className="caps" id="capabilities">
          <div className="caps-pin">
            <div className="wrap caps-head"><h2>{site.capsTitle}</h2></div>
            <div className="track">
              {site.caps.map((c) => (
                <article className="panel" key={c.t}>
                  <div className="pimg"><img src={img(c.src)} alt={c.alt} width="2000" height={c.h} loading="lazy" /></div>
                  <div className="ptxt">
                    <h3>{c.t}</h3>
                    <p>{c.p}</p>
                    <ul>{c.li.map((x) => <li key={x}>{x}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="industries" id="industries">
          <div className="wrap">
            <h2>Where PureLub works.</h2>
            <ul className="igrid">{site.industries.map(([n, d]) => <li key={n}><h3>{n}</h3><p>{d}</p></li>)}</ul>
          </div>
        </section>

        <section className="docs" id="docs">
          <div className="wrap split">
            <div>
              <h2>{site.docs.title}</h2>
              <p className="lead">{site.docs.text}</p>
              <p className="hse"><b>Safety and environment.</b> {site.docs.hse}</p>
            </div>
            <ul className="dlist">
              {site.docs.list.map((d) => <li key={d}><span>{d}</span><a href="#contact" aria-label={`Request ${d}`}>Request</a></li>)}
            </ul>
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="wrap faq-in">
            <h2>Common questions.</h2>
            <div>
              {site.faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
            </div>
          </div>
        </section>

        <section className="quality" id="quality">
          <div className="wrap quality-in">
            <div>
              <h2>{site.qualityTitle}</h2>
              <p className="lead">{site.qualityText}</p>
            </div>
            <ul className="slots">
              {site.certs.map((c) => <li key={c}><span>{c}</span><small>To be added</small></li>)}
            </ul>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap contact-in">
            <div>
              <h2>Tell us what you need.</h2>
              <p className="lead">Share the product and the quantity. We’ll reply with availability and pricing.</p>
              <address>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
                <span>{site.address}</span>
                <span>{site.hours}</span>
              </address>
            </div>
            <form id="enquiry" noValidate>
              <label>Your name<input name="name" autoComplete="name" required /></label>
              <label>Email or phone<input name="contact" autoComplete="email" required /></label>
              <label>Product
                <select name="product" defaultValue="">
                  <option value="" disabled>Choose a product</option>
                  {site.products.map(([n]) => <option key={n}>{n}</option>)}
                </select>
              </label>
              <label>Quantity and notes<textarea name="message" rows="3" /></label>
              <button className="btn" type="submit">Send enquiry</button>
              <p id="form-status" role="status" aria-live="polite" />
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Product information is general. Check each product’s data sheet before use.</span>
        </div>
      </footer>
      <Motion />
    </>
  );
}
