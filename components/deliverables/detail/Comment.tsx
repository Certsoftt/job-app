"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface CommentItem {
  id: string;
  user: string;
  avatar: string;
  message: string;
  timestamp: string;
}

interface CommentProps {
  comments: CommentItem[];
  onSend: (msg: string) => void;
  currentUser: string;
}

const Comment: React.FC<CommentProps> = ({ comments, onSend, /*currentUser*/ }) => {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [comments]);

  const handleSend = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <section className="mt-6 bg-white rounded-xl border border-[#C6B9F6] border-l-4 border-l-[#5B2EDD] p-0 overflow-hidden flex flex-col h-[480px]">
      <div ref={containerRef} className="flex-1 overflow-y-auto px-8 pt-8 pb-4">
        {comments.map((c, idx) => {
          const showAvatar = idx === 0 || comments[idx - 1].user !== c.user;
          return (
            <div key={c.id} className="flex items-start mb-2">
              {showAvatar ? (
                <div className="w-10 h-10 mr-4 flex-shrink-0">
                  <Image src={c.avatar} alt={c.user} width={40} height={40} className="rounded-full object-cover" />
                </div>
              ) : (
                <div className="w-10 mr-4" />
              )}
              <div className="flex flex-col flex-1">
                <div className="bg-white border border-[#C6B9F6] rounded-xl px-6 py-4 mb-1 max-w-2xl w-fit text-[#232323] text-base font-poppins font-normal whitespace-pre-line">
                  {c.message}
                </div>
                <div className="text-[#A09CB6] text-xs font-poppins font-normal text-right pr-2">{c.timestamp}</div>
              </div>
            </div>
          );
        })}
      </div>
      <form
        className="flex items-end gap-2 px-8 pb-8 pt-2 bg-white border-t border-[#E3DEFF]"
        onSubmit={e => {
          e.preventDefault();
          handleSend();
        }}
      >
        <textarea
          ref={textareaRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter Comment"
          rows={1}
          className="flex-1 resize-none border border-[#C6B9F6] rounded-lg px-4 py-3 text-base font-poppins text-[#232323] focus:outline-none focus:ring-2 focus:ring-[#5B2EDD] min-h-[48px] max-h-[120px]"
          style={{ minHeight: 48, maxHeight: 120 }}
        />
        <button
          type="submit"
          className="flex items-center justify-center bg-[#5B2EDD] hover:bg-[#4321b8] text-white font-semibold rounded-lg px-7 py-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B2EDD]"
          aria-label="Send"
        >
          <Image src="/send_message.svg" alt="Send" width={24} height={24} />
        </button>
      </form>
    </section>
  );
};

export type { CommentItem };
export default Comment;
