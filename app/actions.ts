"use server"

import { client } from "@/sanity/lib/client"

export async function submitEnquiry(formData: FormData) {
  try {
    const attachment = formData.get('attachment') as File | null

    let attachmentAsset = null
    if (attachment && attachment.size > 0) {
      const buffer = Buffer.from(await attachment.arrayBuffer())
      attachmentAsset = await client.assets.upload('file', buffer, {
        filename: attachment.name,
        contentType: attachment.type,
      })
    }

    const data = {
      _type: 'enquiry',
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: `Subject: ${formData.get('subject')}\n\n${formData.get('message')}`,
      submittedAt: new Date().toISOString(),
      ...(attachmentAsset && {
        attachment: {
          _type: 'file',
          asset: { _type: 'reference', _ref: attachmentAsset._id },
        },
      }),
    }

    await client.create(data)
    return { success: true }
  } catch (err) {
    console.error(err)
    return { success: false, error: 'Failed to submit enquiry.' }
  }
}
