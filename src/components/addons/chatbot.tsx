"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Dobrý deň! 👋 Som AI asistent WebZaTýždeň. Máte otázku ohľadom tvorby webu, našich služieb alebo cien? Rád vám poradím.",
    },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMessage: Message = { role: "user", content: trimmed }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const conversationHistory = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }))

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          conversationHistory,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Prepáčte, momentálne sa mi nepodarilo spracovať vašu otázku. Prosím kontaktujte nás priamo na info@webzatyzden.sk alebo zavolajte na +421 944 602 404.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {isOpen ? (
        <div className="bg-white w-80 sm:w-96 rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-primary p-5 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm">
                AI
              </div>
              <div>
                <p className="font-bold text-sm">WebZaTýždeň Asistent</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <p className="text-xs text-primary-100">Online</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 p-1.5 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 p-4 flex flex-col gap-3 overflow-y-auto bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3.5 rounded-2xl shadow-sm text-sm leading-relaxed ${
                  msg.role === "assistant"
                    ? "bg-white text-gray-700 self-start rounded-tl-none max-w-[85%]"
                    : "bg-primary text-white self-end rounded-tr-none max-w-[85%]"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm text-sm self-start max-w-[85%] flex items-center gap-2 text-gray-400">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Píšem odpoveď...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="p-3 bg-white border-t border-gray-100 flex gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Napíšte vašu otázku..."
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 bg-gray-50 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-primary text-white p-2.5 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
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
