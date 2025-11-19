function Home() {
  return (
    <div className="px-4 py-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to React + TypeScript + Tailwind
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        This is a basic starter template with React Router and Tailwind CSS.
      </p>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>React 18 with TypeScript</li>
          <li>React Router v6 for routing</li>
          <li>Tailwind CSS for styling</li>
          <li>Vite for fast development</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
