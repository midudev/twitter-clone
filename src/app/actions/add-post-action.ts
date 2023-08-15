'use server'

import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'

export const addPost = async (formData: FormData) => {
  const content = formData.get('content')

  if (content === null) return

  const supabase = createServerActionClient({ cookies })
  // revisar si el usuario realmene está autentificado
  const { data: { user } } = await supabase.auth.getUser()
  if (user === null) return

  await supabase.from('posts').insert({ content, user_id: user.id })

  revalidatePath(`/?content=${content.toString()}`)
}
