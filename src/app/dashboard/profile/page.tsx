'use client'

import { useSession } from 'next-auth/react';

export default function ProfilePage() {

  const { data: session } = useSession();

  return (
    <div>
      <h1 className="text-2xl font-bold">Profile Page</h1>
      <hr />
      <div className="flex flex-col mt-5">
        <span>{ session?.user?.name ?? 'No name'}</span>
        <span>{ session?.user?.image ?? 'No Image'}</span>
        <span>{ session?.user?.email ?? 'No Email'}</span>
      </div>
    </div>
  );
}