import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button onClick={() => navigate("/login")} className="px-6 py-3 text-lg">
        Login
      </button>
    </div>
  );
}