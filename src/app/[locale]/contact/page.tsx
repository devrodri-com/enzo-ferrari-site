'use client';

import { useTranslations } from 'next-intl';
import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const isConfigured = !!formspreeEndpoint;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isConfigured) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch(formspreeEndpoint!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center">{t('title')}</h1>
        
        {!isConfigured && (
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            {t('notConfigured')}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              {t('name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={!isConfigured}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-700 dark:bg-gray-900"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              {t('email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={!isConfigured}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-700 dark:bg-gray-900"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              {t('message')}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              disabled={!isConfigured}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-700 dark:bg-gray-900"
            />
          </div>

          <button
            type="submit"
            disabled={!isConfigured || isSubmitting}
            className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            {isSubmitting ? 'Enviando...' : t('submit')}
          </button>

          {submitStatus === 'success' && (
            <p className="text-sm text-green-600 dark:text-green-400 text-center">
              Mensaje enviado correctamente
            </p>
          )}

          {submitStatus === 'error' && (
            <p className="text-sm text-red-600 dark:text-red-400 text-center">
              Error al enviar el mensaje. Por favor, intenta de nuevo.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
