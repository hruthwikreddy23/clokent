export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-sm rounded-2xl bg-white border p-6 shadow">
        <h1 className="text-xl font-semibold">Login</h1>
        <p className="text-sm text-gray-600 mt-1">
          Digital Library Shift App
        </p>

        <form className="mt-6 space-y-3">
          <input className="w-full rounded-xl border p-2" placeholder="Email" />
          <input
            className="w-full rounded-xl border p-2"
            type="password"
            placeholder="Password"
          />
          <button className="w-full bg-black text-white rounded-xl py-2">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
