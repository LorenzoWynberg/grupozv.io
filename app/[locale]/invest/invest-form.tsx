'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, User, Briefcase, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { submitInvestForm, type InvestFormResult } from './actions';
import type { Dictionary } from '@/lib/dictionaries/en';

type FormDict = Dictionary['investForm'];

const STEPS = 4;
const STORAGE_KEY = 'zv-invest-submitted';

const inquiryIcons = [Briefcase, User, MessageSquare];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export function InvestForm({ dict }: { dict: FormDict }) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const [inquiryType, setInquiryType] = useState('');
  const [investmentLevel, setInvestmentLevel] = useState('');
  const [investmentRange, setInvestmentRange] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Honeypot fields
  const [website, setWebsite] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        if (Date.now() - data.timestamp < 7 * 24 * 60 * 60 * 1000) {
          setAlreadySubmitted(true);
          setSubmittedName(data.name || '');
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const canAdvance = () => {
    if (step === 0) return !!inquiryType;
    if (step === 1) return !!investmentLevel && !!investmentRange;
    if (step === 2) return !!name.trim() && !!email.trim() && email.includes('@');
    return true;
  };

  const goNext = () => {
    if (!canAdvance()) return;
    if (step === 0 && inquiryType !== 'investor') {
      setDirection(1);
      setStep(2);
      return;
    }
    setDirection(1);
    setStep((s) => Math.min(s + 1, STEPS - 1));
  };

  const goBack = () => {
    if (step === 2 && inquiryType !== 'investor') {
      setDirection(-1);
      setStep(0);
      return;
    }
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const resetForm = () => {
    setStep(0);
    setDirection(1);
    setInquiryType('');
    setInvestmentLevel('');
    setInvestmentRange('');
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    setErrors({});
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setErrors({});
    try {
      const result: InvestFormResult = await submitInvestForm({
        inquiryType: inquiryType as 'investor' | 'partner' | 'general',
        investmentLevel: inquiryType === 'investor' ? investmentLevel : 'N/A',
        investmentRange: inquiryType === 'investor' ? investmentRange : 'N/A',
        name,
        email,
        company,
        message,
        honeypot: { website, phone, address },
      });
      if (result.success) {
        const submittedData = { name: name.split(' ')[0], timestamp: Date.now() };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(submittedData));
        setSubmittedName(name.split(' ')[0]);
        setSubmitted(true);
        resetForm();
      } else {
        const hasFieldErrors = Object.keys(result.errors).some((k) => k !== 'form');
        setErrors(result.errors);
        if (hasFieldErrors) {
          setDirection(-1);
          setStep(2);
        }
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && step < STEPS - 1 && canAdvance()) {
      e.preventDefault();
      goNext();
    }
  };

  if (alreadySubmitted && !submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center py-12 text-center"
      >
        <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
          <Check className="text-primary h-8 w-8" />
        </div>
        <h3 className="mt-6 text-2xl font-bold">
          {submittedName
            ? `${dict.alreadySubmitted.thanks} ${submittedName}.`
            : `${dict.alreadySubmitted.received}`}
        </h3>
        <p className="text-muted-foreground mt-3 max-w-md text-lg">
          {dict.alreadySubmitted.message}
        </p>
        <Button
          variant="ghost"
          className="mt-6 rounded-full"
          onClick={() => setAlreadySubmitted(false)}
        >
          {dict.alreadySubmitted.another}
        </Button>
      </motion.div>
    );
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center py-12 text-center"
      >
        <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
          <Check className="text-primary h-8 w-8" />
        </div>
        <h3 className="mt-6 text-2xl font-bold">
          {dict.submitted.thanks} {submittedName}.
        </h3>
        <p className="text-muted-foreground mt-3 max-w-md text-lg">{dict.submitted.message}</p>
      </motion.div>
    );
  }

  const totalSteps = inquiryType === 'investor' ? STEPS : STEPS - 1;
  const displayStep = inquiryType !== 'investor' && step >= 2 ? step - 1 : step;

  return (
    <div onKeyDown={handleKeyDown}>
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {dict.step} {displayStep + 1} {dict.of} {totalSteps}
          </span>
          <span className="text-muted-foreground text-xs">{dict.stepLabels[step]}</span>
        </div>
        <div className="bg-muted h-1.5 overflow-hidden rounded-full">
          <motion.div
            className="bg-primary h-full rounded-full"
            initial={false}
            animate={{ width: `${((displayStep + 1) / totalSteps) * 100}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="relative min-h-[360px]">
        <AnimatePresence mode="wait" custom={direction}>
          {/* Step 0: Inquiry Type */}
          {step === 0 && (
            <motion.div
              key="step-0"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <h3 className="text-xl font-bold">{dict.step0.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{dict.step0.subtitle}</p>
              <div className="mt-6 space-y-3">
                {dict.inquiryTypes.map((type, idx) => {
                  const Icon = inquiryIcons[idx];
                  return (
                    <button
                      key={type.id}
                      onClick={() => setInquiryType(type.id)}
                      className={cn(
                        'flex w-full items-center gap-4 rounded-xl border-2 p-5 text-left transition-all',
                        inquiryType === type.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/30 hover:bg-muted/50'
                      )}
                    >
                      <div
                        className={cn(
                          'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
                          inquiryType === type.id
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">{type.label}</p>
                        <p className="text-muted-foreground text-sm">{type.description}</p>
                      </div>
                      {inquiryType === type.id && (
                        <Check className="text-primary ml-auto h-5 w-5 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Step 1: Investment Details */}
          {step === 1 && (
            <motion.div
              key="step-1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <h3 className="text-xl font-bold">{dict.step1.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{dict.step1.subtitle}</p>

              <div className="mt-6">
                <label className="text-sm font-medium">{dict.step1.levelLabel}</label>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  {dict.investmentLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setInvestmentLevel(level.id)}
                      className={cn(
                        'rounded-xl border-2 p-4 text-left transition-all',
                        investmentLevel === level.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/30 hover:bg-muted/50'
                      )}
                    >
                      <p className="text-sm font-semibold">{level.label}</p>
                      <p className="text-muted-foreground mt-0.5 text-xs">{level.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm font-medium">{dict.step1.rangeLabel}</label>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  {dict.investmentRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setInvestmentRange(range.id)}
                      className={cn(
                        'rounded-xl border-2 p-4 text-left text-sm font-medium transition-all',
                        investmentRange === range.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/30 hover:bg-muted/50'
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Contact Info */}
          {step === 2 && (
            <motion.div
              key="step-2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <h3 className="text-xl font-bold">{dict.step2.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{dict.step2.subtitle}</p>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    {dict.step2.name}{' '}
                    <span className="text-destructive">{dict.step2.required}</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                    }}
                    placeholder={dict.step2.namePlaceholder}
                    className={cn(
                      'bg-card mt-1.5 w-full rounded-xl border px-4 py-3 text-sm transition-all outline-none focus:ring-2',
                      errors.name
                        ? 'border-destructive focus:border-destructive focus:ring-destructive/20'
                        : 'border-border focus:border-primary focus:ring-primary/20'
                    )}
                  />
                  {errors.name && <p className="text-destructive mt-1 text-xs">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    {dict.step2.email}{' '}
                    <span className="text-destructive">{dict.step2.required}</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                    }}
                    placeholder={dict.step2.emailPlaceholder}
                    className={cn(
                      'bg-card mt-1.5 w-full rounded-xl border px-4 py-3 text-sm transition-all outline-none focus:ring-2',
                      errors.email
                        ? 'border-destructive focus:border-destructive focus:ring-destructive/20'
                        : 'border-border focus:border-primary focus:ring-primary/20'
                    )}
                  />
                  {errors.email && <p className="text-destructive mt-1 text-xs">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-medium">
                    {dict.step2.company}{' '}
                    <span className="text-muted-foreground font-normal">{dict.step2.optional}</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={dict.step2.companyPlaceholder}
                    className="border-border bg-card focus:border-primary focus:ring-primary/20 mt-1.5 w-full rounded-xl border px-4 py-3 text-sm transition-all outline-none focus:ring-2"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium">
                    {dict.step2.message}{' '}
                    <span className="text-muted-foreground font-normal">{dict.step2.optional}</span>
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={dict.step2.messagePlaceholder}
                    rows={3}
                    className="border-border bg-card focus:border-primary focus:ring-primary/20 mt-1.5 w-full resize-none rounded-xl border px-4 py-3 text-sm transition-all outline-none focus:ring-2"
                  />
                </div>

                {/* Honeypot fields */}
                <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <input
                    type="text"
                    name="phone_number"
                    tabIndex={-1}
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    type="text"
                    name="address"
                    tabIndex={-1}
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <motion.div
              key="step-3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <h3 className="text-xl font-bold">{dict.step3.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{dict.step3.subtitle}</p>

              <div className="mt-6 space-y-4">
                <div className="border-border rounded-xl border p-4">
                  <p className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                    {dict.step3.inquiryTypeLabel}
                  </p>
                  <p className="mt-1 font-medium">
                    {dict.inquiryTypes.find((t) => t.id === inquiryType)?.label}
                  </p>
                </div>

                {inquiryType === 'investor' && (
                  <div className="border-border rounded-xl border p-4">
                    <p className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                      {dict.step3.investmentDetailsLabel}
                    </p>
                    <p className="mt-1 font-medium">
                      {dict.investmentLevels.find((l) => l.id === investmentLevel)?.label}
                      {' · '}
                      {dict.investmentRanges.find((r) => r.id === investmentRange)?.label}
                    </p>
                  </div>
                )}

                <div className="border-border rounded-xl border p-4">
                  <p className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                    {dict.step3.contactLabel}
                  </p>
                  <p className="mt-1 font-medium">{name}</p>
                  <p className="text-muted-foreground text-sm">{email}</p>
                  {company && <p className="text-muted-foreground text-sm">{company}</p>}
                </div>

                {message && (
                  <div className="border-border rounded-xl border p-4">
                    <p className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                      {dict.step3.messageLabel}
                    </p>
                    <p className="text-muted-foreground mt-1 text-sm">{message}</p>
                  </div>
                )}
              </div>

              {errors.form && (
                <p className="text-destructive mt-4 text-center text-sm font-medium">
                  {errors.form}
                </p>
              )}

              <p className="text-muted-foreground mt-6 text-center text-xs">{dict.step3.privacy}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        {step > 0 ? (
          <Button variant="ghost" onClick={goBack} className="rounded-full">
            <ArrowLeft className="mr-1 h-4 w-4" />
            {dict.back}
          </Button>
        ) : (
          <div />
        )}

        {step < STEPS - 1 ? (
          <Button onClick={goNext} disabled={!canAdvance()} className="rounded-full">
            {dict.continue}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={submitting} className="rounded-full">
            {submitting ? dict.sending : dict.submit}
            {!submitting && <ArrowRight className="ml-1 h-4 w-4" />}
          </Button>
        )}
      </div>
    </div>
  );
}
