export async function submitLead(data: {
  name: string;
  phone: string;
  title?: string;
}) {
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.error ?? "submit_failed");
  }

  return result;
}
