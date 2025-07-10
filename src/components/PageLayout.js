import ReturnHome from '@/components/ReturnHome';

export default function PageLayout({ title, children }) {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <ReturnHome />
      </div>
      <div className="bg-gray-900 rounded-md border-1 p-6 overflow-auto">
        {children}
      </div>
    </div>
  );
}