

import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from "bcryptjs";

export async function GET(request: Request) { 
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany(); // delete * from todo

  const user = await prisma.user.create({
    data: {
      email: 'test@test.com',
      password: bcrypt.hashSync('123456'),
      roles: ['admin', 'client', 'super-user'],
      todos: {
        create: [
          { description: 'Piedra del alma', complete: true},
          { description: 'Piedra del poder'},
          { description: 'Piedra del tiempo'},
          { description: 'Piedra del espacio'},
          { description: 'Piedra del realidad'},
        ]
      }
    }
  });


  /* await prisma.todo.createMany({
    data: [
      { description: 'Piedra del alma', complete: true},
      { description: 'Piedra del poder'},
      { description: 'Piedra del tiempo'},
      { description: 'Piedra del espacio'},
      { description: 'Piedra del realidad'},
    ]
  }); */


  /* const todo =  await prisma.todo.create({
    data: {
      description: 'Piedra del Alma',
      complete: true,
    }
  });
  console.log({todo}); */

  return NextResponse.json({
    message: 'Seed Executed',
  });

}