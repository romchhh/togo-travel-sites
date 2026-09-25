export async function sendToBitrix24(formData: {
  name: string;
  phone: string;
  email?: string;
  destination?: string;
  wishes?: string;
  title?: string;
}) {
  try {
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return { success: false, error: result.error ?? "request_failed" };
    }

    return { success: true, data: result.data };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "unknown";
    return { success: false, error: message };
  }
}
