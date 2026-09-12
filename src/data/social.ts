export const SOCIAL = {
  email: 'hmidofficiel2005@gmail.com',
  whatsappNumber: '+216 92 147 738',
  linkedin: 'https://www.linkedin.com/in/salah-ahmed-72b159247/',
  github: 'https://github.com/ah-med-sal-ah',
} as const

/** WhatsApp deep link built from SOCIAL.whatsappNumber (digits only, international format). */
export const whatsappLink = `https://wa.me/${SOCIAL.whatsappNumber.replace(/[^\d]/g, '')}`

export const mailtoLink = `mailto:${SOCIAL.email}`
