export const POST = async (req:Request) => {
      const {email,password} = await req.json()

      return new Response(`email :${email}`)
}