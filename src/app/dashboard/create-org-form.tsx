"use client";

import { useActionState } from "react";
import { createOrganization } from "./actions";

const initialState: { error: string; data?: undefined } = {
  error: "",
  data: undefined,
};

export function CreateOrgForm() {
  const [state, formAction, pending] = useActionState(
    createOrganization,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-sm">
      <h2 className="text-2xl font-bold">Create Organization</h2>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300"
        >
          Organization Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
        {state?.error &&
          typeof state.error === "object" &&
          "name" in state.error && (
            <p className="text-sm text-red-500 mt-1">{state.error.name}</p>
          )}
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition duration-150 ease-in-out"
        disabled={pending}
      >
        Create
      </button>
      {state?.error && typeof state.error === "string" && (
        <p className="text-sm text-red-500 mt-1">{state.error}</p>
      )}
    </form>
  );
}
