export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">Market Insights & Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-4">The Future of Maize Farming in Kenya</h2>
          <p className="text-gray-600 mb-4">Exploring new technologies and market shifts that are reshaping how we farm...</p>
          <a href="/blog/maize-future" className="text-emerald-600 font-semibold hover:underline">Read more</a>
        </div>
      </div>
    </div>
  )
}
