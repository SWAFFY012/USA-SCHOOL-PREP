import React, { useState } from 'react';
import { Language } from '../types';
import { translations, pricingPlans } from '../translations';
import { Check, Coins, ShieldCheck, CreditCard, Sparkles, X, MessageSquare } from 'lucide-react';

interface PricingProps {
  language: Language;
}

export default function Pricing({ language }: PricingProps) {
  const t = translations[language];
  const list = pricingPlans[language];

  const [currency, setCurrency] = useState<'usd' | 'rub'>('rub');
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  const [checkoutComplete, setCheckoutComplete] = useState<boolean>(false);
  const [payerName, setPayerName] = useState<string>('');
  const [payerPhone, setPayerPhone] = useState<string>('');

  const formatPrice = (plan: any) => {
    if (currency === 'usd') {
      return `$${plan.price.usd}`;
    }
    return `${plan.price.rub.toLocaleString('ru-RU')} ₽`;
  };

  const getOriginalPriceText = (plan: any) => {
    if (currency === 'usd') {
      return `$${plan.originalPrice.usd}`;
    }
    return `${plan.originalPrice.rub.toLocaleString('ru-RU')} ₽`;
  };

  const handleOpenCheckout = (plan: any) => {
    setSelectedPlan(plan);
    setCheckoutComplete(false);
    setPayerName('');
    setPayerPhone('');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (payerName && payerPhone) {
      setCheckoutComplete(true);
    }
  };

  return (
    <section id="pricing-section" className="relative py-24 sm:py-32 bg-luxury-grid border-b border-border-dark min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Luxury background decorations */}
      <div className="luxury-curves" />
      <div className="luxury-overlay-waves" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.015] rounded-full blur-[200px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left w-full">
        
        {/* Section Header */}
        <div id="pricing-header" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <h2 id="pricing-title" className="premium-section-title text-2xl sm:text-3xl text-white leading-tight">
              {t.pricing.title}
            </h2>
            <p id="pricing-subtitle" className="poriadok-copy text-xl sm:text-2xl text-[#F5DED0] leading-relaxed">
              {t.pricing.subtitle}
            </p>
          </div>
 
          {/* Currency Toggle Switches */}
          <div id="currency-selectors" className="bg-white/[0.02] backdrop-blur-3xl rounded-full p-1.5 border border-white/10 flex items-center">
            <span className="font-mono text-[9px] uppercase text-gray-500 font-bold tracking-widest px-3 hidden sm:inline">
              {t.pricing.currencySelect}:
            </span>
            <button
               id="currency-btn-rub"
              onClick={() => setCurrency('rub')}
              className={`px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider font-bold rounded-full transition-all cursor-pointer ${
                currency === 'rub'
                  ? 'bg-gold text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              RUB (₽)
            </button>
            <button
              id="currency-btn-usd"
              onClick={() => setCurrency('usd')}
              className={`px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider font-bold rounded-full transition-all cursor-pointer ${
                currency === 'usd'
                  ? 'bg-gold text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>
 
        {/* Pricing Cards Grid */}
        <div id="pricing-cards-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {list.map((plan) => {
            const isFeatured = plan.badge !== undefined;
            return (
              <div
                id={`price-plan-${plan.id}`}
                key={plan.id}
                className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 relative backdrop-blur-3xl ${
                  isFeatured
                    ? 'bg-white/[0.05] border-gold/50 shadow-[0_20px_40px_rgba(197,160,89,0.12)] scale-100 lg:scale-105 z-10'
                    : 'bg-white/[0.01] border-white/10 hover:border-gold/40 shadow-2xl'
                }`}
              >
                {/* Floating Recommended pill */}
                {isFeatured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black px-4 py-1 text-[9px] font-mono font-bold tracking-widest rounded-full uppercase shadow-md">
                    {t.pricing.popularBadge}
                  </span>
                )}

                <div className="space-y-6">
                  {/* Card Header text */}
                  <div>
                    <h3 className="premium-section-title text-lg text-white leading-tight">
                      {plan.title}
                    </h3>
                  </div>

                  {/* Pricing Number details */}
                  <div className="flex items-baseline space-x-2">
                    <span id={`price-label-${plan.id}`} className="font-serif text-3xl sm:text-4xl text-white font-normal">
                      {formatPrice(plan)}
                    </span>
                    <span className="text-xs text-gray-500 font-sans font-light">
                      / {t.pricing.perMonth}
                    </span>
                    {/* Crossed off original price to make it expensive feel */}
                    <span className="font-mono text-xs text-gray-600 line-through pl-1.5">
                      {getOriginalPriceText(plan)}
                    </span>
                  </div>

                  {/* Pricing Feature checklist */}
                  <ul className="space-y-3.5 pt-6 border-t border-border-dark text-left">
                    {plan.features.map((feature, fIdx) => (
                      <li
                        id={`pricing-feat-${plan.id}-${fIdx}`}
                        key={fIdx}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 w-4 h-4 bg-gold/10 border border-gold/25 rounded-md flex items-center justify-center text-gold mt-0.5">
                          <Check size={9} strokeWidth={3} />
                        </div>
                        <span className="poriadok-copy text-base text-[#F1D4C4]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing Buy now Trigger button */}
                <div className="pt-8">
                  <button
                    id={`price-buy-btn-${plan.id}`}
                    onClick={() => handleOpenCheckout(plan)}
                    className={`w-full py-3.5 rounded-xl font-sans text-xs uppercase tracking-widest font-bold transition-all cursor-pointer ${
                      isFeatured
                        ? 'bg-gold hover:bg-gold-light text-black shadow-lg'
                        : 'bg-[#15151A] text-gold hover:bg-gold hover:text-black border border-border-dark hover:border-transparent'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Small Notice */}
        <div id="pricing-installment-notice" className="mt-8 text-center bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-4 rounded-xl max-w-lg mx-auto">
          <p className="font-sans text-xs text-[#A0A0A0] font-light leading-normal flex items-center justify-center space-x-2">
            <ShieldCheck size={14} className="text-gold flex-shrink-0" />
            <span>{t.pricing.priceNotice}</span>
          </p>
        </div>
 
      </div>
 
      {/* DETAILED SLIDE-OUT INTERACTIVE CHECKOUT MODAL OVERLAY */}
      {selectedPlan && (
        <div id="pricing-checkout-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in text-left animate-blur-in">
          <div className="relative bg-white/[0.04] backdrop-blur-3xl border border-white/15 p-6 sm:p-8 rounded-2xl max-w-md w-full shadow-2xl overflow-hidden">
            {/* Modal Exit Button */}
            <button
              id="close-checkout-modal"
              onClick={() => setSelectedPlan(null)}
              className="absolute top-5 right-5 text-gray-500 hover:text-white cursor-pointer"
            >
              <X size={18} />
            </button>
 
            {/* Ambient Background Spot */}
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-gold/[0.03] rounded-full blur-2xl pointer-events-none" />
 
            {!checkoutComplete ? (
              <form id="payment-checkout-form" onSubmit={handlePaymentSubmit} className="space-y-6 relative z-10">
                <div className="space-y-1">
                  <div className="inline-flex px-2 py-0.5 bg-gold/10 text-gold border border-gold/15 text-[9px] font-mono font-bold uppercase rounded-md tracking-widest">
                    Subscription Reservation
                  </div>
                  <h3 id="checkout-plan-title" className="font-serif italic text-xl text-white font-medium">
                    {selectedPlan.title}
                  </h3>
                  <p className="font-sans text-xs text-[#A0A0A0] font-light">
                    {language === 'ru' ? 'Премиум бронирование пакета обучения.' : 'Secure entry for premium US academic track.'}
                  </p>
                </div>
 
                {/* Pricing values card */}
                <div className="bg-[#15151A]/60 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="font-sans text-xs text-gray-400 block font-light">{language === 'ru' ? 'Сумма инвестиций:' : 'Investment Total:'}</span>
                    <span id="checkout-total-val" className="font-serif text-xl sm:text-2xl text-gold font-normal">{formatPrice(selectedPlan)}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[9px] text-gray-500 font-bold block uppercase tracking-wider">{language === 'ru' ? 'Срок подписки' : 'Tenure billing'}</span>
                    <span className="font-sans text-xs text-white font-bold">{selectedPlan.period === 'month' || selectedPlan.period === 'месяц' ? '1 Month Cycle' : 'Annual Plan'}</span>
                  </div>
                </div>
 
                {/* Form fields */}
                <div className="space-y-4">
                  <div className="space-y-1.5 flex flex-col">
                    <label className="font-mono text-[9px] uppercase text-gray-500 font-bold tracking-widest">{t.trial.nameLabel}</label>
                    <input
                      type="text"
                      required
                      value={payerName}
                      onChange={(e) => setPayerName(e.target.value)}
                      placeholder="Алекс"
                      className="w-full bg-[#0F0F0F]/60 backdrop-blur-sm border border-white/10 focus:border-gold rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
 
                  <div className="space-y-1.5 flex flex-col">
                    <label className="font-mono text-[9px] uppercase text-gray-500 font-bold tracking-widest">{t.trial.phoneLabel}</label>
                    <input
                      type="text"
                      required
                      value={payerPhone}
                      onChange={(e) => setPayerPhone(e.target.value)}
                      placeholder="Telegram/WhatsApp..."
                      className="w-full bg-[#0F0F0F]/60 backdrop-blur-sm border border-white/10 focus:border-gold rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
 
                  {/* Installments Option Selector */}
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase text-gray-500 font-bold tracking-wider block">{language === 'ru' ? 'Формат оплаты:' : 'Billing Option:'}</span>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="bg-white/[0.02] backdrop-blur-sm hover:bg-white/5 border border-gold/40 rounded-xl p-3 flex items-center justify-between cursor-pointer">
                        <span className="font-sans text-xs text-white font-bold">{language === 'ru' ? 'Полная сумма' : 'Pay Full sum'}</span>
                        <input type="radio" name="pay_option" defaultChecked className="accent-gold h-3 w-3" />
                      </label>
                      <label className="bg-[#15151A]/30 backdrop-blur-sm hover:bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-between cursor-pointer">
                        <span className="font-sans text-xs text-gray-400 font-medium">{language === 'ru' ? 'Рассрочка 0%' : '0% Installment'}</span>
                        <input type="radio" name="pay_option" className="accent-gold h-3 w-3" />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Core Payment Buttons */}
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-black py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                >
                  <CreditCard size={15} />
                  <span>{language === 'ru' ? 'Сформировать бронь' : 'Confirm secure payment'}</span>
                </button>
              </form>
            ) : (
              <div id="checkout-completed-msg" className="py-8 text-center space-y-6 relative z-10">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Check size={32} strokeWidth={2} />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-serif italic text-xl text-white font-medium">
                    {language === 'ru' ? 'Подписка забронирована!' : 'Subscription Reserved!'}
                  </h4>
                  <p className="font-sans text-xs text-[#A0A0A0] max-w-xs mx-auto leading-relaxed font-light">
                    {language === 'ru' 
                      ? 'Поздравляем с важной инвестицией. Мы подготовили платежный счет и направили его вам в Telegram/WhatsApp.' 
                      : 'Congratulations on this milestone investment. We have prepared the invoice and sent it to your messenger.'}
                  </p>
                </div>

                <button
                  id="checkout-success-exit-btn"
                  onClick={() => setSelectedPlan(null)}
                  className="bg-[#15151A] hover:bg-white/5 border border-border-dark text-gray-300 font-mono text-[10px] uppercase tracking-widest font-bold px-6 py-3 rounded-xl transition-all cursor-pointer"
                >
                  {language === 'ru' ? 'Вернуться на сайт' : 'Return to mainpage'}
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
