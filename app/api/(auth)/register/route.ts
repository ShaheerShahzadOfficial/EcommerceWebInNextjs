import prisma from "@/lib/prisma";

export const POST = async (req: Request) => {
  const { name, email, password, role } = await req.json();
  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        role: role,
      },
    });
    return new Response("User Created Successfully", { status: 200 });
  } catch (error) {
    return new Response("An Error Occured", { status: 400 });
  }
};
