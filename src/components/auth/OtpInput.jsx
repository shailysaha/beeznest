import { useEffect, useRef } from "react";

export default function OtpInput({
  value,
  onChange,
  length = 6,
}) {
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  function handleChange(index, inputValue) {
    const digit = inputValue.replace(/\D/g, "").slice(-1);

    const next = value.split("");

    next[index] = digit;

    onChange(next.join("").slice(0, length));

    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index, event) {
    if (
      event.key === "Backspace" &&
      !value[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  function handlePaste(event) {
    event.preventDefault();

    const pasted = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    onChange(pasted);

    const nextIndex = Math.min(
      pasted.length,
      length - 1
    );

    inputRefs.current[nextIndex]?.focus();
  }

  return (
    <div className="flex justify-between gap-2">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(element) => {
            inputRefs.current[index] = element;
          }}
          value={value[index] || ""}
          onChange={(event) =>
            handleChange(index, event.target.value)
          }
          onKeyDown={(event) =>
            handleKeyDown(index, event)
          }
          onPaste={handlePaste}
          inputMode="numeric"
          maxLength={1}
          aria-label={`OTP digit ${index + 1}`}
          className="
            h-14
            w-12
            rounded-xl
            border
            border-slate-200
            text-center
            text-xl
            font-bold
            text-[#14532D]
            outline-none
            transition
            focus:border-[#94D8AB]
            focus:ring-4
            focus:ring-[#DCF3E3]
          "
        />
      ))}
    </div>
  );
}