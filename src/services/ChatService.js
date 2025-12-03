class ChatService {
  constructor() {
    // IMPORTANT: put your actual Render backend URL here
    // Example: "https://ai-portfolio-backend.onrender.com/chat"
    this.apiUrl = "https://ai-portfolio-backend-gj2j.onrender.com/chat";
  }

  async query(data, setReplyText) {
    const response = await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });

    if (!response.body) {
      throw new Error("No response body found");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let text = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });

      // HF sends Server-Sent Events: lines starting with "data:"
      const events = chunk.split("\n\n");
      for (const event of events) {
        if (!event.trim()) continue;
        if (!event.startsWith("data:")) continue;
        const jsonString = event.slice(5); // remove "data:"

        if (jsonString === " [DONE]" || jsonString === "[DONE]") continue;

        try {
          const jsonEvent = JSON.parse(jsonString);

          // Some events have no content (just role / metadata)
          const delta = jsonEvent?.choices?.[0]?.delta;
          const content = delta?.content;
          if (!content) continue;

          text += content;
          setReplyText(text); // update UI as we stream
        } catch (err) {
          console.error("Error parsing SSE chunk:", err, jsonString);
        }
      }
    }

    return text;
  }
}

export default ChatService;
