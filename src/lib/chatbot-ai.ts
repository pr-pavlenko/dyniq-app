export interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  attachments?: Array<{
    type: "image" | "pdf" | "file"
    name: string
    url: string
    size?: string
  }>
}

export const simulateAIResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase()

  if (lowerMessage.includes("summarize") || lowerMessage.includes("summary")) {
    return "Based on the data analysis, here are the key insights:\n\n• Active users increased by 18.2% this month\n• Revenue grew to $45.2K with strong daily performance\n• AI request volume shows slight decline but success rate improved to 98.4%\n• GPT-4 Turbo remains the most popular model with 45.2K requests\n\nThe overall trend indicates healthy growth with excellent system reliability."
  }

  if (lowerMessage.includes("sql") || lowerMessage.includes("query")) {
    return "Here's a SQL query for your request:\n\n```sql\nSELECT \n  model_name,\n  COUNT(*) as total_requests,\n  AVG(response_time) as avg_time,\n  SUM(tokens_used) as total_tokens\nFROM ai_requests\nWHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)\nGROUP BY model_name\nORDER BY total_requests DESC\nLIMIT 10;\n```\n\nThis will give you the top 10 models by usage in the last 7 days."
  }

  if (lowerMessage.includes("error") || lowerMessage.includes("fix")) {
    return "I can help you debug that! Here are common solutions:\n\n1. Check if all dependencies are installed\n2. Verify API keys and environment variables\n3. Review console logs for specific error messages\n4. Ensure proper data types in function parameters\n5. Clear cache and restart the development server\n\nCould you share the specific error message you're seeing?"
  }

  if (lowerMessage.includes("chart") || lowerMessage.includes("visualization")) {
    return "For effective data visualization, I recommend:\n\n• Line charts for trends over time (like your usage data)\n• Bar charts for comparing categories (model performance)\n• Pie charts for showing proportions\n• Heat maps for complex multi-dimensional data\n\nBased on your dashboard, the current visualizations effectively show usage trends and model distribution. Would you like to add any specific chart type?"
  }

  if (lowerMessage.includes("improve") || lowerMessage.includes("optimize")) {
    return "Here are optimization suggestions for your dashboard:\n\n1. **Performance**: Implement lazy loading for charts\n2. **UX**: Add real-time data refresh with WebSocket\n3. **Analytics**: Include predictive trends using ML\n4. **Accessibility**: Ensure ARIA labels on all interactive elements\n5. **Mobile**: Optimize responsive breakpoints\n\nWhich area would you like to focus on first?"
  }

  return `I understand you're asking about "${userMessage}". I can help with:\n\n• Data analysis and insights\n• Writing SQL queries\n• Debugging code issues\n• Creating visualizations\n• Optimizing performance\n• Generating reports\n\nCould you provide more details about what you need?`
}

export const suggestedPrompts = [
  "Analyze the data trends from last month",
  "Generate a SQL query for user analytics",
  "Summarize key insights from the dashboard",
  "Create a report on model performance",
]
