"use server"

import { client } from "@/sanity/lib/client"

export async function submitEnquiry(formData: FormData) {
  try {
    const data = {
      _type: 'enquiry',
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: `Subject: ${formData.get('subject')}\n\n${formData.get('message')}`,
      submittedAt: new Date().toISOString(),
    }
    
    await client.create(data)
    return { success: true }
  } catch (err) {
    console.error(err)
    return { success: false, error: 'Failed to submit enquiry.' }
  }
}
