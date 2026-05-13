import { useState, useEffect } from 'react'
import { ChevronDown, CheckCircle2, Phone } from 'lucide-react'
import FormularioLead from '../components/FormularioLead.jsx'
import {
  img_fachada, img_aerea, img_piscina, img_salao,
  img_playground, img_sala, img_quarto, img_privativa, img_fitness
} from '../assets/images.js'

const GALERIA = [
  { src: img_fachada,    label: 'Fachada / Portaria' },
  { src: img_aerea,      label: 'Vista aérea do complexo' },
  { src: img_piscina,    label: 'Piscinas adulto e infantil' },
  { src: img_salao,      label: 'Salão de festas gourmet' },
  { src: img_playground, label: 'Playground' },
  { src: img_fitness,    label: 'Espaço funcional' },
  { src: img_sala,       label: 'Sala e cozinha' },
  { src: img_quarto,     label: 'Quarto casal' },
  { src: img_privativa,  label: 'Área privativa' },
]

const FAQ = [
  { q: 'Preciso ter carteira assinada para usar o FGTS?', a: 'Sim, o FGTS é um benefício do trabalhador CLT. Mas se seu cônjuge ou companheiro for CLT, o FGTS dele também pode ser usado na compra.' },
  { q: 'Qual o saldo mínimo de FGTS para usar?', a: 'Não há um valor mínimo fixo, mas qualquer saldo ajuda a reduzir o financiamento. Mesmo R$ 5.000 já fazem diferença nas parcelas mensais.' },
  { q: 'Posso usar o FGTS mesmo sem dar entrada?', a: 'Sim! O FGTS pode ser usado como a própria entrada, sem precisar tirar nada do seu bolso. Combinado com o subsídio do governo, muita gente compra sem pagar nada a mais.' },
  { q: 'Perco o FGTS se usar para comprar o apê?', a: 'Sim, o saldo é transferido para abater o financiamento. Mas em vez de render 3% parado, ele vira um imóvel que valoriza e gera patrimônio real para você.' },
  { q: 'Tenho mais de uma conta de FGTS. Posso usar todas?', a: 'Sim! Você pode usar o saldo de todas as contas vinculadas ao seu CPF, inclusive de empregos anteriores.' },
]

export default function Page3() {
  const [faqAberta, setFaqAberta] = useState(null)
  const [lightbox, setLightbox]   = useState(null)

  useEffect(() => {
    const h = e => {
      if (lightbox === null) return
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox(i => (i + 1) % GALERIA.length)
      if (e.key === 'ArrowLeft')  setLightbox(i => (i - 1 + GALERIA.length) % GALERIA.length)
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [lightbox])

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="prog" style={{ width: '100%', boxShadow: '0 0 10px #22c55e' }} />

      {/* HERO */}
      <section className="bg-green-600 py-14 px-4 text-center">
        <p className="text-green-200 text-xs font-bold tracking-[.2em] uppercase mb-3">
          Passo 3 de 3 · Sua simulação gratuita
        </p>
        <h1 className="font-black text-3xl sm:text-4xl text-white leading-tight mb-4 max-w-2xl mx-auto"
          style={{ fontFamily: "'Syne', sans-serif" }}>
          Use seu FGTS para garantir<br/>
          <span className="text-green-200">seu apê no Parque Ilha Bela</span>
        </h1>
        <p className="text-white/75 text-base max-w-xl mx-auto mb-7">
          2 quartos · 41,85 m² · Lazer completo · Condomínio fechado<br/>
          <span className="text-white/50 text-sm">Av. Presidente Vargas, 447 – Parque Pecuária, Campos/RJ</span>
        </p>
        <a href="#formulario"
          className="inline-flex items-center gap-2 bg-white text-green-700 font-black text-lg px-8 py-4 rounded-full shadow-lg hover:bg-green-50 transition-all hover:scale-105"
          style={{ fontFamily: "'Syne', sans-serif" }}>
          <Phone size={18} /> SIMULAR MEU FGTS AGORA
        </a>
      </section>

      {/* VANTAGENS FGTS */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-green-600 uppercase tracking-widest text-center mb-6">
            Por que usar o FGTS agora é a decisão certa
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '💸', t: 'Sem tirar do bolso', d: 'O FGTS vai direto para a entrada. Você não precisa ter dinheiro guardado.' },
              { icon: '🎁', t: 'Mais subsídio do governo', d: 'Combine FGTS com até R$ 55.000 do MCMV. Duplo benefício.' },
              { icon: '📈', t: 'Patrimônio real', d: 'Em vez de 3% ao ano parado, seu dinheiro vira um imóvel que valoriza.' },
            ].map((c, i) => (
              <div key={i} className="bg-green-50 border border-green-100 rounded-xl p-5 text-center">
                <div className="text-3xl mb-3">{c.icon}</div>
                <p className="font-bold text-gray-900 text-base mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{c.t}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold text-green-600 uppercase tracking-widest text-center mb-2">Fotos reais</p>
          <h2 className="font-black text-2xl sm:text-3xl text-gray-900 text-center mb-7"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Conheça o Parque Ilha Bela
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {GALERIA.map((g, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] cursor-zoom-in relative group shadow-md"
                onClick={() => setLightbox(i)}>
                <img src={g.src} alt={g.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-[10px] font-medium">{g.label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">Imagens ilustrativas. Material liberado em 19/02/2026.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold text-green-600 uppercase tracking-widest text-center mb-2">Dúvidas sobre FGTS</p>
          <h2 className="font-black text-2xl text-gray-900 text-center mb-8"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Suas perguntas respondidas
          </h2>
          <div className="space-y-2">
            {FAQ.map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                <button
                  className="w-full flex justify-between items-center px-4 py-4 text-left font-bold text-gray-800 text-sm"
                  onClick={() => setFaqAberta(faqAberta === i ? null : i)}>
                  {f.q}
                  <ChevronDown size={17} className={`text-green-500 transition-transform shrink-0 ml-2 ${faqAberta === i ? 'rotate-180' : ''}`} />
                </button>
                {faqAberta === i && (
                  <div className="px-4 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section id="formulario" className="py-12 px-4 bg-green-600">
        <div className="max-w-xl mx-auto">
          <p className="text-green-200 text-xs font-bold uppercase tracking-widest text-center mb-2">Simulação gratuita</p>
          <h2 className="font-black text-2xl sm:text-3xl text-white text-center mb-2"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Descubra quanto do seu FGTS<br/>você pode usar agora
          </h2>
          <p className="text-white/70 text-center text-sm mb-7">
            Sem compromisso · Consultor Pedro responde em até 1h via WhatsApp
          </p>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
            <FormularioLead funil="parque-ilhabela-fgts" />
          </div>
          <p className="text-white/40 text-xs text-center mt-4">🔒 Seus dados estão seguros. Não fazemos spam.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white/50 text-xs text-center py-6 px-4">
        <p className="text-white font-bold text-sm mb-1">Parque Ilha Bela · Campos dos Goytacazes</p>
        <p>Consultor Pedro · Atendimento via WhatsApp</p>
        <p className="mt-2 text-white/30">Imagens ilustrativas. Sujeito à análise de crédito. Material destinado exclusivamente à divulgação do produto.</p>
      </footer>

      {/* WPP FLUTUANTE */}
      <a href="https://wa.me/5522998381805?text=Ol%C3%A1%20Pedro!%20Quero%20saber%20como%20usar%20meu%20FGTS%20para%20comprar%20no%20Parque%20Ilha%20Bela!"
        target="_blank" rel="noopener"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="fixed inset-0 bg-black/95 z-[500] flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-5 text-white text-4xl leading-none" onClick={() => setLightbox(null)}>×</button>
          <button className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-5xl px-3 opacity-60 hover:opacity-100"
            onClick={e => { e.stopPropagation(); setLightbox(i => (i - 1 + GALERIA.length) % GALERIA.length) }}>‹</button>
          <img src={GALERIA[lightbox].src} alt={GALERIA[lightbox].label}
            className="max-w-[92vw] max-h-[85vh] rounded-xl object-contain"
            onClick={e => e.stopPropagation()} />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-5xl px-3 opacity-60 hover:opacity-100"
            onClick={e => { e.stopPropagation(); setLightbox(i => (i + 1) % GALERIA.length) }}>›</button>
          <p className="absolute bottom-4 text-white/50 text-sm">{GALERIA[lightbox].label}</p>
        </div>
      )}
    </div>
  )
}
