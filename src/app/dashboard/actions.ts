'use server'

import { z } from 'zod'
import prisma from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

const createOrganizationSchema = z.object({
  name: z.string().min(3, 'Organization name must be at least 3 characters'),
})

export async function createOrganization(_initialState: unknown,formData: FormData) {
  const { userId } = await auth()
  if (!userId) {
    return {
      error: 'You must be logged in to create an organization.',
    }
  }

  const validatedFields = createOrganizationSchema.safeParse({
    name: formData.get('name'),
  })

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name } = validatedFields.data

  try {
    const newOrg = await prisma.organization.create({
      data: {
        name,
        members: {
          create: {
            userId,
          },
        },
      },
    })

    revalidatePath('/dashboard')

    return {
      data: newOrg,
    }
  } catch (error) {
    console.error('Failed to create organization:', error)
    return {
      error: 'Failed to create organization. Please try again.',
    }
  }
}
