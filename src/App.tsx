/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from 'react';
import { 
  CheckCircle2, 
  MessageSquare, 
  Mail, 
  Unlock, 
  Infinity, 
  ChevronDown, 
  ShieldCheck, 
  ArrowRight,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

// Components
const Button = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <motion.a
    href="https://pay.lowify.com.br/checkout?product_id=FtFPv5"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`bg-brand-yellow text-brand-brown font-black py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider text-[18px] w-full max-w-md flex items-center justify-center text-center no-underline ${className}`}
  >
    {children}
  </motion.a>
);

const Section = ({ children, className = "", id = "" }: { children: ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 px-6 sm:px-12 ${className}`}>
    <div className="max-w-4xl mx-auto">
      {children}
    </div>
  </section>
);

const Card = ({ title, icon: Icon, children }: { title: string, icon: any, children: ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-brand-brown border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center space-y-4"
  >
    <div className="bg-brand-yellow/10 p-4 rounded-full">
      <Icon className="w-8 h-8 text-brand-yellow" />
    </div>
    <h4 className="font-bold text-lg text-white">{title}</h4>
    <p className="text-white/80 text-sm leading-relaxed">{children}</p>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  // Opening by default as per user request
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="font-bold text-lg pr-4 text-[#f3ab08]">{question}</span>
        <ChevronDown className={`w-6 h-6 text-brand-yellow transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/70 leading-relaxed italic">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-yellow selection:text-brand-brown">
      
      {/* 🟡 HERO SECTION */}
      <section className="relative pt-12 pb-24 px-6 overflow-hidden bg-brand-brown">
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[21px] font-black text-brand-white leading-tight uppercase text-balance"
          >
            Pães Sem Glúten, Sem Açúcar e Sem Lactose Que Ficam <span className="text-brand-yellow italic">Macios e Saborosos</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[17px] text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Aprenda receitas simples e incrivelmente saborosas para o seu dia a dia sem abrir mão da saúde.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 mb-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-yellow/20"
          >
            <img 
              loading="lazy"
              src="https://i.ibb.co/RpYdwnbT/portrait-smiling-young-woman-holding-baked-croissant-cake-stand-compressed-1024x683.webp" 
              alt="Mulher sorridente com bolo" 
              className="w-full aspect-[16/10] object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto mb-12">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3 h-3 text-brand-yellow flex-shrink-0" />
              <span className="font-semibold text-[12px]">Receitas Testadas e Aprovadas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3 h-3 text-brand-yellow flex-shrink-0" />
              <span className="font-semibold text-[12px]">Sem Leite e Sem Açúcar Refinado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3 h-3 text-brand-yellow flex-shrink-0" />
              <span className="font-semibold text-[12px]">Ingredientes Simples e Acessíveis</span>
            </div>
          </div>

          <Button className="w-full max-w-lg text-[18px]">BAIXAR MINHA CÓPIA</Button>
        </div>
      </section>

      {/* 🟤 APRESENTAÇÃO - Updated to White Background */}
      <Section className="bg-brand-white text-brand-brown border-t border-brand-brown/10">
        <div className="text-center space-y-8">
          <h2 className="text-[20px] font-bold uppercase tracking-widest text-brand-brown/60 text-balance">Apresento o</h2>
          <h3 className="text-[22px] font-black text-brand-brown leading-none uppercase text-balance">Manual de receitas <br/> Pães Sem Glúten</h3>
          
          <div className="relative inline-block mt-8">
            <img 
              loading="lazy"
              src="https://i.ibb.co/4ZkSCq96/Chat-GPT-Image-25-de-abr-de-2026-23-29-20-1.webp" 
              alt="Manual" 
              className="rounded-2xl shadow-xl max-w-full sm:max-w-md mx-auto"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl text-brand-brown/90 font-medium">
              Você receberá <span className="text-brand-brown font-bold underline decoration-brand-yellow decoration-4">200 receitas exclusivas</span>, com fotos reais e passo a passo simples.
            </p>

            <div className="flex flex-col items-center gap-4 py-4 max-w-md mx-auto text-left">
              {[
                "Sem Glúten",
                "Sem Leite",
                "Sem Conservantes",
                "Açúcar: com ou sem,\nvocê escolhe.",
                "Ovos: com ou sem,\ntotalmente opcional."
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 w-full">
                  <CheckCircle2 className="w-[17px] h-[17px] text-brand-yellow flex-shrink-0 mt-1" />
                  <span className="text-[17px] font-bold text-brand-brown leading-tight uppercase whitespace-pre-line">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center pt-8">
              <Button>BAIXAR MINHA CÓPIA</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 🟤 AUTORIDADE */}
      <Section className="bg-brand-brown overflow-hidden">
        <div className="flex flex-col items-center text-center space-y-8 max-w-2xl mx-auto">
          <h2 className="text-[21px] font-black text-white uppercase leading-tight">sobre a autora, Chef Patrícia Mancini</h2>
          <div className="relative">
            <img 
              loading="lazy"
              src="https://i.ibb.co/tpBT4G5f/Design-sem-nome-11-z-Tm-Ngr-Q.webp" 
              alt="Chef Patrícia Mancini" 
              className="rounded-full shadow-2xl border-4 border-brand-yellow w-[220px] h-[220px] object-cover mx-auto"
            />
          </div>
          <p className="text-[13px] text-white/80 leading-relaxed text-balance max-w-xl mx-auto">
            A necessidade de adaptar receitas por saúde me levou a descobrir um novo mundo na cozinha. Com o tempo, transformar pães tradicionais em versões sem glúten, saborosas e acessíveis deixou de ser um desafio virou especialidade. Hoje, ajudo milhares de pessoas a comer bem, sem abrir mão do prazer.
          </p>
        </div>
      </Section>

      {/* ⚪ ENTREGA (ESTILO CARDS) */}
      <section className="bg-brand-white text-brand-brown py-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="uppercase font-bold tracking-[0.2em] text-sm text-brand-brown/60 mb-2">ENTREGA</p>
          <h2 className="text-[27px] font-black uppercase leading-none">Acesso imediato</h2>
          <p className="mt-4 text-[17px] font-medium opacity-80">Após a confirmação do pagamento, você recebe o acesso automaticamente:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto text-white">
          <Card title="WhatsApp" icon={MessageSquare}>
            Envio direto no WhatsApp para maior praticidade.
          </Card>
          <Card title="E-mail" icon={Mail}>
            Envio por e-mail para acesso em qualquer dispositivo.
          </Card>
          <Card title="Acesso" icon={Unlock}>
            Acesso imediato logo após a confirmação.
          </Card>
          <Card title="Vitalício" icon={Infinity}>
            O manual é seu para sempre, sem mensalidades.
          </Card>
        </div>

        <div className="mt-16 text-center space-y-8">
           <img 
            loading="lazy"
            src="https://i.ibb.co/d41gWd6C/c4363a91-11c5-4ec4-9fd7-06a549a3f44e.webp" 
            alt="Produtos" 
            className="rounded-3xl shadow-2xl max-w-full sm:max-w-2xl mx-auto border-4 border-brand-brown/10"
          />
          
          <div className="pt-4">
            <div className="flex justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-xl">⭐️</span>
              ))}
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-brown/60">
              de pessoas que já fizeram e aprovaram as receitas.
            </p>
          </div>
        </div>
      </section>

      {/* 🟤 FAQ */}
      <Section className="bg-brand-brown py-24">
        <h2 className="text-[24px] font-black text-center mb-12 uppercase">Sempre me perguntam...</h2>
        <div className="bg-white/5 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          <FAQItem 
            question="Patrícia, os ingredientes são caros?" 
            answer="Não! Foquei em criar receitas com ingredientes simples e acessíveis que você encontra em qualquer supermercado." 
          />
          <FAQItem 
            question="O pão fica bom mesmo?" 
            answer="Sim! O grande segredo está no equilíbrio das farinhas. O resultado é um pão macio, saboroso e ninguém diz que é sem glúten." 
          />
          <FAQItem 
            question="Preciso ter experiência?" 
            answer="Não! O manual foi desenhado com um passo a passo tão simples que até quem nunca fez pão na vida vai conseguir resultados profissionais." 
          />
          <FAQItem 
            question="Recebo após pagamento?" 
            answer="Sim! O sistema é automatizado. Assim que o pagamento for confirmado, você recebe tudo em questão de segundos via e-mail e WhatsApp." 
          />
        </div>
      </Section>

      {/* ⚪ GARANTIA */}
      <section className="bg-brand-white text-brand-brown py-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto bg-brand-brown p-8 sm:p-16 rounded-[3rem] text-center text-white shadow-2xl relative">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow rounded-bl-[100%] opacity-20 -z-0" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-[26px] font-black uppercase mb-2">Experimente</h2>
            <h3 className="text-[18px] font-bold text-brand-yellow uppercase mb-8">Sem Riscos</h3>
            
            <div className="w-32 h-32 bg-brand-yellow text-brand-brown flex flex-col items-center justify-center rounded-full shadow-lg border-8 border-brand-brown mb-8 animate-pulse">
              <span className="text-sm font-bold uppercase leading-none">Garantia</span>
              <span className="text-4xl font-black">7</span>
              <span className="text-sm font-bold uppercase leading-none">dias</span>
            </div>

            <p className="text-[18px] leading-[31.5px] max-w-md font-medium w-[246px] h-[197px] pl-0 ml-0 pr-0">
              Satisfação garantida ou seu <span className="text-brand-yellow font-black underline">dinheiro de volta</span>. <br/><br/>
              <span className="text-[14px] opacity-80 font-normal">
              Você tem até 7 dias para solicitar a devolução do valor pago pelo produto.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 🟡 CTA FINAL */}
      <section className="bg-brand-yellow text-brand-brown py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-[21px] font-black uppercase leading-tight italic">
            Desvende os Segredos dos <br/> Pães Sem Glúten Perfeitos
          </h2>
          
          <div className="flex flex-col items-center gap-6">
            <motion.a
              href="https://pay.lowify.com.br/checkout?product_id=FtFPv5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-brown text-brand-yellow font-black py-6 px-12 rounded-full shadow-2xl transition-all duration-300 uppercase tracking-widest text-[17px] flex items-center gap-4 no-underline"
            >
              BAIXAR MINHA CÓPIA
              <ArrowRight className="w-8 h-8" />
            </motion.a>
            <p className="text-[19px] font-bold uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" /> Acesso imediato
            </p>
          </div>
        </div>
      </section>

      {/* ⚫ RODAPÉ */}
      <footer className="bg-brand-brown py-12 px-6 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-white/40 text-sm font-medium tracking-widest uppercase">
            Copyright © 2021 | Todos os direitos reservados
          </p>
          <div className="flex justify-center gap-6 text-xs text-white/20 font-bold uppercase">
            <a href="#" className="hover:text-brand-yellow transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Políticas de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
