"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

export default function Chatbot({ webhookUrl, apiKey }: { webhookUrl?: string, apiKey?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [isSent, setIsSent] = useState(false)

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || !webhookUrl) return

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey,
          name: "Chat Visitor",
          email: "chat@visitor.com",
          message: `CHAT MESSAGE: ${message}`,
          sourcePage: window.location.pathname,
          sourceForm: "ai-chatbot",
        }),
      })
      setIsSent(true)
      setMessage("")
    } catch (err) {
      console.error("Chat failed", err)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {isOpen ? (
        <div className="bg-white w-80 sm:w-96 rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-primary p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                AI
              </div>
              <div>
                <p className="font-bold">WebZaTyzden Asistent</p>
                <p className="text-xs text-primary-100">Odpovedáme zvyčajne ihneď</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="h-80 p-6 flex flex-col gap-4 overflow-y-auto bg-gray-50">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 self-start max-w-[85%]">
              Dobrý deň! 👋 Máte otázku ohľadom tvorby vášho nového webu za 7 dní? Rád vám poradím.
            </div>
            {isSent && (
              <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none shadow-sm text-sm self-end max-w-[85%]">
                Ďakujeme za vašu správu! Naši experti sa na ňu pozrú a odpovedia vám.
              </div>
            )}
          </div>

          {/* Footer */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Napíšte vašu otázku..."
              className="flex-1 px-4 py-2 bg-gray-50 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/10 transition-all"
            />
            <button 
              type="submit"
              className="bg-primary text-white p-2 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
        >
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-secondary text-white text-[10px] font-bold flex items-center justify-center rounded-full animate-bounce">
            1
          </span>
        </button>
      )}
    </div>
  )
}