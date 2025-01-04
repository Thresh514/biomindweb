import Head from 'next/head';

export default function Home() {
  const resources = [
    { id: 1, title: 'IGCSE Physics Notes', type: 'PDF', category: 'IGCSE', uploadDate: '2025-01-01', link: '#' },
    { id: 2, title: 'A-Level Chemistry Video', type: 'Video', category: 'A-Level', uploadDate: '2025-01-02', link: '#' },
  ];

  return (
    <div>
      <Head>
        <title>Education Resource Hub</title>
        <meta name="description" content="A platform for educational resources." />
      </Head>

      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Education Resource Hub</h1>
        <nav className="mt-2">
          <a href="/categories" className="mr-4">Categories</a>
          <a href="/upload" className="mr-4">Admin Upload</a>
          <a href="/about">About</a>
        </nav>
      </header>

      <main className="p-4">
        <h2 className="text-xl font-semibold mb-4">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map(resource => (
            <div key={resource.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-bold">{resource.title}</h3>
              <p>Type: {resource.type}</p>
              <p>Category: {resource.category}</p>
              <p>Uploaded: {resource.uploadDate}</p>
              <a href={resource.link} className="text-blue-500 hover:underline">View Resource</a>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-200 text-center p-4 mt-4">
        <p>© 2025 Education Resource Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
