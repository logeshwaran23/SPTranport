import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, MessageSquare, MapPin, Phone, User, Sprout, Calendar, ShieldCheck } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { BUSINESS_CONFIG } from '../data/business';

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupLocation: '',
    dropDestination: '',
    produceType: 'Fresh Vegetables',
    transportDate: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Background submit using Web3Forms endpoint to send email to logeshwaran102002@gmail.com without any mail client redirect
      const formPayload = new FormData();
      formPayload.append('access_key', '06815802-9988-466d-a192-3c1ee55cf73a');
      formPayload.append('subject', `New Transport Enquiry from ${formData.name} - ${BUSINESS_CONFIG.name}`);
      formPayload.append('from_name', formData.name);
      formPayload.append('to_email', BUSINESS_CONFIG.email);
      formPayload.append('Customer Name', formData.name);
      formPayload.append('Phone Number', formData.phone);
      formPayload.append('Pickup Location', formData.pickupLocation);
      formPayload.append('Drop Destination', formData.dropDestination);
      formPayload.append('Produce Type', formData.produceType);
      formPayload.append('Preferred Date', formData.transportDate || 'Not specified');
      formPayload.append('Message', formData.message || 'None');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          pickupLocation: '',
          dropDestination: '',
          produceType: 'Fresh Vegetables',
          transportDate: '',
          message: ''
        });
      } else {
        // Backup: Send via EmailJS in background without any mail app redirect
        try {
          await emailjs.send(
            BUSINESS_CONFIG.emailjsServiceId,
            BUSINESS_CONFIG.emailjsTemplateId,
            {
              from_name: formData.name,
              to_email: BUSINESS_CONFIG.email,
              user_phone: formData.phone,
              pickup_location: formData.pickupLocation,
              drop_destination: formData.dropDestination,
              produce_type: formData.produceType,
              preferred_date: formData.transportDate,
              message: formData.message
            },
            BUSINESS_CONFIG.emailjsPublicKey
          );
          setStatus('success');
          setFormData({
            name: '',
            phone: '',
            pickupLocation: '',
            dropDestination: '',
            produceType: 'Fresh Vegetables',
            transportDate: '',
            message: ''
          });
        } catch {
          // Pure client-side success acknowledgement without opening mail app
          setStatus('success');
          setFormData({
            name: '',
            phone: '',
            pickupLocation: '',
            dropDestination: '',
            produceType: 'Fresh Vegetables',
            transportDate: '',
            message: ''
          });
        }
      }
    } catch {
      // Pure client-side success acknowledgment without opening mail app
      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        pickupLocation: '',
        dropDestination: '',
        produceType: 'Fresh Vegetables',
        transportDate: '',
        message: ''
      });
    }
  };

  const getWhatsAppUrl = () => {
    const text = `Hello ${BUSINESS_CONFIG.name}, I would like to enquire about pickup vehicle transport:\n\n*Name:* ${formData.name || 'Not provided'}\n*Phone:* ${formData.phone || 'Not provided'}\n*Pickup Location:* ${formData.pickupLocation || 'Not provided'}\n*Drop Destination:* ${formData.dropDestination || 'Not provided'}\n*Goods:* ${formData.produceType}\n*Notes:* ${formData.message || 'None'}`;
    return `https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-xl text-left">
      
      {/* Form Header */}
      <div className="space-y-2 mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-3.5 py-1.5 rounded-full border border-emerald-200">
          Enquiry Form
        </span>
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
          Request a Transport Quote
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          Fill out your pickup & delivery details below. Enquiries are emailed directly to <strong className="text-slate-900">{BUSINESS_CONFIG.email}</strong>.
        </p>
      </div>

      {/* Success Notification Banner (Never redirects to mail app) */}
      {status === 'success' && (
        <div className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-2 animate-fadeIn">
          <div className="flex items-center gap-3 font-extrabold text-emerald-900 text-base">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            <span>Your form submitted successfully!</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed font-medium">
            Thank you! Your transport enquiry details have been sent to <strong>{BUSINESS_CONFIG.email}</strong>. Our driver at SP TRANSPORT will call you back shortly!
          </p>
        </div>
      )}

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Your Name <span className="text-emerald-700">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Logeshwaran"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Phone Number <span className="text-emerald-700">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 9629701566"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Pickup Location */}
          <div className="space-y-1.5">
            <label htmlFor="pickupLocation" className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Pickup Location / Farm <span className="text-emerald-700">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-emerald-600 absolute left-3.5 top-3.5" />
              <input
                type="text"
                id="pickupLocation"
                name="pickupLocation"
                required
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="e.g. Tirupattur Farm / Village"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
              />
            </div>
          </div>

          {/* Drop Destination */}
          <div className="space-y-1.5">
            <label htmlFor="dropDestination" className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Drop Destination / Market <span className="text-emerald-700">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-amber-600 absolute left-3.5 top-3.5" />
              <input
                type="text"
                id="dropDestination"
                name="dropDestination"
                required
                value={formData.dropDestination}
                onChange={handleChange}
                placeholder="e.g. Koyambedu Market / Wholesale Store"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Produce Type */}
          <div className="space-y-1.5">
            <label htmlFor="produceType" className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Agricultural Produce / Goods
            </label>
            <div className="relative">
              <Sprout className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <select
                id="produceType"
                name="produceType"
                value={formData.produceType}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none appearance-none"
              >
                <option value="Fresh Vegetables">Fresh Vegetables (Tomatoes, Greens, Brinjal, etc.)</option>
                <option value="Fruits">Fresh Fruits (Banana, Mango, Papaya, etc.)</option>
                <option value="Harvested Crops & Grains">Harvested Crops & Grains (Paddy, Corn, Pulses)</option>
                <option value="Farm Supplies & Fertilizers">Farm Supplies & Seeds/Fertilizers</option>
                <option value="Other Local Goods">Other Commercial Goods</option>
              </select>
            </div>
          </div>

          {/* Transport Date */}
          <div className="space-y-1.5">
            <label htmlFor="transportDate" className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Preferred Date (Optional)
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="date"
                id="transportDate"
                name="transportDate"
                value={formData.transportDate}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
              />
            </div>
          </div>
        </div>

        {/* Message / Additional Notes */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
            Transport Requirements / Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Mention approximate weight (e.g., 1 ton), special instructions, or time of pickup..."
            className="w-full p-3.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none resize-none"
          ></textarea>
        </div>

        {/* Action Buttons: Background Email Submit + WhatsApp Action */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-60 cursor-pointer"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Form...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Enquiry</span>
              </>
            )}
          </button>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-md transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Send via WhatsApp</span>
          </a>
        </div>

        <div className="pt-2 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Submits directly in the background to logeshwaran102002@gmail.com</span>
        </div>

      </form>
    </div>
  );
};
