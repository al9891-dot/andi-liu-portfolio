export function ContactCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-line bg-white p-5">
      <p className="text-sm font-semibold text-clay">{label}</p>
      <p className="mt-2 break-words text-base text-ink">{value}</p>
    </div>
  );
}
