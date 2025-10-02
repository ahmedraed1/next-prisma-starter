import React from "react";
import { createUser } from "@/app/actions/actions";

export default function NewUser() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        New User
      </h2>
      <form action={createUser}>
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          id="hashedPassword"
          name="hashedPassword"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <select name="role" id="role">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Create User
        </button>
      </form>
    </div>
  );
}
