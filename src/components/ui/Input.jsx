export default function Input({
  placeholder,
  type,
  handleChange,
  value,
  pattern,
}) {
  return (
    <input
      className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-sm focus:ring-primary focus:border-primary dark:text-white"
      onChange={handleChange}
      value={value}
      pattern={pattern}
      placeholder={placeholder}
      type={type}
      required
    />
  );
}
