export type BitrixLeadInput = {
  name: string;
  phone: string;
  email?: string;
  destination?: string;
  wishes?: string;
  /** Заголовок ліда в CRM; за замовчуванням — як у шаблоні AneX Tour */
  title?: string;
};

const BITRIX_LEAD_URL =
  "https://crm-tour.bitrix24.eu/rest/1/siftfmappk919apf/crm.lead.add.json";

export async function sendToBitrix24(formData: BitrixLeadInput) {
  try {
    const params = new URLSearchParams();

    const commentParts = [
      formData.destination ? `Напрямок: ${formData.destination}` : "",
      formData.wishes ? `Побажання: ${formData.wishes}` : "",
    ].filter(Boolean);

    params.append(
      "FIELDS[TITLE]",
      formData.title ?? "Новий лід з сайта AneX Tour"
    );
    params.append("FIELDS[NAME]", formData.name);
    if (commentParts.length > 0) {
      params.append("FIELDS[COMMENTS]", commentParts.join("\n"));
    }

    if (formData.phone) {
      params.append("FIELDS[PHONE][0][VALUE]", formData.phone);
      params.append("FIELDS[PHONE][0][VALUE_TYPE]", "WORK");
    }

    if (formData.email) {
      params.append("FIELDS[EMAIL][0][VALUE]", formData.email);
      params.append("FIELDS[EMAIL][0][VALUE_TYPE]", "WORK");
    }

    params.append("FIELDS[REGISTER_SONET_EVENT]", "Y");

    const response = await fetch(BITRIX_LEAD_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const result = await response.json();

    if (result.error) {
      console.error(
        "Bitrix24 API Error:",
        result.error_description || result.error
      );
      return { success: false, error: result.error as string };
    }

    console.log("✅ Лід успішно створений у Bitrix24:", result);
    return { success: true, data: result };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("❌ Помилка при відправці до Bitrix24:", error);
    return { success: false, error: message };
  }
}
