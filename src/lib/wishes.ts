/**
 * Shared birthday wishes, stored in Supabase (free tier).
 * Uses plain fetch against Supabase's REST API — no extra dependencies.
 *
 * Managing wishes: supabase.com → your project → Table Editor → wishes.
 * Flip a row's `visible` to false (or delete the row) to remove it from
 * the site.
 */

const SUPABASE_URL = "https://azowcykcqxsretoxwdlz.supabase.co";
// Publishable key — safe to ship in client code; row-level security
// policies on the table control what it can actually do.
const SUPABASE_KEY = "sb_publishable_1FGbN5EYW6uJaKUOa1EUbA_kHq0pjQW";

const ENDPOINT = `${SUPABASE_URL}/rest/v1/wishes`;

const HEADERS = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
};

export type Wish = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

export async function fetchWishes(): Promise<Wish[]> {
  const res = await fetch(
    `${ENDPOINT}?select=id,name,message,created_at&order=created_at.desc&limit=100`,
    { headers: HEADERS },
  );
  if (!res.ok) throw new Error(`Failed to load wishes (${res.status})`);
  return (await res.json()) as Wish[];
}

export async function submitWish(name: string, message: string): Promise<void> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { ...HEADERS, Prefer: "return=minimal" },
    body: JSON.stringify({
      name: name.trim().slice(0, 40),
      message: message.trim().slice(0, 140),
    }),
  });
  if (!res.ok) throw new Error(`Failed to send wish (${res.status})`);
}
