"use client";
import { useEffect, useRef, useState } from "react";

/* utils */
function uid() {
  try {
    return crypto.randomUUID();
  } catch {
    return Math.random().toString(36).slice(2);
  }
}

/* keep chat above #sticky-cta if present */
function useStickyBottomOffset(defaultPx) {
  const [offset, setOffset] = useState(defaultPx);
  useEffect(
    function () {
      function update() {
        var el = document.getElementById("sticky-cta");
        if (el) {
          var r = el.getBoundingClientRect();
          setOffset((r ? r.height : 0) + 16);
        } else {
          setOffset(defaultPx);
        }
      }
      update();
      var el2 = document.getElementById("sticky-cta");
      var ro = null;
      try {
        if (el2 && typeof ResizeObserver !== "undefined") {
          ro = new ResizeObserver(function () {
            update();
          });
          ro.observe(el2);
        }
      } catch (e) {}
      window.addEventListener("resize", update);
      return function () {
        if (ro) {
          try {
            ro.disconnect();
          } catch (e) {}
        }
        window.removeEventListener("resize", update);
      };
    },
    [defaultPx]
  );
  return offset;
}

export default function ChatWidgetAgent() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [sessionId, setSessionId] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [apiLive, setApiLive] = useState(true); // ✅ status badge state
  const listRef = useRef(null);

  const buttonBottom = useStickyBottomOffset(24); // ~bottom-6
  const panelBottom = useStickyBottomOffset(96); // ~bottom-24

  useEffect(function () {
    var id = "";
    try {
      id = localStorage.getItem("chat_session_id") || "";
    } catch {}
    if (!id) {
      id = uid();
      try {
        localStorage.setItem("chat_session_id", id);
      } catch {}
    }
    setSessionId(id);
    try {
      if (!localStorage.getItem("chat_seen")) {
        setOpen(true);
        localStorage.setItem("chat_seen", "1");
      }
    } catch {}
  }, []);

  function scrollToBottomSoon() {
    requestAnimationFrame(function () {
      if (listRef.current)
        listRef.current.scrollTop = listRef.current.scrollHeight;
    });
  }

  useEffect(
    function () {
      if (!sessionId || !open) return;
      var stop = false;
      async function poll() {
        const r = await fetch("/api/agent/thread?sessionId=" + sessionId, {
          cache: "no-store",
        });
        const data = await r.json();
        if (!stop && data && Array.isArray(data.messages))
          setMsgs(data.messages);
        scrollToBottomSoon();
      }
      poll();
      const t = setInterval(poll, 15000);
      return function () {
        stop = true;
        clearInterval(t);
      };
    },
    [sessionId, open]
  );

  useEffect(scrollToBottomSoon, [msgs, open]);

  async function send(e, overrideText) {
    if (e && e.preventDefault) e.preventDefault();
    const text = (overrideText !== undefined ? overrideText : input).trim();
    if (!text || sending || !sessionId) return;
    setSending(true);
    setShowSuggestions(false);
    try {
      const next = msgs.concat([{ role: "user", content: text }]);
      setMsgs(next);
      setInput("");
      scrollToBottomSoon();
      const r = await fetch("/api/agent/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.slice(-16),
          sessionId: sessionId,
          source: location.pathname,
        }),
      });
      const data = await r.json();

      // ✅ update status badge from server hint
      var live = true;
      if (data && typeof data.usedFallback !== "undefined") {
        live = data.usedFallback === false;
      }
      setApiLive(live);

      // 🔍 diag to console if present
      if (data && data.diag) {
        try {
          console.log("[agent diag]", data.diag);
        } catch (e) {}
      }

      const reply = data && data.reply ? data.reply : "Okay.";
      setMsgs(function (m) {
        return m.concat([{ role: "assistant", content: reply }]);
      });
      scrollToBottomSoon();
    } catch {
      setApiLive(false); // network error -> fallback/unknown
      setMsgs(function (m) {
        return m.concat([
          {
            role: "assistant",
            content: "Connection issue. You can also call 📞 (647) 923-6784.",
          },
        ]);
      });
    } finally {
      setSending(false);
    }
  }

  const quick = [
    {
      t: "Popcorn Ceiling",
      m: "Service: popcorn ceiling removal. Need a labour-only ballpark.",
    },
    {
      t: "Drywall Install",
      m: "Service: drywall board + tape/finish. Need a labour-only ballpark.",
    },
    {
      t: "Interior Painting",
      m: "Service: interior painting. Need a labour-only ballpark.",
    },
    {
      t: "Wallpaper Removal",
      m: "Service: wallpaper removal + skim/prime. Ballpark please.",
    },
    { t: "Availability", m: "What is your next available window?" },
  ];

  return (
    <>
      {/* Blinking round button */}
      <button
        aria-label="Open chat"
        onClick={function () {
          setOpen(!open);
        }}
        style={{ bottom: buttonBottom + "px" }}
        className="fixed z-[9999] right-4 md:right-6 h-16 w-16 rounded-full
                   bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-2xl
                   border border-white/20 grid place-items-center active:scale-[0.98] focus:outline-none"
      >
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-blue-500/40 animate-ping "></span>
        <svg
          viewBox="0 0 24 24"
          className="relative h-7 w-7 fill-current drop-shadow"
        >
          <path d="M20 2H4a2 2 0 0 0-2 2v17l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
        </svg>
      </button>

      {/* White panel */}
      {open && (
        <div
          style={{ bottom: panelBottom + "px" }}
          className="fixed z-[9999] right-4 md:right-6 w-[92vw] max-w-md
                     rounded-3xl bg-white backdrop-blur
                     shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] border border-black/10
                     max-h-[78vh] flex flex-col"
        >
          {/* Header with LIVE/FALLBACK badge */}
          <header className="px-4 py-3 flex items-center justify-between gap-3 rounded-t-3xl bg-white border-b border-black/10">
            <div className="flex items-center gap-3">
              <img
                src="/logo-mark.svg"
                alt="Popcorn ceiling removal logo"
                className="h-16 w-16 rounded-full bg-white p-1 shadow"
              />
              <div className="leading-tight">
                <div className="font-semibold">Removal PRO Assistant</div>
                <div className="text-[11px] text-gray-500">
                  What can I do for you?
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span
                title={apiLive ? "AI online" : "Using fallback messaging"}
                className={
                  "inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full font-medium " +
                  (apiLive
                    ? "bg-emerald-500 text-white"
                    : "bg-red-500 text-white")
                }
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                {apiLive ? "LIVE" : "FALLBACK"}
              </span>
              <button
                onClick={function () {
                  setOpen(false);
                }}
                className="h-8 w-8 grid place-items-center rounded-full hover:bg-black/5"
                title="Close"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-zinc-600">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </header>

          {/* Messages area */}
          <div
            ref={listRef}
            className="px-4 py-4 overflow-y-auto space-y-4 flex-1"
          >
            {msgs.length === 0 && (
              <div className="mx-auto w-fit max-w-[92%] rounded-2xl bg-white shadow p-3 text-[13px] border border-black/10">
                <div className="font-medium mb-1">
                  Hi! I’m your quote assistant.
                </div>
                <div>
                  Share service, city/neighbourhood, rooms/areas, approx. sq ft,
                  and timing. I’ll give a <b>labour-only</b> ballpark (materials
                  + HST extra) and next steps.
                </div>
              </div>
            )}
            {msgs.map(function (m, i) {
              var mine = m.role === "user";
              return (
                <div
                  key={i}
                  className={
                    (mine
                      ? "ml-auto bg-blue-600 text-white"
                      : "mr-auto bg-white text-zinc-900 border border-black/10") +
                    " max-w-[85%] rounded-2xl px-3 py-2 shadow"
                  }
                >
                  {m.content}
                </div>
              );
            })}

            {/* Suggestion chips (hidden after first send) */}
            {showSuggestions && (
              <div className="mr-auto max-w-[90%] rounded-2xl bg-white shadow p-3 border border-black/10">
                <div className="text-[13px] mb-2">
                  How can I help you today?
                </div>
                <div className="flex flex-wrap gap-2">
                  {quick.map(function (q, idx) {
                    return (
                      <button
                        key={idx}
                        onClick={function () {
                          send(null, q.m);
                        }}
                        className="rounded-full px-3 py-1 text-sm border border-black/15 hover:bg-black/5"
                      >
                        {q.t}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={function (e) {
              send(e);
            }}
            className="p-3 border-t border-black/10 rounded-b-3xl"
          >
            <div className="flex gap-2">
              <input
                value={input}
                onChange={function (e) {
                  setInput(e.target.value);
                }}
                placeholder="Send a message…"
                className="w-full rounded-2xl border-2 bg-transparent text-current px-3 py-3
                           border-black/40 hover:border-black focus:border-black focus:ring-2 focus:ring-black/15"
              />
              <button
                disabled={sending || !(input && input.trim())}
                className="btn-cta px-5 py-3 rounded-2xl disabled:opacity-60"
              >
                {sending ? "…" : "Send"}
              </button>
            </div>
            <div className="flex items-center justify-between text-[12px] mt-2">
              <a
                href="tel:+16479236784"
                className="underline underline-offset-2"
              >
                📞 Call (647) 923-6784
              </a>
              <a href="/quote/" className="underline underline-offset-2">
                Fast Quote →
              </a>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
