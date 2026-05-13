import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { img_fachada } from '../assets/images.js'

export default function Page1({ onNext }) {
  const [saldo, setSaldo] = useState('')
  const [rendimento, setRendimento] = useState(null)

  useEffect(() => {
    window.history.pushState(null, '', window.location.href)
    const h = () => { window.history.pushState(null, '', window.location.href); onNext() }
    window.addEventListener('popstate', h)
    return () => window.removeEventListener('popstate', h)
  }, [onNext])

  function calcular() {
    const v = parseFloat(saldo.replace(/\D/g, '')) || 0
    // FGTS rende ~3% ao ano. Inflação ~4,8%. Perda real ~1,8% ao ano
    const rendFGTS = v * 0.03
    const inflacao = v * 0.048
    const perda = inflacao - rendFGTS
    setRendimento({ rendFGTS, inflacao, perda: Math.max(perda, 0) })
  }

  function formatBRL(n) {
    return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })
  }

  function maskMoney(v) {
    const num = v.replace(/\D/g, '')
    if (!num) return ''
    return 'R$ ' + (parseInt(num) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
  }

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Barra progresso */}
      <div className="prog" style={{ width: '33%' }} />

      {/* Fundo texturizado */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #22c55e 0%, transparent 50%), radial-gradient(circle at 80% 20%, #16a34a 0%, transparent 40%)' }} />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">

        {/* Tag */}
        <div className="fade1 mb-6">
          <span className="bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-bold tracking-[.15em] uppercase px-4 py-2 rounded-full">
            💰 Sobre o seu FGTS
          </span>
        </div>

        {/* Headline chocante */}
        <h1 className="fade2 font-syne font-black text-3xl sm:text-5xl text-center text-white leading-tight max-w-3xl mb-4"
          style={{ fontFamily: "'Syne', sans-serif" }}>
          Seu FGTS está parado.<br/>
          <span className="text-green-400">Perdendo dinheiro.</span><br/>
          <span className="text-gray-400 text-2xl sm:text-3xl font-bold">Todo. Mês.</span>
        </h1>

        <p className="fade3 text-gray-400 text-lg text-center max-w-xl mb-10 leading-relaxed">
          O FGTS rende apenas <strong className="text-white">3% ao ano</strong>. A inflação come <strong className="text-white">4,8%</strong>.
          Enquanto você espera, seu dinheiro encolhe.
        </p>

        {/* Calculadora de perda */}
        <div className="fade3 bg-gray-900 border border-gray-700 rounded-2xl p-6 sm:p-8 w-full max-w-md mb-8">
          <p className="text-gray-300 text-sm font-semibold mb-3 uppercase tracking-wide">
            📊 Calcule sua perda anual
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Saldo do FGTS ex: R$ 15.000"
              value={saldo}
              onChange={e => setSaldo(maskMoney(e.target.value))}
              className="flex-1 bg-gray-800 border border-gray-600 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition-colors"
            />
            <button onClick={calcular}
              className="bg-green-500 hover:bg-green-400 text-black font-bold px-4 rounded-lg transition-colors text-sm">
              Ver
            </button>
          </div>

          {rendimento && (
            <div className="mt-4 space-y-2 countup">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Rendimento FGTS (ano)</span>
                <span className="text-green-400 font-bold">{formatBRL(rendimento.rendFGTS)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Inflação (ano)</span>
                <span className="text-red-400 font-bold">−{formatBRL(rendimento.inflacao)}</span>
              </div>
              <div className="border-t border-gray-700 pt-2 flex justify-between">
                <span className="text-white font-bold">Perda real por ano</span>
                <span className="text-red-500 font-black text-lg">−{formatBRL(rendimento.perda)}</span>
              </div>
              <p className="text-green-400 text-xs mt-2 text-center font-medium">
                👇 Mas e se você usasse esse dinheiro AGORA?
              </p>
            </div>
          )}
        </div>

        {/* Foto */}
        <div className="fade3 w-full max-w-md mb-8 rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
          <img src={img_fachada} alt="Parque Ilha Bela" className="w-full object-cover aspect-video" />
          <div className="bg-gray-900 px-4 py-2 text-xs text-gray-400 text-center">
            Parque Ilha Bela · Campos dos Goytacazes/RJ
          </div>
        </div>

        {/* Urgência */}
        <div className="fade4 mb-6">
          <p className="text-amber-400 text-sm font-bold text-center pulse">
            ⚠️ A cada mês que passa, você perde mais. Descubra como usar esse dinheiro agora.
          </p>
        </div>

        {/* CTA */}
        <button onClick={onNext}
          className="fade4 group flex items-center gap-3 bg-green-500 hover:bg-green-400 text-black font-black text-lg sm:text-xl px-10 py-5 rounded-full shadow-[0_0_40px_rgba(34,197,94,.4)] transition-all hover:scale-105 active:scale-95"
          style={{ fontFamily: "'Syne', sans-serif" }}>
          DESCOBRIR COMO USAR MEU FGTS
          <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="mt-5 text-gray-600 text-xs tracking-widest uppercase">
          Passo 1 de 3 · Gratuito e sem compromisso
        </p>
      </div>
    </div>
  )
}
