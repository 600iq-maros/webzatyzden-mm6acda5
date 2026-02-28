"use client"

import { useState, useEffect, useCallback } from "react"

const TESTIMONIALS = [{"name":"Jane Doe","role":"CEO, TechCorp","text":"Absolutely fantastic service! Highly recommended.","rating":5,"avatar":""},{"name":"John Smith","role":"Founder, StartupXYZ","text":"They exceeded our expectations in every way.","rating":5,"avatar":""},{"name":"Emily Johnson","role":"Marketing Director","text":"Professional, responsive, and delivered on time.","rating":4,"avatar":""}];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000); return () => clearInterval(timer);
  }, [next]);

  const stars = (count: number) => Array.from({ length: 5 }, (_, i) => (
    <svg key={i} className={`w-5 h-5 ${i < count ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
  ));

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Čo hovoria naši klienti</h2>
        <p className="text-gray-600 mb-10">Dôverujú nám firmy po celom svete.</p>
        <div className="relative overflow-hidden">
          {TESTIMONIALS.map((t: { name: string; role: string; text: string; rating: number; avatar: string }, i: number) => (
            <div key={i} className={`transition-all duration-500 ${i === current ? "block opacity-100" : "hidden opacity-0"}`}>
              <div className="flex justify-center mb-3">{stars(t.rating)}</div>
              <blockquote className="text-xl italic text-gray-700 mb-6">&ldquo;{t.text}&rdquo;</blockquote>
              <div className="flex items-center justify-center gap-3">
                {t.avatar ? <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" /> : <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">{t.name.charAt(0)}</div>}
                <div className="text-left">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 mt-8">
          <button onClick={prev} className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Previous">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="flex gap-2">{TESTIMONIALS.map((_: unknown, i: number) => <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition ${i === current ? "bg-blue-600" : "bg-gray-300"}`} />)}</div>
          <button onClick={next} className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Next">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
