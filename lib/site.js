// ALL client content lives here. Items marked "placeholder" must be replaced with verified details.
export const site = {
  name: "PureLub Petrochem",
  brand: ["PureLub", "Petrochem"],
  email: "info@yourdomain.com", // placeholder
  phone: "+91 00000 00000", // placeholder
  address: "Plant and office address to be provided", // placeholder
  hours: "Mon–Sat, 9:30 am – 6:30 pm", // placeholder
  hero: {
    lines: ["Lubricants made", "with precision,", "delivered with care."],
    text: "PureLub Petrochem supplies engine oils, industrial lubricants and diesel exhaust fluid to workshops, fleets and distributors.",
    img: { src: "exterior", h: 1090, alt: "PureLub plant with storage silos, process tower and loading bays" }, // swap the file name here to change the hero background
  },
  statement:
    "Every drum, bottle and bulk delivery carries one promise: the oil does its job, every time the engine turns over.",
  storyTitle: "From formula to dispatch",
  stages: [
    { k: "Formulate", t: "Blended to a specification.", p: "Base oils and additives are formulated and checked against viscosity and thermal-stability targets before a grade is approved.", src: "rnd", h: 958, alt: "Engineer pipetting a sample next to a formulation test rig" },
    { k: "Test", t: "Proven in the laboratory.", p: "Samples are tested on laboratory instruments, and a batch is released to filling only when it meets its specification.", src: "lab", h: 1072, alt: "Technician in a lab coat testing a fluid sample on a viscometer" },
    { k: "Fill", t: "Filled the same way, every time.", p: "Automated filling heads dose each bottle consistently before it is capped and labelled.", src: "filling", h: 1074, alt: "Filling heads dispensing oil into bottles on a conveyor" },
    { k: "Ship", t: "Stocked and dispatched.", p: "Drums and packs are staged and dispatched to workshops, depots and distributors on agreed schedules.", src: "drums", h: 1076, alt: "Rows of PureLub drums in a warehouse" },
  ],
  products: [
    ["Engine oils", "Grades for petrol, diesel and commercial engines, from everyday cars to heavy trucks."],
    ["Gear and transmission oils", "Protection for gearboxes, differentials and drivelines under load."],
    ["Hydraulic and industrial oils", "Stable fluids for presses, pumps, compressors and plant machinery."],
    ["Greases", "Multi-purpose and heavy-duty greases for bearings, chassis and equipment."],
    ["Diesel exhaust fluid (DEF)", "High-purity fluid for modern SCR diesel vehicles."],
  ],
  packs: ["Bottles", "Buckets", "Drums", "Bulk supply"], // placeholder: confirm pack sizes
  capsTitle: "What stands behind the label.",
  caps: [
    { t: "Engineering and production", p: "Controlled blending and automated filling keep every pack consistent, and batch records keep every pack traceable.", li: ["Controlled blending", "Automated filling", "Batch traceability"], src: "engineering", h: 958, alt: "Robotic arm and filling heads on a bottling line" },
    { t: "Precision blending systems", p: "Metered additive dosing and stainless steel process lines keep every batch true to its recipe.", li: ["Metered additive dosing", "Stainless steel process lines", "Recipe-controlled batches"], src: "pipes", h: 1076, alt: "Stainless steel process piping with valves and pressure gauges" },
    { t: "Laboratory testing", p: "Each grade is checked on the parameters buyers ask about before it is released to filling.", li: ["Kinematic viscosity and viscosity index", "Flash point and pour point", "Base number and cleanliness"], src: "lab", h: 1072, alt: "Technician testing a fluid sample on a laboratory viscometer" },
  ],
  qualityTitle: "Standards you can ask to see.",
  qualityText: "Quality is documented, not just promised. Certificates and test reports will be listed here so buyers can check them.",
  certs: ["Quality management certificate", "Product test report", "Plant licence"], // placeholders
  band: { title: "Engineered to flow, built to last.", text: "Three things decide a lubricant’s worth: how it flows, how it holds up under heat, and how clean it stays.", src: "fluid", alt: "Golden lubricant oil pouring into an engine" },
  plant: {
    title: "Blending and packaging, done in-house.",
    text: "Stainless steel blending vessels, automated drum filling and organised storage keep every batch consistent from tank to pallet.",
    li: ["Controlled blending vessels", "Automated drum and pack filling", "Segregated storage and dispatch"],
    src: "plant", alt: "Blending vessels, a robotic arm and drum conveyor inside the PureLub plant",
  },
  def: {
    title: "BlueDEF AUS-32",
    text: "Diesel exhaust fluid for SCR diesel vehicles, supplied in 20-litre cans for workshops and 1000-litre IBCs for fleets and depots.",
    spec: [
      ["Product", "BlueDEF AUS-32 diesel exhaust fluid"],
      ["Composition", "32.5% urea solution in demineralised water (AUS 32)"],
      ["Packs", "20 L can, 1000 L IBC"],
      ["Standards", "ISO 22241 / BS-VI: to be confirmed by the client"],
    ],
    src: "def", alt: "PureLub BlueDEF AUS-32 in a 20-litre can and a 1000-litre IBC",
  },
  fleet: {
    title: "Supply that meets the fleet where it works.",
    text: "Fuel-stop style dispensing for DEF and lubricants keeps trucks moving and cuts time off the road.",
    li: ["On-site DEF and lubricant dispensing", "Scheduled lubricant supply", "Bulk delivery to depots"],
    src: "dispenser", alt: "PureLub SmartDispense DEF and lubricants unit at a truck refuelling terminal",
  },
  industries: [
    ["Cars and commercial vehicles", "Engine oils and DEF for petrol and diesel vehicles."],
    ["Fleets and logistics", "Planned supply for trucks, buses and depots."],
    ["Construction and mining", "Hydraulic and gear oils for heavy equipment."],
    ["Manufacturing", "Industrial oils and greases for plant machinery."],
    ["Agriculture", "Lubricants for tractors, pumps and harvesters."],
    ["Power generation", "Oils for generator sets and standby power."],
  ],
  docs: {
    title: "Technical data you can rely on.",
    text: "Buyers need paperwork as much as product. Data and safety sheets are issued with every grade.",
    list: ["Technical data sheets", "Safety data sheets", "Product catalogue"],
    hse: "Products are handled, stored and delivered following their safety data sheets, and customers are encouraged to return used oil to authorised collectors.",
  },
    owner: {
    name: "Owner Name", // placeholder
    role: "Founder and CEO", // placeholder
    note: "Short message from the owner, shown under the name. Delete this line to hide it.", // placeholder
    photo: "", // e.g. "/img/owner.jpg" (file in public/img/). Empty shows initials.
    socials: [
      { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/your-profile" },
      { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/your-handle" },
      { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/your-page" },
      { label: "X", icon: "x", href: "https://x.com/your-handle" },
    ],
  },
  faq: [
    ["What is DEF (AdBlue)?", "Diesel exhaust fluid is a 32.5% urea solution in demineralised water, injected into the exhaust of SCR diesel engines to cut nitrogen oxide emissions. Vehicles with SCR need it to run correctly."],
    ["How do I choose an engine oil grade?", "Start with your vehicle manual for the viscosity grade and approval it asks for. Our team can match a PureLub grade to it."],
    ["Do you supply in bulk?", "Yes. Pack sizes, bulk and fleet supply are available on request, so tell us the product and monthly quantity."],
    ["Can I get a data sheet before I order?", "Yes. Ask for the technical or safety data sheet of any grade through the enquiry form."],
    ["How quickly can you deliver?", "Delivery times depend on product and location. Send an enquiry and we’ll confirm a schedule."],
  ],
};
