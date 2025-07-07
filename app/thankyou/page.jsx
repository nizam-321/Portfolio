export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-100 px-4">
      <div className="max-w-xl text-center bg-white p-10 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-green-700 mb-4">🎉 Thank You!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Your message has been successfully sent. I’ll get back to you soon!
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}
