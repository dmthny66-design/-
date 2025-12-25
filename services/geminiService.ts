
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDesignAdvice = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `أنت خبير ديكور وتصميم داخلي لشركة "لمسة المستقبل".
          خدماتنا تشمل: الدهانات (جوتن، الجزيرة)، ورق الحائط، بديل الخشب والرخام، الجبس بورد، تجديد المنازل بالكامل.
          تحدث بلهجة احترافية وودودة باللغة العربية. شجع العميل على التواصل عبر الواتساب رقم 966501308295.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "عذراً، حدث خطأ في التواصل مع المستشار الذكي. يرجى المحاولة لاحقاً.";
  }
};
