const testimonials = [
    {
      id: 1,
      text: `I’ve had my fair share of unexplained / under-treated health issues including autoimmune symptoms and gut issues. I came to Superbloom because of the whole-person support and would value Superbloom’s support.`,
      name: "Amanda May",
      role: "Chronic health mysteries • exploratory treatment",
    },
    {
      id: 2,
      text: `As a woman of color recovering from the allopathic medical world with multiple miscarriages, low ferritin, thyroid issues and severe exhaustion, I need my community and I just found more than one.`,
      name: "Paula S. May",
      role: "Burnout recovery • hormone support",
    },
    {
      id: 3,
      text: `I made a Superbloom account to check out the platform and was surprised by the honest conversations and advice because we already deal with such chaos.`,
      name: "Emma Alya",
      role: "Connected with the program and mental health care",
    },
  ];
  
  function LogoMark() {
    return (
      <div className="flex items-center justify-center gap-1">
        <span className="h-4 w-4 rounded-full border border-white/90" />
        <span className="-ml-2 h-4 w-4 rounded-full border border-white/90" />
      </div>
    );
  }
  
  function SmallLogoMark() {
    return (
      <div className="flex items-center justify-center gap-1">
        <span className="h-3 w-3 rounded-full border border-[#4b1f3b]" />
        <span className="-ml-2 h-3 w-3 rounded-full border border-[#4b1f3b]" />
      </div>
    );
  }
  
  export default function Footer() {
    return (
      <footer className="w-full overflow-hidden">
        {/* TESTIMONIALS */}
        <section className="bg-[#ede7d8] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-[28px] font-light tracking-wide text-[#1e3d39] md:text-[34px]">
              Testimonials
            </h2>
  
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((item, index) => (
                <div key={item.id} className="relative mx-auto w-full max-w-[290px]">
                  {/* back stacked cards */}
                  {index === 1 && (
                    <>
                      <div className="absolute left-5 top-5 h-full w-full bg-[#9bb39f]" />
                      <div className="absolute left-10 top-10 h-full w-full bg-[#6f8b68]" />
                    </>
                  )}
  
                  {index === 2 && (
                    <>
                      <div className="absolute left-4 top-4 h-full w-full bg-[#204f63]" />
                      <div className="absolute left-8 top-8 h-full w-full bg-[#4a86b7]" />
                    </>
                  )}
  
                  <div className="relative z-10 min-h-[260px] bg-[#6f958c] p-6 text-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    <p className="mb-8 text-[12px] leading-[1.8] md:text-[13px]">
                      {item.text}
                    </p>
  
                    <div className="mt-auto">
                      <h4 className="text-[13px] font-medium">{item.name}</h4>
                      <p className="mt-1 text-[10px] leading-4 text-white/80">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* MAIN CTA FOOTER */}
        <section className="bg-[#5b2647] px-6 py-20 text-center text-white md:px-10">
          <div className="mx-auto max-w-3xl">
            <LogoMark />
  
            <p className="mx-auto mt-8 max-w-2xl text-[23px] font-light leading-[1.55] md:text-[33px]">
              At Superbloom, we know that none of our members share the same
              health journey. No two stories are the same, and no two bodies are
              either. That’s why we believe in building a platform that empowers
              you to take control of your mental health to feel your best self –
              today and every day.
            </p>
  
            <button className="mt-10 rounded-full bg-[#f3f0e8] px-7 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#5b2647] transition hover:scale-105">
              Go to our forum
            </button>
          </div>
        </section>
  
        {/* BOTTOM BAR */}
        <section className="bg-[#f5f5f1] px-6 py-10 text-[#23463f] md:px-10">
          <div className="mx-auto grid max-w-7xl items-start gap-8 md:grid-cols-3">
            {/* left */}
            <div className="text-center md:text-left">
              <p className="text-[13px] font-medium">@superbloom.health</p>
              <p className="mt-5 max-w-[260px] text-[10px] leading-4 text-[#23463f]/80">
                © super(bloom)® is a direct-to-consumer platform and virtual
                studio. Help is not a trip to the women’s emergency room.
              </p>
            </div>
  
            {/* center */}
            <div className="flex justify-center">
              <SmallLogoMark />
            </div>
  
            {/* right */}
            <div className="text-center md:text-right">
              <div className="space-y-1 text-[10px]">
                <p>Terms & Conditions | Privacy Policy</p>
                <p className="mt-4">
                  1200 South Pinebrook Road, #401 PMB 8955
                </p>
                <p>Center Point Town, Utah 84098</p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
  }