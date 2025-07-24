'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';

const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').optional(),
  company: z.string().optional(),
  projectType: z.enum(['consulting', 'development', 'partnership', 'other']),
  message: z.string().min(10, 'Please provide more details about your project'),
  budget: z.enum(['<500k', '500k-1m', '1m-5m', '5m-10m', '>10m']).optional(),
  timeframe: z.enum(['immediate', 'within-3-months', '3-6-months', 'flexible']).optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Send form data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Show success message
        setSubmitSuccess(true);
        reset();
      } else {
        // Handle error
        console.error('Form submission error:', result.error);
        alert('Failed to send message. Please try again.');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center p-8 bg-green-50/50 dark:bg-green-900/5 rounded-2xl border border-green-100 dark:border-green-900/10">
        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Thank You for Reaching Out
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors"
        >
          <span className="mr-2">Send another message</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative group">
          <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
            First Name <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            {...register('firstName')}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-white/50
              focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] outline-none
              dark:bg-gray-900/50 dark:border-gray-800 dark:text-white
              transition-all duration-200 ease-out
              placeholder:text-gray-400 dark:placeholder:text-gray-600
              group-hover:border-gray-300 dark:group-hover:border-gray-700"
            placeholder="John"
          />
          {errors.firstName && (
            <p className="mt-2 text-sm text-red-500 flex items-center">
              <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
              </svg>
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="relative group">
          <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
            Last Name <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            {...register('lastName')}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-white/50
              focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] outline-none
              dark:bg-gray-900/50 dark:border-gray-800 dark:text-white
              transition-all duration-200 ease-out
              placeholder:text-gray-400 dark:placeholder:text-gray-600
              group-hover:border-gray-300 dark:group-hover:border-gray-700"
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="mt-2 text-sm text-red-500 flex items-center">
              <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
              </svg>
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative group">
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
            Email Address <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-white/50
              focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] outline-none
              dark:bg-gray-900/50 dark:border-gray-800 dark:text-white
              transition-all duration-200 ease-out
              placeholder:text-gray-400 dark:placeholder:text-gray-600
              group-hover:border-gray-300 dark:group-hover:border-gray-700"
            placeholder="john.doe@company.com"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-500 flex items-center">
              <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
              </svg>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="relative group">
          <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-white/50
              focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] outline-none
              dark:bg-gray-900/50 dark:border-gray-800 dark:text-white
              transition-all duration-200 ease-out
              placeholder:text-gray-400 dark:placeholder:text-gray-600
              group-hover:border-gray-300 dark:group-hover:border-gray-700"
            placeholder="+1 (234) 567-8900"
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-500 flex items-center">
              <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
              </svg>
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Company and Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative group">
          <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            {...register('company')}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-white/50
              focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] outline-none
              dark:bg-gray-900/50 dark:border-gray-800 dark:text-white
              transition-all duration-200 ease-out
              placeholder:text-gray-400 dark:placeholder:text-gray-600
              group-hover:border-gray-300 dark:group-hover:border-gray-700"
            placeholder="Company Ltd."
          />
        </div>
        <div className="relative group">
          <label htmlFor="projectType" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
            Project Type <span className="text-[var(--color-accent)]">*</span>
          </label>
          <div className="relative">
            <select
              id="projectType"
              {...register('projectType')}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-white/50
                focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] outline-none
                dark:bg-gray-900/50 dark:border-gray-800 dark:text-white
                transition-all duration-200 ease-out appearance-none
                placeholder:text-gray-400 dark:placeholder:text-gray-600
                group-hover:border-gray-300 dark:group-hover:border-gray-700"
            >
              <option value="">Select a project type</option>
              <option value="consulting">Engineering Consulting</option>
              <option value="development">Project Development</option>
              <option value="partnership">Strategic Partnership</option>
              <option value="other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.projectType && (
            <p className="mt-2 text-sm text-red-500 flex items-center">
              <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
              </svg>
              {errors.projectType.message}
            </p>
          )}
        </div>
      </div>

      {/* Budget and Timeframe */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative group">
          <label htmlFor="budget" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
            Project Budget
          </label>
          <div className="relative">
            <select
              id="budget"
              {...register('budget')}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-white/50
                focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] outline-none
                dark:bg-gray-900/50 dark:border-gray-800 dark:text-white
                transition-all duration-200 ease-out appearance-none
                placeholder:text-gray-400 dark:placeholder:text-gray-600
                group-hover:border-gray-300 dark:group-hover:border-gray-700"
            >
              <option value="">Select budget range</option>
              <option value="<500k">Less than R500,000</option>
              <option value="500k-1m">R500,000 - R1 Million</option>
              <option value="1m-5m">R1 Million - R5 Million</option>
              <option value="5m-10m">R5 Million - R10 Million</option>
              <option value=">10m">More than R10 Million</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative group">
          <label htmlFor="timeframe" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
            Project Timeframe
          </label>
          <div className="relative">
            <select
              id="timeframe"
              {...register('timeframe')}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-white/50
                focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] outline-none
                dark:bg-gray-900/50 dark:border-gray-800 dark:text-white
                transition-all duration-200 ease-out appearance-none
                placeholder:text-gray-400 dark:placeholder:text-gray-600
                group-hover:border-gray-300 dark:group-hover:border-gray-700"
            >
              <option value="">Select timeframe</option>
              <option value="immediate">Immediate Start</option>
              <option value="within-3-months">Within 3 Months</option>
              <option value="3-6-months">3-6 Months</option>
              <option value="flexible">Flexible</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="relative group">
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
          Project Details <span className="text-[var(--color-accent)]">*</span>
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={4}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-white/50
            focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] outline-none
            dark:bg-gray-900/50 dark:border-gray-800 dark:text-white
            transition-all duration-200 ease-out resize-y min-h-[120px]
            placeholder:text-gray-400 dark:placeholder:text-gray-600
            group-hover:border-gray-300 dark:group-hover:border-gray-700"
          placeholder="Please describe your project requirements, goals, and any specific challenges you'd like us to address."
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-500 flex items-center">
            <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
            </svg>
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium
            py-3 px-6 rounded-xl transition-all duration-200 
            flex items-center justify-center disabled:opacity-70
            shadow-sm shadow-[var(--color-accent)]/20 hover:shadow-md hover:shadow-[var(--color-accent)]/20"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Submit Request
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </>
          )}
        </button>

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
          Fields marked with <span className="text-[var(--color-accent)]">*</span> are required
        </p>
      </div>
    </form>
  );
} 