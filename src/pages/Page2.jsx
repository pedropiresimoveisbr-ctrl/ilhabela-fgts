import { ArrowRight } from 'lucide-react'
import { img_piscina, img_sala, img_quarto } from '../assets/images.js'

export default function Page2({ onNext }) {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="prog" style={{ width: '66%' }} />

      {/* Faixa verde topo */}
      <div className="bg-green-600 text-white text-center text-sm py-2.5 px-4 font-medium">
        🔓 Revelação exclusiva — como seu FGTS te dá um apartamento
      </div>

      <div className="max-w-2xl mx-auto px-4 py-14 flex flex-col items-center">

        {/* Headline */}
        <div className="fade1 bg-green-50 border-l-4 border-green-500 rounded-r-2xl p-6 mb-8 w-full">
          <h1 className="font-black text-2xl sm:text-3xl text-gray-900 leading-tight mb-2"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Seu FGTS pode ser a <span className="text-green-600">entrada do seu apartamento.</span>
          </h1>
          <p className="text-gray-600 text-base">
            Em vez de perder valor parado no banco, ele vira o começo do seu patrimônio.
          </p>
        </div>

        {/* Como funciona — passo a passo visual */}
        <div className="fade2 w-full mb-10">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5 text-center">Como funciona na prática</p>
          <div className="space-y-4">
            {[
              {
                n: '01',
                titulo: 'Você usa o FGTS como entrada',
                desc: 'O saldo do seu FGTS é transferido diretamente para o financiamento — sem precisar tirar nada do bolso.',
                cor: 'bg-green-500',
              },
              {
                n: '02',
                titulo: 'O governo ainda te dá subsídio',
                desc: 'Pelo Minha Casa Minha Vida, você pode receber até R$ 55.000 de desconto — que vem do governo, não do seu bolso.',
                cor: 'bg-green-600',
              },
              {
                n: '03',
                titulo: 'Parcela menor que um aluguel',
                desc: 'Combinando FGTS + subsídio, sua parcela mensal pode ser menor do que você paga de aluguel hoje.',
                cor: 'bg-green-700',
              },
              {
                n: '04',
                titulo: 'Você para de alugar e começa a ter',
                desc: 'Cada parcela que você paga é do SEU imóvel. Patrimônio real, que cresce todo mês.',
                cor: 'bg-green-800',
              },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className={`${s.cor} text-white font-black text-sm w-10 h-10 rounded-full flex items-center justify-center shrink-0`}>
                  {s.n}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base" style={{ fontFamily: "'Syne', sans-serif" }}>{s.titulo}</p>
                  <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fotos do produto */}
        <div className="fade2 w-full mb-10">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 text-center">O apartamento que pode ser seu</p>
          <div className="grid grid-cols-3 gap-2">
            {[img_piscina, img_sala, img_quarto].map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-square shadow-md">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Parque Ilha Bela · 2 quartos · 41,85 m² · Campos/RJ</p>
        </div>

        {/* Simulação rápida */}
        <div className="fade3 bg-gray-900 text-white rounded-2xl p-6 w-full mb-8">
          <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-4">💡 Simulação ilustrativa</p>
          <div className="space-y-3">
            {[
              { label: 'Valor do apartamento',   valor: 'R$ 180.000', cor: 'text-white' },
              { label: '(-) Subsídio MCMV',      valor: '− R$ 55.000', cor: 'text-green-400' },
              { label: '(-) FGTS como entrada',  valor: '− R$ 15.000', cor: 'text-green-400' },
              { label: 'Valor a financiar',       valor: 'R$ 110.000', cor: 'text-white' },
              { label: 'Parcela estimada',        valor: '≈ R$ 650/mês', cor: 'text-yellow-400' },
            ].map((r, i) => (
              <div key={i} className={`flex justify-between text-sm ${i === 4 ? 'border-t border-gray-700 pt-3 text-base font-bold' : ''}`}>
                <span className="text-gray-400">{r.label}</span>
                <span className={r.cor}>{r.valor}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-4 text-center">* Valores ilustrativos. Simulação real gratuita com o consultor.</p>
        </div>

        {/* Pergunta de decisão */}
        <p className="fade3 text-xl sm:text-2xl font-black text-gray-900 text-center mb-8 leading-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}>
          Quer descobrir quanto do seu<br/>
          <span className="text-green-600">FGTS você pode usar agora?</span>
        </p>

        {/* Botões */}
        <div className="fade4 flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <button onClick={onNext}
            className="flex-1 text-gray-400 border-2 border-gray-200 hover:border-green-500 hover:text-green-600 font-bold py-4 rounded-full transition-all text-sm">
            Quero entender melhor
          </button>
          <button onClick={onNext}
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-black font-black py-4 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            SIMULAR MEU FGTS
            <ArrowRight size={18} />
          </button>
        </div>

        <p className="mt-6 text-gray-400 text-xs tracking-widest uppercase">
          Passo 2 de 3 · Simulação gratuita
        </p>
      </div>
    </div>
  )
}
