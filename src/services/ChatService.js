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
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.body) {
      throw new Error("No response body found");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    let text = "";
    let buffer = ""; // 👈 NEW: accumulate partial chunks here

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      // Append new chunk to buffer
      buffer += decoder.decode(value, { stream: true });

      // Split buffer into SSE events separated by blank lines
      const events = buffer.split("\n\n");

      // Last piece may be incomplete → keep it in buffer for next loop
      buffer = events.pop() || "";

      for (const rawEvent of events) {
        const event = rawEvent.trim();
        if (!event) continue;
        if (!event.startsWith("data:")) continue;

        // Remove "data:" and trim
        const jsonString = event.slice(5).trim();

        // Skip [DONE] markers
        if (!jsonString || jsonString === "[DONE]" || jsonString === " [DONE]") {
          continue;
        }

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

    // Optional: in case final buffer contains a complete event
    const leftover = buffer.trim();
    if (leftover.startsWith("data:")) {
      const jsonString = leftover.slice(5).trim();
      if (jsonString && jsonString !== "[DONE]" && jsonString !== " [DONE]") {
        try {
          const jsonEvent = JSON.parse(jsonString);
          const delta = jsonEvent?.choices?.[0]?.delta;
          const content = delta?.content;
          if (content) {
            text += content;
            setReplyText(text);
          }
        } catch (err) {
          console.error("Error parsing leftover SSE chunk:", err, jsonString);
        }
      }
    }

    return text;
  }
}

export default ChatService;
