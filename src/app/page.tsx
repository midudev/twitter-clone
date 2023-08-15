import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: posts } = await supabase.from('posts').select()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hola Twitter 👋
      <pre>
        {
          JSON.stringify(posts, null, 2)
        }
      </pre>
    </main>
  )
}
